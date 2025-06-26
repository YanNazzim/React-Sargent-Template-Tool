import React, { useEffect } from "react"; // Import useEffect
import { useNavigate, useLocation } from "react-router-dom";
import "./style/Stile.css";

// Device images
import { Images } from "../images/images";

// Define Narrow80, Narrow90, and PE80 devices
const narrow80Devices = [
  { device: "8300", name: "8300 N Mortise Exit", img: Images.narrowMortise8300 },
  { device: "MD8400", name: "MD8400 N CVR Exit", img: Images.narrowCVR9400 },
  { device: "AD8400", name: "AD8400 N CVR Exit", img: Images.narrowCVR9400 },
  { device: "8500", name: "8500 N Rim Exit", img: Images.narrowRimExit8500 },
  { device: "AD8500", name: "AD8500 N Rim Exit", img: Images.narrowRimExit8500 },
];

const narrowPE80Devices = [
  { device: "PE8300", name: "PE8300 Narrow Mortise Exit", img: Images.narrowPE80Mortise },
  { device: "PE8400", name: "PE8400 Narrow CVR Exit", img: Images.narrowPECVR },
  { device: "PE8500", name: "PE8500 Narrow Rim Exit", img: Images.narrowPE8500 },
];

const narrow90Devices = [
  { device: "9400", name: "9400 N CVR Exit", img: Images.narrowCVR9400 },
];

function NarrowExits() {
  const navigate = useNavigate();
  const location = useLocation();
  const { series } = location.state || {}; // Get series from passed state

  // Redirect to home if series is not available (e.g., on refresh)
  useEffect(() => {
    if (!series) {
      navigate("/");
    }
  }, [series, navigate]);

  // Determine the correct set of devices to display based on the series
  const devices =
    series === "90"
      ? narrow90Devices
      : series === "PE80"
      ? narrowPE80Devices
      : narrow80Devices;

  const handleButtonClick = (device) => {
    navigate("/display-templates", {
      state: {
        category: "Exit Devices",
        series: `Narrow${series}`,
        device, // Pass the device name directly
      },
    });
  };

  return (
    <>
      <div className="stile-page">
        {devices.map((device) => (
          <button
            key={device.device}
            className="btn"
            onClick={() => handleButtonClick(device.device)}
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