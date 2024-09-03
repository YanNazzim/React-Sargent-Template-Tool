import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./style/Stile.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import narrowMortise from "../images/NarrowMortiseExit (8300).png";
import narrowCVR from "../images/NarrowCVR.png";
import narrowRim from "../images/Narrow Rim Exit (8500).png";
import { exitDeviceTemplates } from '../data/templateData';
import narrowCVR9400 from "../images/narrowCVR 9400.png";

function Narrow() {
  const navigate = useNavigate();

  const handleButtonClick = (series) => {
    navigate('/display-templates', { state: { category: 'Exit Devices', series, templates: exitDeviceTemplates[series] } });
};

  return (
    <>
      <Header />
      <div className="stile-page">
        <button className="btn" onClick={() => handleButtonClick("8300")}>
          <img
            src={narrowMortise}
            alt="Narrow Rim Exit 8300"
            className="btn-image"
          />
          8300 N Mortise Exit
        </button>
        <button className="btn">
          <img
            src={narrowCVR}
            alt="Narrow Rim Exit 8400"
            className="btn-image"
          />
          8400 N CVR Exit
        </button>
        <button className="btn">
          <img
            src={narrowRim}
            alt="Narrow Rim Exit 8300"
            className="btn-image"
          />
          8500 N Rim Exit
        </button>
        <button className="btn">
          <img
            src={narrowCVR9400}
            alt="Narrow CVR Exit 9400"
            className="btn-image"
          />
          9400 N CVR Exit
        </button>
        <Footer />
      </div>
    </>
  );
}

export default Narrow;
