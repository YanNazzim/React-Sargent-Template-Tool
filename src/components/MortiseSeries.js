import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./style/Stile.css";
import { Images } from "../images/images"; // Import the Images object

function MortiseSeries() {
  const navigate = useNavigate();

  // Define button click handlers for each series
  const handleButtonClick = (series) => {
    navigate("/mortiseTypes", { state: { series } }); // Pass the series dynamically
  };

  return (
    <>
      <div className="stile-page">
      <h2 className="ToolTip">
            Strike Box (WBS) : 77-1141
        </h2>
        <h2 className="ToolTip">
            Strike Screw:  01-1019 x finish
        </h2>
        {/* Button for 8200 series */}
        <button className="btn" onClick={() => handleButtonClick("8200")}>
          <img
            className="btn-image"
            src={Images.Mortise8200}
            alt="Mortise Lock"
          />
          8200
        </button>
        {/* Button for 9200 series */}
        <button className="btn" onClick={() => handleButtonClick("9200")}>
          <img
            className="btn-image"
            src={Images.Mortise9200}
            alt="Mortise Lock"
          />
          9200
        </button>
        {/* Button for M9200 series */}
        <button className="btn" onClick={() => handleButtonClick("M9200")}>
          <img
            className="btn-image"
            src={Images.MortiseM9200}
            alt="Mortise Lock"
          />
          M-9200
        </button>
        {/* Button for 7800 series */}
        <button className="btn" onClick={() => handleButtonClick("7800")}>
          <img
            className="btn-image"
            src={Images.Mortise7800}
            alt="Mortise Lock"
          />
          7800
        </button>
      </div>
    </>
  );
}

export default MortiseSeries;
