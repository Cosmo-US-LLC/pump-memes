import React from "react";
import givevect1 from "../../assets/images/givevec.png";
import givevect2 from "../../assets/Svgs/givevect (1).svg";
import givevect3 from "../../assets/Svgs/givevect (2).svg";
import givevect4 from "../../assets/Svgs/givevect (3).svg";

function MobileGivingBackSec() {
  return (
    <div className="w-[100%] py-[60px] mx-auto bggiveback">
     <div className=" relative space-y-[34px] px-[25px] pt-[50px] pb-[40px] w-[90%] mx-auto bg-[#8F52FA]"
     style={{
      boxShadow: "10px 12px 0px 0px #3ACD92",
    }}
     >
        <h4 className="textStrockmob font-[Tomorrow] text-[45px] font-[700] leading-[110%] text-[#fff]">Pump Memes is giving back <span className="text-[70px] leading-[110%]">90%</span> to the Users </h4>
        <h3 className="textStrockmob font-[Tomorrow] leading-[104.034%] text-[80px] font-[700] text-[#FFCE00]">They're Not <br /> Like Us</h3>
        <div className="min-h-[150px]  flex justify-center items-center">
          <img src={givevect1} className="max-h-[180px] absolute left-[15%]" alt="" />
          <img src={givevect2} className="absolute max-h-[80px] right-[-3%] top-[-3%]" alt="" />
          <img src={givevect3} className="absolute max-h-[80px] right-[5%] bottom-[17%]" alt="" />
          <img src={givevect4} className="absolute max-h-[100px] right-[5%] bottom-[-3%]" alt="" />
        </div>
     </div>
    </div>
  );
}

export default MobileGivingBackSec;
