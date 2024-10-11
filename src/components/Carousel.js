import React, { useState } from 'react';
import './style/HeaderFooter.css';

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            <h2 className="box-title">{item.title}</h2>
            <img src={item.image} alt={item.title} className="box" />
            <p>Functions: {item.functions}</p>
            <a href={item.link}>{item.text}</a>
          </div>
        ))}
      </div>

      {/* Buttons for desktop navigation */}
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
}

export default Carousel;
