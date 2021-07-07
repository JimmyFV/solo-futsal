import React from 'react';
import sliderImage from './sliderImage.js';

function SliderContent(props){
    return(
        <section>
            {sliderImage.map((slide, index) => (
                <div 
                key={index}
                className={index === props.activeIndex ? "slides active" : "inactive"}
                >
                  <img className='slide-image' src={slide.image} alt="" />
                  {/* <h3 className="slide-title">{slide.title}</h3>
                  <p className="slide-text">{slide.description}</p>  */}
                  <div className="container pt-5">
					<div className="row align-items-center pt-5">
						<div className="col">
							<div className="col-12 col-lg-4 pt-5 mt-3">
								<h1 className="display-5 text-white">Obtené tu pizarra personalizada</h1>
								<p className="text-white">
									Explorá la variedad de nuestras pizarras disponibles
								</p>
								<button className="btn btn-warning btn-lg">¡Obtenela ya!</button>
							</div>
						</div>
					</div>
				</div>
                </div>
            ))}
        </section>
    );
}

export default SliderContent