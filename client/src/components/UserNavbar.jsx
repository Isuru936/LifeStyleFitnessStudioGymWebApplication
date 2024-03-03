// NavigationBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';

function NavigationBar() {
  return (
    <div className="bg-white h-16 flex items-center justify-between px-6 font-sans"> {/* Apply Tailwind CSS classes and change font style */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-auto mr-4" /> {/* Your logo */}
        
        {/* Rest of the navigation items */}
      </div>
      <div className="flex items-center">
        {/* Navigation items with adjusted spacing and hover effects */}
        <span className="text-black text-base mr-6 hover:text-gray-500 transition duration-300">Payments</span> {/* Adjusted margin and hover effect */}
        <span className="text-black text-base mr-6 hover:text-gray-500 transition duration-300">About Us</span> {/* Adjusted margin and hover effect */}
        <span className="text-black text-base mr-6 hover:text-gray-500 transition duration-300">Dashboard</span> {/* Text link for Dashboard with hover effect */}
        <span className="text-black text-base mr-6 hover:text-gray-500 transition duration-300">My Workout Plan</span> {/* Text link for My Workout Plan with hover effect */}
        <span className="text-black text-base mr-6 hover:text-gray-500 transition duration-300">Diet Plan</span> {/* Text link for Diet Plan with hover effect */}
        <FontAwesomeIcon icon={faBell} className="text-black text-base cursor-pointer mr-6 hover:text-gray-500 transition duration-300" /> {/* Bell icon with hover effect */}
        <FontAwesomeIcon icon={faUser} className="text-black text-base cursor-pointer hover:text-gray-500 transition duration-300" /> {/* Profile picture icon with hover effect */}
      </div>
    </div>
  );
}

export default NavigationBar;
