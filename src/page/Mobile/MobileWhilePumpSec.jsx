import React from "react";
import whileimg1 from "../../assets/images/while (2).png";
import whileimg2 from "../../assets/images/while (1).png";
function MobileWhilePumpSec() {
  return (
    <div className="w-[92%] py-[60px] mx-auto ">
      <div className="space-y-[20px]">
        <h3 className="font-[Tomorrow] leading-[125%] tracking-[-0.8px] text-[35px] font-[700] text-center">
        While Pump.Fun users are spending <br /> millions of USD in fees daily
        </h3>
        <div className=" pt-[70px] space-y-[50px]">
         <div className="relative w-[100%]">
         <div
            style={{
              backgroundColor: "#EB9001",
              boxShadow: "8px 10px 0px 0px #F26C2F",
            }}
            className="max-w-[545px]  py-[13px] max-h-[520px] min-h-[320px] w-[100%] flex flex-col justify-between space-y-[19px] px-[26px]"
          >
            
            <h3 className="text-[70px] textStrockmob font-[Tomorrow]  font-[700] text-start text-[#FFCE00]">
            $5.3M*
            </h3>
            <div className="flex justify-center ">
            <img src={whileimg1} className="max-h-[216px] z-[2] absolute bottom-0" alt="" />
            </div>
            <p className="text-[26px] relatove pb-[10px] z-[8] font-[800] font-[Tomorrow]  textStrockmob text-start text-[#fff] leading-[128%]">
            In the pockets of <br /> the developers
            </p>
          </div>
         </div>
          <div className="relative w-[100%]">
            
          <div
            style={{
              backgroundColor: "#FFCE00",
              boxShadow: "8px 10px 0px 0px #F26C2F",
            }}
            className="max-w-[545px]  py-[13px] max-h-[520px] min-h-[320px] w-[100%] flex flex-col justify-between space-y-[19px] px-[26px]"
          >
            
            <h3 className="text-[70px] textStrockmob font-[Tomorrow]  font-[700] text-start text-[#FFCE00]">
            $0
            </h3>
            <div className="flex justify-end ">
            <img src={whileimg2} className="max-h-[250px] z-[2] absolute bottom-0 right-[-3%]" alt="" />
            </div>
            <p className="text-[26px] relatove pb-[10px] z-[8] font-[800] font-[Tomorrow]  textStrockmob text-start text-[#fff] leading-[128%]">
            For the Users
            </p>
          </div>
          </div>
        </div>
          <div className="pt-[40px] max-w-[286px] w-[100%] mx-auto">
            <p className="text-[18px] font-[400] text-center text-[#000]">*Pump.Fun set a record by making $5.3 million in just one day,  publicly on the blockchain, on November 24, 2024. Learn more <a href="https://cointelegraph.com/news/pump-fun-daily-revenue-outpaces-the-next-24-protocols-combined" className="underline" target="_blanck">here.</a></p>
          </div>
      </div>
    </div>
  );
}

export default MobileWhilePumpSec;
