import React from "react";
import { useLocation } from "react-router-dom";
import "./style/DisplayTemplates.css";
import { MortiseLocks } from "../data/MortiseLocksData";
import { ExitDevices } from "../data/ExitDeviceData";
import { BoredLocks } from "../data/BoredLocksData";
import { AuxLocks } from "../data/AuxLocksData";
import { MultiPoints } from "../data/MultiPointsData";

function DisplayTemplates() {
  const location = useLocation();
  const { category, series, type, device } = location.state || {};

  // Initialize templates array
  let templates = [];

  // Choose the correct data source based on the category
  if (category === "Mortise Locks") {
    templates = MortiseLocks[series] || [];
  } else if (category === "Exit Devices") {
    templates = ExitDevices[series] || [];
  } else if (category === "Multi Points") {
    templates = MultiPoints[series] || [];
  } else if (category === "Bored Locks") {
    templates = BoredLocks[series] || [];
  } else if (category === "Auxiliary Locks") {
    templates = AuxLocks[series] || [];
  }

  // Safeguard for filtering when `device` or `type` is undefined
  const filterByCategory = {
    "Mortise Locks": (template) =>
      type && template.device ? template.device.toLowerCase() === type.toLowerCase() : false,
    "Exit Devices": (template) =>
      device && template.device ? template.device.toLowerCase() === device.toLowerCase() : false,
    "Bored Locks": (template) =>
      device && template.device ? template.device.toLowerCase() === device.toLowerCase() : false,
    "Auxiliary Locks": (template) =>
      device && template.device ? template.device.toLowerCase() === device.toLowerCase() : false,
  };

  // Apply the filter if it exists
  const filterFunction = filterByCategory[category];
  const filteredTemplates = filterFunction ? templates.filter(filterFunction) : templates;

  // Construct the header label
  const headerLabel = `${category || "Category"} - ${series || "Series"} - ${
    type || device || "Device"
  }`;

  // If no templates are found, display a message
  if (filteredTemplates.length === 0) {
    return (
      <h2 className="no-templates-error">
        Error: No templates available for {headerLabel}
      </h2>
    );
  }

  return (
    <div className="display-templates">
      <h1>{headerLabel}</h1>
      <h2 className="ToolTip">
        Click on pictures to open image
        <br />
        Tap on Mobile
      </h2>
      <div className="template-cards">
        {filteredTemplates.map((template, index) => (
          <div key={index} className="template-card">
            <img
              src={template.image}
              alt={template.title}
              className="template-image"
              onClick={() => window.open(template.image, "_blank")}
            />
            <h2>{template.title}</h2>
            {template.warning && <h3>{template.warning}</h3>}
            <a href={template.link} target="_blank" rel="noopener noreferrer">
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
        ))}
      </div>
    </div>
  );
}

export default DisplayTemplates;
