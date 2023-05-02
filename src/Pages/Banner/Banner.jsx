import React from 'react';

const Banner = () => {
     return (
          <div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <img src="https://eatstreet.imgix.net/restaurant_highlight_images/97edea41fc4ffb4a25bbf61e7120132372eb7" className="w-full h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src="https://goldbelly.imgix.net//uploads/collection/main_image/1486/mexican-food.79a592703330f2660197b7129b97bb9f.jpg" className="w-full h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src="https://goldbelly.imgix.net//uploads/collection/main_image/1486/mexican-food.79a592703330f2660197b7129b97bb9f.jpg" className="w-full h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://goldbelly.imgix.net//uploads/collection/main_image/1486/mexican-food.79a592703330f2660197b7129b97bb9f.jpg" className="w-full h-[500px]" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
          </div>
     );
};

export default Banner;