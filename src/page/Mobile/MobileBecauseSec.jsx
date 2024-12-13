import React from "react"
import beacuesimg1 from "../../assets/images/besauseimg (1).png";
import beacuesimg2 from "../../assets/images/besauseimg (2).png";
import beacuesimg3 from "../../assets/images/besauseimg (3).png";
import beacuesvect from "../../assets/Svgs/because.svg";

function MobileBecauseSec() {
  return (
    <div className="bg-[#D2FB35] relative">
        <div className="bgnoneboxmob">
      <div className="  pt-[25px] pb-[25px]">
        <div className="pb-[15px]">
            <h3 className="font-[Tomorrow] text-[60px] font-[700] text-[#fff] bessttrok text-center">Because</h3>
        </div>
        <div className="w-[100%] space-y-[60px] w-[90%] mx-auto">
          <div className="w-[100%] space-y-[10px] ">
            <h3 className="leading-[120%] font-[Tomorrow] text-[45px] font-[700] text-center">We Want More of This..</h3>
           <div className="flex justify-center">
           <img className="w-[100%]" src={beacuesimg1} alt="" />
           </div>
          </div>
          <div className="w-[100%] space-y-[35px] pt-[50px]">
            <h3 className="leading-[120%] font-[Tomorrow] text-[45px] font-[700] text-center">..And None <br/> Of this</h3>
           <div className="flex justify-center">
           <img className="w-[100%]" src={beacuesimg2} alt="" />
           </div>
          </div>
        </div>
      </div>
      <img src={beacuesimg3} className="relative z-[10]  w-[100%]" alt="" />
      <img src={beacuesvect} className="absolute bottom-[0%] max-h-[112px] z-[4] right-0" alt="" />
        </div>
    </div>
  );
}

export default MobileBecauseSec;
