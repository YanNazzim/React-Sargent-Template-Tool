import { useNavigate } from "react-router-dom";
import React from "react";
import "../components/style/Stile.css";
import SSL1 from '../images/Aux SSL1 Spring Latch.png';
import DB8200 from '../images/Aux 8200 Deadbolt.png'

function AuxLockSeries() {
  const navigate = useNavigate();

  // Array holding the series data
  const seriesList = [
    { id: "SSL1", name: "SSL1 Spring Latch", image: SSL1, series: "SSL1" },
    { id: "8200 Deadbolt", name: "8200 Deadbolt", image: DB8200, series: "8200" },
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
