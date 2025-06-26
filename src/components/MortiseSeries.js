import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./style/Stile.css";
import { Images } from "../images/images"; // Import the Images object

function MortiseSeries() {
  const navigate = useNavigate();

  // Define button click handlers for each series
  // Handle button clicks for each series and type
  const handleButtonClick = (series) => {
    navigate("/display-templates", {
      state: {
        category: "Mortise Locks",
        series,
        device: series,
      },
    });
  };

  return (
    <>
      <div className="stile-page">
        <h2 className="ToolTip">Strike Box (WBS) : 77-1141</h2>
        <h2 className="ToolTip">Strike Screw: 01-1019 x finish</h2>
        {/* Button for 8200 series */}

        <button className="btn" onClick={() => handleButtonClick("8200")}>
          <img
            className="btn-image"
            src={Images.Mortise8200}
            alt="Mortise Lock"
          />
          8200
        </button>
        {/* Button for KP 8200 series */}
        <button className="btn" onClick={() => handleButtonClick("KP8200")}>
          <img className="btn-image" src={Images.KP80Trim} alt="Mortise Lock" />
          KP Series 8200
        </button>
        {/* Button for IN Series 8200 series */}
        <button className="btn" onClick={() => handleButtonClick("IN8200")}>
          <img className="btn-image" src={Images.IN7900} alt="Mortise Lock" />
          IN Series 8200
        </button>
                {/* Button for SN Series 8200 series */}
                <button className="btn" onClick={() => handleButtonClick("SN8200")}>
          <img className="btn-image" src={Images.SN8200} alt="Mortise Lock" />
          SN Series 8200
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
                {/* Button for 7900 series */}
                <button className="btn" onClick={() => handleButtonClick("IN7900")}>
          <img
            className="btn-image"
            src={Images.IN7900}
            alt="Mortise Lock"
          />
          IN Series 7900
        </button>
      </div>
    </>
  );
}

export default MortiseSeries;
