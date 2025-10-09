import React, { useState, useEffect } from "react";
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
  // State to track selected links: { 'templateIndex-linkIndex': { url, text, templateTitle } }
  const [selectedLinks, setSelectedLinks] = useState({}); 
  // State for copy status, now scoped to the card by storing the template's title or index
  const [copyStatus, setCopyStatus] = useState(null); 
  const [copyStatusIndex, setCopyStatusIndex] = useState(null);


  // Redirect to home if critical state is not available (e.g., on refresh)
  useEffect(() => {
    if (!category || !series) {
      navigate("/");
    }
  }, [category, series, navigate]);

  // Data Loading Logic 
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
      links.push({ text: template.text || "Document Link", url: template.link });
    }
    for (let i = 1; i <= 10; i++) {
      const linkKey = `link${i}`;
      const textKey = `text${i}`;
      if (template[linkKey]) {
        links.push({
          text: template[textKey] || `Document Link ${i}`,
          url: template[linkKey],
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
        newLinks[key] = {
          ...linkDetails,
          templateTitle: contentToShow[templateIndex].title,
        };
      }
      return newLinks;
    });
  };

  // NEW: Local Copy Function (scoped to a specific templateIndex)
  const handleCopyLinks = async (e, templateIndex, templateTitle) => {
    e.stopPropagation(); // Prevent card from collapsing

    // 1. Filter selected links only for this template card
    const relevantKeys = Object.keys(selectedLinks).filter(key => 
        key.startsWith(`${templateIndex}-`)
    );

    if (relevantKeys.length === 0) {
      setCopyStatus("None Selected");
      setCopyStatusIndex(templateIndex);
      setTimeout(() => {setCopyStatus(null); setCopyStatusIndex(null)}, 3000);
      return;
    }

    // 2. Sort keys by link index (to maintain list order in the output)
    const sortedLinkKeys = relevantKeys.sort((a, b) => {
      const aL = parseInt(a.split("-")[1], 10);
      const bL = parseInt(b.split("-")[1], 10);
      return aL - bL;
    });

    // 3. Compile the final formatted email output
    let emailOutput = `

Please find the requested document link(s) below. If you need anything further, please let me know.

Device/Document(s) requested: ${category} - ${device || series}

**${templateTitle}**
`;

    sortedLinkKeys.forEach((key) => {
      const linkDetails = selectedLinks[key];
      emailOutput += `- ${linkDetails.text}: ${linkDetails.url}\n`;
    });

    try {
      await navigator.clipboard.writeText(emailOutput.trim());
      setCopyStatus("Links Copied!");
      setCopyStatusIndex(templateIndex);
      // Clear status after 3 seconds
      setTimeout(() => {setCopyStatus(null); setCopyStatusIndex(null)}, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      setCopyStatus("Copy Failed");
      setCopyStatusIndex(templateIndex);
      setTimeout(() => {setCopyStatus(null); setCopyStatusIndex(null)}, 3000);
    }
  };


  const toggleTemplate = (index) => {
    setExpandedTemplate(expandedTemplate === index ? null : index);
    setCopyStatus(null);
    setCopyStatusIndex(null); // Clear copy status on new expansion
  };

  const toggleView = (view) => {
    if (view !== viewMode) {
      setViewMode(view);
      setExpandedTemplate(null);
      setCopyStatus(null);
      setCopyStatusIndex(null);
    }
  };

  // Re-map contentToShow to ensure we have the indexes and extracted links
  const contentWithLinks = contentToShow.map((template, index) => ({
    ...template,
    templateIndex: index, // Add index for unique key generation
    links: extractLinks(template),
  }));


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
            {/* NEW: Local Copy Status */}
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

                {/* NEW: Local Copy Button */}
                <button 
                  className="copy-links-button" 
                  onClick={(e) => handleCopyLinks(e, templateIndex, template.title)}
                >
                  Copy Selected Link(s)
                </button>

                {/* NEW: List of links with checkboxes */}
                <div className="link-selection-list">
                  {template.links.map((linkDetails, linkIndex) => {
                    const linkKey = `${templateIndex}-${linkIndex}`;
                    return (
                      <div key={linkIndex} className="link-item">
                        <input
                          type="checkbox"
                          id={`link-${linkKey}`}
                          checked={!!selectedLinks[linkKey]}
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
    </div>
  );
}

export default DisplayTemplates;