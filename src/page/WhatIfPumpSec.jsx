import whaticn2 from "../assets/Svgs/whaticn (1).svg";
import whaticn1 from "../assets/Svgs/whaticn (2).svg";
import whatvectors2 from "../assets/images/whatvectors (1).png";
import whatvectors1 from "../assets/images/whatvectors (2).png";
import whaticn4 from "../assets/Svgs/box-yellow.svg";
function WhatIfPumpSec() {
  return (
    <div className="w-[100%] py-[87px]  max-w-[1241px] w-[100%] mx-auto ">
      <div className="space-y-[20px]">
        <h3 className="font-[Tomorrow] text-[55px] font-[700]">
          What If Pump.Fun Had A Coin?
        </h3>
        <p className="text-[25px]  font-[400] text-[#000]">
          Pump.fun is a platform that makes it easy to launch new meme coins,
          similar to PUMP Memes. It attracted millions of users and became the
          fastest crypto project to generate $100 million in revenue in just 7
          months, with all transactions trackable on the blockchain. However, it
          also faced heavy criticism from the crypto community, which we will
          take a closer look at.
        </p>
        <div className="flex justify-between items-center pt-[24px]">
          <div className="relative max-w-[582px] w-[100%]">
            <div
              style={{
                backgroundColor: "#2478AF",
                boxShadow: "8px 10px 0px 0px #F26C2F",
              }}
              className="max-w-[545px]  py-[42px] max-h-[540px] min-h-[540px] w-[100%] space-y-[19px] px-[25px]"
            >
              <img
                className="absolute top-[-5%] z-10 max-w-[582px] w-[100%] left-[-2%]"
                src={whatvectors1}
                alt=""
              />
              <div className="flex justify-center">
                <img src={whaticn1} alt="" />
              </div>
              <h3 className="text-[60px] font-[700] text-center text-[#fff]">
                230 Million USD  In Revenue
              </h3>
              <p className="text-[25px] font-[700] text-center text-[#fff] leading-[128%]">
                Pump.fun publicly generated over $230 million in revenue in 10
                months, with $88 million in November 2024 alone.
              </p>
              <p
  className="text-[16px] flex justify-center font-[700] text-[#fff] leading-[168.421%]  "
>
  Check the revenue <span className="underline cursor-pointer relative z-[50] pl-[3px]">here</span>
</p>

            </div>
          </div>
          <div className="relative max-w-[582px] w-[100%]">
          <img
                className="absolute top-[-5%] z-10 max-w-[582px] w-[100%] left-[-2%]"
                src={whatvectors1}
                alt=""
              />
            <img
              className="absolute top-[-13%] z-[1] !max-w-[600px] w-[100%] left-[-2%]"
              src={whatvectors2}
              alt=""
            />

            <div
              className="max-w-[545px] relative z-[9]  max-h-[540px] min-h-[540px] py-[42px] w-[100%] space-y-[19px] px-[15px]"
              style={{
                backgroundColor: "#FFCE00",
                boxShadow: "8px 10px 0px 0px #F26C2F",
              }}
            >
              <div className="flex justify-center">
                <img src={whaticn2} className="max-h-[79px]" alt="" />
              </div>
              <h3 className="text-[60px] font-[700] text-center  tracing-[-1.2px]">
                Top 100 On Coinmarketcap?
              </h3>
              <p className="text-[25px] font-[700] text-center  leading-[128%] pt-4">
                Pump.fun could have easily landed their token in the top 100 on
                CoinMarketCap*, generating incredible returns for early buyers.
              </p>
              <p className="text-[16px] font-[600] text-center w-[442px] mx-auto leading-[20px] font-lato text-black">
  *This assumption is based on their earnings, <br /> popularity, and user base.
</p>

            </div>
          </div>
        </div>
        <img
              className="absolute top-[-13%] z-[10] !max-w-[600px]  w-[30px] h-[30px] right-[-2%] bottom-[0%]"
              src={whaticn4}
              alt=""
            />
      </div>
    </div>
  );
}

export default WhatIfPumpSec;
