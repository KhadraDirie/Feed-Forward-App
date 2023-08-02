import React from 'react';
import heroImage from '../../img/hero.jpg';

function Hero() {
  return (
    <div className="relative">
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            Feed Forward: Nourishing Tomorrow, Reducing Food Waste Today
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;





