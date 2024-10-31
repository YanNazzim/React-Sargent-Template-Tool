import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/Stile.css";

// Import all the images
import { Images } from '../images/images'

function BoredSeries() {
  const navigate = useNavigate();

  // Array holding the series data
  const seriesList = [
    { id: "11 Line", name: "11 Line", image: Images.Bored11, series: "11 Line" },
    { id: "10X Line", name: "10X Line", image: Images.Bored10x, series: "10X Line" },
    { id: "KP 10X", name: "KP 10X Line", image: Images.KP10X, series: "KP 10X" },
    { id: "IN 10X", name: "IN 10X Line", image: Images.IN10X, series: "IN 10X" },
    { id: "8X Line", name: "8X Line", image: Images.Bored8x, series: "8X Line" },
    { id: "7 Line", name: "7 Line", image: Images.Bored7, series: "7 Line" },
    {
      id: "6500 Series",
      name: "6500 Series",
      image: Images.Bored6500,
      series: "6500 Series",
    },
    { id: "6 Line", name: "6 Line", image: Images.Bored6, series: "6 Line" },
    { id: "DL Series", name: "DL Series", image: Images.BoredDLSeries, series: "DL Series" },
  ];

  function handleButtonClick(series) {
    navigate("/display-templates", {
      state: {
        category: "Bored Locks",
        series,
        device: series, // Pass the series as the device identifier
      },
    });
  }

  return (
    <div className="stile-page">
            <h2 className="ToolTip">
            Strike Box (WBS) : 77-1141
        </h2>
        <h2 className="ToolTip">
            Strike Screw:  01-1019 x finish
        </h2>
      {seriesList.length > 0 ? (
        seriesList.map((item) => (
          <button
            key={item.id}
            className="btn"
            onClick={() => handleButtonClick(item.series)}
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
