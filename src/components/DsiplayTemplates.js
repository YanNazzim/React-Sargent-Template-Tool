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
  };

  const toggleView = (view) => {
    if (view !== viewMode) {
      setViewMode(view);
    }
  };

  return (
    <div className="display-templates">
      <h1 className="deviceHeading">{category || "Category"} - {device || series}</h1>
      <h2 className="ToolTip">Click/Tap on pictures to see more!</h2>

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
            <img
              src={template.image}
              alt={template.title}
              className="template-image"
            />
            <h2>{template.title}</h2>
            {expandedTemplate === index && (
              <div className="template-details">
                {template.warning && <h3>{template.warning}</h3>}
                <a
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${template.text}`}
                >
                  {template.text}
                </a>
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