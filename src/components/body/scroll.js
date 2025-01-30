import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Scroll from '../assets/eth1.png';
import Scroll1 from '../assets/et2.png';
import Scroll2 from '../assets/et3.png';
import Scroll3 from '../assets/et4.png';
import Scroll4 from '../assets/et5.png';
import Scroll5 from '../assets/et6.png';
import Scroll6 from '../assets/et7.png';
import Scroll7 from '../assets/et8.png';
import Scroll8 from '../assets/et9.png';
import Scroll9 from '../assets/et10.png';

const images = [
  { src: Scroll, price: "1.51 ETH" },
  { src: Scroll1, price: "3.25 ETH" },
  { src: Scroll2, price: "3.62 ETH" },
  { src: Scroll3, price: "3.82 ETH" },
  { src: Scroll4, price: "2.77 ETH" },
  { src: Scroll5, price: "1.61 ETH" },
  { src: Scroll6, price: "2.29 ETH" },
  { src: Scroll7, price: "2.03 ETH" },
  { src: Scroll8, price: "3.69 ETH" },
  { src: Scroll9, price: "1.49 ETH" },

];

const Scrolling = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="bg-black py-10 overflow-hidden">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-gray-900 p-4 rounded-lg text-center">
              {/* Smaller image size */}
              <img
                src={item.src}
                alt="NFT"
                className="rounded-lg mb-2 h-32 w-32 object-cover mx-auto"
              />
              <p className="text-white font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Scrolling;
