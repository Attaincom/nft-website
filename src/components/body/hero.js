import React from "react";
import Frame from "../assets/Frame.png";
import Frame1 from "../assets/Frame(1).png";
import Vector from '../assets/Vector.png';
import Vector1 from '../assets/Vector(1).png';
import Vector2 from '../assets/Vector(2).png';
import Vector3 from '../assets/Vector(3).png';
import Head from '../assets/head1.png';
import Head1 from '../assets/head2.png';
import Head2 from '../assets/head3.png';
import Head3 from '../assets/head4.png';
import Head4 from '../assets/head5.png';
import Head5 from '../assets/head6.png';

const Hero = () => {
  // Array of images for the animated background
  const images = [Head, Head1, Head2, Head3, Head4, Head5];

  return (
    <section className="relative h-[700px] bg-[#0D0F23] flex flex-col items-center justify-center text-white text-center px-6">
      {/* Background Animated NFTs */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="absolute w-full h-full">
          {images.map((image, i) => (
            <div
              key={i}
              className="absolute w-16 h-16 rounded-xl animate-pulse"
              style={{
                top: `${Math.random() * 70}%`, // Random vertical positioning in the top 40% of the section height
                // Place half of the images on the left (0% to 25%) and half on the right (75% to 100%)
                left: i < 3 ? `${Math.random() * 30}%` : `${60 + Math.random() * 30}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {/* Use image instead of div for the animation */}
              <img
                src={image}
                alt={`NFT Animation ${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h3 className="text-sm uppercase tracking-widest opacity-50">
          Non Fungible Tokens
        </h3>
        <h1 className="text-4xl md:text-8xl font-bold mt-4">
          A new NFT <img src={Frame} alt="NFT" className="inline-block h-auto sm:h-[4xl]" /> <br /> 
          <img src={Frame1} alt="Experience" className="inline-block h-auto sm:h-[4xl]" />
          Experience
        </h1>
        <p className="text-lg mt-4 opacity-70">Discover, collect and sell</p>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-full px-4 py-2 mt-6 w-[643px] h-[50px] max-w-md">
          <input
            type="text"
            placeholder="Items, collections and creators"
            className="flex-1 outline-none text-black px-2"
          />
          <select className="bg-transparent text-gray-500">
            <option>Category</option>
          </select>
          <button className="text-purple-500 px-2">
            🔍
          </button>
        </div>

        {/* Partner Logos */}
        <div className="flex justify-center space-x-8 mt-8 opacity-60">
          <img src={Vector} alt="Ritter SPORT" className="h-6" />
          <img src={Vector1} alt="Nike" className="h-6" />
          <img src={Vector2} alt="Adidas" className="h-6" />
          <img src={Vector3} alt="New World" className="h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
