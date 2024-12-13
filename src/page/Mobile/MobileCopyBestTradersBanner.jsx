import React from "react";
import HowToBuyBackground from "../../assets/Svgs/best-trade-bg.svg";
import mobile from "../../assets/Svgs/mobile.svg";
import clockFan from "../../assets/Svgs/Layer2.svg";
import lightWave from "../../assets/Svgs/lightWave.svg";
import bigvector1 from "../../assets/Svgs/bigvectors (2).svg";


const MobileCopyBestTradersBanner = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full px-6 py-10 bg-center bg-cover"
      style={{
        backgroundImage: `url(${HowToBuyBackground})`,
      }}
    >
      <div className="relative flex flex-col items-center justify-center w-[340px] h-[413px] flex-shrink-0 border border-black bg-[#764B30] shadow-[10px_12px_0px_0px_#FFCE00]">
        <h1
          className="text-[#FFCE00] text-[70px] font-[700] leading-[110%] text-center capitalize font-[Tomorrow]"
          style={{
            WebkitTextStrokeWidth: "4.2056097984313965px",
            WebkitTextStrokeColor: "#000",
            width: "351px",
          }}
        >
          Copy The <br /> Best Meme Traders
        </h1>
        <div className="absolute top-[140px] left-[-15px] w-[50px] h-[70px]">
          <img
            src={mobile}
            alt="Pump Memes"
            className="object-contain w-full h-full"
          />
        </div>
        <img className="absolute top-[40%] right-[5%] max-h-[60px]" src={bigvector1} alt="" />
      </div>

      <div className="relative flex flex-col items-center justify-center w-[340px] h-[367px] pt-2 flex-shrink-0 border border-black bg-[#F26C2F] shadow-[10px_12px_0px_0px_#FFCE00]">
        <p className="text-white text-center text-[33px] font-[500] font-[Lato] leading-[39.6px] w-[339px]">
          The Copy Trading feature will be available soon. Follow the
          top-performing meme traders on Pump Memes and trade like them.
        </p>
        <div className="absolute right-[40px] top-[-25px]  w-[48px] h-[48px]">
          <img
            src={clockFan}
            alt="Pump Memes"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="absolute bottom-[-15px] right-[-20px] w-[100px] h-[60px]">
          <img
            src={lightWave}
            alt="Pump Memes"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileCopyBestTradersBanner;
