import React from "react";
import Live1 from '../assets/live1.png';
import Live2 from '../assets/live2.png';
import Live3 from '../assets/live3.png';
import Live4 from '../assets/live4.png';
import Live5 from '../assets/live5.png';

const auctions = [
  {
    id: 1,
    image: Live1,
    title: "Vulputate felis purus viverra morbi facilisi eget",
    price: "3.19 ETH",
    timeLeft: "2:41 min left",
    bidders: 35,
    likes: 120,
  },
  {
    id: 2,
    image: Live2,
    title: "Dui accumsan leo vestibulum ornare eu",
    price: "1.11 ETH",
    timeLeft: "22:59 min left",
    bidders: 101,
    likes: 570,
  },
  {
    id: 3,
    image: Live3,
    title: "Senectus adipiscing nascetur accumsan etiam",
    price: "1.63 ETH",
    timeLeft: "37:01 min left",
    bidders: 12,
    likes: 98,
  },
  {
    id: 4,
    image: Live4,
    title: "Mattis at diam lorem nam sed sociis",
    price: "2.55 ETH",
    timeLeft: "12:15 min left",
    bidders: 19,
    likes: 54,
  },
  {
    id: 5,  // Fixed duplicate `id` for the last item
    image: Live5,
    title: "Mattis at diam lorem nam sed sociis",
    price: "2.55 ETH",
    timeLeft: "12:15 min left",
    bidders: 19,
    likes: 54,
  },
];

const LiveSessions = () => {
  return (
    <section className="bg-[#0D0F23] text-white py-12">
      <h2 className="text-center text-2xl font-bold mb-8">Latest Live Auctions</h2>

      <div className="flex overflow-x-scroll space-x-6 px-8 scrollbar-hide">
        {auctions.map((auction) => (
          <div
            key={auction.id}
            className="bg-[#14162E] rounded-lg p-4 min-w-[300px] shadow-md"
          >
            <img
              src={auction.image}
              alt={auction.title}
              className="rounded-lg w-full h-[520px] object-cover mb-4" // Increased height to h-96 (24rem)
            />
            <h3 className="text-lg font-semibold">{auction.title}</h3>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="text-purple-400">{auction.price}</span>
              <span className="opacity-60">{auction.timeLeft}</span>
            </div>
            <div className="flex justify-between items-center mt-3 text-sm opacity-70">
              <span>{auction.bidders} people are bidding</span>
              <span>❤️ {auction.likes}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveSessions;
