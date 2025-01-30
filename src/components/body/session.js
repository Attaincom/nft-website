import React from "react";
import { FaUsers, FaPalette, FaPaintBrush, FaEthereum } from "react-icons/fa";



const stats = [
  { icon: <FaUsers size={30} />, value: "300k", label: "Users Active" },
  { icon: <FaPalette size={30} />, value: "52,5k", label: "Artworks" },
  { icon: <FaPaintBrush size={30} />, value: "17,5k", label: "Artists" },
  { icon: <FaEthereum size={30} />, value: "35.58", label: "ETH Spent" },
];

const Session = () => {
  return (
    <div className="flex justify-center items-center gap-10 bg-black text-white p-10">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="mb-2">{stat.icon}</div>
          <h2 className="text-3xl font-bold">{stat.value}</h2>
          <p className="text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Session;
