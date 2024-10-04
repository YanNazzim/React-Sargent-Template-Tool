import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";

// Device images
import { Images } from '../images/images'


// Define Narrow80, Narrow90, and PE80 devices
const narrow80Devices = [
  { id: "8300", name: "8300 N Mortise Exit", img: Images.narrowMortise8300 }, // Updated to match correct Images key
  { id: "MD8400", name: "MD8400 N CVR Exit", img: Images.narrowCVR9400 }, // Updated to match correct Images key
  { id: "AD8400", name: "AD8400 N CVR Exit", img: Images.narrowCVR9400 }, // Same image as MD8400
  { id: "8500", name: "8500 N Rim Exit", img: Images.narrowRimExit8500 }, // Updated to match correct Images key
  { id: "AD8500", name: "AD8500 N Rim Exit", img: Images.narrowRimExit8500 }, // Same image as 8500
];

const narrowPE80Devices = [
  { id: "PE8300", name: "PE8300 Narrow Mortise Exit", img: Images.narrowPE80Mortise }, // Correct key
  { id: "PE8400", name: "PE8400 Narrow CVR Exit", img: Images.narrowPECVR }, // Correct key
  { id: "PE8500", name: "PE8500 Narrow Rim Exit", img: Images.narrowPE8500 }, // Correct key
];

const narrow90Devices = [
  { id: "9400", name: "9400 N CVR Exit", img: Images.narrowCVR9400 }, // Correct key
];

function NarrowExits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series } = location.state || {}; // Get series from passed state

  // Determine the correct set of devices to display based on the series
  const devices =
    series === "90"
      ? narrow90Devices
      : series === "PE"
      ? narrowPE80Devices
      : narrow80Devices;

  const handleButtonClick = (id) => {
    navigate("/display-templates", {
      state: { category: "Exit Devices", series: `Narrow${series}`, id },
    });
  };

  return (
    <>
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
    </>
  );
}

export default NarrowExits;
