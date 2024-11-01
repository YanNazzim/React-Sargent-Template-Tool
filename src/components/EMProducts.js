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
  let deviceImageSN = "";

  // Logging the value of series to verify
  useEffect(() => {
    console.log("Series Value:", series);
  }, [series]);

  const devicListKP80 = ["(KP8800, KP8900)"];
  const devicListKPPE80 = ["(KP PE8800, KP PE8900)"];
  const devicListIN12080 = ["(IN100, IN120, IN220)"];
  const devicListIN120PE80 = ["(IN100, IN120, IN220)",];
  const deviceListSN = ["(SN200, SN210)"]

  // Assign device lists and images based on the series
  if (series === "80") {
    deviceListKP = devicListKP80;
    deviceListIN120 = devicListIN12080;
    deviceImageKP = Images.KP80Trim;
    deviceImageIN120 = Images.IN120;
    deviceImageSN = Images.SN200ET
  }
  if (series === "PE80") {
    deviceListKP = devicListKPPE80;
    deviceListIN120 = devicListIN120PE80;
    deviceImageKP = Images.KP80Trim;
    deviceImageIN120 = Images.IN120;
    deviceImageSN = Images.SN200ET
  }

  const handleButtonClickKP = () => {
    navigate("/wide", { state: { series, type: "KP " } });
  };

  const handleButtonClickIN = () => {
    navigate("/wide", { state: { series, type: "IN " } });
  };

  const handleButtonClickSN = () => {
    navigate("/wide", { state: { series, type: "SN " } });
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
            {(series === "80" || series === "PE80") && (
        <button className="btn" onClick={handleButtonClickSN}>
          <img
            src={deviceImageSN}
            className="btn-image"
            alt="IN120Exits"
          />
          SN {series} Series <br /> {deviceListSN}
        </button>
      )}
    </div>
  );
}

export default EMProducts;
