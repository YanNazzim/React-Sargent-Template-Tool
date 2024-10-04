import React from 'react';
import { useParams } from 'react-router-dom';
import { CylindersData } from '../data/CylindersData'; // This is your data file for cylinder details

function CylindersInfo() {
  const { type } = useParams(); // Get the cylinder type from URL params

  // Retrieve the cylinder details from CylindersData based on the selected type
  const cylinderDetails = CylindersData[type];

  if (!cylinderDetails) {
    return <div>No details available for this cylinder type.</div>;
  }

  return (
    <div className="cylinder-info">
      <h1>{cylinderDetails.title}</h1>
      <img src={cylinderDetails.image} alt={cylinderDetails.title} />
      <p>{cylinderDetails.description}</p>
    </div>
  );
}

export default CylindersInfo;
