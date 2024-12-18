import React from "react";
import HowToBuyBackground from "../../assets/Svgs/mobile-live-streem-bg.svg";
import computerimage from "../../assets/Svgs/mobile-computer.svg";
import Clock from "../../assets/Svgs/clock.jpg";

const MobileLiveStreamsSection = () => {
  return (
    <div
      className="relative bg-[#234780] text-white h-[880px] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HowToBuyBackground})`,
      }}
    >
      {/* <img src={HowToBuyBackground} alt="Clock Icon" className="absolute top-0 bottom-0 left-0 right-0 w-full h-full" /> */}
      <div className="flex flex-col items-center max-w-[90%] w-full mx-auto text-center relative z-10 mt-[100px]">
        <h1 className="text-[45px] font-[700] text-white font-[tomorrow] leading-[50px] w-[346px] text-center sttrokmob">
          We bring Livestreams Back!
        </h1>
        <p className="text-[25px] font-[400] text-white font-lato leading-normal w-[288px] text-center">
          Stream Live and Hype Your Community.
        </p>

        <button className="relative w-full max-w-[229px] flex items-center mt-8 mb-8 gap-4 px-1 h-[80px]  btnbg">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
            <img src={Clock} alt="Clock Icon" className="w-[60px] h-[60px]" />
          </div>

          <span className="text-[19px] font-[Tomorrow] text-start font-[700] leading-[120%] text-black pl-10">
            24/7 AI Safety Monitoring
          </span>
        </button>
      </div>

      <div className="relative w-[80%] h-auto mt-[50px]">
        <img
          src={computerimage}
          alt="Pump Memes"
          className="object-contain w-full"
        />

        <div className="absolute top-0 w-16 h-16 bg-white rounded-full left-4 opacity-10 blur-lg"></div>
        <div className="absolute bottom-0 w-16 h-16 bg-white rounded-full right-4 opacity-10 blur-lg"></div>
      </div>
    </div>
  );
};

export default MobileLiveStreamsSection;
