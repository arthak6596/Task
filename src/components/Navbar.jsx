import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after navigation
  };
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white px-4 py-4 flex items-center justify-between border-b relative">
      <div className="flex items-center">
        <img 
          onClick={() => handleNavigation('/')} 
          src="/api/placeholder/180/40" 
          alt="Logo" 
          className="h-8 cursor-pointer" 
        />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <span 
          onClick={() => handleNavigation('/services')} 
          className="text-gray-700 hover:text-Orange cursor-pointer"
        >
          Services
        </span>
        <span 
          onClick={() => handleNavigation('/login')} 
          className="text-gray-700 hover:text-Orange cursor-pointer"
        >
          Sign up / Log in
        </span>
        <button onClick={() => handleNavigation('/become-a-task-performer')} className="bg-orange-500 hover:bg-Orange text-white px-4 py-2 rounded-md">
          Become a 
        </button>
      </div>
      
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        <button 
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? (
            // X icon when menu is open
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu Dropdown with Transition */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg z-50 transform origin-top transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
        }`}
      >
        <div className="flex flex-col py-2">
          <span 
            onClick={() => handleNavigation('/services')} 
            className="text-gray-700 hover:text-Orange cursor-pointer px-4 py-3 border-b"
          >
            Services
          </span>
          <span 
            onClick={() => handleNavigation('/login')} 
            className="text-gray-700 hover:text-Orange cursor-pointer px-4 py-3 border-b"
          >
            Sign up / Log in
          </span>
          
          <div className="px-4 py-3">
            <button  onClick={() => handleNavigation('/become-a-task-performer')}  className="bg-orange-500 hover:bg-Orange text-white px-4 py-2 rounded-md w-full">
              Become a 
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;