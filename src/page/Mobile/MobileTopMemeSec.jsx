import React from "react";
import topmemeimg from "../../assets/images/topmemeimg.png";
import topmemevec1 from "../../assets/Svgs/topmemevecr (4).svg";
import topmemevec2 from "../../assets/Svgs/topmemevecr (1).svg";
import topmemevec3 from "../../assets/Svgs/topmemevecr (3).svg";
import topmemevec4 from "../../assets/Svgs/topmemevecr (2).svg";

function MobileTopMemeSec() {
  return (
    <div className="w-full pt-[40px] pb-[60px] relative mx-auto bgTopMeme z-10">
      <div className="h-[941px] flex flex-col items-start gap-6 mx-auto">
        <div className="flex flex-col items-center w-full max-w-full gap-5 text-center">
          <h4 className="w-[354px] text-[#FFF] text-center font-[Tomorrow] text-[45px] font-[700] leading-normal">
            Top Meme Coin <br /> Devs Know What's Best
          </h4>
          <p className="w-[302px] text-[#FFF] pb-[20px]  text-center font-[Lato] text-[25px] font-[400] leading-normal">
            Over 15 verified meme dev teams, with a combined $5 billion market
            cap, have already signed up on Pump Memes to launch their next
            token, attracted by our platform's new features.
          </p>
          <button className="w-[212px] h-[50px] flex-shrink-0 border-[1.325px] border-[#000] bg-[#FFCE00] hover:bg-[#000] hover:text-[#fff] text-[20px] font-[700]">
            Buy $PUMP
          </button>
        </div>

        <div className="relative flex flex-col w-full pt-6">
          <div className="flex flex-col items-end w-full">
            <img
              className="w-[244.088px] h-[219.426px] flex-shrink-0"
              src={topmemeimg}
              alt=""
            />
          </div>

          <div className="relative flex flex-col w-full">
            <img
              className="absolute left-[29%]   bottom-[45%] w-[32.094px] h-[30.435px] flex-shrink-0"
              src={topmemevec3}
              alt=""
            />
            <p className=" flex w-[327.231px] h-[37.21px] flex-col p-6 flex-shrink-0 text-[#FFCE00]  font-[Lato] text-[25px] font-[900] leading-normal capitalize">
              Next Stop: $1 Billion
            </p>
          </div>
        </div>
        <div
          className="bg-[#FFCE00] absolute left-[22%] bottom-[16%]  rotate-[14deg]    w-[38px]  h-[38px]   flex justify-center items-center border border-black"
          style={{
            boxShadow: "4px 4px 0px 0px #000",
          }}
        >
          <img src={topmemevec1} alt="" />
        </div>
        <div
          className="bg-[#FFCE00] absolute left-[13%] bottom-[10%]  rotate-[-4deg]   w-[38px]  h-[38px]  flex justify-center items-center border border-black"
          style={{
            boxShadow: "4px 4px 0px 0px #000",
          }}
        >
          <img src={topmemevec2} alt="" />
        </div>
        <div
          className="bg-[#FFCE00] absolute right-[16%] bottom-[5%]   rotate-[7deg] w-[38px]   h-[38px]   flex justify-center items-center border border-black"
          style={{
            boxShadow: "4px 4px 0px 0px #000",
          }}
        >
          <img src={topmemevec4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default MobileTopMemeSec;
