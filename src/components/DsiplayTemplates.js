import React from "react";
import { useLocation } from "react-router-dom";
import "./style/DisplayTemplates.css";
import { MortiseLocks } from "../data/MortiseLocksData";  // Import MortiseLocks data
import { ExitDevices } from "../data/ExitDeviceData";  // Import ExitDevices data
import { BoredLocks } from "../data/BoredLocksData";

function DisplayTemplates() {
  const location = useLocation();
  const { category, series, id, electrified } = location.state;

  // Initialize templates array
  let templates = [];

  // Choose the correct data source based on the category
  if (category === "Mortise Locks") {
    templates = MortiseLocks[series] || [];
  } else if (category === "Exit Devices") {
    templates = ExitDevices[series] || [];
  } else if (category === "Bored Locks") {
    templates = BoredLocks[series] || [];
  }


  // Filter templates based on electrified/standard for Mortise Locks and the id for Exit Devices
  let filteredTemplates = [];

  if (category === "Mortise Locks") {
    const isElectrified = electrified === "Electrified";
    filteredTemplates = templates.filter(template =>
      isElectrified ? template.device === "Electrified" : template.device === "Standard"
    );
  } else if (category === "Exit Devices") {
    // Exit Devices do not have the "electrified" distinction, so filter purely by id
    filteredTemplates = templates.filter(template => template.device === id);
  } else if (category === "Bored Locks") {
    filteredTemplates = templates.filter(template => template.device === id);  // Filter by device
  }
  
  return (
    <div className="display-templates">
      <h1>
        {category} - {series} - {id} {electrified || "Standard"}
      </h1>
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
