import React, { useState, useEffect } from "react"; // Import useEffect
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import "./style/DisplayTemplates.css";
import { MortiseLocks } from "../data/MortiseLocksData";
import { ExitDevices } from "../data/ExitDeviceData";
import { BoredLocks } from "../data/BoredLocksData";
import { AuxLocks } from "../data/AuxLocksData";
import { MultiPoints } from "../data/MultiPointsData";
import { ThermalPin } from "../data/ThermalPinData";

function DisplayTemplates() {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { category, series, device } = location.state || {};

  const [expandedTemplate, setExpandedTemplate] = useState(null);
  const [viewMode, setViewMode] = useState("templates");
  const [copyStatus, setCopyStatus] = useState(null); // New state for copy status

  // Redirect to home if critical state is not available (e.g., on refresh)
  useEffect(() => {
    if (!category || !series) { // Check for both category and series
      navigate("/");
    }
  }, [category, series, navigate]);


  // Initialize templates and installation instructions array
  let templates = [];
  let installationInstructions = [];
  if (category === "Mortise Locks") {
    templates = MortiseLocks[series] || [];
    installationInstructions = (MortiseLocks[series] || [])
      .map((template) => template.installation || [])
      .flat();
  } else if (category === "Exit Devices") {
    templates = ExitDevices[series] || [];
    installationInstructions = (ExitDevices[series] || [])
      .map((template) => template.installation || [])
      .flat();
  } else if (category === "Bored Locks") {
    templates = BoredLocks[series] || [];
    installationInstructions = (BoredLocks[series] || [])
      .map((template) => template.installation || [])
      .flat();
  } else if (category === "Auxiliary Locks") {
    templates = AuxLocks[series] || [];
    installationInstructions = (AuxLocks[series] || [])
      .map((template) => template.installation || [])
      .flat();
  } else if (category === "Multi Points") {
    templates = MultiPoints[series] || [];
    installationInstructions = (MultiPoints[series] || [])
      .map((template) => template.installation || [])
      .flat();
  } else if (category === "Thermal") {
    templates = ThermalPin[series] || [];
    installationInstructions = (ThermalPin[series] || [])
      .map((template) => template.installation || [])
      .flat();
  }

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

  const toggleTemplate = (index) => {
    setExpandedTemplate(expandedTemplate === index ? null : index);
    setCopyStatus(null); // Clear copy status on new expansion
  };

  const toggleView = (view) => {
    if (view !== viewMode) {
      setViewMode(view);
      setExpandedTemplate(null);
      setCopyStatus(null);
    }
  };

  const handleCopyLinks = async (e, template) => {
    e.stopPropagation(); // Prevent the card from closing
    
    // Use single line format for better link recognition
    let linksToCopy = `--- ${template.title} ---\n\n`;
    
    // Helper array to collect all link items
    const linkItems = [];
    
    // Check for the main link/text (which is often text0/link0)
    if (template.link) {
      linkItems.push({
        text: template.text || 'Document Link',
        url: template.link
      });
    }

    // Iterate through numbered links
    for (let i = 1; i <= 10; i++) {
      const linkKey = `link${i}`;
      const textKey = `text${i}`;
      if (template[linkKey]) {
        linkItems.push({
          text: template[textKey] || `Document Link ${i}`,
          url: template[linkKey]
        });
      }
    }

    // Format the collected links into a clean, numbered list
    // Use a single line for the description and URL, followed by an extra newline for spacing.
    linkItems.forEach((item, index) => {
        // Updated format: "1. [Description]: [URL]\n\n" - This format works best for most clients.
        linksToCopy += `${index + 1}. ${item.text}: ${item.url}\n\n`;
    });
    
    try {
      await navigator.clipboard.writeText(linksToCopy.trim());
      setCopyStatus(template.title);
      // Clear status after 3 seconds
      setTimeout(() => setCopyStatus(null), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      // Optionally provide a different status for error
    }
  };

  return (
    <div className="display-templates">
      <h1 className="deviceHeading">{category || "Category"} - {device || series}</h1>
      <h2 className="ToolTip">Click/Tap on cards to expand details and copy links for easy customer support!</h2>

      {/* Toggle Buttons with Slider */}
      <div className="view-toggle" >
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
      <div className={`template-grid ${contentToShow.length === 1 ? "single-item" : ""}`}>
        {contentToShow.map((template, index) => (
          <div
            key={index}
            className={`template-card ${expandedTemplate === index ? "selected" : ""}`}
            onClick={() => toggleTemplate(index)}
            role="button"
            tabIndex={0}
            aria-label={`Template ${template.title}`}
          >
            {copyStatus === template.title && <div className="copy-success-message">Links Copied!</div>}
            
            <img
              src={template.image}
              alt={template.title}
              className="template-image"
            />
            <h2>{template.title}</h2>
            {expandedTemplate === index && (
              <div className="template-details">
                {template.warning && <h3 className="warning-text">{template.warning}</h3>}

                {/* New Copy Button */}
                <button 
                    className="copy-links-button" 
                    onClick={(e) => handleCopyLinks(e, template)}
                >
                    Copy All Links to Clipboard
                </button>
                
                {/* Render the first link (link/text) */}
                <a
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${template.text}`}
                >
                  {template.text}
                </a>

                {/* Render numbered links (link1/text1, etc.) */}
                {Array.from({ length: 10 }, (_, i) => {
                  const linkKey = `link${i + 1}`;
                  const textKey = `text${i + 1}`;
                  return template[linkKey] ? (
                    <a
                      key={linkKey}
                      href={template[linkKey]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${template[textKey]}`}
                    >
                      {template[textKey]}
                    </a>
                  ) : null;
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayTemplates;