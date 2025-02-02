import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="NFT Market Logo" className="h-8 w-auto" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button id="menu-toggle" className="text-white focus:outline-none">
          &#9776;
        </button>
      </div>

      {/* Navigation Links */}
      <ul id="menu" className="hidden md:flex space-x-6 text-gray-400 md:items-center">
        <li>
          <a href="#" className="hover:text-white">Auctions</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Roadmap</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Discover</a>
        </li>
        <li>
          <a href="#" className="hover:text-white">Community</a>
        </li>
        
        {/* Buttons in Mobile Menu */}
        <div className="flex flex-col md:hidden space-y-4 mt-4">
          <button className="border border-gray-400 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:border-white">
            Contact
          </button>
          <button className="bg-indigo-600 px-4 py-2 rounded-lg text-white hover:bg-indigo-500">
            My account
          </button>
        </div>
      </ul>

      {/* Buttons for Desktop */}
      <div className="hidden md:flex space-x-4">
        <button className="border border-gray-400 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:border-white">
          Contact
        </button>
        <button className="bg-indigo-600 px-4 py-2 rounded-lg text-white hover:bg-indigo-500">
          My account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// Add the following script in your app's main file or useEffect hook for menu toggle
// document.getElementById('menu-toggle').addEventListener('click', () => {
//   const menu = document.getElementById('menu');
//   menu.classList.toggle('hidden');
// });
