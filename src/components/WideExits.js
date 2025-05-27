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
  { id: "NB-8700 OLD", name: "NB-8700 Wide SVR Exit (OLD STYLE  - Before 4/14/25)", img: Images.wideNBSVR },
  { id: "NB-8700 NEW", name: "NB-8700 Wide SVR Exit (NEW STYLE  - After 4/14/25)", img: Images.wideNBSVR },
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
  { id: "20Series", name: "2727/2828 Exits", img: Images.Exit2727 },
];

const series30Devices = [
  { id: "30Series", name: "3727/3828 Exits", img: Images.Exit3727 },
];

// Define additional device lists for IN and KP combinations
const widePE80INDevices = [
  {
    id: "INPE8600",
    name: "IN120 PE8600 Wide CVR Exit",
    img: Images.widePECVR,
  },
  {
    id: "INPE8700",
    name: "IN120 PE8700 Wide SVR Exit",
    img: Images.widePESVR,
  },
  {
    id: "INPE8800",
    name: "IN120 PE8800 Wide Rim Exit",
    img: Images.widePERim,
  },
  {
    id: "INPE8900",
    name: "IN120 PE8900 Wide Mortise Exit",
    img: Images.widePE80Mortise,
  },
];

const wideIN80Devices = [
  { id: "IN8800", name: "IN Series 8800 Rim Exit", img: Images.IN120 },
  { id: "IN8900", name: "IN Series 8900 Mortise Exit", img: Images.IN120 },
];

const wideKP80Devices = [
  { id: "KP8800", name: "KP8800 Wide Rim Exit", img: Images.KP80Trim },
  { id: "KP8900", name: "KP8900 Wide Mortise Exit", img: Images.KP80Trim },
];

const widePE80KPDevices = [
  { id: "KPPE8800", name: "KP PE8800 Wide Rim Exit", img: Images.KP80Trim },
  { id: "KPPE8900", name: "KP PE8900 Wide Mortise Exit", img: Images.KP80Trim },
];

const wideSN80Devices = [
  { id: "SN8600", name: "SN 8600 Concealed Rod Exit", img: Images.SN200ET },
  { id: "SN8700", name: "SN 8700 Surface Rod Exit", img: Images.SN200ET },
  { id: "SN8800", name: "SN 8800 Rim Exit", img: Images.SN200ET },
  { id: "SN8900", name: "SN 8900 Mortise Exit", img: Images.SN200ET },
];

const widePE80SNDevices = [
  { id: "SNPE8600", name: "SN PE8600 Rim Exit", img: Images.SNPE8600 },
  { id: "SNPE8700", name: "SN PE8700 Rim Exit", img: Images.SNPETRIM },
  { id: "SNPE8800", name: "SN PE8800 Rim Exit", img: Images.SNPETRIM },
  { id: "SNPE8900", name: "SN PE8900 Mortise Exit", img: Images.SNPE8900 },
];

function WideExits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series, type } = location.state || {}; // Get series and type from passed state

  // Determine the correct set of devices to display based on the series and type
  let devices;
  if (series === "PE80" && type === "IN ") {
    devices = widePE80INDevices;
  } else if (series === "80" && type === "IN ") {
    devices = wideIN80Devices;
  } else if (series === "PE80" && type === "KP ") {
    devices = widePE80KPDevices;
  } else if (series === "80" && type === "KP ") {
    devices = wideKP80Devices;
  } else if (series === "80" && type === "SN ") {
    devices = wideSN80Devices;
  } else if (series === "PE80" && type === "SN ") {
    devices = widePE80SNDevices;
  } else if (series === "90") {
    devices = wide90Devices;
  } else if (series === "PE80") {
    devices = widePE80Devices;
  } else if (series === "20") {
    devices = series20Devices;
  } else if (series === "30") {
    devices = series30Devices;
  } else {
    devices = wide80Devices;
  }

  const handleButtonClick = (id) => {
    // Determine the series value based on type
    const isKPOrSNOrIN = type === "KP " || type === "IN " || type === "SN ";

    // Navigate based on whether type is "KP" or "IN"
    navigate("/display-templates", {
      state: {
        category: "Exit Devices",
        series: isKPOrSNOrIN ? `${type}${series}` : `Wide${series}`,
        device: id,
      },
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
