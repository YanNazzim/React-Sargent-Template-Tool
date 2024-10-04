// AuxLockSeries.js
import { useNavigate } from "react-router-dom";
import React from "react";
import "../components/style/Stile.css";
import { Images } from '../images/images'; // Import the Images object

function AuxLockSeries() {
  const navigate = useNavigate();

  // Array holding the series data
  const seriesList = [
    { id: "SSL1", name: "SSL1 Spring Latch", image: Images.SSL1, series: "SSL1" },
    { id: "8200 Deadbolt", name: "8200 Deadbolt", image: Images.Aux8200, series: "8200" },
    { id: "9200 Deadbolt", name: "9200 Deadbolt", image: Images.Aux8200, series: "9200" }, // If this shares the same image
    { id: "4870 Deadbolt", name: "4870 Deadbolt", image: Images.Aux4870, series: "4870" },
    { id: "480 Deadbolt", name: "480 Deadbolt (Grade 1)", image: Images.Aux480, series: "480" },
    { id: "460 Deadbolt", name: "460 Deadbolt (Grade 2)", image: Images.Aux460, series: "460" },
  ];

  function handleButtonClick(series, id) {
    navigate("/display-templates", {
      state: {
        category: "Auxiliary Locks",
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
            aria-label={`Navigate to ${item.name}`}
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

export default AuxLockSeries;
