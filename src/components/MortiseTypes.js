/* eslint-disable no-use-before-define */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation hooks
import "./style/Stile.css";

/* Mortise Images */
import Mortise8200 from "../images/MortiseLock.png";
import MortiseElectrified8200 from "../images/MortiseElectrified8200.png";
import Mortise8200Indicator from '../images/Mortise8200Indicator.png'
import Mortise9200 from "../images/MortiseLock9200.png";
import MortiseLock7800 from "../images/MortiseLock7800.png";

function MortiseTypes() {
  const navigate = useNavigate();
  const location = useLocation(); // Initialize location using the hook
  let standardDeviceImage = null;
  let electrifiedDeviceImage = null;

  const { series } = location.state || {};

  let indicatorDeviceImage = null;

  if (series === "8200") {
    standardDeviceImage = Mortise8200;
    electrifiedDeviceImage = MortiseElectrified8200;
    indicatorDeviceImage = Mortise8200Indicator;
  }
  
  if (series === "9200") {
    standardDeviceImage = Mortise9200;
    electrifiedDeviceImage = Mortise9200;
    indicatorDeviceImage = Mortise8200Indicator;

  }
  if (series === "7800") {
    standardDeviceImage = MortiseLock7800;
    indicatorDeviceImage = Mortise8200Indicator;

  }

  // Define button click handlers for each series
  const handleButtonClick = (series, type) => {
    let lockType = type || ""; // Default to standard
  
    // Navigate to DisplayTemplates page with the correct state
    navigate("/display-templates", {
      state: {
        category: "Mortise Locks",
        series,
        type: lockType, // Pass the type (Standard, Electrified, Indicator)
        id: series,
      },
    });
  };
  

  return (
    <div className="stile-page">
{/* Button for Standard series */}
<button className="btn" onClick={() => handleButtonClick(series, "Standard")}>
  <img
    src={standardDeviceImage}
    alt="Standard Mortise Device"
    className="btn-image"
  />
  {series} Standard
</button>

{/* Button for Electrified series */}
{series !== "7800" && (
  <button className="btn" onClick={() => handleButtonClick(series, "Electrified")}>
    <img
      src={electrifiedDeviceImage}
      alt="Electrified Mortise Device"
      className="btn-image"
    />
    {series} Electrified
  </button>
)}

{/* Button for Indicator series */}
{
  <button className="btn" onClick={() => handleButtonClick(series, "Indicator")}>
    <img
      src={indicatorDeviceImage}
      alt="Indicator Mortise Device"
      className="btn-image"
    />
    {series} Indicator
  </button>
}

    </div>
  );
}

export default MortiseTypes;
