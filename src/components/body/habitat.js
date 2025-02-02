import React from "react";
import BabyIcon from "../assets/babyion.png";
import DocumentIcon from "../assets/hab1.png";
import CameraIcon from "../assets/hab2.png";

const Habitat = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-black text-white p-6 md:p-12 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-center lg:justify-start">
        <img
          src={BabyIcon}
          alt="3D Emoji with Paper Plane"
          className="w-full max-w-sm"
        />
      </div>
      
      {/* Right Side - Text Content */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        <p className="text-blue-400 uppercase text-sm tracking-wide">Overline</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Habitant tristique aliquam in vel scelerisque
        </h1>
        <p className="text-gray-400 text-base md:text-lg">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        
        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col items-center lg:items-start gap-4">
            <img
              src={DocumentIcon}
              alt="Document Icon"
              className="w-10 h-10"
            />
            <div>
              <p className="font-semibold text-lg mb-1">Sollicitudin sapien</p>
              <p className="text-sm text-gray-400">Cursus fermentum</p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <img
              src={CameraIcon}
              alt="Camera Icon"
              className="w-10 h-10"
            />
            <div>
              <p className="font-semibold text-lg mb-1">Pulvinar metus</p>
              <p className="text-sm text-gray-400">Nunc sed</p>
            </div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold">Get started</button>
          <button className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Habitat; 
