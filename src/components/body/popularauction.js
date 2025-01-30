import React from "react";
import Popular1 from '../assets/pop1.png';
import Popular2 from '../assets/pop2.png';
import Popular3 from '../assets/pop3.png';
import Popular4 from '../assets/pop4.png';
import Popular5 from '../assets/pop5.png';
import Popular6 from '../assets/pop6.png';

const auctions = [
  {
    id: 1,
    image: Popular1, // Corrected here
    title: "Faucibus habitasse at et platea massa mauris",
  },
  {
    id: 2,
    image: Popular2, // Corrected here
    title: "Diam purus sagittis nisl erat mauris",
  },
  {
    id: 3,
    image: Popular3, // Corrected here
    title: "Nascetur mauris viverra vel id id sem leo",
  },
  {
    id: 4,
    image: Popular4, // Corrected here
    title: "Fusce id non dui amet amet maecenas",
  },
  {
    id: 5,
    image: Popular5, // Corrected here
    title: "Tellus duis neque fringilla pulvinar gravida",
  },
  {
    id: 6,
    image: Popular6, // Corrected here
    title: "Odio lacus neque ultricies purus eget",
  }
];

const PopularAuction = () => {
  return (
    <section className="bg-black text-white p-8 md:p-16">
      <div className="text-center mb-8">
        <p className="text-blue-400 uppercase text-sm tracking-wide">Overline</p>
        <h2 className="text-3xl md:text-5xl font-bold">Most popular live auctions</h2>
        <div className="flex justify-center gap-4 mt-4">
          {['Architecture', 'Photography', 'Games', 'Music'].map((category) => (
            <button key={category} className="bg-gray-800 px-4 py-2 rounded-xl text-white font-semibold">
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {auctions.map((auction) => (
          <div key={auction.id} className="bg-gray-900 rounded-xl overflow-hidden">
            <img src={auction.image} alt={auction.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{auction.title}</h3>
              <div className="flex items-center justify-between mt-2 text-gray-400 text-sm">
                <span>⏳ 22:59</span>
                <span className="bg-blue-600 px-2 py-1 rounded">101 people are bidding</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-gray-800 px-6 py-3 rounded-xl text-white font-semibold">Show me more</button>
      </div>
    </section>
  );
};

export default PopularAuction;
