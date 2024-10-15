import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Images } from '../images/images';

function Cylinders() {
  const navigate = useNavigate();

  // Function to handle navigation to CylindersInfo with type
  const handleCylinderClick = (type) => {
    navigate(`/cylinders-info/${type}`);
  };

  return (
    <div className="stile-page">
      <button className="btn" onClick={() => handleCylinderClick('Rim')}>
        <img src={Images.CylRim} className="btn-image" alt="Rim Cylinder" />
        Rim Cylinders (#34)
      </button>
      <button className="btn" onClick={() => handleCylinderClick('Mortise')}>
        <img src={Images.CylMortise} className="btn-image" alt="Mortise Cylinder" />
        Mortise Cylinders
      </button>
      <button className="btn" onClick={() => handleCylinderClick('SFIC')}>
        <img src={Images.CylSFIC} className="btn-image" alt="SFIC Cylinder" />
        SFIC (70-)
      </button>
      <button className="btn" onClick={() => handleCylinderClick('LFIC')}>
        <img src={Images.CylLFIC} className="btn-image" alt="LFIC Cylinder" />
        LFIC (60-)
      </button>
      <button className="btn" onClick={() => handleCylinderClick('Bored')}>
        <img src={Images.CylBored} className="btn-image" alt="Bored Cylinder" />
        Bored/Aux Cylinders (KIL/KIK)
      </button>
      <button className="btn" onClick={() => handleCylinderClick('Degree')}>
        <img src={Images.CylDegree} className="btn-image" alt="Degree Cylinder" />
        DG1-, DG2- & DG3- Series Mortise Cylinders <span className="small-text">(Degree)</span>
      </button>
      <button className="btn" onClick={() => handleCylinderClick('KESO')}>
        <img src={Images.CylKESOF1} className="btn-image" alt="KESO Cylinder" />
        KESO F1/KESO (Old Style)
      </button>
    </div>
  );
}

export default Cylinders;
