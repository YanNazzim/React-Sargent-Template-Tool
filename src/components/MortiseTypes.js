/* eslint-disable no-use-before-define */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation hooks
import "./style/Stile.css";

/* Mortise Images */
import Mortise8200 from "../images/MortiseLock.png";
import MortiseElectrified8200 from '../images/MortiseElectrified8200.png';
import Mortise9200 from '../images/MortiseLock9200.png';
import MortiseLock7800 from '../images/MortiseLock7800.png';
import ElectricHinge from '../images/ElectricHinge.png';

function MortiseTypes() {
  const navigate = useNavigate();
  const location = useLocation(); // Initialize location using the hook
  let standardDeviceImage = null;
  let electrifiedDeviceImage = null;
  
  const { series } = location.state || {};
  let electrified = ""; // Default is empty string for standard devices

  if (series === "8200") {
    standardDeviceImage = Mortise8200;
    electrifiedDeviceImage = MortiseElectrified8200;
  }
  if (series === "9200") {
    standardDeviceImage = Mortise9200;
    electrifiedDeviceImage = ElectricHinge;
  }
  if (series === "7800") {
    standardDeviceImage = MortiseLock7800;
    electrifiedDeviceImage = MortiseLock7800;
  }

  // Define button click handlers for each series
  const handleButtonClick = (series, isElectrified) => {
    // If it's an electrified version, set electrified to "Electrified"
    if (isElectrified) {
      electrified = "Electrified";
    }
    
    // Navigate with the correct state
    navigate('/display-templates', { state: { category: 'Mortise Locks', series: `${series}`, electrified } });
  };

  return (
    <div className="stile-page">
      {/* Button for Standard series */}
      <button className="btn" onClick={() => handleButtonClick(series, false)}>
        <img
          src={standardDeviceImage}
          alt="Standard Mortise Device"
          className="btn-image"
        />
        {series} Standard
      </button>

      {/* Conditionally render Electrified button */}
      {series !== "7800" && (
        <button id="electrified" className="btn" onClick={() => handleButtonClick(series, true)}>
          <img
            src={electrifiedDeviceImage}
            alt="Electrified Mortise Device"
            className="btn-image"
          />
          {series} Electrified
        </button>
      )}
    </div>
  );
}

export default MortiseTypes;
