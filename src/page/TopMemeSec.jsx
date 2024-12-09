import React from "react";
import topmemeimg from "../assets/images/topmemeimg.png";
import topmemevec1 from "../assets/Svgs/topmemevecr (4).svg";
import topmemevec2 from "../assets/Svgs/topmemevecr (1).svg";
import topmemevec3 from "../assets/Svgs/topmemevecr (3).svg";
import topmemevec4 from "../assets/Svgs/topmemevecr (2).svg";
function TopMemeSec() {
  return (
    <div className="w-[100%] pt-[68px] pb-[100px] relative  w-[100%] mx-auto bgTopMeme">
     <div className="max-w-[1216.05px] flex justify-between items-end gap-x-[5rem] space-y-[14px] w-[100%] mx-auto "
     
     >
        <div className="max-w-[631px] w-[100%]">
        <h4 className="font-[Tomorrow] text-[55px] font-[700] leading-[125%] text-start text-[#fff]">Top Meme Coin Devs <br /> Know What's Best</h4>
        <p className="leading-normal pt-[25px] text-[25px] text-start font-[400] text-[#FFF]">Over 15 verified meme dev teams, with a combined $5 billion market cap, have already signed up on Pump Memes to launch their next token, attracted by our platform's new features.</p>
        <button className="w-[212px] mt-[61px] h-[50px] bg-[#FFCE00] hover:bg-[#000] hover:text-[#fff] border border-[#000] text-[20px] font-[700]">Buy $PUMP</button>
        </div>
        <div className="w-[50%] relative flexc flex-col items-end">
            <img className="mr-0 ml-auto" src={topmemeimg} alt="" />
            <div className="pt-[30px]">
                <div className="bg-[#FFCE00] absolute left-[-13%] rotate-[14deg]  bottom-[32%] w-[67.554px] p-2 h-[67.554px] flex justify-center items-center border border-black"
                 style={{
                    boxShadow: "4px 4px 0px 0px #000",
                  }}
                >
                <img src={topmemevec1} alt="" />
                </div>
                <div className="bg-[#FFCE00] absolute left-[-30%] rotate-[-4deg]  bottom-[4%] w-[67.554px] p-2 h-[67.554px] flex justify-center items-center border border-black"
                 style={{
                    boxShadow: "4px 4px 0px 0px #000",
                  }}>
                <img src={topmemevec2} alt="" />
                </div>
               <img className="absolute left-[-8%]  bottom-[3%]" src={topmemevec3} alt="" />
                <p className="absolute left-[-40%] text-[#FFCE00] text-[42.242px] font-[900] text-center">Next Stop: $ 1 Billion</p>
              <div className="bg-[#FFCE00] absolute left-[45%] rotate-[7deg]  w-[67.554px] p-2 h-[67.554px] flex justify-center items-center border border-black"
                 style={{
                    boxShadow: "4px 4px 0px 0px #000",
                  }}>
              <img src={topmemevec4} alt="" />
              </div>
            </div>
        </div>
     </div>
    </div>
  );
}

export default TopMemeSec;
