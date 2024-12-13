import React from "react";
import formdegimg from "../../assets/images/fromimg.png";
import formvect1 from "../../assets/Svgs/formvec (2).svg";
import formvect2 from "../../assets/Svgs/formvec (1).svg";

function MobileFromDegensSec() {
  return (
    <div className=" pt-[40px] pb-[60px] relative mobileDegensBG">
      <div className="w-full h-[818px] flex flex-col items-center space-y-4 mx-auto">
        <img
          src={formvect2}
          className="absolute left-0 top-[27%] w-[71.358px] h-[92px]"
          alt=""
        />

        <h4 className="w-[340px] text-[#000] text-center font-[Tomorrow] text-[45px] font-[700] leading-normal">
          From Degens, For Degens
        </h4>

        <p className="w-[302px] text-[#000] text-center font-[Lato] text-[25px] font-[400] leading-normal">
          We’re all gonna make it, <br /> All of us or none
        </p>

        <div className="flex justify-center pt-[30px] md:pt-[40px]">
          <img
            src={formdegimg}
            className="w-[357px] h-[339.638px] flex-shrink-0"
            alt=""
          />
        </div>

        <img
          src={formvect1}
          className="absolute z-[6] right-0 bottom-[6%] w-[162.965px] h-[197.233px]"
          alt=""
        />
      </div>
    </div>
  );
}

export default MobileFromDegensSec;
