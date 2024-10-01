import { useNavigate } from "react-router-dom";
import React from "react";
import "../components/style/Stile.css";
import SSL1 from '../images/Aux SSL1 Spring Latch.png';
import DB8200 from '../images/Aux 8200 Deadbolt.png'
import DB4870 from '../images/Aux 4870 Deadbolt.png'
import DB480 from '../images/Aux 480 Deadbolt.png'
import DB460 from '../images/Aux 460 Deadbolt.png'

function AuxLockSeries() {
  const navigate = useNavigate();

  // Array holding the series data
  const seriesList = [
    { id: "SSL1", name: "SSL1 Spring Latch", image: SSL1, series: "SSL1" },
    { id: "8200 Deadbolt", name: "8200 Deadbolt", image: DB8200, series: "8200" },
    { id: "9200 Deadbolt", name: "9200 Deadbolt", image: DB8200, series: "9200" },
    { id: "4870 Deadbolt", name: "4870 Deadbolt", image: DB4870, series: "4870" },
    { id: "480 Deadbolt", name: "480 Deadbolt (Grade 1)", image: DB480, series: "480" },
    { id: "460 Deadbolt", name: "460 Deadbolt (Grade 2)", image: DB460, series: "460" },
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
