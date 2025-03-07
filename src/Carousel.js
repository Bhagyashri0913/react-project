import React, { useState } from "react";
import "./Carousel.css";
import img1 from "./images/arabian-ranches-ii.jpg";
import img2 from "./images/arabian-ranches.jpg";
import img3 from "./images/downtown-dubai.jpg";
import img4 from "./images/dubai-hills-estate.jpg";
import img5 from "./images/dubai-marina.png";
import img6 from "./images/emirates-living.jpg";

  const cards = [
    {
      id: 1,
      title: "Arabian Ranches",
      image: img1,
    },
    {
      id: 2,
      title: "Arabian Ranches II",
      image: img2,
    },
    {
      id: 3,
      title: "Downtown Dubai",
      image: img3,
    },
    {
      id: 4,
      title: "Dubai Hills Estate",
      image: img4,
    },
    {
      id: 5,
      title: "Dubai Marina",
      image: img5,
    },
    {
      id: 6,
      title: "Emirates Living",
      image: img6,
    },
  ];
  
  function Carousel ()  {
    const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerSlide) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - itemsPerSlide : prevIndex - itemsPerSlide
    );
  };
  
    return (
      <>
      <h1 className="title2">OUR SERVICES</h1>
      <div className="carousel-container">
      <button className="carousel-button left" onClick={prevSlide}>&lt;</button>
      <div className="carousel-slide">
        {cards.slice(currentIndex, currentIndex + itemsPerSlide).map((card, index) => (
          <div key={card.id}>
          <img src={card.image} alt={`carousel ${index}`} className="carousel-image" />
          <h2 className="carousel-title">{card.title}</h2>
          </div>
        ))}
      </div>
      <button className="carousel-button right" onClick={nextSlide}>&gt;</button>
    </div>
      </>
    );
  };
  
  export default Carousel;

