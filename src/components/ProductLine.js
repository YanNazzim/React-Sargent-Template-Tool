import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/ProductLine.css';
import exitDevicesImg from '../images/Rim Exit (8800).png'; 
import mortiseImg from '../images/Mortise Lock.png'; 
import boredLocksImg from '../images/Bored Lock.png'; 
import cylindersImg from '../images/Cylinders.png'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

function ProductLine() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/exitSeries'); // Navigate to Stile component
  };

  return (
    <>
      <Header />
      <div className="product-line">
        <button className="btn" onClick={handleButtonClick}>
          <img src={exitDevicesImg} alt="Exit Devices" className="btn-image" />
          Exit Devices
        </button>
        <button className="btn">
          <img src={mortiseImg} alt="Mortise" className="btn-image" />
          Mortise
        </button>
        <button className="btn">
          <img src={boredLocksImg} alt="Bored Locks" className="btn-image" />
          Bored Locks
        </button>
        <button className="btn">
          <img src={cylindersImg} alt="Cylinders" className="btn-image" />
          Cylinders
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ProductLine;
