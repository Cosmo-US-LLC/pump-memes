import React, { useState } from "react";
import arrwdwn from "../assets/Svgs/arrwdwn.svg";
import edit from "../assets/Svgs/edit.svg";
import herovector from "../assets/Svgs/herovector.svg";
import herovector2 from "../assets/Svgs/herovector2.svg";
import herovector3 from "../assets/Svgs/herovector3.svg";
import herovector4 from "../assets/Svgs/herovector4.svg";
import herocardimg1 from "../assets/images/herocard (1).png";
import herocardimg2 from "../assets/images/herocard (2).png";
import herocardimg3 from "../assets/images/herocard (3).png";
import walletcoin1 from "../assets/Svgs/walletcoin (4).svg";
import walletcoin2 from "../assets/Svgs/walletcoin (3).svg";
import walletcoin3 from "../assets/Svgs/walletcoin (2).svg";
import walletcoin4 from "../assets/Svgs/walletcoin (1).svg";
import walletcoin from "../assets/Svgs/walletcoin.svg";


const buttonsData = [
  {
    img: walletcoin1,
    text: "SOL",
  },
  {
    img: walletcoin2,
    text: "BNB",
  },
  {
    img: walletcoin3,
    text: "USDT",
  },
  {
    img: walletcoin4,
    text: "ETH",
  },
];

const coins = [
  { icon: walletcoin1 },
  { icon: walletcoin2 },
  { icon: walletcoin3 },
  { icon: walletcoin4 },
];

