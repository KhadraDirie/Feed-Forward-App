import React from 'react';

function Home() {
  return (
    <div className="bg-green-500 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-12">
          At Feed Forward, we're on a mission to make a difference by reducing food waste and helping those in need. Join us in creating a brighter and more sustainable future, one meal at a time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Donate Excess Food</h3>
            <p className="text-gray-700">
              Connect with local charities and make a meaningful impact by donating surplus food.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Reduce Food Waste</h3>
            <p className="text-gray-700">
              Help protect our environment by minimizing food waste and promoting sustainability.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Track Food Inventory</h3>
            <p className="text-gray-700">
              Easily manage your food items, expiration dates, and quantities to stay organized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

