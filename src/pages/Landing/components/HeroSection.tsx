import React from 'react';

const HeroSection = () => (
  <section
    className="relative h-screen w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/src/images/landing/landing2.png')", // Path to your image
      backgroundSize: 'cover', // Ensures the background image covers the whole section
      backgroundPosition: 'center', // Centers the image
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Content */}
    <div className="relative z-10 text-center px-6">
      <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
        Hungry? You’re in the right place
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-4 space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          placeholder="Enter delivery address"
          className="border border-gray-300 rounded-md p-3 w-80 sm:w-96 focus:outline-none"
        />
        <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
          Go
        </button>
      </div>
      <p className="mt-4 text-white">Sign in for your recent addresses</p>

      <div>
    <h4 className="text-3xl font-semibold text-white mt-10">Download our app</h4>
    <h5 className="text-lg mt-0 mb-2 text-white">
      Available on both Android and iOS
    </h5>
    <div className='flex justify-center items-center'>
    <img
          src="/src/images/landing/applestore.png"
          alt="logo"
          className="h-17"
        />


<img
          src="/src/images/landing/playstore.png"
          alt="logo"
          className="h-16"
        />


    </div>



  </div>
    </div>
  </section>
);

export default HeroSection;