function HeroSection() {
  const [activeButton, setActiveButton] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState(coins[0].icon);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectCoin = (coin) => {
    setSelectedCoin(coin.icon);
    setIsOpen(false);
  };

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="herobg  pb-[8rem] 2xl:unset xl:relative lg:relative md:relative sm:relative relative w-[100%]">
      
      <div className="max-w-[1296px] 2xl:relative xl:unset lg:unset md:unset sm:unset unset w-[100%] flex justify-between mx-auto pt-[209px]">
        <img className="absolute top-[12%] left-[0%]" src={herovector} alt="" />
      
        <div className="max-w-[695px] relative w-[100%] pt-[87px]">
          <img
            className="absolute top-[-7%] right-[-5%]"
            src={herovector2}
            alt=""
          />
          <h4 className="text-[24px] font-[600] text-[#000] pb-[19px]">
            MORE PUMPS, MORE FUN
          </h4>
          <h2 className="text-[40px] font-[700] font-[Tomorrow] leading-[125%]">
            The Easiest And Most Fun Way  To Launch And Trade Meme Coins
          </h2>
          <p className="max-w-[641px] w-[100%] text-[20px] font-[400] text-[#000] py-[20px]">
          Pump Memes is a launchpad where users earn, not just the developers. It’s secure, fair, and built for the community. $PUMP holders get rewards in SOL from every coin launched on Pump Memes, all while reaching for the moon together!
          </p>
          <h3 className="text-[28px] font-[500] font-[Tomorrow] leading-[109.566%] pb-[30px]">
            Find the Next Crypto Moonshot
          </h3>
          <div className="flex space-x-[18px] max-w-[425px] w-[100%] py-[20px] px-[17px] bg-[#7D67BF] shadow-3xl">
            <div className="px-[10px] py-[8px] shadow-3xl flex flex-col items-center bg-[#FFD92F] border border-[#000]">
              <img className="rounded-full" src={herocardimg1} alt="" />
              <h3 className="text-[21.622px] font-[900] text-[#000]">
                Chill Guy
              </h3>
              <p className="text-[21.622px] font-[400] text-[#000]">$418M</p>
            </div>
            <div className="px-[10px] py-[8px] shadow-3xl flex flex-col items-center bg-[#FFD92F] border border-[#000]">
              <img className="rounded-full" src={herocardimg3} alt="" />
              <h3 className="text-[21.622px] font-[900] text-[#000]">
                SPX6900
              </h3>
              <p className="text-[21.622px] font-[400] text-[#000]">$574M</p>
            </div>
            <div className="px-[10px] py-[8px] shadow-3xl flex flex-col items-center bg-[#FFD92F] border border-[#000]">
              <img className="rounded-full" src={herocardimg2} alt="" />
              <h3 className="text-[21.622px] font-[900] text-[#000]">
              PNUT
              </h3>
              <p className="text-[21.622px] font-[400] text-[#000]">$1.24B</p>
            </div>
          </div>
          <img
            className="absolute bottom-[8%] right-[-2%]"
            src={herovector3}
            alt=""
          />
        </div>
        <div className="max-w-[483.742px] w-[100%] min-h-[665px] herowalletbg px-[35px] pb-[35px] pt-[45px] space-y-[20px]">
          <div>
            <h4 className="text-[#2AFF00] text-center text-[36px] font-[900]">
              $995,012 Raised
            </h4>
          </div>
          <div className="border border-[#FFCE00] py-[10px]">
            <p className="text-[16.491px] text-[#fff] font-[700] text-center">
              Price Increase In
            </p>
            <div className="flex justify-center space-x-[33px]">
              <div className="flex flex-col items-center">
                <p className="text-center text-[#FFCE00] text-[45.809px] font-[700] leading-[100%]">
                  00
                </p>
                <p className="text-center text-[10.994px] font-[400] text-[#fff]">
                  DAYS
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center text-[#FFCE00] text-[45.809px] font-[700] leading-[100%]">
                  20
                </p>
                <p className="text-center text-[10.994px] font-[400] text-[#fff]">
                  HOURS
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center text-[#FFCE00] text-[45.809px] font-[700] leading-[100%]">
                  37
                </p>
                <p className="text-center text-[10.994px] font-[400] text-[#fff]">
                  MINS
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center text-[#FFCE00] text-[45.809px] font-[700] leading-[100%]">
                  38
                </p>
                <p className="text-center text-[10.994px] font-[400] text-[#fff]">
                  SECS
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-x-[15px]">
            {buttonsData.map((item, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`w-[90px] h-[45.809px] bg-[#50505040] flex items-center justify-center space-x-[8px] ${
                  activeButton === index
                    ? "border border-[#FFCE00]"
                    : "border border-transparent"
                }`}
              >
                <img src={item.img} alt={item} />
                <span className="text-[12.826px] text-[#fff] font-[400]">
                  {item.text}
                </span>
              </button>
            ))}
          </div>
          <div className="">
            <label htmlFor="" className="text-[12.826px] font-[400] text-[#fff]">You Pay:</label>
            <div className="h-[56px] flex items-center justify-between border-[1.832px] border-[#50505040] p-[5px]">
              <div className="relative inline-block">
                <button
                  onClick={handleToggleDropdown}
                  className="px-[10px] h-[45.809px] bg-[#50505040] flex items-center space-x-[8px] border border-transparent "
                >
                  <img src={selectedCoin} alt="Selected Coin" />
                  <img
                    src={arrwdwn}
                    alt="Arrow Down"
                    className="w-[12px] h-[12px]"
                  />
                </button>
                {isOpen && (
                  <div className="absolute top-full mt-2 w-[60px] bg-[#2d2d2d] shadow-md z-10">
                    {coins.map((coin, index) => (
                      <button
                        key={index}
                        onClick={() => handleSelectCoin(coin)}
                        className="flex items-center justify-center w-full px-[10px] h-[45.809px] hover:bg-[#404040]"
                      >
                        <img src={coin.icon} alt={`Coin ${index + 1}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
             <div className="space-x-1">
             <input type="text" placeholder="250"  className="placeholder-[#fff] text-[#fff] text-end h-[45.809px] bg-[#000] outline-none m-0" />
             <span className="text-[#808080] text-[16.491px] font-[400]">USD</span>
             </div>
             <div className="flex items-cennter space-x-[3.66px]">
                  <button className="h-[45.809px] px-[6.875px] bg-[#50505040]">
                    <img src={edit} alt="" />
                  </button>
                  <div className="space-y-[3.66px]">
                    <button className="h-[21.072px] block bg-[#50505040] text-[#fff] w-[41.228px] text-[16.491px] font-[400] leading-[100%]">+</button>
                    <button className="leading-[100%] h-[21.072px] block bg-[#50505040] text-[#fff] w-[41.228px] text-[16.491px] font-[400]">-</button>
                  </div>
             </div>
            </div>
          </div>
          <div className="">
            <label htmlFor="" className="text-[12.826px] font-[400] text-[#fff]">You Receive:</label>
            <div className="h-[56px] flex items-center justify-between border-[1.832px] border-[#50505040] p-[5px]">
              <div className="relative inline-block">
                <button
                  className="px-[10px] h-[45.809px] bg-[#50505040] flex items-center space-x-[8px] border border-transparent "
                >
                  <img src={walletcoin} alt="Coin" />
                 <span className="text-[18px] text-[#fff]">=</span>
                </button>
              </div>
             <div className="space-x-1 w-[80%] flex items-center">
             <input type="text" placeholder="26039.75" className="placeholder-[#fff] w-[100%] text-[#fff] text-end h-[45.809px] bg-[#000] outline-none m-0" />
             <span className="text-[#808080] text-[16.491px] font-[400]">PUMP</span>
             </div>
            </div>
          </div>
            <div className="flex space-x-3 ites-center">
              <div>
                  <input type="checkbox" name="" className="inputwellat h-[36.647px] w-[36.647px] border bg-black border-[#FFCE00] " id="" />
              </div>
              <p className="text-[10.994px] font-[400] text-[#fff] leading-[110%]">I agree to the <a href="" className="underline">Terms of Use</a>and <a href="" className="underline">Privacy Policy,</a> certify that I have fully understood the <a href="" className="underline">Risks Disclaimer,</a> and confirm that I am not from a  <a href="" className="underline">Blocked Country</a></p>
            </div>
            <div>
              <button className="text-[16.491px] font-[700] text-[#000] bg-[#FFCE00] h-[45.809px] border-[1.214px ] border-[#000] w-[100%] hover:bg-[#000] hover:text-[#fff] hover:border hover:border-[#FFCE00]">Buy Now</button>
              <a href="" className="text-center flex justify-center text-[#fff] pt-[10px] text-[12.826px] font-[400] underline">Full Discount Chart</a>
            </div>
        </div>
        <img
          className="absolute bottom-[-5%] left-[35%] z-[1]"
          src={herovector4}
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroSection;
