import React from 'react';

export default function About() {
  return (
    <div id="about" className="py-12 bg-brown-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">About FeedForward</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Welcome to FeedForward, your simple solution to reducing food waste and sharing abundance with your local community.
          Our app connects generous individuals like you with nearby charities, making the process of donating surplus food convenient and impactful.
        </p>
      </div>
      <div className="container mx-auto text-center mt-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-800">Partnerships That Matter</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We're proud to partner with local charities and organizations that share our vision. Through these partnerships, we connect your generous donations directly to those who need it most.
          Together, we're creating a network of positive change that spans across neighborhoods and communities.
        </p>
      </div>
    </div>
  );
}
