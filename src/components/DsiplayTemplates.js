import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import "./style/DisplayTemplates.css";
import { MortiseLocks } from "../data/MortiseLocksData";
import { ExitDevices } from "../data/ExitDeviceData";
import { BoredLocks } from "../data/BoredLocksData";
import { AuxLocks } from "../data/AuxLocksData";
import { MultiPoints } from "../data/MultiPointsData";
import { ThermalPin } from "../data/ThermalPinData";

function DisplayTemplates() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, series, device } = location.state || {};

  const [expandedTemplate, setExpandedTemplate] = useState(null);
  const [viewMode, setViewMode] = useState("templates");
  // State to track selected links: { 'templateIndex-linkIndex': { url, text, templateTitle, templateIndex, linkIndex } }
  const [selectedLinks, setSelectedLinks] = useState({}); 
  // State for copy status, scoped to the card where the button was pressed
  const [copyStatus, setCopyStatus] = useState(null); 
  const [copyStatusIndex, setCopyStatusIndex] = useState(null);


  // Redirect to home if critical state is not available (e.g., on refresh)
  useEffect(() => {
    if (!category || !series) {
      navigate("/");
    }
  }, [category, series, navigate]);

  // Data Loading Logic (omitted for brevity, assume it works as before)
  let dataStore = {};
  if (category === "Mortise Locks") dataStore = MortiseLocks;
  else if (category === "Exit Devices") dataStore = ExitDevices;
  else if (category === "Bored Locks") dataStore = BoredLocks;
  else if (category === "Auxiliary Locks") dataStore = AuxLocks;
  else if (category === "Multi Points") dataStore = MultiPoints;
  else if (category === "Thermal") dataStore = ThermalPin;

  let templates = dataStore[series] || [];
  let installationInstructions = (dataStore[series] || [])
    .map((template) => template.installation || [])
    .flat();

  const filteredTemplates = device
    ? templates.filter((t) => t.device?.toLowerCase() === device.toLowerCase())
    : templates;
  const filteredInstructions = device
    ? installationInstructions.filter((i) =>
        i.device?.toLowerCase() === device.toLowerCase()
      )
    : installationInstructions;

  const contentToShow =
    viewMode === "templates" ? filteredTemplates : filteredInstructions;
    
  // Helper to extract all link objects from a template in order (link0 to link10)
  const extractLinks = (template) => {
    const links = [];
    if (template.link) {
      links.push({ text: template.text || "Document Link", url: template.link, isPrimary: true });
    } else {
      links.push({ text: template.text || "Document Link", url: template.link, isPrimary: true });
    }

    for (let i = 1; i <= 10; i++) {
      const linkKey = `link${i}`;
      const textKey = `text${i}`;
      if (template[linkKey]) {
        links.push({
          text: template[textKey] || `Document Link ${i}`,
          url: template[linkKey],
          isPrimary: false
        });
      }
    }
    return links;
  };

  // State Handler for Checkboxes (Global selection remains, keyed by index)
  const handleLinkToggle = (templateIndex, linkIndex, linkDetails) => {
    const key = `${templateIndex}-${linkIndex}`;
    setSelectedLinks((prev) => {
      const newLinks = { ...prev };
      if (newLinks[key]) {
        delete newLinks[key];
      } else {
        // Store extra details needed for unique titles and sorting
        newLinks[key] = {
          ...linkDetails,
          templateTitle: contentToShow[templateIndex].title,
          templateIndex: templateIndex,
          linkIndex: linkIndex
        };
      }
      return newLinks;
    });
  };
  
  // Function to remove a link directly using its key from the navbar
  const handleRemoveLink = (key, e) => {
    e.stopPropagation();
    setSelectedLinks(prev => {
        const newState = { ...prev };
        // Determine the indices from the key
        const [tIndex, lIndex] = key.split("-").map(Number);
        
        // Find the checkbox and uncheck it visually (important for UI consistency)
        const checkbox = document.getElementById(`link-${tIndex}-${lIndex}`);
        if (checkbox) {
          checkbox.checked = false;
        }

        delete newState[key];
        return newState;
    });
  };


  // MODIFIED: Memoized derivation to calculate total links AND list of selected links (sorted by index)
  const { totalLinks, sortedSelectedLinks } = useMemo(() => {
    let totalLinks = 0;
    const linksArray = Object.entries(selectedLinks).map(([key, linkDetails]) => {
        totalLinks++;
        return {
            key, // Preserve the original key for removal
            ...linkDetails
        };
    }).sort((a, b) => {
        // Sort primarily by templateIndex and secondarily by linkIndex
        if (a.templateIndex !== b.templateIndex) {
            return a.templateIndex - b.templateIndex; // Sort by template index first
        }
        return a.linkIndex - b.linkIndex; // Then sort by link index
    });

    return { totalLinks, sortedSelectedLinks: linksArray };
  }, [selectedLinks]);

  
  // MODIFIED: This function now copies the entire global queue and clears it all.
  const handleCopyLinks = async (e) => {
    e.stopPropagation();

    if (totalLinks === 0) {
      setCopyStatus("None Selected");
      setCopyStatusIndex(expandedTemplate); // Use the currently expanded card for status feedback
      setTimeout(() => {setCopyStatus(null); setCopyStatusIndex(null)}, 3000);
      return;
    }

    // --- 1. Group links by original template for coherent output ---
    const linksByTemplate = sortedSelectedLinks.reduce((acc, link) => {
        const title = link.templateTitle;
        if (!acc[title]) {
            acc[title] = {
                title,
                links: []
            };
        }
        acc[title].links.push(link);
        return acc;
    }, {});
    
    // --- 2. Compile the final formatted email output ---
    let emailOutput = `Please find the requested document link(s) below. If you need anything further, please let me know.

Device/Document(s) requested: ${category} - ${device || series}

--------------------------------------
`;

    for (const title in linksByTemplate) {
        emailOutput += `\n**${title}**\n`;
        let templateLinks = "";
        linksByTemplate[title].links.forEach(link => {
            templateLinks += `- ${link.text}: ${link.url}\n`;
        });
        emailOutput += templateLinks;
    }

    // --- 3. Copy data and clear the entire queue ---
    try {
      await navigator.clipboard.writeText(emailOutput.trim());
      setCopyStatus("Links Copied!");
      setCopyStatusIndex(expandedTemplate);
      
      // Clear all checkboxes visually
      sortedSelectedLinks.forEach(link => {
        const checkbox = document.getElementById(`link-${link.templateIndex}-${link.linkIndex}`);
        if (checkbox) {
          checkbox.checked = false;
        }
      });

      // Clear the entire queue state
      setSelectedLinks({});
      
      // Clear status after 3 seconds
      setTimeout(() => {setCopyStatus(null); setCopyStatusIndex(null)}, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyStatus("Copy Failed");
      setCopyStatusIndex(expandedTemplate);
      setTimeout(() => {setCopyStatus(null); setCopyStatusIndex(null)}, 3000);
    }
  };


  const toggleTemplate = (index) => {
    setExpandedTemplate(expandedTemplate === index ? null : index);
    setCopyStatus(null);
    setCopyStatusIndex(null); // Clear local copy status on card interaction
  };

  const toggleView = (view) => {
    if (view !== viewMode) {
      setExpandedTemplate(null);
      setCopyStatus(null);
      setCopyStatusIndex(null);
      setViewMode(view);
    }
  };

  // Re-map contentToShow to ensure we have the indexes and extracted links
  const contentWithLinks = contentToShow.map((template, index) => ({
    ...template,
    templateIndex: index, // Add index for unique key generation
    links: extractLinks(template),
  }));

  // Helper to determine if a link is selected
  const isLinkSelected = (templateIndex, linkIndex) => {
    const key = `${templateIndex}-${linkIndex}`;
    return !!selectedLinks[key];
  };

  return (
    <div className="display-templates">
      <h1 className="deviceHeading">
        {category || "Category"} - {device || series}
      </h1>
      <h2 className="ToolTip">
        Click/Tap on cards to expand details. Select links then use the 'Copy
        Selected' button inside the card for an easy email output.
      </h2>

      
      {/* Toggle Buttons with Slider (UNCHANGED) */}
      <div className="view-toggle">
        <div
          className={`slider ${viewMode === "templates" ? "left" : "right"}`}
        ></div>
        <button
          className={viewMode === "templates" ? "active" : ""}
          onClick={() => toggleView("templates")}
          aria-label="View Templates"
        >
          Templates
        </button>
        <button
          className={viewMode === "instructions" ? "active" : ""}
          onClick={() => toggleView("instructions")}
          aria-label="View Installation Instructions"
        >
          Installation/Parts
        </button>
      </div>

      {/* Content Display */}
      <div
        className={`template-grid ${
          contentWithLinks.length === 1 ? "single-item" : ""
        }`}
      >
        {contentWithLinks.map((template, templateIndex) => (
          <div
            key={templateIndex}
            className={`template-card ${
              expandedTemplate === templateIndex ? "selected" : ""
            }`}
            onClick={() => toggleTemplate(templateIndex)}
            role="button"
            tabIndex={0}
            aria-label={`Template ${template.title}`}
          >
            {/* Local Copy Status Pop-up */}
            {copyStatusIndex === templateIndex && copyStatus && (
              <div 
                className={`copy-links-status ${
                  copyStatus === "Links Copied!" ? "success" : 
                  copyStatus === "None Selected" ? "warning" : "error"
                }`}
              >
                {copyStatus === "Links Copied!" ? "Links Copied to Clipboard!" : copyStatus}
              </div>
            )}
            
            <img
              src={template.image}
              alt={template.title}
              className="template-image"
            />
            <h2>{template.title}</h2>
            {expandedTemplate === templateIndex && (
              <div className="template-details">
                {template.warning && (
                  <h3 className="warning-text">⚠️ {template.warning}</h3>
                )}

                {/* Local Copy Button: Now copies the ENTIRE global queue */}
                <button 
                  className="copy-links-button" 
                  // Note: Removed the local index arguments since the function is now global scope.
                  onClick={(e) => handleCopyLinks(e)}
                >
                  Copy All {totalLinks > 0 ? `(${totalLinks}) ` : ''}Selected Link(s)
                </button>

                {/* List of links with checkboxes */}
                <div className="link-selection-list">
                  {template.links.map((linkDetails, linkIndex) => {
                    return (
                      <div key={linkIndex} className="link-item">
                        <input
                          type="checkbox"
                          // IMPORTANT: Use the full key as the ID for easy lookup in handleRemoveLink
                          id={`link-${templateIndex}-${linkIndex}`}
                          checked={isLinkSelected(templateIndex, linkIndex)}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleLinkToggle(
                              templateIndex,
                              linkIndex,
                              linkDetails
                            );
                          }}
                          onClick={(e) => e.stopPropagation()} // Prevent card collapse on checkbox click
                        />
                        <a
                          href={linkDetails.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${linkDetails.text}`}
                          onClick={(e) => e.stopPropagation()} // Allow click to open document
                        >
                          {linkDetails.text}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* NEW GLOBAL COPY QUEUE NAVBAR (Bottom Dock) */}
      <div className={`copy-queue-navbar ${totalLinks === 0 ? 'hidden' : ''}`}>
          <div className="navbar-header">
              📝 Ready to Copy ({totalLinks} Links)
          </div>
          <div className="links-container">
              {sortedSelectedLinks.map((link) => (
                  <button
                      key={link.key}
                      className="queue-link-button"
                      onClick={(e) => e.stopPropagation()} 
                      title={`${link.templateTitle}: ${link.text}`}
                  >
                      {link.text}
                      <button
                          className="remove-link-btn"
                          onClick={(e) => handleRemoveLink(link.key, e)}
                          aria-label={`Remove ${link.text}`}
                      >
                          &times;
                      </button>
                  </button>
              ))}
          </div>
      </div>
    </div>
  );
}

export default DisplayTemplates;