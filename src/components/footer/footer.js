import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-8 flex flex-col justify-between md:h-[397px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
        {/* Left Section - Logo and Links */}
        <div className="flex flex-col justify-between items-start">
          <div>
            <div className="flex items-center mb-4">
              <img src={Logo} alt="NFT Market Logo" className="h-8 w-auto" />
              <span className="ml-2 text-lg font-semibold">NFT Market</span>
            </div>
          </div>
          <div className="flex space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Support</a>
            <a href="#" className="hover:text-white">Term of service</a>
            <a href="#" className="hover:text-white">License</a>
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex flex-col space-y-3 items-start">
          <a href="#" className="text-white hover:text-gray-400">Auctions</a>
          <a href="#" className="text-white hover:text-gray-400">Roadmap</a>
          <a href="#" className="text-white hover:text-gray-400">Discover</a>
          <a href="#" className="text-white hover:text-gray-400">Community</a>
          <button className="bg-indigo-600 px-4 py-2 rounded-lg text-white hover:bg-indigo-500 mt-4">
            My account
          </button>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6 text-gray-400">
            <a href="#" className="hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Right Section - Description & Newsletter */}
        <div className="flex flex-col justify-between items-start">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis.
          </p>
          <div className="flex items-center bg-gray-900 rounded-lg px-4 py-2 w-full mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Newsletter"
              className="bg-transparent text-white outline-none flex-grow placeholder-gray-500"
            />
            <button className="text-indigo-400 hover:text-indigo-300 font-semibold">
              Sign in
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
