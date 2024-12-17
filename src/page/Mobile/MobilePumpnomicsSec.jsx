import React from "react";
import Pumpnomicsimg from "../../assets/images/scalepumpnomics.png";
import Pumpnomvect1 from "../../assets/Svgs/pumpvect (6).svg";
import Pumpnomvect2 from "../../assets/Svgs/pumpvect (5).svg";
import Pumpnomvect3 from "../../assets/Svgs/pumpvect (4).svg";
import Pumpnomvect4 from "../../assets/Svgs/pumpvect (3).svg";
import Pumpnomvect5 from "../../assets/Svgs/pumpvect (2).svg";
import Pumpnomvect6 from "../../assets/Svgs/pumpvect (1).svg";
import Pumpnomvect7 from "../../assets/Svgs/pumpvect (7).svg";

function MobilePumpnomicsSec() {
  return (
    <div id="tokenomics" className="w-full pt-[40px] relative mx-auto bg-[#F6C929]">
      <div className="flex flex-col items-center w-full max-w-lg pb-10 mx-auto space-y-[43px]">
        <h4 className="font-[Tomorrow] text-[#000] text-[45px] font-bold leading-none text-center w-[347px]">
          Pumpnomics
        </h4>
        <div className="flex justify-center pt-4">
          <img src={Pumpnomicsimg} className="w-[88%]" alt="Pumpnomics" />
        </div>
      </div>
      <div className="bg-[#AFCD3A] border-[1px] border-[#000]">
        <div className="flex flex-row justify-center w-full gap-4 py-6">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center border-[0.38px] border-black bg-white shadow-[1.52px_1.52px_0px_0px_#000]">
              <img
                src={Pumpnomvect4}
                alt="Sol"
                className="h-[32.671px] p-[4.938px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3
                className="font-[Tomorrow] text-[#A387FF] font-bold text-[20.894px] leading-none"
                style={{
                  WebkitTextStrokeWidth: "0.7597845792770386px",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                Sol
              </h3>
              <p className="text-[#000] font-[Lato] text-[7.598px] font-bold leading-none uppercase">
                Solana Token
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center border-[0.38px] border-black bg-white shadow-[1.52px_1.52px_0px_0px_#000]">
              <img
                src={Pumpnomvect5}
                alt="Sol"
                className="h-[32.671px] p-[4.938px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3
                className="font-[Tomorrow] text-[#FF8000] font-bold text-[20.894px] leading-none"
                style={{
                  WebkitTextStrokeWidth: "0.7597845792770386px",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                2.5B
              </h3>
              <p className="text-[#000] font-[Lato] text-[7.598px] font-bold leading-none uppercase">
                Total Supply
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center border-[0.38px] border-black bg-white shadow-[1.52px_1.52px_0px_0px_#000]">
              <img
                src={Pumpnomvect6}
                alt="Sol"
                className="h-[32.671px] w-[39px] p-[4.938px]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <h3
                className="font-[Tomorrow] text-[#FDBE31] font-bold text-[20.894px] leading-none"
                style={{
                  WebkitTextStrokeWidth: "0.7597845792770386px",
                  WebkitTextStrokeColor: "#000",
                }}
              >
                PUMP
              </h3>
              <p className="text-[#000] font-[Lato] text-[7.598px] font-bold leading-none uppercase">
                Ticker
              </p>
            </div>
          </div>
        </div>
      </div>
      <img src={Pumpnomvect1} className="absolute left-0 top-[14%] w-12" alt="Decoration" />
      <img className="absolute left-6 bottom-[12%] w-12" src={Pumpnomvect2} alt="Decoration" />
      <img className="absolute right-6 bottom-[11%] w-10 h-[47px]" src={Pumpnomvect3} alt="Decoration" />
      <img className="absolute right-0 top-[-4%] right-[-0%] w-12" src={Pumpnomvect7} alt="Decoration" />
    </div>
  );
}

export default MobilePumpnomicsSec;
