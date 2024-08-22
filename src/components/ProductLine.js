// ProductLine.js
import React from 'react';
import './style/ProductLine.css';
import exitDevicesImg from '../images/Rim Exit (8800).png'; // Adjust path
import mortiseImg from '../images/Mortise Lock.png'; // Adjust path
import boredLocksImg from '../images/Bored Lock.png'; // Adjust path
import cylindersImg from '../images/Cylinders.png'; // Adjust path

function ProductLine() {
  return (
    <div className="product-line">
      <button className="btn">
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
  );
}

export default ProductLine;
