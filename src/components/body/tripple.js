import React from "react";
import Tripple1 from '../assets/try1.png';
import TrippleMid from '../assets/trymid.png';
import TrippleLeft from '../assets/trys1.png';
import TrippleLeft1 from '../assets/trys2.png';
import TrippleLeft2 from '../assets/trys3.png';
import TrippleLeft3 from '../assets/trys4.png';

const TripleNFTSection = () => {
  // Array to hold the imported images
  const nftImages = [TrippleLeft, TrippleLeft1, TrippleLeft2, TrippleLeft3];

  return (
    <div className="flex flex-col md:flex-row gap-6 bg-[#0D0D1F] p-6 min-h-screen text-white">
      {/* Left Section: Hottest Sale Offers */}
      <div className="flex-1 bg-[#12122A] p-6 rounded-2xl">
        <h2 className="text-7xl font-semibold mb-4">Check out the hottest Sale offers</h2>
        <div className="flex gap-4">
          {[0, 1].map((item) => (
            <div key={item} className="bg-[#1A1A3D] p-4 rounded-xl flex-1">
              <img
                src={Tripple1}
                alt={`NFT ${item + 1}`}
                className="w-full rounded-lg"
              />
              <p className="mt-2 text-sm">Fames habitasse risus ultricies tortor sit</p>
              <div className="flex justify-between mt-2 text-xs">
                <span>22:59</span>
                <span className="bg-blue-500 px-2 py-1 rounded">2.55 ETH</span>
              </div>
              <p className="text-xs mt-1">101 people are bidding</p>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-gray-700 py-2 rounded-xl">Show me more</button>
      </div>

      {/* Center Section: Main Banner */}
      <div className="flex-1 bg-[#12122A] p-6 rounded-2xl flex flex-col items-center text-center flex-grow">
        <img
          src={TrippleMid}
          alt="Main NFT"
          className="w-full max-h-full object-contain"
        />
        <h2 className="text-xl font-semibold mt-4">Get started creating & selling your NFTs</h2>
        <p className="text-sm mt-2">Nunc gravida faucibus netus feugiat tellus, viverra massa feugiat.</p>
        <button className="mt-4 bg-blue-600 py-2 px-4 rounded-xl">Get started</button>
      </div>

      {/* Right Section: Top NFT at a Lower Price */}
      <div className="flex-1 bg-[#12122A] p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Top NFT at a lower price</h2>
        <div className="space-y-4">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="flex items-center gap-6 bg-[#1A1A3D] p-4 rounded-xl">
              <img
                src={nftImages[item]} // Using the nftImages array to dynamically load the images
                alt={`NFT ${item}`}
                className="w-12 h-12 rounded-lg"
              />
              <div className="flex-1">
                <p className="text-sm">NFT Title {item + 1}</p>
                <p className="text-xs">22:59 | <span className="text-blue-400">1.25 ETH</span></p>
              </div>
              <button className="text-red-500">♥</button>
            </div>
          ))}
        </div>
        <button className="w-full mt-4 bg-gray-700 py-2 rounded-xl">Show me more</button>
      </div>
    </div>
  );
};

export default TripleNFTSection;
