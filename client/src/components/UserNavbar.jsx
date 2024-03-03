import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/logo.png';

function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-white h-16 flex items-center justify-between px-6 font-sans relative z-50">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-auto mr-4" />
        
        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden text-black text-base cursor-pointer mr-4 hover:text-gray-500 transition duration-300"
          onClick={toggleMenu}
        />
      </div>
      <div className={`lg:hidden ${showMenu ? 'block' : 'hidden'} absolute top-16 left-0 bg-white w-full z-50`}>
        <div className="flex flex-col items-center">
          <Link to="/payments" className="text-black text-base mr-6 mb-4 hover:text-gray-400 hover:underline transition duration-300 block">Payments</Link>
          <Link to="/about" className="text-black text-base mr-6 mb-4 hover:text-gray-400 hover:underline transition duration-300 block">About Us</Link>
          <Link to="/dashboard" className="text-black text-base mr-6 mb-4 hover:text-gray-400 hover:underline transition duration-300 block">Dashboard</Link>
          <Link to="/user-exercises" className="text-black text-base mr-6 mb-4 hover:text-gray-400 hover:underline transition duration-300 block">My Workout Plan</Link>
          <Link to="/dietplan" className="text-black text-base mr-6 mb-4 hover:text-gray-400 hover:underline transition duration-300 block">Diet Plan</Link>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <Link to="/payments" className="text-black text-base mr-6 hover:text-gray-400 hover:underline transition duration-300">Payments</Link>
        <Link to="/about" className="text-black text-base mr-6 hover:text-gray-400 hover:underline transition duration-300">About Us</Link>
        <Link to="/dashboard" className="text-black text-base mr-6 hover:text-gray-400 hover:underline transition duration-300">Dashboard</Link>
        <Link to="/user-exercises" className="text-black text-base mr-6 hover:text-gray-400 hover:underline transition duration-300">My Workout Plan</Link>
        <Link to="/dietplan" className="text-black text-base mr-6 hover:text-gray-400 hover:underline transition duration-300">Diet Plan</Link>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBell} className="text-black text-base cursor-pointer mr-6 hover:text-gray-400 transition duration-300" />
        <FontAwesomeIcon icon={faUser} className="text-black text-base cursor-pointer hover:text-gray-400 transition duration-300" />
      </div>
    </div>
  );
}

export default NavigationBar;
