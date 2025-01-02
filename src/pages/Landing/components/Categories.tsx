import React, { useState } from 'react';

const Categories = () => {
  const [activeTab, setActiveTab] = useState('swallows');
  const [isChanging, setIsChanging] = useState(false);

  const categories = {
    swallows: [
      {
        name: 'Banku',
        price: 100,
        description: '40 balls | Customizable',
        img: '/src/images/landing/landing3.png',
      },
    ],
    soups: [
      {
        name: 'Light Soup',
        price: 80,
        description: 'Traditional | Spicy',
        img: '/src/images/landing/landing3.png',
      },
    ],
    stews: [
      {
        name: 'Chicken Stew',
        price: 90,
        description: 'Rich | Flavorful',
        img: '/src/images/landing/landing3.png',
      },
    ],
    grains: [
      {
        name: 'Jollof Rice',
        price: 70,
        description: 'Spicy | Party Size',
        img: '/src/images/landing/landing3.png',
      },
    ],
  };

  // Handle tab changes with animation
  const handleTabChange = (category) => {
    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(category.toLowerCase());
      setIsChanging(false);
    }, 300);
  };

  // Duplicate items to have 8 in each category
  Object.keys(categories).forEach(category => {
    const firstItem = categories[category][0];
    categories[category] = Array(8).fill(firstItem);
  });

  const TabButton = ({ name, isActive }) => (
    <button
      onClick={() => handleTabChange(name)}
      className={`px-6 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1
        ${isActive 
          ? 'bg-red-500 text-white shadow-lg' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
    >
      {name}
    </button>
  );

  return (
    <section className="container mx-auto py-12 px-4 lg:px-16">
      <h3 className="text-3xl lg:text-4xl font-bold text-center mb-8 transform transition-all duration-300">
        Categories
      </h3>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(categories).map((category) => (
          <TabButton
            key={category}
            name={category.charAt(0).toUpperCase() + category.slice(1)}
            isActive={activeTab === category}
          />
        ))}
      </div>

      {/* Tab Content */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-300 transform
        ${isChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {categories[activeTab].map((item, index) => (
          <div 
            key={index} 
            className="rounded-lg shadow-lg bg-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              animation: `fadeIn 0.5s ease-out ${index * 0.1}s`,
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h4 className="text-lg font-bold transition-colors duration-300">{item.name}</h4>
              <p className="text-gray-600 mt-2 transition-colors duration-300">{item.description}</p>
              <p className="text-green-500 font-bold mt-2 transition-colors duration-300">Ghc {item.price}</p>
              <div className="flex space-x-2 mt-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded transition-all duration-300 hover:bg-red-600 hover:shadow-lg transform hover:-translate-y-1">
                  Order Now
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded transition-all duration-300 hover:bg-gray-300 hover:shadow-lg transform hover:-translate-y-1">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Categories;