import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/ProductLine.css';
import exitDevicesImg from '../images/Rim Exit (8800).png'; 
import mortiseImg from '../images/Mortise Lock.png'; 
import boredLocksImg from '../images/Bored Lock.png'; 
import cylindersImg from '../images/Cylinders.png'; 
import auxLocksImg from '../images/AuxiliaryLocks.png';

function ProductLine() {
  const navigate = useNavigate();

  // Unified click handler
  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="product-line">
      <button className="btn" onClick={() => handleButtonClick('/exitSeries')}>
        <img src={exitDevicesImg} alt="Exit Devices" className="btn-image" />
        Exit Devices
      </button>
      <button className="btn" onClick={() => handleButtonClick('/mortiseSeries')}>
        <img src={mortiseImg} alt="Mortise" className="btn-image" />
        Mortise
      </button>
      <button className="btn" onClick={() => handleButtonClick('/boredSeries')}>
        <img src={boredLocksImg} alt="Bored Locks" className="btn-image" />
        Bored Locks
      </button>
      <button className="btn" onClick={() => handleButtonClick('/auxiliaryLocksSeries')}>
        <img src={auxLocksImg} alt="Auxiliary Locks" className="btn-image" />
        Auxiliary Locks
      </button>
      <button className="btn" onClick={() => handleButtonClick('/cylinders')}>
        <img src={cylindersImg} alt="Cylinders" className="btn-image" />
        Cylinders
      </button>
    </div>
  );
}

export default ProductLine;
