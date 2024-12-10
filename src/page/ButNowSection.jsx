import React from "react";
import butvector6 from "../assets/Svgs/buticons (1).svg";
import butvector1 from "../assets/Svgs/buticons (2).svg";
import butvector2 from "../assets/Svgs/buticons (3).svg";
import butvector3 from "../assets/Svgs/buticons (4).svg";
import butvector4 from "../assets/Svgs/buticons (5).svg";
import butvector5 from "../assets/Svgs/buticons (6).svg";

const cardData = [
    {
      bgClass: "Butcardbg1",
      textColor: "#000",
      title: "Community-Powered:  ",
      description: "It's never been easier to launch a token and build a community",
      imgSrc: butvector1,
    },
    {
      bgClass: "Butcardbg2",
      textColor: "#000",
      title: "Automatic LP Lock:",
      description: "Liquidity is locked for at least  1 week to ensure a safe launch",
      imgSrc: butvector2,
    },
    {
      bgClass: "Butcardbg3",
      textColor: "#000",
      title: "Live Support:",
      description: "Our expert support team  is always here to help",
      imgSrc: butvector3,
    },
    {
      bgClass: "Butcardbg4",
      textColor: "#fff",
      title: "24/7 AI Monitoring",
      description: "Our AI-powered rating system monitors every project",
      imgSrc: butvector4,
    },
    {
      bgClass: "Butcardbg5",
      textColor: "#000",
      title: "Fair Platform",
      description: "5% max allocation of total  supply during launch curve",
      imgSrc: butvector5,
    },
    {
      bgClass: "Butcardbg6",
      textColor: "#ffff",
      title: "Anti-Spam Measures:",
      description: "Build a real community  without constant spam",
      imgSrc: butvector6,
    },
  ];
  

function ButNowSection() {
  return (
    <div className="bg-[#34AEF0]" id="features">
      <div className="w-[100%] pt-[65px] pb-[50px]  max-w-[1241px] w-[100%] mx-auto ">
        <div className="space-y-[11px]">
          <h3 className="font-[Tomorrow] text-[96px] text-[#fff] leading-[70%] font-[700] text-center">
            But Now <br />{" "}
            <span className="text-[55px] leading-[100%]">
              Pump Memes Is Here
            </span>
          </h3>
          <p className="text-[25px] text-[#fff] font-[400] text-center">
            With a launchpad featuring new enhanced features and its own $PUMP
            coin
          </p>
        </div>
        <div className="mx-auto max-w-[1168px] w-[100%] grid grid-cols-2 pt-[52px] gap-x-[70px] gap-y-[2rem]">
        {cardData.map((card, index) => (
              <div
                key={index}
                className={`${card.bgClass} flex items-center pb-[1rem] px-[50px] max-w-[548.43px] w-[100%] h-[178px] space-x-3`}
              >
                <img
                  className="max-h-[80px]"
                  src={card.imgSrc}
                  alt={`Card ${index + 1}`}
                />
                <div>
                  <h3
                    className="font-[Tomorrow] text-[28px] font-[700] leading-[109.566%]"
                    style={{ color: card.textColor }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[28px] font-[400] leading-[109.566%]"
                    style={{ color: card.textColor }}
                  >
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center pt-[36px]">
        <button className="w-[212px] h-[50px] bg-[#FFCE00] hover:bg-[#000] hover:text-[#fff] border border-[#000] text-[18px] font-[700]">Buy $PUMP</button>
        </div>
      </div>
    </div>
  );
}

export default ButNowSection;
