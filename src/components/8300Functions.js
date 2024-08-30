import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./style/Stile.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Narrow8300() {
  const navigate = useNavigate();

  const handleButtonClickNarrow = () => {
    navigate("/narrow"); // Navigate to Narrow component route
  };

  return (
    <>
      <Header />
      <div className="stile-page">
        <button className="btn" onClick={handleButtonClickNarrow}>
          8300 Mounting Template
        </button>
        <button className="btn" onClick={handleButtonClickNarrow}>
          59- 8300 Delayed Egress Mounting Template
        </button>
        <button className="btn" onClick={handleButtonClickNarrow}>
          8300 Mounting Template
        </button>
        <button className="btn" onClick={handleButtonClickNarrow}>
          8300 Mounting Template
        </button>
        <button className="btn" onClick={handleButtonClickNarrow}>
          8300 Mounting Template
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Narrow8300;
