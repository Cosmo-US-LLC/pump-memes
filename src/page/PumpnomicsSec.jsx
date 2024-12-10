import React from "react";
import Pumpnomicsimg from "../assets/images/Pumpnomicsimg.png";
import Pumpnomvect1 from "../assets/Svgs/pumpvect (6).svg";
import Pumpnomvect2 from "../assets/Svgs/pumpvect (5).svg";
import Pumpnomvect3 from "../assets/Svgs/pumpvect (4).svg";
import Pumpnomvect4 from "../assets/Svgs/pumpvect (3).svg";
import Pumpnomvect5 from "../assets/Svgs/pumpvect (2).svg";
import Pumpnomvect6 from "../assets/Svgs/pumpvect (1).svg";
import Pumpnomvect7 from "../assets/Svgs/pumpvect (7).svg";

function PumpnomicsSec() {
  return (
    <div id="tokenomics" className="w-[100%] pt-[68px] relative  w-[100%] mx-auto bg-[#F6C929]">
     <div className="max-w-[910.934px] pb-[90px] space-y-[30px] w-[100%] mx-auto "
     >
        <h4 className="font-[Tomorrow] text-[55px] font-[700] leading-normal text-center text-[#000]">Pumpnomics</h4>
        <div className="flex justify-center pt-[40px]">
          <img src={Pumpnomicsimg} className="" alt="" />
        </div>
     </div>
     <div className="bg-[#AFCD3A]  border-[3px] border-[#000]">
        <div className="max-w-[950px] py-[40px] flex justify-between items-center w-[100%] mx-auto">
            <div className="flex  items-center space-x-3" 
           >
                <div className="bg-[#FFF] border border-black w-[105px] h-[86px] flex justify-center items-center"
                 style={{
                    boxShadow: "4px 4px 0px 0px #000",
                  }}>
                    <img src={Pumpnomvect4} alt="" />
                </div>
                <div className="space-y-[-3px]">
                    <h3 className="font-[Tomorrow] bessttroksmp text-[#A387FF] text-[55px] font-[700]">Sol</h3>
                    <p className="text-[#000] text-[20px] font-[700] uppercase">Solana Token</p>
                </div>
            </div>
            <div className="flex  items-center space-x-3" 
            >
                <div className="bg-[#FFF] border border-black w-[105px] h-[86px] flex justify-center items-center"
                style={{
                    boxShadow: "4px 4px 0px 0px #000",
                  }}>
                    <img src={Pumpnomvect5} alt="" />
                </div>
                <div className="space-y-[-3px]">
                    <h3 className="font-[Tomorrow] bessttroksmp text-[#FF8000] text-[55px] font-[700]">2.5B</h3>
                    <p className="text-[#000] text-[20px] font-[700] uppercase">Total Supply</p>
                </div>
            </div>
            <div className="flex  items-center space-x-3" 
           >
                <div className="bg-[#FFF] border border-black w-[105px] h-[86px] flex justify-center items-center"
                 style={{
                    boxShadow: "4px 4px 0px 0px #000",
                  }}>
                    <img src={Pumpnomvect6} alt="" />
                </div>
                <div className="space-y-[-3px]">
                    <h3 className="font-[Tomorrow] bessttroksmp text-[#FDBE31] text-[55px] font-[700]">PUMP</h3>
                    <p className="text-[#000] text-[20px] font-[700] uppercase">TICKER</p>
                </div>
            </div>
        </div>
     </div>
     <img src={Pumpnomvect1} className="absolute left-0 top-[17%]" alt="" />
     <img className="absolute left-[2%] bottom-[12%]" src={Pumpnomvect2} alt="" />
     <img className="absolute right-[0%] bottom-[12%]" src={Pumpnomvect3} alt="" />
     <img className="absolute right-[0%] top-[12%]" src={Pumpnomvect7} alt="" />
     {/* <img src={Pumpnomvect4} alt="" />
     <img src={Pumpnomvect5} alt="" />
     <img src={Pumpnomvect6} alt="" /> */}
    </div>
  );
}

export default PumpnomicsSec;
