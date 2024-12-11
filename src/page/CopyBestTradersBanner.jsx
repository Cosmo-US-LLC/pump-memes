import React from "react";
import HowToBuyBackground from "../assets/Svgs/copyTradersBg.svg";
import mobile from "../assets/Svgs/mobile.svg";
import clockFan from "../assets/Svgs/clockFan.svg";
import lightWave from "../assets/Svgs/lightWave.svg";

const CopyBestTradersBanner = () => {
  return (
    <div
      className="relative flex items-center justify-center w-[100%] py-[60px]  bg-center bg-cover "
      style={{
        backgroundImage: `url(${HowToBuyBackground})`,
      }}
    >
      <div className="relative pl-[52px] flex flex-col items-center justify-center w-[656px] h-[489px] flex-shrink-0 border border-black bg-[#764B30] shadow-[10px_12px_0px_0px_#FFCE00] ">
        <h1
          className="text-[#FFCE00] text-[108.767px] font-[Tomorrow] font-[700] leading-[0.90864] capitalize"
          style={{
            WebkitTextStrokeWidth: "3.2px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          Copy The <br />
          Best Meme Traders
        </h1>
        <div className="absolute top-[30px] left-[-35px] w-[74px] h-[100px]">
        {/* Pump Memes Illustration */}
        <img
          src={mobile} // Replace with the actual Pump Memes illustration
          alt="Pump Memes"
          className="" // Ensures the image fits within the container
        />
      </div>
      </div>

      <div className="relative py-[52px] flex flex-col items-center justify-center w-[656px] h-[489px] flex-shrink-0 border border-black bg-[#F26C2F] shadow-[10px_12px_0px_0px_#FFCE00] rounded-tr-lg rounded-br-lg">
        <p className="text-white text-center text-[36px] font-bold w-[363px]">
          The Copy Trading feature will be available soon. Follow the
          top-performing meme traders on Pump Memes and trade like them.
        </p>
        <div className="absolute top-[328px] left-[-43px]  w-[110px] h-[110px] ">
          <img
            src={clockFan} // Replace with the actual Pump Memes illustration
            alt="Pump Memes"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="absolute bottom-[-24px] right-[-40px]  w-[227.3px] h-[139px] ">
          <img
            src={lightWave} // Replace with the actual Pump Memes illustration
            alt="Pump Memes"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
       
    </div>
  );
};

export default CopyBestTradersBanner;
