import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import cardimg1 from "../assets/images/Boxesimg (6).png";
import cardimg2 from "../assets/images/Boxesimg (5).png";
import cardimg3 from "../assets/images/Boxesimg (4).png";
import cardimg4 from "../assets/images/Boxesimg (3).png";
import cardimg5 from "../assets/images/Boxesimg (2).png";
import cardimg6 from "../assets/images/Boxesimg (1).png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import awr1 from "../assets/Svgs/arw (1).svg";
import awr2 from "../assets/Svgs/arw (2).svg";

const cardData = [
  {
    title: "Rookie",
    bgColor: "h-[280px]",
    img: cardimg1,
    price: "US $1,000",
    height: "h-[650px]",
    titleclass: "text-[25px] font-[700]",
    priceclass: "text-[25px] font-[700] py-[18px]",
    benefitdevcls: "px-[43px] py-[31px]",
    benefitclass: "text-[18px] text-center font-[700] leading-[120.174%]",
    benefits: ["Early Beta Access", "10% $PUMP Bonus"],
  },
  {
    title: "Degen",
    bgColor: "h-[241px]",
    img: cardimg2,
    price: "US $2,500",
    height: "h-[550px]",
    titleclass: "text-[21px] font-[700]",
    priceclass: "text-[21px] font-[700] py-[15px]",
    benefitdevcls: "px-[10px] py-[39px]",
    benefitclass: "text-[15px] text-center font-[700] leading-[105%]",
    benefits: ["Early Beta Access", "15% $PUMP Bonus"],
  },
  {
    title: "Ape",
    bgColor: "h-[241px]",
    img: cardimg3,
    price: "US $5,000",
    height: "h-[550px]",
    titleclass: "text-[21px] font-[700]",
    priceclass: "text-[21px] font-[700] py-[15px]",
    benefitdevcls: "px-[10px] py-[30px]",
    benefitclass: "text-[15px] text-center font-[700] leading-[105%]",
    benefits: ["Early Beta Access", "20% $PUMP Bonus", "Daily Staking Rewards"],
  },
  {
    title: "Pro",
    bgColor: "h-[241px]",
    img: cardimg4,
    price: "US $10,000",
    height: "h-[550px]",
    titleclass: "text-[21px] font-[700]",
    priceclass: "text-[21px] font-[700] py-[15px]",
    benefitdevcls: "px-[10px] py-[19.5px]",
    benefitclass: "text-[15px] text-center font-[700] leading-[105%]",
    benefits: [
      "Early Beta Access",
      "25% $PUMP Bonus",
      "Daily Staking Rewards",
      "VIP Trading Signals",
    ],
  },
  {
    title: "Elite",
    bgColor: "h-[241px]",
    img: cardimg5,
    price: "US $25,000",
    height: "h-[550px]",
    titleclass: "text-[21px] font-[700]",
    priceclass: "text-[21px] font-[700] py-[15px]",
    benefitdevcls: "px-[10px] py-[10px]",
    benefitclass: "text-[15px] text-center font-[700] leading-[105%]",
    benefits: [
      "Early Beta Access",
      "30% $PUMP Bonus",
      "Daily Staking Rewards",
      "VIP Trading Signals",
      "1-on-1 Strategy Sessions",
    ],
  },
  
];

