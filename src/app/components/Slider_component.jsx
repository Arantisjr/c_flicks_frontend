'use client'
import React, { useState } from 'react';
import '../styles/Slider_component.scss';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import images from '../images/images.js';
import Image from 'next/image';

const Slider_component = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
 
  };

  const prevSlide = () => {
 
  };

  return (
    <div className="slide_main_div">
      <h1 className='trending'>Trending now</h1>
      <div className="image_div">
        <button className="slider_button_left" onClick={prevSlide}>
          <FaAngleLeft />
        </button>
            {images.map((image) => (
              <div className="slider_item" key={image.id}>
                <Image
                  src={image.img}
                  alt={`image ${image.id}`}
                  width={150}
                  height={150}
                />
              </div>
            ))}
     
        <button className="slider_button right" onClick={nextSlide}>
          <FaAngleRight />
        </button>
        </div>
      </div>
  );
};

export default Slider_component;
