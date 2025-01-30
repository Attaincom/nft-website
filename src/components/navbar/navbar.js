import React from "react";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="NFT Market Logo" className="h-8 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-400">
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
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
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
