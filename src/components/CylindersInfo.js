import React from 'react';
import './style/Cylinders.css';
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
      {/* Title for the cylinder type */}
      <h1>{cylinderDetails.title}</h1>
      <h2 className='ToolTip' dangerouslySetInnerHTML={{ __html: cylinderDetails.tooltip }} />

      {/* Iterate over sections and render each in its own card */}
      <div className="cylinder-cards">
        {cylinderDetails.sections.map((section, index) => (
          <div key={index} className="cylinder-card">
            {/* Heading for the section */}
            <h2>{section.heading}</h2>

            {/* Image for the section */}
            <img src={section.image} alt={section.heading} />

            {/* Texts for the section */}
            {section.texts.map((text, textIndex) => (
              <p key={textIndex}>{text}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CylindersInfo;
