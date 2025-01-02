import React from 'react';

const TopChefs = () => {
  const chefs = Array(6).fill({ name: 'Chef Name', img: '/src/images/landing/chef.png' });

  return (
    <section
      className="relative bg-gray-100 py-12"
      style={{
        backgroundImage: "url('/src/images/landing/landing2.png')", // Path to your image
        backgroundSize: 'cover', // Ensures the background image covers the whole section
        backgroundPosition: 'center', // Centers the image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-3xl lg:text-4xl font-bold text-center text-white mb-8">Our Top Chefs</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {chefs.map((chef, index) => (
            <div key={index} className="text-center">
              <img
                src={chef.img}
                alt={chef.name}
                className="w-32 h-32 rounded-full object-cover mx-auto"
              />
              <h4 className="text-lg font-bold mt-4 text-white">{chef.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopChefs;
