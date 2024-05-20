import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselComponent.css';
import slide1 from './slide1.jpg';
import slide4 from './slide4.jpg';
import slide3 from './slide3.jpg';

function CarouselComponent() {
  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={slide1} alt="Slide 1" />
        </div>
        <div>
          <img src={slide4} alt="Slide 2" />
        </div>
        <div>
          <img src={slide3} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
