import bigvector3 from "../../assets/Svgs/bigvectors (1).svg";
import bigvector1 from "../../assets/Svgs/bigvectors (2).svg";
import bigvector2 from "../../assets/Svgs/bigvectors (3).svg";

function MobileBigPotentialSec() {
  return (
  <div className="bg-[#FFE524]">
      <div className="w-[90%] py-[65px] mx-auto ">
     <div className="">
     <div className="space-y-[20px] max-w-[100%] w-[100%] bg-[#009B95] px-[10px] py-[50px] border border-black " 
     style={{
      boxShadow: "10px 12px 0px 0px #3ACD92",
    }}
     >
        <div className="space-y-[-20px]">
        <h3 className="font-[Tomorrow] textStrock text-[#FFCE00] text-center relative text-[70px] leading-[110%] font-[800]">
        BIG <span className="absolute right-[12%] top-[-2%]"><img className="max-h-[80px]" src={bigvector1} alt="" /></span> Potential but no <br /> Coin! <span><img className="absolute right-[5%] max-h-[90px] bottom-0" src={bigvector2} alt="" /></span>
        </h3>
      </div>
    </div>
      <div className="max-w-[100%] relative w-[100%] px-[10px] pt-[30px] pb-[50px] flex items-center bg-[#3ACD92] border border-black "
      style={{
        boxShadow: "10px 12px 0px 0px #25FFA8",
      }}
      >
      <h3 className="text-[33px] font-[700] font-[#000] text-center">Nowhere for the community to ape in and benefit from the huge hype and success they helped build.</h3>
      <img className="absolute right-[-0px] max-h-[80px] bottom-[-10%] rotate-[30deg]" src={bigvector3} alt="" />
      </div>
     </div>
    </div>
  </div>
  );
}

export default MobileBigPotentialSec;
