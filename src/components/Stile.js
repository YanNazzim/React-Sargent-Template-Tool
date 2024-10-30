// Stile.js
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import "./style/Stile.css";
import { Images } from "../images/images"; // Import the Images object

function Stile() {
  const navigate = useNavigate();
  const location = useLocation(); // Get state from the previous page (ExitSeries.js)
  const { series } = location.state || {}; // Destructure series from state
  var deviceListNarrow = "";
  var deviceListWide = "";
  var deviceListKP = "";
  var deviceListIN120 = "";
  var deviceImageNarrow = "";
  var deviceImageWide = "";
  var deviceImageKP = "";
  var deviceImageIN120 = "";

  // Logging the value of series to verify
  useEffect(() => {
    console.log("Series Value:", series);
  }, [series]);

  const deviceListN80 = ["(8300, 8400, 8500)"];
  const deviceListW80 = ["(8600, 8700, 8800, 8900)"];
  const deviceListPEN80 = ["(PE8300, PE8400, PE8500)"];
  const deviceListPEW80 = ["(PE8600, PE8700, PE8800, PE8900)"];
  const deviceListN90 = ["(9400)"];
  const deviceListW90 = ["(9700, 9800, 9900)"];
  const devicListKP80 = ["(KP8800, KP8900)"];
  const devicListKPPE80 = ["(KP PE8800, KP PE8900)"];
  const devicListIN12080 = ["(IN120 8800, IN120 8900)"];
  const devicListIN120PE80 = ["(IN120 PE8600, IN120 PE8700, IN120 PE8800, IN120 PE8900)"];


  // Assign device lists and images based on the series
  if (series === "80") {
    deviceListNarrow = deviceListN80;
    deviceListWide = deviceListW80;
    deviceListKP = devicListKP80;
    deviceListIN120 = devicListIN12080
    deviceImageNarrow = Images.narrowRimExit8500;
    deviceImageWide = Images.wideStileRim;
    deviceImageKP = Images.KP80Trim;
    deviceImageIN120 = Images.IN120
  }
  if (series === "PE80") {
    deviceListNarrow = deviceListPEN80;
    deviceListWide = deviceListPEW80;
    deviceListKP = devicListKPPE80;
    deviceListIN120 = devicListIN120PE80;
    deviceImageNarrow = Images.narrowPE8500;
    deviceImageWide = Images.widePERim;
    deviceImageKP = Images.KP80Trim;
    deviceImageIN120 = Images.IN120

  }
  if (series === "90") {
    deviceListNarrow = deviceListN90;
    deviceListWide = deviceListW90;
    deviceImageNarrow = Images.narrowCVR9400;
    deviceImageWide = Images.crossWideRim;
  }

  // Handle navigation to Narrow or Wide exits with the series
  const handleButtonClickNarrow = () => {
    navigate("/narrow", { state: { series } }); // Pass series to Narrow page
  };

  const handleButtonClickWide = () => {
    navigate("/wide", { state: { series } }); // Pass series to Wide page
  };

  const handleButtonClickEM = (series) => {
    navigate("/display-templates", {
      state: {
        category: "Exit Devices",
        series,
        device: series,
      },
    });
  };

  return (
    <>
      <div className="stile-page">
        <button id="Narrow" className="btn" onClick={handleButtonClickNarrow}>
          <img
            src={deviceImageNarrow}
            className="btn-image"
            alt="NarrowExits"
          />
          Standard Narrow {series} Series <br></br> {deviceListNarrow}
        </button>
        <button id="Wide" className="btn" onClick={handleButtonClickWide}>
          <img src={deviceImageWide} className="btn-image" alt="WideExits" />
          Standard Wide {series} Series <br></br> {deviceListWide}
        </button>
        {/* Render KP button only if series is not "80" or "PE80" */}
        {(series === "80" || series === "PE80") && (
          <button
            className="btn"
            onClick={() => handleButtonClickEM(`KP${series}`)}
          >
            <img src={deviceImageKP} className="btn-image" alt="KPExits" />
            KP {series} Series <br></br> {deviceListKP}
          </button>
        )}
        {/* Render KP button only if series is "80" or "PE80" */}
        {(series === "80" || series === "PE80") && (
          <button
            className="btn"
            onClick={() => handleButtonClickEM(`IN120 ${series} Series`)}
          >
            <img src={deviceImageIN120} className="btn-image" alt="IN120Exits" />
            IN120 {series} Series <br></br> {deviceListIN120}
          </button>
        )}
      </div>
    </>
  );
}

export default Stile;