export default function AlphaBoxesSec() {
  const [activeIndex, setActiveIndex] = useState(0); 
  const [visitedIndices, setVisitedIndices] = useState([]); 

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex); 
  };
  return (
    <div className="bg-[#150068]">
      <div className="bgboxsec">
        <main className=" max-w-[1241px] w-[100%] mx-auto pl-4 py-16">
          <div className="mb-12">
            <h1 className="text-[55px] font-[700] text-[#fff] font-[Tomorrow]">
              Alpha Boxes
            </h1>
            <p className="text-[25px] font-[400] text-[#fff]">
              Benefit from our discounted pricing by purchasing an Alpha Box
              with discounted pricing, ensuring you get more bang for your buck.
            </p>
          </div>

          <div className="relative pl-12 h-[700px] AlphaSec">
            {/* Swiper Slider */}
            {/* <Swiper
          modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={3.2}
            loop={false}
            className="!flex !items-center swiper"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3.2,
              },
              768: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <div className={`${card.height} p-6 w-full`}
          style={{
            backgroundColor: "#1A1A1A",
            boxShadow: "4px 4px 0px #FFF",
          }}>
            <h3 className={`${card.titleclass} text-center text-[#ffff] mb-4 font-[Tomorrow]`}>{card.title}:</h3>
            <div className={`${card.bgColor} mb-6`} >
                <img  className="!h-[100%] w-[100%]"  src={card.img} alt="" />
            </div>
            <div className={`${card.priceclass} text-center text-white mb-4 font-[Tomorrow] `} 
              style={{
                backgroundColor: "#F26C2F",
                boxShadow: "4px 4px 0px 0px #FFF",
              }}>
              {card.price}
            </div>
           <div  className={`${card.benefitdevcls} bg-[#000]`}
            style={{
                boxShadow: "2px 2px 0px 0px rgba(255, 255, 255, 0.15)",
              }}
           >
           <div className={`${card.benefitclass} text-white space-y-1 text-center `}>
              {card.benefits.map((benefit, idx) => (
                <p key={idx}>{benefit}</p>
              ))}
            </div>
           </div>
          </div>
        </SwiperSlide>
      ))}
          </Swiper> */}
           <div className="!overflow-hidden relative !h-[700px]">
           <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={5} 
              loop={false} 
              centeredSlides={true}
              className="!flex !items-center swiper"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              onSlideChange={handleSlideChange} 
              breakpoints={{
                1024: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 3,
                },
                640: {
                  slidesPerView: 2,
                },
                320: {
                  slidesPerView: 1,
                },
              }}
            >
              {cardData.map((card, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`p-6 w-full ${
                      activeIndex === index // Apply active styles to the current active slide
                        ? "transform scale-105 duration-300"
                        : visitedIndices.includes(index)
                        ? "opacity-75"
                        : ""
                    }`}
                    style={{
                      height: activeIndex === index ? "650px" : "550px", // Increase height for active slide
                      backgroundColor: "#1A1A1A",
                      boxShadow:
                        activeIndex === index
                          ? "6px 6px 0px #FFF"
                          : visitedIndices.includes(index)
                          ? "4px 4px 0px rgba(255, 255, 255, 0.5)"
                          : "4px 4px 0px #FFF",
                    }}
                  >
                    <h3
                      className={`text-center text-[#ffff] mb-4 font-[Tomorrow] ${
                        activeIndex === index
                          ? "text-[28px] font-bold"
                          : visitedIndices.includes(index)
                          ? "text-[21px] font-medium opacity-75"
                          : "text-[21px] font-medium"
                      }`}
                    >
                      {card.title}
                    </h3>
                    <div
                      className={`${card.bgColor} mb-6`}
                      style={{
                        height: activeIndex === index ? "300px" : "241px", // Adjust height for active slide
                      }}
                    >
                      <img
                        className="!h-[100%] w-[100%]"
                        src={card.img}
                        alt={card.title}
                      />
                    </div>
                    <div
                      className={`text-center text-white mb-4 font-[Tomorrow] ${
                        activeIndex === index
                          ? "text-[25px] py-[18px]"
                          : "text-[21px] py-[15px]"
                      }`}
                      style={{
                        backgroundColor: "#F26C2F",
                        boxShadow:
                          activeIndex === index
                            ? "6px 6px 0px 0px #FFF"
                            : visitedIndices.includes(index)
                            ? "4px 4px 0px 0px rgba(255, 255, 255, 0.5)"
                            : "4px 4px 0px 0px #FFF",
                      }}
                    >
                      {card.price}
                    </div>
                    <div
                      className={`${card.benefitdevcls} bg-[#000]`}
                      style={{
                        boxShadow: "2px 2px 0px 0px rgba(255, 255, 255, 0.15)",
                      }}
                    >
                      <div
                        className={`${card.benefitclass} text-white space-y-1 text-center`}
                      >
                        {card.benefits.map((benefit, idx) => (
                          <p key={idx}>{benefit}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
           </div>

            <div className="!h-[65px] !w-[65px] swiper-button-prev  absolute left-[-10] top-1/2 -translate-y-1/2 bg-[#FFCE00] p-2 rounded hover:bg-yellow-500 z-10">
              <img src={awr1} className="" alt="Previous" />
            </div>
            <div className="!h-[65px] !w-[65px] swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 bg-[#FFCE00] p-2 rounded hover:bg-yellow-500 z-10">
              <img src={awr2} className="" alt="Next" />
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="py-3 px-8 bg-[#FFCE00] hover:bg-[#000] hover:text-[#fff] border border-[#000] text-[20px] font-[700]">
              Buy Alpha Box
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
