import React from "react";
import { useLocation } from "react-router-dom";
import "./style/DisplayTemplates.css";
import { MortiseLocks } from "../data/MortiseLocksData";  // Import MortiseLocks data
import { ExitDevices } from "../data/ExitDeviceData";  // Import ExitDevices data
import { BoredLocks } from "../data/BoredLocksData";   // Import BoredLocks data
import { AuxLocks } from "../data/AuxLocksData";   // Import AuxLocks data

function DisplayTemplates() {
  const location = useLocation();
  const { category, series, id, type } = location.state;

  // Initialize templates array
  let templates = [];

  // Choose the correct data source based on the category
  if (category === "Mortise Locks") {
    templates = MortiseLocks[series] || [];
  } else if (category === "Exit Devices") {
    templates = ExitDevices[series] || [];
  } else if (category === "Bored Locks") {
    templates = BoredLocks[series] || [];
  } else if (category === "Auxiliary Locks") {
    templates = AuxLocks[series] || [];
  }

  // Filter templates based on type for Mortise Locks, and the id for Exit Devices, Bored Locks, and Auxiliary Locks
  let filteredTemplates = [];

  if (category === "Mortise Locks") {
    // Filter by type (Standard, Electrified, or Indicator) for Mortise Locks
    filteredTemplates = templates.filter(template =>
      template.device === type
    );
  } else if (category === "Exit Devices" || category === "Auxiliary Locks" || category === "Bored Locks") {
    // Exit Devices, Auxiliary Locks, and Bored Locks do not have the "type" distinction, so filter purely by id
    filteredTemplates = templates.filter(template => template.device === id);
  }

  // Determine if "Electrified" or "Standard" or "Indicator" should be shown for Mortise Locks
  
  // Construct the header label
  const headerLabel = category === "Exit Devices"
  ? `${category} - ${series} - ${id}` // Show '?' and id for Exit Devices
  : category === "Bored Locks"
  ? `${category} - ${id}` // Show category and id for Bored Locks
  : `${category} - ${series} ${type || "Standard"}`; // Display type for Mortise Locks

  // If no templates are found, display a message
  if (filteredTemplates.length === 0) {
    return <h2 className="NoTemplatesError">Error: No templates available for {series} {type} </h2>;
  }

  return (
    <div className="display-templates">
      <h1>{headerLabel}</h1>
      <div className="template-cards">
        {filteredTemplates.map((template, index) => (
          <div key={index} className="template-card">
            <img
              src={template.image}
              alt={template.title}
              className="template-image"
            />
            <h2>{template.title}</h2>

            {/* Conditionally render the h3 if warning is not empty */}
            {template.warning && <h3>{template.warning}</h3>}

            {/* Primary link */}
            <a href={template.link} target="_blank" rel="noopener noreferrer">
              {template.text}
            </a>

            {/* Render up to 10 additional links dynamically */}
            {[...Array(10)].map((_, i) => {
              const linkKey = `link${i + 1}`;  // Generates link1, link2, ... link10
              const textKey = `text${i + 1}`;  // Generates text1, text2, ... text10
              return (
                template[linkKey] && (
                  <a
                    key={linkKey}
                    href={template[linkKey]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {template[textKey]}
                  </a>
                )
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayTemplates;
