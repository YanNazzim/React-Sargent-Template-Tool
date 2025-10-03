import React, { useState, useEffect, useRef } from "react"; 
import { useLocation, useNavigate } from "react-router-dom"; 
import "./style/DisplayTemplates.css";
import { MortiseLocks } from "../data/MortiseLocksData";
import { ExitDevices } from "../data/ExitDeviceData";
import { BoredLocks } from "../data/BoredLocksData";
import { AuxLocks } from "../data/AuxLocksData";
import { MultiPoints } from "../data/MultiPointsData";
import { ThermalPin } from "../data/ThermalPinData";

// Helper to safely extract and display up to 5 options/metadata tags
const formatOptions = (optionsString) => {
    if (!optionsString) return "N/A";
    const options = optionsString.split(/, |,\s*|\s+/).filter(s => s.length > 0);
    const displayedOptions = options.slice(0, 5).join(", ");
    return options.length > 5 ? `${displayedOptions}, ...` : displayedOptions;
};

// Helper to classify link for visual cue
const getLinkIcon = (text) => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("parts manual") || lowerText.includes("catalog")) return "📖";
    if (lowerText.includes("wiring") || lowerText.includes("electrical")) return "🔌";
    if (lowerText.includes("strike") || lowerText.includes("auxiliary")) return "🔨";
    if (lowerText.includes("template") || lowerText.includes("mounting")) return "📄";
    if (lowerText.includes("installation")) return "🛠️";
    return "🔗";
};


function DisplayTemplates() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { category, series, device, initialTemplateTitle, key } = location.state || {};

  const [expandedTemplate, setExpandedTemplate] = useState(null);
  const [viewMode, setViewMode] = useState("templates");
  const [copyStatus, setCopyStatus] = useState(null); 
  // NEW STATE: Tracks if the initial search-based auto-open/view-switch has completed.
  const [initialSearchDone, setInitialSearchDone] = useState(false); 
  
  const itemRefs = useRef([]);

  // Effect 0: Handle navigation reset & guard. Runs whenever the unique navigation key changes.
  useEffect(() => {
    // Reset the flag and expanded state on every new navigation (search click)
    setInitialSearchDone(false);
    setExpandedTemplate(null);
    
    // Safety guard for direct URL access/refresh
    if (!category || !series) { 
      navigate("/");
    }
  // Reset logic must run on 'key' change to re-enable auto-open for the new search result
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]); 


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

  // Effect 1: Auto-Open and View Switch Logic. Now conditional on initialSearchDone flag.
  useEffect(() => {
    // 1. Skip if no title was provided, or if auto-open is completed for this navigation.
    if (!initialTemplateTitle || initialSearchDone) {
        return;
    }
    
    let indexToExpand = contentToShow.findIndex(
      (item) => item.title === initialTemplateTitle
    );

    // Scenario A: Item found in the currently active view mode.
    if (indexToExpand !== -1) {
      setExpandedTemplate(indexToExpand);
      setInitialSearchDone(true); // Auto-open complete for this key
      return;
    } 

    // Scenario B: Item not found in the current view mode. Try to switch views.
    if (viewMode === "templates" && filteredInstructions.length > 0) {
      const instructionIndex = filteredInstructions.findIndex(
        (item) => item.title === initialTemplateTitle
      );

      if (instructionIndex !== -1) {
        // Found in instructions, but currently in templates. Force switch.
        setViewMode("instructions"); 
        // NOTE: We rely on the re-run of this effect with the new viewMode 
        // to land in Scenario A and set setInitialSearchDone(true)
        return; 
      }
    } else if (viewMode === "instructions" && filteredTemplates.length > 0) {
      const templateIndex = filteredTemplates.findIndex(
        (item) => item.title === initialTemplateTitle
      );

      if (templateIndex !== -1) {
        // Found in templates, but currently in instructions. Force switch.
        setViewMode("templates");
        return; 
      }
    }

    // If initial title was provided but item was NOT found in either list, mark as done
    setInitialSearchDone(true); 
    
  // This dependency array remains largely the same, but the logic inside relies on the flag to prevent overriding the user.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTemplateTitle, category, series, device, key, contentToShow, viewMode]); 


  // Effect 2: Auto-scrolling logic (remains the same)
  useEffect(() => {
    if (expandedTemplate !== null) {
      const timeoutId = setTimeout(() => {
        const targetElement = itemRefs.current[expandedTemplate];
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center', 
          });
        }
      }, 50); 

      return () => clearTimeout(timeoutId);
    }
  }, [expandedTemplate, contentToShow.length]); 

  // Reset itemRefs whenever the content list changes 
  itemRefs.current = [];
  const setItemRef = (el, index) => {
    if (el) {
      itemRefs.current[index] = el;
    }
  };


  const toggleTemplate = (index) => {
    setExpandedTemplate(expandedTemplate === index ? null : index);
    setCopyStatus(null); 
    // USER INTERACTION: Mark auto-open logic as complete/overridden
    setInitialSearchDone(true); 
  };

  const toggleView = (view) => {
    if (view !== viewMode) {
      // USER INTERACTION: Mark auto-open logic as complete/overridden BEFORE changing view mode
      setInitialSearchDone(true); 
      
      setViewMode(view);
      setExpandedTemplate(null);
      setCopyStatus(null);
    }
  };

  const handleCopyLinks = async (e, template) => {
    e.stopPropagation(); 
    
    let linksToCopy = `--- ${template.title} ---\n\n`;
    
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
    linkItems.forEach((item, index) => {
        linksToCopy += `${getLinkIcon(item.text)} ${item.text}: ${item.url}\n\n`;
    });
    
    try {
      await navigator.clipboard.writeText(linksToCopy.trim());
      setCopyStatus(template.title);
      setTimeout(() => setCopyStatus(null), 3000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
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
            // Set the ref dynamically based on the current index
            ref={(el) => setItemRef(el, index)} 
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
            
            {/* UPDATED: Only showing Functions */}
            {expandedTemplate === index && (
                <div className="template-metadata">
                    <h3><strong>Key Functions (Max 5 shown)</strong></h3>
                    <p><strong>Functions:</strong> {formatOptions(template.functions)}</p>
                </div>
            )}
            
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
                  {getLinkIcon(template.text)} {template.text}
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
                      {getLinkIcon(template[textKey])} {template[textKey]}
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