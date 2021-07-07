import React, {useEffect, useState} from 'react';
import sliderImage from './sliderImage.js';
import Arrows from './Arrows.js';
import Dots from './Dots.js';
import SliderContent from './SliderContent.js';
import './slider.css';

const len = sliderImage.length - 1;

export function Slider(){
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return(
    <div className="slider-container carousel-fade">
      <SliderContent activeIndex={activeIndex}/>
      <Arrows 
      prevSlide={() => 
        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
      }
      nextSlide={() => 
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
      }
      />
      <Dots 
      activeIndex={activeIndex} 
      onclick={(activeIndex) => setActiveIndex(activeIndex)}/>
    </div>
  );
}

