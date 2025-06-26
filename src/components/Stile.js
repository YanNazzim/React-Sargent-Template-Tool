// src/components/Stile.js
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";
import { Images } from "../images/images";

function Stile() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series } = location.state || {};

  // Redirect to home if series is not available (e.g., on refresh)
  useEffect(() => {
    if (!series) {
      navigate("/");
    }
  }, [series, navigate]); // Add navigate to dependency array

  let deviceListNarrow = "";
  let deviceListWide = "";
  let deviceListEM = "";
  let deviceImageNarrow = "";
  let deviceImageWide = "";
  let deviceImageKP = "";

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
  const devicListEM80 = ["(KP, IN, SN)"];
  const devicListEMPE80 = ["(KP, IN, SN)"];

  // Assign device lists and images based on the series
  if (series === "80") {
    deviceListNarrow = deviceListN80;
    deviceListWide = deviceListW80;
    deviceListEM = devicListEM80;
    deviceImageNarrow = Images.narrowRimExit8500;
    deviceImageWide = Images.wideStileRim;
    deviceImageKP = Images.KP80Trim;
  }
  if (series === "PE80") {
    deviceListNarrow = deviceListPEN80;
    deviceListWide = deviceListPEW80;
    deviceListEM = devicListEMPE80;
    deviceImageNarrow = Images.narrowPE8500;
    deviceImageWide = Images.widePERim;
    deviceImageKP = Images.KP80Trim;
  }
  if (series === "90") {
    deviceListNarrow = deviceListN90;
    deviceListWide = deviceListW90;
    deviceImageNarrow = Images.narrowCVR9400;
    deviceImageWide = Images.crossWideRim;
  }

  // Handle navigation to different types of exits with the series
  const handleButtonClickNarrow = () => {
    navigate("/narrow", { state: { series } });
  };

  const handleButtonClickWide = () => {
    navigate("/wide", { state: { series } });
  };

  const handleButtonClickEM = () => {
    navigate("/em-products", { state: { series } });
  };

  return (
    <div className="stile-page">
      <button id="Narrow" className="btn" onClick={handleButtonClickNarrow}>
        <img
          src={deviceImageNarrow}
          className="btn-image"
          alt="NarrowExits"
        />
        Standard Narrow {series} Series <br /> {deviceListNarrow}
      </button>
      <button id="Wide" className="btn" onClick={handleButtonClickWide}>
        <img src={deviceImageWide} className="btn-image" alt="WideExits" />
        Standard Wide {series} Series <br /> {deviceListWide}
      </button>
      {(series === "80" || series === "PE80") && (
        <button className="btn" onClick={handleButtonClickEM}>
          <img src={deviceImageKP} className="btn-image" alt="KPExits" />
          Electromechanical {series} Series <br /> {deviceListEM}
        </button>
      )}
    </div>
  );
}

export default Stile;