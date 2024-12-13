import welvector6 from "../assets/images/welbotmvec1.png";
import welvector5 from "../assets/images/welvector (1).png";
import welvector4 from "../assets/images/welvector (2).png";
import welvector3 from "../assets/images/welvector (3).png";
import welvector2 from "../assets/images/welvector (4).png";
import welvector1 from "../assets/images/welvector (5).png";
import welvector7 from "../assets/images/welvector (6).png";
import welpara1 from "../assets/images/wlpara (1).png";
import welpara2 from "../assets/images/wlpara (2).png";
import welcardicn3 from "../assets/Svgs/welcardicn (1).svg";
import welcardicn2 from "../assets/Svgs/welcardicn (2).svg";
import welcardicn1 from "../assets/Svgs/welcardicn (3).svg";

function WelcomeSe() {
  return (
   <div>
     <div className="bg-[#F6C929] ">
      <div className="py-[52px] bgiwelcome relative ">
          <img className="absolute right-0 top-[2%]" src={welvector2} alt="" />
          <img className="absolute left-0 top-[10%]" src={welvector1} alt="" />
          <img className="absolute right-0 top-[20%]" src={welvector3} alt="" />
        <div className="space-y-[30px] w-[100%] max-w-[1229px] mx-auto">
          <h3 className="text-[#000] leading-[120%] text-[64px] font-[700] font-[Tomorrow] text-center">
            Welcome to the <br /> Pump Memes Ecosystem
          </h3>
          <p className="text-[28px] pt-[10px] text-[#000] font-[700] text-center leading-[120.102%]">
            Your all-in-one crypto platform for
          </p>
          <div className="max-w-[524px] mx-auto w-[100%] bg-[#fff] rounded-[50px] py-[6px]">
            <p className="text-[28px] font-[700] text-[#000] text-center">
              Pumps, Fun, and Rewards
            </p>
          </div>
          <div className="flex items-center py-[40px]">
            <img src={welpara1} alt="" />
            <div className="pb-[10px] w-[100%]">
              <p className="text-[#000] text-center text-[28px] font-[700]">
                Pump Memes is more than just a launchpad, it’s a complete
                ecosystem designed to make the crypto market accessible for
                everyone in seconds. It gives you the tools to launch tokens
                fast and build a strong, active community to take your coin to
                the moon.
              </p>
            </div>
            <img src={welpara2} alt="" />
          </div>
          <div className="flex justify-between relative max-w-[991.07px] w-[100%] mx-auto">
            <div className="w-[100%] max-w-[289.067px] px-[30px] py-[45px] welcardbg space-y-[20px]">
                <h3 className="text-[33px] font-[600] font-[Tomorrow] leading-[120.102%] pb-[15px] text-center text-[#000]">Launch</h3>
                <p className="text-[25px] font-[400] text-center text-[#000]">Launch your token on Pump Memes in just 2 clicks</p>
                <div className="flex justify-center">
                <img src={welcardicn1} alt="" />
                </div>
            </div>
            <div className="w-[100%] max-w-[289.067px] px-[30px] py-[45px] welcardbg space-y-[20px]">
                <h3 className="text-[33px] font-[600] font-[Tomorrow] leading-[120.102%] pb-[15px] text-center text-[#000]">Community</h3>
                <p className="text-[25px] font-[400] text-center text-[#000]">Build an excited and engaged community around your coin.</p>
                <div className="flex justify-center">
                <img src={welcardicn2} alt="" />
                </div>
            </div>
            <div className="w-[100%] max-w-[289.067px] px-[30px] py-[45px] welcardbg space-y-[20px]">
                <h3 className="text-[33px] font-[600] font-[Tomorrow] leading-[120.102%] pb-[15px] text-center text-[#000]">Pumps</h3>
                <p className="text-[25px] font-[400] text-center text-[#000]">Promote and pump your token to new heights.</p>
                <div className="flex justify-center">
                <img src={welcardicn3} alt="" />
                </div>
        <img className="absolute right-[-13%] bottom-[-70%]" src={welvector7} alt="" />
            </div>
          </div>
        </div>
        <img className="absolute left-0 bottom-[13%]" src={welvector4} alt="" />
        <img className="absolute right-0 bottom-[26%]" src={welvector5} alt="" />
      </div>

    </div>
      <img className="w-[100%]" src={welvector6} alt="" />
   </div>
  );
}

export default WelcomeSe;
