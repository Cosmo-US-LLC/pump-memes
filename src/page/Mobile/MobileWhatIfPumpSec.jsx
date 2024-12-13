import React from "react"
import whaticn2 from "../../assets/Svgs/whaticn (1).svg";
import whaticn1 from "../../assets/Svgs/whaticn (2).svg";
import whatvectors2 from "../../assets/images/whatvectorsmob (1).png";
import whatvectors1 from "../../assets/images/whatvectors (2).png";
function MobileWhatIfPumpSec() {
  return (
    <div className="w-[100%] pb-[79px] pt-[48px]  w-[90%] mx-auto ">
      <div className="space-y-[40px]">
        <h3 className="font-[Tomorrow] text-[45px] text-center font-[500]">
          What If <br /> Pump.Fun <br /> Had A Coin?
        </h3>
        <p className="text-[20px] font-[400] text-center leading-[110%] text-[#000]">
          Pump.fun is a platform that makes it easy to launch new meme coins,
          similar to PUMP Memes. It attracted millions of users and became the
          fastest crypto project to generate $100 million in revenue in just 7
          months, with all transactions trackable on the blockchain. However, it
          also faced heavy criticism from the crypto community, which we will
          take a closer look at.
        </p>
        <div className="space-y-[50px]">
         <div className="relative px-[15px] w-[100%]">
         <div
            style={{
              backgroundColor: "#2478AF",
              boxShadow: "8px 10px 0px 0px #F26C2F",
            }}
            className="max-w-[545px]  py-[10px]  min-h-[388px] max-h-[388px] w-[100%] space-y-[15px] px-[25px]"
          >
            <img
              className="absolute top-[-6.5%]  w-[106%] left-[1%]"
              src={whatvectors1}
              alt=""
            />
            <div className="flex justify-center">
              <img src={whaticn1} className="max-h-[50px]" alt="" />
            </div>
            <h3 className="text-[40px] font-[700] tracking-[-0.8px] leading-[115%] text-center text-[#fff]">
              230 Million USD <br /> In Revenue
            </h3>
            <p className="text-[18px] font-[700] text-center text-[#fff] leading-[120%]">
              Pump.fun publicly generated over $230 million in revenue in 10
              months, with $88 million in November 2024 alone.
            </p>
            <a
              href=""
              className="text-[16px] flex justify-center font-[700] text-[#fff] leading-[168.421%]"
            >
              Check the revenue here
            </a>
          </div>
         </div>
          <div className="relative px-[15px] w-[100%]">
           
          <div
            className="max-w-[545px]  py-[10px]  min-h-[380px] max-h-[320px] w-[100%] space-y-[15px] px-[18px]"
            style={{
              backgroundColor: "#FFCE00", 
              boxShadow: "8px 10px 0px 0px #F26C2F",
            }}
          >
               <img
              className="absolute top-[10%] z-[1] w-[108%] left-[1%]"
              src={whatvectors2}
              alt=""
            />
            <div className="flex justify-center">
              <img src={whaticn2} className="max-h-[55px]" alt="" />
            </div>
            <h3 className="text-[40px] font-[700] text-center leading-[115%]  tracing-[-0.8px]">
              Top 100 On Coinmarketcap?
            </h3>
            <p className="text-[18px] font-[700] text-center  leading-[120%] ">
              Pump.fun could have easily landed their token in the top 100 on
              CoinMarketCap*, generating incredible returns for early buyers.
            </p>
            <p className="text-[16px] font-[700] text-center w-[100%] mx-auto leading-[105.263%]">
              *This assumption is based on their earnings, popularity, and user
              base.
            </p>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileWhatIfPumpSec;
