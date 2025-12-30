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

  // Track the currently selected card index (for split view)
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  
  // Mobile specific state: Is the detail view open?
  const [isMobileDetailOpen, setIsMobileDetailOpen] = useState(false);

  const [viewMode, setViewMode] = useState("templates");
  const [selectedLinks, setSelectedLinks] = useState({}); 
  const [copyStatus, setCopyStatus] = useState(null); 

  useEffect(() => {
    if (!category || !series) {
      navigate("/");
    }
  }, [category, series, navigate]);

  // --- Data Loading ---
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

  // --- Link Extraction Helper ---
  const extractLinks = (template) => {
    const links = [];
    if (template.link) {
      links.push({ text: template.text || "Document Link", url: template.link, isPrimary: true });
    } else {
       if(template.text) links.push({ text: template.text, url: template.link || "#", isPrimary: true });
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

  const contentWithLinks = contentToShow.map((template, index) => ({
    ...template,
    templateIndex: index,
    links: extractLinks(template),
  }));

  // --- Selection Logic ---
  const handleGroupSelect = (index) => {
    setSelectedGroupIndex(index);
    setIsMobileDetailOpen(true); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileBack = () => {
    setIsMobileDetailOpen(false);
  };

  const toggleView = (view) => {
    if (view !== viewMode) {
      setSelectedGroupIndex(0); 
      setViewMode(view);
      setIsMobileDetailOpen(false);
    }
  };

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
          templateIndex: templateIndex,
          linkIndex: linkIndex
        };
      }
      return newLinks;
    });
  };
  
  const isLinkSelected = (templateIndex, linkIndex) => {
    return !!selectedLinks[`${templateIndex}-${linkIndex}`];
  };

  // --- NEW: Select All Logic ---
  const areAllSelectedInGroup = (groupIndex) => {
    const group = contentWithLinks[groupIndex];
    if (!group || group.links.length === 0) return false;
    // Check if every link in this group has a corresponding key in selectedLinks
    return group.links.every((_, i) => selectedLinks[`${groupIndex}-${i}`]);
  };

  const handleSelectAll = (groupIndex) => {
    const group = contentWithLinks[groupIndex];
    if (!group) return;

    const allSelected = areAllSelectedInGroup(groupIndex);

    setSelectedLinks(prev => {
        const newState = { ...prev };
        
        if (allSelected) {
            // Deselect All: Remove keys for this group
            group.links.forEach((_, i) => {
                delete newState[`${groupIndex}-${i}`];
            });
        } else {
            // Select All: Add keys for this group
            group.links.forEach((link, i) => {
                newState[`${groupIndex}-${i}`] = {
                    ...link,
                    templateTitle: group.title,
                    templateIndex: groupIndex,
                    linkIndex: i
                };
            });
        }
        return newState;
    });
  };

  // --- Copy Logic ---
  const { totalLinks, sortedSelectedLinks } = useMemo(() => {
    let count = 0;
    const linksArray = Object.entries(selectedLinks).map(([key, linkDetails]) => {
        count++;
        return { key, ...linkDetails };
    }).sort((a, b) => {
        if (a.templateIndex !== b.templateIndex) return a.templateIndex - b.templateIndex;
        return a.linkIndex - b.linkIndex;
    });
    return { totalLinks: count, sortedSelectedLinks: linksArray };
  }, [selectedLinks]);

  const handleCopyLinks = async () => {
    if (totalLinks === 0) {
      setCopyStatus("None Selected");
      setTimeout(() => setCopyStatus(null), 3000);
      return;
    }

    const groupedLinks = new Map();
    sortedSelectedLinks.forEach(link => {
      if (!groupedLinks.has(link.templateTitle)) groupedLinks.set(link.templateTitle, []);
      groupedLinks.get(link.templateTitle).push(link);
    });
    
    const outputBlocks = [];
    groupedLinks.forEach((linksInCard, title) => {
      const header = `----${title}----`;
      const list = linksInCard.map(link => `${link.text}: ${link.url}`).join('\n\n');
      outputBlocks.push(`${header}\n${list}`);
    });

    try {
      await navigator.clipboard.writeText(outputBlocks.join('\n\n').trim());
      setCopyStatus("Links Copied!");
      setSelectedLinks({}); 
      setTimeout(() => setCopyStatus(null), 3000);
    } catch (err) {
      setCopyStatus("Copy Failed");
      setTimeout(() => setCopyStatus(null), 3000);
    }
  };

  // --- Render Helpers ---
  const currentGroup = contentWithLinks[selectedGroupIndex];

  return (
    <div className="display-templates-page">
      
      {/* Header Area */}
      <div className="dt-header">
        <h1 className="dt-title">
            <span className="dt-category">{category}</span>
            <span className="dt-divider">/</span>
            <span className="dt-series">{device || series}</span>
        </h1>
        
        <div className="dt-toggle-container">
            <div className={`dt-toggle-pill ${viewMode}`}></div>
            <button 
                className={`dt-toggle-btn ${viewMode === 'templates' ? 'active' : ''}`}
                onClick={() => toggleView('templates')}
            >
                Templates
            </button>
            <button 
                className={`dt-toggle-btn ${viewMode === 'instructions' ? 'active' : ''}`}
                onClick={() => toggleView('instructions')}
            >
                Installation
            </button>
        </div>
      </div>

      <div className="dt-dashboard">
        {/* Left Sidebar */}
        <div className={`dt-sidebar ${isMobileDetailOpen ? 'mobile-hidden' : ''}`}>
            {contentWithLinks.length > 0 ? (
                contentWithLinks.map((item, index) => (
                    <div 
                        key={index} 
                        className={`dt-menu-card ${selectedGroupIndex === index ? 'active' : ''}`}
                        onClick={() => handleGroupSelect(index)}
                    >
                        <div className="dt-menu-thumb">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="dt-menu-info">
                            <h3 className="dt-menu-title">{item.title}</h3>
                            <span className="dt-menu-subtitle">{item.links.length} Documents</span>
                        </div>
                        <span className="dt-menu-arrow">›</span>
                    </div>
                ))
            ) : (
                <div className="dt-empty">No items found.</div>
            )}
        </div>

        {/* Right Stage */}
        <div className={`dt-stage ${isMobileDetailOpen ? 'mobile-active' : ''}`}>
            {currentGroup ? (
                <>
                    <div className="dt-mobile-header">
                        <button onClick={handleMobileBack} className="dt-back-btn">‹ Back</button>
                        <span className="dt-mobile-title">Details</span>
                    </div>

                    <div className="dt-content-scroll">
                        <div className="dt-hero">
                            <img src={currentGroup.image} alt={currentGroup.title} className="dt-hero-image" />
                            <h2 className="dt-hero-title">{currentGroup.title}</h2>
                            {currentGroup.warning && (
                                <div className="dt-warning-banner">⚠️ {currentGroup.warning}</div>
                            )}
                        </div>

                        <div className="dt-actions">
                            <div className="dt-links-header">
                                <span className="dt-label-text">Available Documents</span>
                                {/* NEW SELECT ALL BUTTON */}
                                <button 
                                    className="dt-select-all-btn" 
                                    onClick={() => handleSelectAll(selectedGroupIndex)}
                                >
                                    {areAllSelectedInGroup(selectedGroupIndex) ? "Deselect All" : "Select All"}
                                </button>
                            </div>
                            
                            <div className="dt-links-list">
                                {currentGroup.links.map((link, idx) => (
                                    <label key={idx} className={`dt-link-row ${isLinkSelected(selectedGroupIndex, idx) ? 'selected' : ''}`}>
                                        <div className="dt-checkbox-wrapper">
                                            <input 
                                                type="checkbox" 
                                                checked={isLinkSelected(selectedGroupIndex, idx)}
                                                onChange={() => handleLinkToggle(selectedGroupIndex, idx, link)}
                                            />
                                            <div className="dt-custom-checkbox"></div>
                                        </div>
                                        <span className="dt-link-text">{link.text}</span>
                                        <a 
                                            href={link.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="dt-open-btn"
                                            onClick={(e) => e.stopPropagation()}
                                            title="Open PDF"
                                        >
                                            ↗
                                        </a>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="dt-stage-empty">Select an item to view details</div>
            )}
        </div>
      </div>

      <div className={`dt-copy-bar ${totalLinks > 0 ? 'visible' : ''}`}>
            <div className="dt-copy-info">
                <span className="dt-copy-count">{totalLinks}</span>
                <span className="dt-copy-label">Links Selected</span>
            </div>
            <div className="dt-copy-actions">
                <button className="dt-copy-btn" onClick={handleCopyLinks}>
                    {copyStatus || "Copy All"}
                </button>
                <button className="dt-clear-btn" onClick={() => setSelectedLinks({})}>
                    Clear
                </button>
            </div>
      </div>
    </div>
  );
}

export default DisplayTemplates;