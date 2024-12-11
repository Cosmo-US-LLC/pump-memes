import React from "react"
import Usericons4 from "../../assets/Svgs/usericons (1).svg";
import Usericons3 from "../../assets/Svgs/usericons (2).svg";
import Usericons2 from "../../assets/Svgs/usericons (3).svg";
import Usericons1 from "../../assets/Svgs/usericons (4).svg";
import Userimg from "../../assets/images/userimg.png";

function MobileUsersSection() {
  return (
  <div className="bguserSec !bg-cover">
      <div className="w-[90%] py-[76px] mx-auto ">
     <div className="space-y-[30px]">
     <div className="  w-[100%] ">
        <div className="space-y-[9px]">
        <h3 className="font-[Tomorrow] text-center text-[80px] leading-[100%] font-[700] text-[#fff]">
        2.3M <br /> Users 
        </h3>
        <h4 className="font-[Tomorrow] text-center text-[40px] font-[700] text-[#fff]">in 10 months!</h4>
        </div>
        <p className="text-[25px] text-center pt-[30px] pb-[15px] font-[400] text-[#fff]">
        Compared to
        </p>
        <div className="gap-[20px] grid grid-cols-2 max-w-[360px] w-[100%] mx-auto">
          <div className="shadow-3xl flex justify-center flex-col items-center h-[249px] w-[170.247px] bg-[#FFD92F] border border-[#000] space-y-[9px]">
            <h4 className="font-[Tomorrow] text-[#000] text-center text-[18.505px] font-[700] ">WIF</h4>
            <img className="" src={Usericons1} alt="" />
            <div className="space-y-[-1px]">
              <h4 className="text-[18px] font-[900] text-center text-[#000]">108,000</h4>
              <p className="text-[18px] font-[400] text-center text-[#000]">Holders</p>
            </div>
          </div>
          <div className="shadow-3xl flex justify-center flex-col items-center h-[249px] w-[170.247px] bg-[#FFD92F] border border-[#000] space-y-[9px]">
            <h4 className="font-[Tomorrow] text-[#000] text-center text-[18.505px] font-[700] ">PEPE</h4>
            <img src={Usericons2} alt="" />
            <div className="space-y-[-1px]">
              <h4 className="text-[18px] font-[900] text-center text-[#000]">308,000</h4>
              <p className="text-[18px] font-[400] text-center text-[#000]">Holders</p>
            </div>
          </div>
          <div className="shadow-3xl flex justify-center flex-col items-center h-[249px] w-[170.247px] bg-[#FDBE31] border border-[#000] space-y-[7px]">
            <h4 className="font-[Tomorrow] text-[#000] text-center text-[18.505px] font-[700] ">BONK</h4>
            <img src={Usericons3} alt="" />
            <div className="space-y-[-1px]">
              <h4 className="text-[18px] font-[900] text-center text-[#000]">820,000</h4>
              <p className="text-[18px] font-[400] text-center text-[#000]">Holders</p>
            </div>
          </div>
          <div className="shadow-3xl flex justify-center flex-col items-center h-[249px] w-[170.247px] bg-[#FDBE31] border border-[#000] space-y-[7px]">
            <h4 className="font-[Tomorrow] text-[#000] text-center text-[18.505px] font-[700] ">SHIB</h4>
            <img src={Usericons4} alt="" />
            <div className="space-y-[-1px]">
              <h4 className="text-[18px] font-[900] text-center text-[#000]">1,400,000</h4>
              <p className="text-[18px] text-center font-[400] text-[#000]">Holders</p>
            </div>
          </div>
        </div>
       
      </div>
      <div className="max-w-[400px] pt-[2rem] space-y-[40px] w-[100%] ">
        <img className="" src={Userimg} alt="" />
        <div className="flex justify-center">
        <button className="w-[212px] h-[50px] bg-[#FFCE00] hover:bg-[#000] hover:text-[#fff] border border-[#000] text-[18px] font-[700]">Buy $PUMP</button>
        </div>
      </div>
     </div>
    </div>
  </div>
  );
}

export default MobileUsersSection;
