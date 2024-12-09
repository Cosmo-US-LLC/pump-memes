import bigvector3 from "../assets/Svgs/bigvectors (1).svg";
import bigvector1 from "../assets/Svgs/bigvectors (2).svg";
import bigvector2 from "../assets/Svgs/bigvectors (3).svg";

function BigPotentialSec() {
  return (
  <div className="bg-[#FFE524]">
      <div className="w-[100%] py-[65px]  max-w-[1241px] w-[100%] mx-auto ">
     <div className="flex justify-between">
     <div className="space-y-[20px] max-w-[50%] w-[100%] bg-[#009B95] px-[72px] py-[46px] border border-black " 
     style={{
      boxShadow: "10px 12px 0px 0px #3ACD92",
    }}
     >
        <div className="space-y-[-20px]">
        <h3 className="font-[Tomorrow] textStrock text-[#FFCE00] relative text-[108.767px] leading-[90.864%] font-[700]">
        BIG <span className="absolute left-[210px] top-0"><img src={bigvector1} alt="" /></span> Potential but no <br /> Coin! <span><img className="absolute right-[0px] bottom-0" src={bigvector2} alt="" /></span>
        </h3>
      </div>
    </div>
      <div className="max-w-[51%] relative w-[100%] flex items-center bg-[#3ACD92] border border-black px-[90px]"
      style={{
        boxShadow: "10px 12px 0px 0px #25FFA8",
      }}
      >
      <h3 className="text-[43px] max-w-[363px] w-[100%] mx-auto font-[700] font-[#000] text-center">Nowhere for the community to ape in and benefit from the huge hype and success they helped build.</h3>
      <img className="absolute right-[-55px] bottom-[30%]" src={bigvector3} alt="" />
      </div>
     </div>
    </div>
  </div>
  );
}

export default BigPotentialSec;
