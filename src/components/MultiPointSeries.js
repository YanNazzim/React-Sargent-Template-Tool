import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './style/Stile.css';
import { Images } from '../images/images'; // Import the Images object


function MultiPointSeries() {
    const navigate = useNavigate();

    const seriesList = [
        { id: "Thermal Pin", name: "Thermal Pins", image: Images.ThermalPin683, series: "Thermal Pin" },
        { id: "7000", name: "7000 Series", image: Images.MP7000, series: "7000" },
        { id: "6100", name: "FM6100 Series", image: Images.MP7000, series: "6100" },
        { id: "7300", name: "7300 Series", image: Images.MP7000, series: "7300" },
      ];

    function handleButtonClick(series, id) {
        navigate("/display-templates", {
          state: {
            category: "Multi Points",
            series,
            id, // Passing the correct series id
          },
        });
      }
      return (
        <div className="stile-page">
          {seriesList.length > 0 ? (
            seriesList.map((item) => (
              <button
                key={item.id}
                className="btn"
                onClick={() => handleButtonClick(item.series, item.id)}
              >
                <img
                  className="btn-image"
                  src={item.image}
                  alt={`${item.name} lock`}
                />
                {item.name}
              </button>
            ))
          ) : (
            <p>No series available at the moment.</p>
          )}
        </div>
      );
}

export default MultiPointSeries