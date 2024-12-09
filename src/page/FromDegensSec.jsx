import React from "react";
import formdegimg from "../assets/images/fromimg.png";
import formvect1 from "../assets/Svgs/formvec (2).svg";
import formvect2 from "../assets/Svgs/formvec (1).svg";
function FromDegensSec() {
  return (
    <div className="w-[100%] pt-[68px] pb-[100px] relative  w-[100%] mx-auto bgFromdeg">
     <div className="max-w-[1103px]  space-y-[14px] w-[100%] mx-auto "
     
     >
          <img src={formvect2} className="absolute left-[0%] top-[30%]" alt="" />
        <h4 className="font-[Tomorrow] text-[55px] font-[700] leading-normal text-center text-[#000]">From Degens, For Degens</h4>
        <p className="leading-normal text-[28px] text-center font-[400] text-[#000]">We’re all gonna make it - All of us or none</p>
        <div className="flex justify-center pt-[40px]">
          <img src={formdegimg} className="" alt="" />
        </div>
        <img src={formvect1} className="absolute z-[6] right-[0%] bottom-[-4%]" alt="" />
     </div>
    </div>
  );
}

export default FromDegensSec;
