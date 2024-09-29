import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/Stile.css";

// Import all the images
import Bored11 from "../images/Bored 11 Line.png";
import Bored10X from "../images/Bored 10x Line.png";
import Bored8X from "../images/Bored 8x Line.png";
import Bored7Line from "../images/Bored 7 Line.png";
import Bored6500 from "../images/Bored 6500 Series.png";
import Bored6Line from "../images/Bored 6 Line.png";
import BoredDL from "../images/Bored DL Series.png";

function BoredSeries() {
  const navigate = useNavigate();

  // Array holding the series data
  const seriesList = [
    { id: "11 Line", name: "11 Line", image: Bored11, series: "11 Line" },
    { id: "10X Line", name: "10X Line", image: Bored10X, series: "10X Line" },
    { id: "8X Line", name: "8X Line", image: Bored8X, series: "8X Line" },
    { id: "7 Line", name: "7 Line", image: Bored7Line, series: "7 Line" },
    {
      id: "6500 Series",
      name: "6500 Series",
      image: Bored6500,
      series: "6500 Series",
    },
    { id: "6 Line", name: "6 Line", image: Bored6Line, series: "6 Line" },
    { id: "DL Series", name: "DL Series", image: BoredDL, series: "DL Series" },
  ];

  function handleButtonClick(series, id) {
    navigate("/display-templates", {
      state: {
        category: "Bored Locks",
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

export default BoredSeries;
