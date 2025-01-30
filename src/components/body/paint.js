import React from "react";
import Bucket from "../assets/bucket.png"

const Paint = () => {
  return (
    <section className="bg-black text-white py-16 h-[616px] px-8 flex flex-col lg:flex-row items-center justify-center">
      {/* Left Content */}
      <div className="max-w-xl">
        <p className="uppercase text-sm tracking-wide text-gray-400">Overline</p>
        <h1 className="text-5xl font-bold leading-tight mt-2">
          Sapien ipsum scelerisque convallis fusce
        </h1>
        <p className="text-gray-400 mt-4">
          Ut amet vulputate faucibus vitae semper eget auctor. Diam tempor
          pulvinar ultricies dolor feugiat aliquam commodo.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md">
            Get started
          </button>
          <button className="border border-gray-600 hover:border-white text-white px-6 py-3 rounded-md">
            Learn more
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 lg:mt-0">
        <img
          src={Bucket} // Replace with actual image URL
          alt="Paint Graphic"
          className="w-full max-w-lg"
        />
      </div>
    </section>
  );
};

export default Paint;
