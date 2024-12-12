import brands from "../../assets/Svgs/brands-for-mobile.svg";
import dots from "../../assets/Svgs/dots.svg";
import cloud from "../../assets/Svgs/cloud-for-mobile.svg";
import ml1 from "../../assets/Svgs/mobile-ml-1.svg";
import ml2 from "../../assets/Svgs/mobile-ml-2.svg";
import ml3 from "../../assets/Svgs/mobile-ml-3.svg";

function MobileLaunchPadSection() {
  return (
    <div className="bg-[#B3EDAC] py-16 flex flex-col items-center relative">
      <h2 className="w-[332px] text-[#000] text-center font-[Tomorrow] text-[45px] font-[700] leading-[56px]">
        Crypto’s New <br /> Favorite Coin Launchpad
      </h2>
      <p className="w-[312px] text-[#000] text-center font-[Lato] text-[25px] font-[400] leading-normal  mt-6">
        Featured by top media outlets for building <br />
        the most exciting and community driven platform
      </p>
      <img className="mt-12 w-[90%] max-w-[300px]" src={brands} alt="brands" />
      {/* <img className="mt-8 w-[30px] h-[30px] " src={dots} alt="dots" /> */}
      <div className="flex flex-col items-center gap-8 px-4 mt-10">
        <div className="relative w-full max-w-[300px]">
          <img className="w-full" src={ml1} alt="message" />
          <div className="absolute w-[70%] top-[15%] left-[15%]">
            <p className="font-[400] text-[14px] leading-[20px] text-center">
              Pump Memes is the better alternative to Pump Fun, offering a more
              rewarding and secure platform that will be available on all major
              chains.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-[300px]">
          <img className="w-full" src={ml2} alt="message" />
          <div className="absolute w-[70%] top-[15%] left-[15%]">
            <p className="font-[400] text-[14px] leading-[20px] text-center">
              Unlike Pump Fun, Pump Memes is the real deal, eliminating all
              existing problems while making it easier, more exciting, and safer
              to launch a coin.
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-[300px]">
          <img className="w-full" src={ml3} alt="message" />
          <div className="absolute w-[70%] top-[15%] left-[15%]">
            <p className="font-[400] text-[14px] leading-[20px] text-center">
              What if Pump.fun had its own coin? Well, the wait is over with
              $PUMP! Pump Memes is here to shake up the crypto space like never
              before.
            </p>
          </div>
        </div>
      </div>
      <div className="self-center mt-12">
        <button className="border border-[2px] border-[black] bg-[#FFCE00] h-[40px] w-[160px] text-[14px] font-[700]">
          BUY $PUMP
        </button>
      </div>
      <div className="absolute w-[70%] bottom-[-20px] z-10">
        <img className="w-full" src={cloud} alt="message" />
      </div>
    </div>
  );
}

export default MobileLaunchPadSection;
