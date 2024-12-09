import React from "react";
import givevect1 from "../assets/images/givevec.png";
import givevect2 from "../assets/Svgs/givevect (1).svg";
import givevect3 from "../assets/Svgs/givevect (2).svg";
import givevect4 from "../assets/Svgs/givevect (3).svg";
function GivingBackSec() {
  return (
    <div className="w-[100%] py-[60px]   w-[100%] mx-auto bggiveback">
     <div className="max-w-[1103px] relative space-y-[34px] px-[74px] pt-[68px] pb-[40px] w-[100%] mx-auto bg-[#8F52FA]"
     style={{
      boxShadow: "10px 12px 0px 0px #3ACD92",
    }}
     >
        <h4 className="textStrock font-[Tomorrow] text-[59.49px] font-[700] leading-[110%] text-[#fff]">Pump Memes is giving back <span className="text-[96px] leading-[110%]">90%</span> to the Users </h4>
        <h3 className="textStrock font-[Tomorrow] leading-[104.034%] text-[108.767px] font-[700] text-[#FFCE00]">They're Not <br /> Like Us</h3>
        <div>
          <img src={givevect1} className="absolute right-[6%] top-[27%]" alt="" />
          <img src={givevect2} className="absolute right-[-5%] top-[3%]" alt="" />
          <img src={givevect3} className="absolute right-[44%] bottom-[5%]" alt="" />
          <img src={givevect4} className="absolute right-[5%] bottom-[-7%]" alt="" />
        </div>
     </div>
    </div>
  );
}

export default GivingBackSec;
