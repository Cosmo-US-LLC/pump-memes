import React from "react"
import bigvector8 from "../../assets/images/rdcardicn (1).png";
import bigvector7 from "../../assets/images/rdcardicn (2).png";
import bigvector6 from "../../assets/images/rdcardicn (3).png";
import bigvector5 from "../../assets/images/rdcardicn (4).png";
import bigvector4 from "../../assets/images/rdcardicn (5).png";
import bigvector3 from "../../assets/images/rdcardicn (6).png";
import bigvector2 from "../../assets/images/rdcardicn (7).png";
import bigvector1 from "../../assets/images/rdcardicn (8).png";

function MobileRewardsSection() {
  return (
  <div className="bg-[#C8F1FF] ">
    <div className=" bgrewardbgmob">
    <div className="w-[94%] py-[65px] mx-auto ">
        <div className="max-w-[1047px] w-[100%] mx-auto">
            <div className="space-y-[32px] w-[100%] mx-auto mt-[8.5rem]">
                <h3 className="text-[40px] tracking-[-0.8px] leading-[130%] text-[#000] font-[Tomorrow] font-[700] text-center">Daily and Weekly Community Rewards</h3>
                <p className="text-[25px] max-w-[273px] mx-auto text-center text-[#000] leading-[120.102%]">A platform designed to earn, win and have fun.</p>
            </div>
        </div>
        <div className=" min-h-[100vh]  pt-[110px] pb-[120px] w-[100%] m-auto ">
           <div className="space-y-[3.2rem] pb-[120px] max-w-[400px] w-[100%] ">
           <div className="max-w-[346px] w-[100%] relative">
                <div className="max-w-[257px]">
                    <h4 className="text-[25px] font-[600] font-[Tomorrow] text-end leading-[120.102%] text-[#000]">Daily Airdrops</h4>
                    <p className="text-[25px] font-[400] text-end leading-[120.102%] text-[#000]">Earn daily airdrops from coin launches.</p>
                </div>
                <div className="h-[150px]">
                <div className=" flex flex-col items-end absolute !top-[-13%] right-0">
                    <img src={bigvector2} className="mr-1" alt="" />
                    <img src={bigvector1} alt="" />
                </div>
                </div>
            </div>
            <div className="max-w-[446px] space-x-3 w-[100%] flex items-center pl-4 relative">
                <div className="w-[180px]">
                <div className=" flex flex-col items-center ">
                    <img src={bigvector4} className="max-h-[36px]" alt="" />
                    <img src={bigvector3} className="min-h-[50px]" alt="" />
                </div>
                </div>
                <div className="max-w-[257px] pt-[25px]">
                    <h4 className="text-[25px] font-[600] font-[Tomorrow] text-start leading-[120.102%] text-[#000]">Win Daily Prizes</h4>
                    <p className="text-[25px] font-[400] text-start leading-[120.102%] text-[#000]">Compete and win exclusive prizes.</p>
                </div>
            </div>
           
           </div>
            <div className="space-y-[6rem]">
            <div className="max-w-[340px] mx-auto w-[100%] relative">
                <div className="h-[160px] flex justify-center">
                <div className=" flex flex-col items-end absolute !top-[-13%]">
                    <img src={bigvector6} className="mb-[-70px]" alt="" />
                    <img src={bigvector5} alt="" />
                </div>
                </div>
                <div className="max-w-[290px] mx-auto">
                    <h4 className="text-[25px] font-[600] font-[Tomorrow] text-center leading-[120.102%] text-[#000]">Weekly <br />Leaderboards</h4>
                    <p className="text-[25px] font-[400] text-center leading-[120.102%] text-[#000]">Find out who made the most profit trading on Pump Memes.</p>
                </div>

            </div>
            <div className="max-w-[446px] space-x-3 flex  w-[100%] relative">
                <div className="h-[200px] w-[61%]">
                <div className=" flex flex-col items-start relative">
                    <img src={bigvector8} className="max-h-[43px] absolute !top-[1%] right-[2%]" alt="" />
                    <img src={bigvector7} alt="" />
                </div>
                </div>
                <div className="w-[100%] mx-auto  pr-[13px]">
                    <h4 className="text-[25px] max-w-[212px]  w-[100%]  font-[600] font-[Tomorrow] text-start leading-[120.102%] text-[#000]">Anti Rug System</h4>
                    <p className="text-[25px] max-w-[193px] w-[100%] font-[400] text-start leading-[120.102%] text-[#000]">We have a system in place to prevent Rugs and Scams.</p>
                </div>
            </div>
            </div>
        </div>
  </div>
    </div>
  </div>
  );
}

export default MobileRewardsSection;
