import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./style/DisplayTemplates.css";
import { MortiseLocks } from "../data/MortiseLocksData";
import { ExitDevices } from "../data/ExitDeviceData";
import { BoredLocks } from "../data/BoredLocksData";
import { AuxLocks } from "../data/AuxLocksData";
import { MultiPoints } from "../data/MultiPointsData";
import { ThermalPin } from "../data/ThermalPinData";

function DisplayTemplates() {
  const location = useLocation();
  const { category, series, device } = location.state || {};

  const [expandedTemplate, setExpandedTemplate] = useState(null);
  const [viewMode, setViewMode] = useState("templates");

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
      <h1>{category || "Category"} - {series || "Series"}</h1>
      <h2 className="ToolTip">Click/Tap on pictures to see more!</h2>

      {/* Toggle Buttons with Slider */}
      <div className="view-toggle">
        <div
          className={`slider ${viewMode === "templates" ? "left" : "right"}`}
        ></div>
        <button
          className={viewMode === "templates" ? "active" : ""}
          onClick={() => toggleView("templates")}
        >
          Templates
        </button>
        <button
          className={viewMode === "instructions" ? "active" : ""}
          onClick={() => toggleView("instructions")}
        >
          Installation/Parts
        </button>
      </div>

      {/* Content Display */}
      <div className="template-cards">
        {contentToShow.map((template, index) => (
          <div
            key={index}
            className={`template-card ${
              expandedTemplate === index ? "selected" : ""
            }`}
          >
            <img
              src={template.image}
              alt={template.title}
              className="template-image"
              onClick={() => toggleTemplate(index)}
            />
            <h2>{template.title}</h2>
            {expandedTemplate === index && (
              <div className="template-details">
                {template.warning && <h3>{template.warning}</h3>}
                <a
                  href={template.link}
                  target="_blank"
                  rel="noopener noreferrer"
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
