import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";

// Import all images from images.js
import { Images } from "../images/images";

// Define Wide80, Wide90, and PE80 devices using the Images object
const wide80Devices = [
  { id: "WD8600", name: "WD8600 Wide CVR Exit", img: Images.wideCVR },
  { id: "MD8600", name: "MD8600 Wide CVR Exit", img: Images.wideCVR },
  { id: "AD8600", name: "AD8600 Wide CVR Exit", img: Images.wideCVR },
  {
    id: "LP8600",
    name: "LP/LR/LS8600 Wide CVR/Mortise Exit",
    img: Images.wideCVR,
  },
  { id: "8700", name: "8700 Wide SVR Exit", img: Images.wideSVR },
  { id: "NB-8700", name: "NB-8700 Wide SVR Exit", img: Images.wideNBSVR },
  { id: "8800", name: "8800 Wide Rim Exit", img: Images.wideStileRim },
  { id: "8900", name: "8900 Wide Mortise Exit", img: Images.wideMortise },
];

const wide90Devices = [
  { id: "9700", name: "9700 Wide SVR Exit", img: Images.crossWideSVR },
  { id: "9800", name: "9800 Wide Rim Exit", img: Images.crossWideRim },
  { id: "9900", name: "9900 Wide Mortise Exit", img: Images.crossWideMortise },
];

const widePE80Devices = [
  { id: "PE8600", name: "PE8600 Wide CVR Exit", img: Images.widePECVR },
  { id: "PE8700", name: "PE8700 Wide SVR Exit", img: Images.widePESVR },
  { id: "NB-PE8700", name: "NB-PE8700 Wide SVR Exit", img: Images.widePENBSVR },
  { id: "PE8800", name: "PE8800 Wide Rim Exit", img: Images.widePERim },
  {
    id: "PE8900",
    name: "PE8900 Wide Mortise Exit",
    img: Images.widePE80Mortise,
  },
];

const series20Devices = [
  { id: "2727", name: "2727 SVR Exit", img: Images.Exit2727 },
  { id: "2828", name: "2828 Rim Exit", img: Images.Exit2828 },
];

const series30Devices = [
  { id: "3727", name: "3727/NB-3727 SVR Exit", img: Images.Exit2727 },
  { id: "3828", name: "3828 Rim Exit", img: Images.Exit2828 },
];

function WideExits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series } = location.state || {}; // Get series from passed state

  // Determine the correct set of devices to display based on the series
  let devices;
  switch (series) {
    case "90":
      devices = wide90Devices;
      break;
    case "PE80":
      devices = widePE80Devices;
      break;
    case "20":
      devices = series20Devices;
      break;
    case "30":
      devices = series30Devices;
      break;
    default:
      devices = wide80Devices;
      break;
  }

  const handleButtonClick = (id) => {
    const navigateSeries = series === "PE" ? `Wide${series}` : `Wide${series}`; // Adjust series naming for PE series
    navigate("/display-templates", {
      state: { category: "Exit Devices", series: navigateSeries, device: id },
    });
  };

  return (
    <div className="stile-page">
      {devices.map((device) => (
        <button
          key={device.id}
          className="btn"
          onClick={() => handleButtonClick(device.id)}
        >
          <img src={device.img} alt={device.name} className="btn-image" />
          {device.name}
        </button>
      ))}
    </div>
  );
}

export default WideExits;
