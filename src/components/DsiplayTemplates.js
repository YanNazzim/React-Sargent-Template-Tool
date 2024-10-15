import React from "react";
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
  const { category, series, type, device, id } = location.state || {};

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
  } else if (category === "Thermal") {
    templates = ThermalPin[series] || [];
  }

  // Update the filter logic to check for both type and device
  const filterByCategory = {
    "Mortise Locks": (template) =>
      (type && template.device?.toLowerCase() === type.toLowerCase()) ||
      (device && template.device?.toLowerCase() === device.toLowerCase()),
    "Exit Devices": (template) =>
      device && template.device?.toLowerCase() === device.toLowerCase(),
    "Bored Locks": (template) =>
      device && template.device?.toLowerCase() === device.toLowerCase(),
    "Auxiliary Locks": (template) =>
      device && template.device?.toLowerCase() === device.toLowerCase(),
  };

  // Apply the filter if it exists
  const filterFunction = filterByCategory[category];
  const filteredTemplates = filterFunction ? templates.filter(filterFunction) : templates;

  // Construct the header label
  let headerLabel;
  if (category === "Thermal") {
    // Only show device or id for Thermal category
    headerLabel = `${device || id}`;
  } else if (category === "Multi Points"){
    headerLabel = `${category || "Category"} - ${series || "Series"}`;
  } else if (category === "Bored Locks"){
    headerLabel = `${category || "Category"} - ${series || "Series"}`;
  } else if (category === "Auxiliary Locks"){
    headerLabel = `${category || "Category"} - ${series || "Series"}`;
  } else {
    // For other categories, include category, series, and type/device
    headerLabel = `${category || "Category"} - ${series || "Series"} - ${type || device || id || ''}`;
  }

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
