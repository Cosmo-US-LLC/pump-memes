import react from "react";
import bigvector1 from "../assets/images/rdcardicn (8).png";
import bigvector2 from "../assets/images/rdcardicn (7).png";
import bigvector3 from "../assets/images/rdcardicn (6).png";
import bigvector4 from "../assets/images/rdcardicn (5).png";
import bigvector5 from "../assets/images/rdcardicn (4).png";
import bigvector6 from "../assets/images/rdcardicn (3).png";
import bigvector7 from "../assets/images/rdcardicn (2).png";
import bigvector8 from "../assets/images/rdcardicn (1).png";

function RewardsSection() {
  return (
  <div className="bg-[#C8F1FF] ">
    <div className=" bgrewardbg">
    <div className="w-[100%] py-[65px]  max-w-[1241px]  w-[100%] mx-auto ">
        <div className="max-w-[1047px] w-[100%] mx-auto">
            <div className="max-w-[689px] space-y-[22px] w-[100%] mx-auto mt-[14rem]">
                <h3 className="text-[55px] leading-[130%] text-[#000] font-[Tomorrow] font-[700] text-center">Daily and Weekly Community Rewards</h3>
                <p className="text-[28px] text-center text-[#000] leading-[120.102%]">A platform designed to earn, win and have fun.</p>
            </div>
        </div>
        <div className="max-w-[947px] min-h-[100vh] flex justify-between  pt-[100px] pb-[200px] w-[100%] m-atuo ">
           <div className="space-y-[6rem] max-w-[400px] w-[100%] ">
           <div className="max-w-[346px] w-[100%] relative">
                <div className="max-w-[257px]">
                    <h4 className="text-[28px] font-[600] font-[Tomorrow] text-end leading-[120.102%] text-[#000]">Daily Airdrops</h4>
                    <p className="text-[28px] font-[400] text-end leading-[120.102%] text-[#000]">Earn daily airdrops from coin launches.</p>
                </div>
                <div className="h-[150px]">
                <div className=" flex flex-col items-end absolute !top-[-13%] right-0">
                    <img src={bigvector2} className="mr-1" alt="" />
                    <img src={bigvector1} alt="" />
                </div>
                </div>
            </div>
            <div className="max-w-[380px]  w-[100%] relative">
                <div className="h-[160px] flex justify-center">
                <div className=" flex flex-col items-end absolute !top-[-13%]">
                    <img src={bigvector6} className="mb-[-70px]" alt="" />
                    <img src={bigvector5} alt="" />
                </div>
                </div>
                <div className="max-w-[380px] mx-auto">
                    <h4 className="text-[28px] font-[600] font-[Tomorrow] text-center leading-[120.102%] text-[#000]">Weekly <br />Leaderboards</h4>
                    <p className="text-[28px] font-[400] text-center leading-[120.102%] text-[#000]">Find out who made the most profit trading on Pump Memes</p>
                </div>
            </div>
           </div>
            <div className="space-y-[16rem] pt-[60px]">
            <div className="max-w-[446px] w-[100%] flex items-center  relative">
                <div className="h-[200px] w-[180px]">
                <div className=" flex flex-col items-center absolute !top-[-13%] ">
                    <img src={bigvector4} className="" alt="" />
                    <img src={bigvector3} alt="" />
                </div>
                </div>
                <div className="max-w-[257px]">
                    <h4 className="text-[28px] font-[600] font-[Tomorrow] text-start leading-[120.102%] text-[#000]">Daily Airdrops</h4>
                    <p className="text-[28px] font-[400] text-start leading-[120.102%] text-[#000]">Earn daily airdrops from coin launches.</p>
                </div>
            </div>
            <div className="max-w-[446px] flex justify-center  w-[100%] relative">
                <div className="h-[220px] w-[100%] flex justify-center">
                <div className=" flex flex-col items-start absolute !top-[-13%]">
                    <img src={bigvector8} className="ml-[80px]" alt="" />
                    <img src={bigvector7} alt="" />
                </div>
                </div>
                <div className="max-w-[400px]  absolute  w-[100%] right-[-55%] top-[12%] mx-auto">
                    <h4 className="text-[28px] font-[600] font-[Tomorrow] text-start leading-[120.102%] text-[#000]">Anti Rug System</h4>
                    <p className="text-[28px]  font-[400] text-start leading-[120.102%] text-[#000]">We have a system in place to prevent Rugs and Scams.</p>
                </div>
            </div>
            </div>
        </div>
  </div>
    </div>
  </div>
  );
}

export default RewardsSection;
