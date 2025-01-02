import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this runs once when component mounts

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${hasScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-16">
        {/* Logo */}
        <img
          src="/src/images/logo/weekend_logo.png"
          alt="logo"
          className="h-20"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          <a href="/" className="hover:text-red-500 pt-2">Home</a>
          <a href="/about" className="hover:text-red-500 pt-2">About Us</a>
          <a href="/services" className="hover:text-red-500 pt-2">Services</a>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Login
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Register
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col space-y-4 text-gray-600 px-4 py-6">
            <a href="/" className="hover:text-red-500">Home</a>
            <a href="/about" className="hover:text-red-500">About Us</a>
            <a href="/services" className="hover:text-red-500">Services</a>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full text-left">
              Login
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full text-left">
              Register
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;