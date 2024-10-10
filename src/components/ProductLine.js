import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/Stile.css';
import { Images } from '../images/images'; // Import Images object from images.js

function ProductLine() {
  const navigate = useNavigate();

  // Unified click handler
  const handleButtonClick = (route) => {
    navigate(route);
  };

  return (
    <div className="stile-page">
      <button className="btn" onClick={() => handleButtonClick('/exitSeries')}>
        <img src={Images.wideStileRim} alt="Exit Devices" className="btn-image" />
        <span>Exit Devices</span>  {/* Added span to clarify the text */}
      </button>
      <button className="btn" onClick={() => handleButtonClick('/multiPointSeries')}>
        <img src={Images.MP7000} alt="Auxiliary Locks" className="btn-image" />
        <span>Multipoint Locks</span>
      </button>
      <button className="btn" onClick={() => handleButtonClick('/mortiseSeries')}>
        <img src={Images.Mortise8200} alt="Mortise" className="btn-image" />
        <span>Mortise</span>
      </button>
      <button className="btn" onClick={() => handleButtonClick('/boredSeries')}>
        <img src={Images.BoredLock} alt="Bored Locks" className="btn-image" />
        <span>Bored Locks</span>
      </button>
      <button className="btn" onClick={() => handleButtonClick('/auxiliaryLocksSeries')}>
        <img src={Images.AuxiliaryLocks} alt="Auxiliary Locks" className="btn-image" />
        <span>Auxiliary Locks</span>
      </button>
      <button className="btn" onClick={() => handleButtonClick('/cylinders')}>
        <img src={Images.CylMortise} alt="Cylinders" className="btn-image" />
        <span>Cylinders</span>
      </button>
    </div>
  );
}

export default ProductLine;
