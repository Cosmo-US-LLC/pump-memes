import React from "react";
import whileimg1 from "../assets/images/while (2).png";
import whileimg2 from "../assets/images/while (1).png";
import whileimg3 from "../assets/Svgs/pump-mems-laptop.svg";
function WhilePumpSec() {
  return (
    <div className="w-[100%] py-[60px]  max-w-[1103px] w-[100%] mx-auto ">
      <div className="space-y-[20px]">
        <h3 className="font-[Tomorrow] text-[55px] font-[700] text-center">
        While Pump.Fun users are spending <br /> millions of USD in fees daily
        </h3>
        <div className="flex justify-between items-center pt-[70px]">
         <div className="relative max-w-[537px] w-[100%]">
         <div
            style={{
              backgroundColor: "#EB9001",
              boxShadow: "8px 10px 0px 0px #F26C2F",
            }}
            className="max-w-[545px]  py-[13px] max-h-[520px] min-h-[520px] w-[100%] flex flex-col justify-between space-y-[19px] px-[26px]"
          >
            
            <h3 className="text-[108.767px] textStrock font-[Tomorrow]  font-[700] text-start text-[#FFCE00]">
            $5.3M*
            </h3>
            <div className="flex justify-center ">
            <img src={whileimg1} className="max-h-[345px] z-[2] absolute bottom-0" alt="" />
            <img src={whileimg3} className="max-h-[345px] z-[2] absolute bottom-0 right-0" alt="" />
            </div>
            <p
  className="w-[317px] text-[35px] relative pb-[10px] z-[8] font-[700] font-[Tomorrow] text-start text-[#FFF] leading-[120.102%]"
  style={{
    WebkitTextStrokeWidth: "2px",
    WebkitTextStrokeColor: "#000",
  }}
>
  In the pockets of <br /> the developers
</p>

          </div>
         </div>
          <div className="relative max-w-[537px] w-[100%]">
            
          <div
            style={{
              backgroundColor: "#FFCE00",
              boxShadow: "8px 10px 0px 0px #F26C2F",
            }}
            className="max-w-[545px]  py-[13px] max-h-[520px] min-h-[520px] w-[100%] flex flex-col justify-between space-y-[19px] px-[26px]"
          >
            
            <h3 className="text-[108.767px] textStrock font-[Tomorrow]  font-[700] text-start text-[#FFCE00]">
            $0
            </h3>
            <div className="flex justify-end ">
            <img src={whileimg2} className="max-h-[345px] z-[2] absolute bottom-0 right-[-3%]" alt="" />
            </div>
            <p
  className="text-[42px] relative pb-[10px] z-[8] font-[700] font-[Tomorrow] text-start text-[#FFF] leading-[120.102%]"
  style={{
    WebkitTextStrokeWidth: "3px",
    WebkitTextStrokeColor: "#000",
  }}
>
  For the Users
</p>
          </div>
          </div>
        </div>
          <div className="pt-[40px] max-w-[598px] w-[100%] mx-auto">
            <p className="text-[20px] font-[400] text-center text-[#000]">*Pump.Fun set a record by making $5.3 million in just one day,  publicly on the blockchain, on November 24, 2024. Learn more <a href="https://cointelegraph.com/news/pump-fun-daily-revenue-outpaces-the-next-24-protocols-combined" className="underline" target="_blanck">here.</a></p>
          </div>
      </div>
    </div>
  );
}

export default WhilePumpSec;
