import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";
import { Images } from "../images/images"; // Import Images object

function MortiseTypes() {
  const navigate = useNavigate();
  const location = useLocation(); 
  let standardDeviceImage = null;
  let electrifiedDeviceImage = null;
  let indicatorDeviceImage = null;

  const { series } = location.state || {};

  // Select images based on the series
  if (series === "8200") {
    standardDeviceImage = Images.Mortise8200;
    electrifiedDeviceImage = Images.MortiseElectrified8200;
    indicatorDeviceImage = Images.MortiseIndicator8200;
  } else if (series === "9200") {
    standardDeviceImage = Images.Mortise9200;
    electrifiedDeviceImage = Images.Mortise9200;
  } else if (series === "M9200") {
    standardDeviceImage = Images.MortiseM9200;
  } else if (series === "7800") {
    standardDeviceImage = Images.Mortise7800;
    indicatorDeviceImage = Images.MortiseIndicator8200;
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
            <h2 className="ToolTip">
            Strike Box (WBS) : 77-1141
        </h2>
        <h2 className="ToolTip">
            Strike Screw:  01-1019 x finish
        </h2>
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
      {series !== "7800" && series !== "M9200" && (
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
            src={Images.Mortise8200BHW}
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
