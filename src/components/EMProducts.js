import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";
import { Images } from "../images/images";

function EMProducts() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series } = location.state || {};
  let deviceListKP = "";
  let deviceListIN120 = "";
  let deviceImageKP = "";
  let deviceImageIN120 = "";

  // Logging the value of series to verify
  useEffect(() => {
    console.log("Series Value:", series);
  }, [series]);

  const devicListKP80 = ["(KP8800, KP8900)"];
  const devicListKPPE80 = ["(KP PE8800, KP PE8900)"];
  const devicListIN12080 = ["(IN100, IN120, IN220)"];
  const devicListIN120PE80 = [
    "(IN120 PE8600, IN120 PE8700, IN120 PE8800, IN120 PE8900)",
  ];

  // Assign device lists and images based on the series
  if (series === "80") {
    deviceListKP = devicListKP80;
    deviceListIN120 = devicListIN12080;
    deviceImageKP = Images.KP80Trim;
    deviceImageIN120 = Images.IN120;
  }
  if (series === "PE80") {
    deviceListKP = devicListKPPE80;
    deviceListIN120 = devicListIN120PE80;
    deviceImageKP = Images.KP80Trim;
    deviceImageIN120 = Images.IN120;
  }

  const handleButtonClickKP = () => {
    navigate("/wide", { state: { series, type: "KP " } });
  };

  const handleButtonClickIN = () => {
    navigate("/wide", { state: { series, type: "IN " } });
  };

  

  return (
    <div className="stile-page">
      {(series === "80" || series === "PE80") && (
        <button className="btn" onClick={handleButtonClickKP}>
          <img src={deviceImageKP} className="btn-image" alt="KPExits" />
          KP {series} Series <br /> {deviceListKP}
        </button>
      )}
      {(series === "80" || series === "PE80") && (
        <button className="btn" onClick={handleButtonClickIN}>
          <img
            src={deviceImageIN120}
            className="btn-image"
            alt="IN120Exits"
          />
          IN {series} Series <br /> {deviceListIN120}
        </button>
      )}
    </div>
  );
}

export default EMProducts;
