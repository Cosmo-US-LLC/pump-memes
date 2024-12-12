import React from "react";
import HowToBuyBackground from "../../assets/Svgs/mobile-live-streem-bg.svg";
import computerimage from "../../assets/Svgs/mobile-computer.svg";
import Clock from "../../assets/Svgs/clock.jpg";

const MobileLiveStreamsSection = () => {
  return (
    <div
      className="relative bg-[#234780] text-white h-[995px] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HowToBuyBackground})`,
      }}
    >
      <div className="flex flex-col items-center max-w-[90%] w-full mx-auto text-center relative z-10">
        <h1 className="text-[45px] font-[700] text-white font-[tomorrow] leading-normal w-[346px] text-center stroke-[1.06px] stroke-black">
          We bring Livestreams Back!
        </h1>
        <p className="text-[25px] font-[400] text-white font-lato leading-normal w-[288px] text-center">
          Stream Live And Hype Your Community.
        </p>

        <button className="relative w-full max-w-[229px] flex items-center mt-8 mb-8 gap-4 px-1 py-2 bg-yellow-400 shadow-[10px_12px_0px_0px_#F77B00] border-2 border-black">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
            <img src={Clock} alt="Clock Icon" className="w-12 h-12" />
          </div>

          <span className="text-[16px] font-bold text-black pl-10">
            24/7 AI Safety Monitoring
          </span>
        </button>
      </div>

      <div className="relative w-[80%] h-auto mt-10">
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
