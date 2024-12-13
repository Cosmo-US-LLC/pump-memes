import brands from "../assets/Svgs/brands.svg";
import dots from "../assets/Svgs/dots.svg";
import message from "../assets/Svgs/message.svg";
import ml1 from "../assets/Svgs/ml-1.png";
import ml2 from "../assets/Svgs/ml-2.png";
import ml3 from "../assets/Svgs/ml-3.png";

function LaunchPadSection() {
  return (
    <div className="h-[1254px] bg-[#B3EDAC] py-24 flex flex-col items-center">
      <h2 className="w-[639px] text-[#000] text-center font-[Tomorrow] text-[55px] font-[700] leading-[normal]">
        Crypto’s New Favorite <br /> Coin Launchpad
      </h2>
      <p className="w-[666px] text-[#000] text-center font-[Lato] text-[25px] font-[400] leading-[normal] mt-10">
        Featured by top media outlets for building
        <br /> the most exciting and community driven platform
      </p>
      <img className="mt-12" src={brands} alt="brands" />
      <img className="mt-12" src={dots} alt="dots" />
      <div className="flex flex-row items-center gap-16 mt-12">
        <div className="relative">
          <img className="w-[347px] h-[263px]" src={ml1} alt="message" />
          <div className="absolute w-[70%] top-[21%] left-[10%]">
            <p className="w-[285px] h-[46px] flex-shrink-0 text-[#000] font-[Lato] text-[16px] font-[400] leading-[16px]">
              Pump Memes is the better alternative to Pump Fun, offering a more
              rewarding <br /> and secure platform that will be available on all
              major chains.
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="w-[347px] h-[263px]" src={ml2} alt="message" />
          <div className="absolute w-[70%] top-[21%] left-[12%]">
            <p className="w-[269px] h-[46px] flex-shrink-0 text-[#000] font-[Lato] text-[16px] font-[400] leading-[16px]">
              Unlike Pump Fun, Pump Memes is the real deal, eliminating all
              existing problems while making it easier, more exciting, and safer
              to launch a coin.
            </p>
          </div>
        </div>
        <div className="relative">
          <img className="w-[347px] h-[263px]" src={ml3} alt="message" />
          <div className="absolute w-[70%] top-[21%] left-[12%]">
            <p className="w-[251px] h-[46px] flex-shrink-0 text-[#000] font-[Lato] text-[16px] font-[400] leading-[16px]">
              What if Pump.fun had its own coin? Well, the wait is over with
              $PUMP! Pump Memes is here to shake up the crypto space like never
              before.
            </p>
          </div>
        </div>
      </div>
      <div className="self-center mt-16">
        <button className="border border-[2px] border-[black] bg-[#FFCE00] h-[50px] w-[192px] text-[18px] font-[700] leading-[21px]">
          BUY $PUMP
        </button>
      </div>
    </div>
  );
}

export default LaunchPadSection;
