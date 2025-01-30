import React from "react";
import Circu from '../assets/ses1.png';
import Circu1 from '../assets/ses2.png';
import Circu2 from '../assets/ses3.png';
import Circu3 from '../assets/ses4.png';

const Circus = () => {
  return (
    <div className="bg-black text-white p-10 h-[593px] rounded-lg flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2">
        <p className="text-blue-400 uppercase tracking-widest mb-4">Overline</p>
        <h1 className="text-5xl font-bold mb-6">
          Cursus vitae sollicitudin donec nascetur. Join now
        </h1>
        <p className="text-gray-400 mb-8">
          Donec volutpat bibendum justo, odio aenean congue est porttitor ut.
          Mauris vestibulum eros libero amet tincidunt.
        </p>
        <div className="flex gap-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500">
            Get started
          </button>
          <button className="border border-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800">
            Learn more
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col gap-6 mt-8 md:mt-0">
        <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
          <img src={Circu} alt="User Avatar" className="rounded-full w-12 h-12" />
          <div>
            <p className="text-white font-semibold">@brook_sim</p>
            <p className="text-gray-400 text-sm">Items 206 - Collection 12</p>
          </div>
          <span className="text-blue-400 font-bold ml-auto">4.78 ETH</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
          <img src={Circu1} alt="User Avatar" className="rounded-full w-12 h-12" />
          <div>
            <p className="text-white font-semibold">@marvinmckin</p>
            <p className="text-gray-400 text-sm">Items 479 - Collection 24</p>
          </div>
          <span className="text-blue-400 font-bold ml-auto">7.55 ETH</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
          <img src={Circu2} alt="User Avatar" className="rounded-full w-12 h-12" />
          <div>
            <p className="text-white font-semibold">@esther_howard</p>
            <p className="text-gray-400 text-sm">Items 387 - Collection 10</p>
          </div>
          <span className="text-blue-400 font-bold ml-auto">5.31 ETH</span>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg flex items-center gap-4">
          <img src={Circu3} alt="User Avatar" className="rounded-full w-12 h-12" />
          <div>
            <p className="text-white font-semibold">@devon_lane</p>
            <p className="text-gray-400 text-sm">Items 512 - Collection 18</p>
          </div>
          <span className="text-blue-400 font-bold ml-auto">6.89 ETH</span>
        </div>
      </div>
    </div>
  );
};

export default Circus;
