// ExitSeries.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./style/Stile.css";
import { Images } from "../images/images"; // Import Images object

function ExitSeries() {
  const navigate = useNavigate();

  const handleButtonClick80Series = () => {
    navigate("/stile", { state: { series: "80" } }); // Pass series '80'
  };

  const handleButtonClickPE80Series = () => {
    navigate("/stile", { state: { series: "PE80" } }); // Pass series 'PE80'
  };

  const handleButtonClick90Series = () => {
    navigate("/stile", { state: { series: "90" } }); // Pass series '90'
  };

  const handleButtonClick20Series = (series) => {
    navigate("/display-templates", {
      state: {
        category: "Exit Devices",
        series: "Wide20",

      },
    });
  }

  

  const handleButtonClick30Series = (series) => {
    navigate("/display-templates", {
      state: {
        category: "Exit Devices",
        series: "Wide30",
      },
    });
  }

  const handleButtonClickThermalPin = (series, id) => {
    navigate("/display-templates", {
      state: {
        category: "Thermal",
        series,
        id, // Passing the correct series id
      },
    });
  };

  return (
    <>
      <div className="stile-page">
        <button
          className="btn"
          onClick={() => handleButtonClickThermalPin("Thermal", "Thermal Pin")}
        >
          <img
            src={Images.ThermalPin683}
            alt="683 Thermal Pin"
            className="btn-image"
          />
          683 Thermal Pin
        </button>
        <button className="btn" onClick={handleButtonClick80Series}>
          <img
            src={Images.wideStileRim}
            alt="80 Series Devices"
            className="btn-image"
          />
          80 Series
        </button>
        <button className="btn" onClick={handleButtonClickPE80Series}>
          <img
            src={Images.PE80WideRimExit}
            alt="PE Series Devices"
            className="btn-image"
          />
          PE80 Series
        </button>
        <button className="btn" onClick={handleButtonClick90Series}>
          <img
            src={Images.crossWideRim}
            alt="90 Series Devices"
            className="btn-image"
          />
          90 Series
        </button>
        <button className="btn" onClick={handleButtonClick30Series}>
          <img
            src={Images.Exit3828}
            alt="30 Series Devices"
            className="btn-image"
          />
          30 Series
        </button>
        <button className="btn" onClick={handleButtonClick20Series}>
          <img
            src={Images.Exit2828}
            alt="20 Series Devices"
            className="btn-image"
          />
          20 Series
        </button>
      </div>
    </>
  );
}

export default ExitSeries;
