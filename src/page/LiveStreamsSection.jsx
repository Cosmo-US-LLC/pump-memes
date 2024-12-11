import React from "react";
import HowToBuyBackground from "../assets/Svgs/computerbackgroundiamge.svg";
import computerimage from "../assets/Svgs/computerimage.svg";
import Clock from "../assets/Svgs/clock.jpg";

const LiveStreamsSection = () => {
  return (
    <div
      className="relative bg-[#234780] text-white h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HowToBuyBackground})`,
      }}
    >
      <div className="flex flex-row items-center max-w-[1241px] w-[100%] mx-auto ">
        <div className="flex flex-col gap-6">
          <h1 className="text-[55px] font-[700] leading-none text-white   font-[tomorrow]">
            We bring Livestreams Back!
          </h1>
          <p className="text-[28px] font-normal leading-none text-white font-lato">
            Stream Live And Hype Your Community.
          </p>

          <button className="relative max-w-[303.989px] w-[100%] flex items-center gap-4 px-3 py-3 bg-yellow-400 shadow-[10px_12px_0px_0px_#F77B00] border-2 border-black">
            {/* Icon */}
            <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
              <img
                src={Clock} // Replace with actual icon path
                alt="Clock Icon"
                className="w-12 h-12"
              />
            </div>

            {/* Text */}
            <span className="text-[18px] font-bold text-black pl-14">
              24/7 AI Safety Monitoring
            </span>
          </button>
        </div>

        {/* Right Section */}
        <div className="relative w-[704.59px] h-[497.934px] flex-shrink-0">
          {/* Pump Memes Illustration */}
          <img
            src={computerimage} // Replace with the actual Pump Memes illustration
            alt="Pump Memes"
            className="object-contain w-full h-full" // Ensures the image fits within the container
          />

          {/* Floating Elements */}
          <div className="absolute top-0 w-24 h-24 bg-white rounded-full left-4 opacity-10 blur-lg"></div>
          <div className="absolute bottom-0 w-24 h-24 bg-white rounded-full right-4 opacity-10 blur-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamsSection;
