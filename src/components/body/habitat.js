import React from "react";
import BabyIcon from "../assets/babyion.png";
import DocumentIcon from "../assets/hab1.png"; // Replace with the path of the document icon image
import CameraIcon from "../assets/hab2.png"; // Replace with the path of the camera icon image

const Habitat = () => {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between bg-black text-white p-8 md:p-16">
      {/* Left Side - Image */}
      <div className="flex-1 flex justify-start mb-8 md:mb-0">
        <img
          src={BabyIcon}
          alt="3D Emoji with Paper Plane"
          className="max-w-md"
        />
      </div>
      
      {/* Right Side - Text Content */}
      <div className="flex-1 text-left space-y-6">
        <p className="text-blue-400 uppercase text-sm tracking-wide mb-4">Overline</p>
        <h1 className="text-4xl md:text-8xl font-bold leading-tight mb-6">
          Habitant tristique aliquam in vel scelerisque
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor pulvinar ultricies dolor feugiat aliquam commodo.
        </p>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="flex flex-col items-start gap-4">
            <img
              src={DocumentIcon} // Document Icon Image
              alt="Document Icon"
              className="w-8 h-8" // Keeps the original size of text-2xl
            />
            <div>
              <p className="font-semibold text-xl mb-2">Sollicitudin sapien</p>
              <p className="text-sm text-gray-400">Cursus fermentum</p>
            </div>
          </div>
          <div className="flex flex-col items-start gap-4">
            <img
              src={CameraIcon} // Camera Icon Image
              alt="Camera Icon"
              className="w-8 h-8" // Keeps the original size of text-2xl
            />
            <div>
              <p className="font-semibold text-xl mb-2">Pulvinar metus</p>
              <p className="text-sm text-gray-400">Nunc sed</p>
            </div>
          </div>
        </div>
        
        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-6">
          <button className="bg-blue-600 px-8 py-4 rounded-xl text-white font-semibold">Get started</button>
          <button className="bg-gray-800 px-8 py-4 rounded-xl text-white font-semibold">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Habitat;
