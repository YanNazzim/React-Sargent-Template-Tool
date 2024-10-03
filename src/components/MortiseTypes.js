/* eslint-disable no-use-before-define */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";

/* Mortise Images */
import Mortise8200 from "../images/MortiseLock.png";
import MortiseElectrified8200 from "../images/MortiseElectrified8200.png";
import Mortise8200Indicator from '../images/Mortise8200Indicator.png';
import Mortise9200 from "../images/MortiseLock9200.png";
import MortiseLock7800 from "../images/MortiseLock7800.png";
import BHW8200 from '../images/Mortise8200BHW.png';
import M9200 from '../images/MortiseM9200.png'

function MortiseTypes() {
  const navigate = useNavigate();
  const location = useLocation(); 
  let standardDeviceImage = null;
  let electrifiedDeviceImage = null;
  let indicatorDeviceImage = null;

  const { series } = location.state || {};

  // Select images based on the series
  if (series === "8200") {
    standardDeviceImage = Mortise8200;
    electrifiedDeviceImage = MortiseElectrified8200;
    indicatorDeviceImage = Mortise8200Indicator;
  } else if (series === "9200") {
    standardDeviceImage = Mortise9200;
    electrifiedDeviceImage = Mortise9200;
    indicatorDeviceImage = Mortise8200Indicator;
  } else if (series ==="M9200") {
    standardDeviceImage = M9200;

  }else if (series === "7800") {
    standardDeviceImage = MortiseLock7800;
    indicatorDeviceImage = Mortise8200Indicator;
  }

  // Handle button clicks for each series and type
  const handleButtonClick = (series, type = "Standard") => {
    navigate("/display-templates", {
      state: {
        category: "Mortise Locks",
        series,
        type, 
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
      {series !== "7800" && series !=="M9200" && (
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
      {series !== "9200" && series !== "M9200" && (
        <button className="btn" onClick={() => handleButtonClick(series, "Indicator")}>
          <img
            src={indicatorDeviceImage}
            alt="Indicator Mortise Device"
            className="btn-image"
          />
          {series} Indicator
        </button>
      )}

      {/* Button for Behavioral Health */}
      {series !== "M9200" && (
        <button className="btn" onClick={() => handleButtonClick(series, "Behavioral Health")}>
          <img
            src={BHW8200}
            alt="BHW Mortise Device"
            className="btn-image"
          />
          {series} Behavioral Health
        </button>
      )}
    </div>
  );
}

export default MortiseTypes;
