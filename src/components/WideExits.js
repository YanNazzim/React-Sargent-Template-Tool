import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Device images
import wideCVR from "../images/WideCVR.png";
import wideStileRim from "../images/Wide Rim Exit (8800).png";
import wideSVR from "../images/WideSVR.png";
import wideNBSVR from "../images/WideNBSVR.png";
import wideMortise from "../images/WideMortise.png";
import crossWideRim from "../images/crossWideRim.png";
import crossWideSVR from "../images/crossWideSVR.png";
import crossWideMortise from "../images/crossWideMortise.png";
import widePE80Mortise from '../images/widePE80Mortise.png';

// Define Wide80, Wide90, and PE80 devices
const wide80Devices = [
  { id: "WD8600", name: "WD8600", img: wideCVR },
  { id: "MD8600", name: "MD8600", img: wideCVR },
  { id: "AD8600", name: "AD8600", img: wideCVR },
  { id: "LP8600", name: "LP8600 & LR8600", img: wideCVR },
  { id: "LS8600", name: "LS8600", img: wideCVR },
  { id: "8700", name: "8700", img: wideSVR },
  { id: "NB-8700", name: "NB-8700", img: wideNBSVR },
  { id: "8800", name: "8800", img: wideStileRim },
  { id: "8900", name: "8900", img: wideMortise },
];

const wide90Devices = [
  { id: "9700", name: "9700 Wide SVR Exit", img: crossWideSVR },
  { id: "9800", name: "9800 Wide Rim Exit", img: crossWideRim },
  { id: "9900", name: "9900 Wide Mortise Exit", img: crossWideMortise },
];

const widePE80Devices = [
  { id: "PE8900", name: "PE8900 Wide Mortise Exit", img: widePE80Mortise }
];

function WideExits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series } = location.state || {}; // Get series from passed state

  // Determine the correct set of devices to display based on the series
  const devices = series === "90" ? wide90Devices 
                : series === "PE" ? widePE80Devices 
                : wide80Devices;

  const handleButtonClick = (id) => {
    navigate('/display-templates', { state: { category: 'Exit Devices', series: `Wide${series}`, id } });
  };

  return (
    <>
      <Header />
      <div className="stile-page">
        {devices.map(device => (
          <button key={device.id} className="btn" onClick={() => handleButtonClick(device.id)}>
            <img src={device.img} alt={device.name} className="btn-image" />
            {device.name}
          </button>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default WideExits;
