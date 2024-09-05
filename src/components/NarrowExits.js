import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Device images
import narrowMortise from "../images/NarrowMortiseExit (8300).png";
import narrowCVR from "../images/NarrowCVR.png";
import narrowRim from "../images/Narrow Rim Exit (8500).png";
import narrowCVR9400 from "../images/narrowCVR 9400.png";
import narrowPE80Mortise from '../images/narrowPE80Mortise.png';

// Define Narrow80, Narrow90, and PE80 devices
const narrow80Devices = [
  { id: "8300", name: "8300 N Mortise Exit", img: narrowMortise },
  { id: "8400", name: "8400 N CVR Exit", img: narrowCVR },
  { id: "8500", name: "8500 N Rim Exit", img: narrowRim }
];

const narrowPE80Devices = [
  { id: "PE8300", name: "PE8300 Narrow Mortise Exit", img: narrowPE80Mortise }
];

const narrow90Devices = [
  { id: "9400", name: "9400 N CVR Exit", img: narrowCVR9400 },
];

function NarrowExits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series } = location.state || {}; // Get series from passed state

  // Determine the correct set of devices to display based on the series
  const devices = series === "90" ? narrow90Devices 
                : series === "PE80" ? narrowPE80Devices 
                : narrow80Devices;

  const handleButtonClick = (id) => {
    navigate('/display-templates', { state: { category: 'Exit Devices', series: `Narrow${series}`, id } });
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

export default NarrowExits;
