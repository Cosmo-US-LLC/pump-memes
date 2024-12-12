import topBorder from "../../assets/Svgs/border.svg";
import leftBrackets from "../../assets/Svgs/left-braket.svg";
import rightBrackets from "../../assets/Svgs/right-braket.svg";
import clipBoards from "../../assets/Svgs/clipboard-for-mobile.svg";

function MobileStandForFun() {
  return (
    <div className="relative bg-[#C8F1FF] py-16 flex flex-col items-center">
      <img
        className="absolute top-0 left-0 w-full"
        src={topBorder}
        alt="top border"
      />
      <h2 className="mt-10 text-[45px] font-[700] text-center font-[Tomorrow] text-[#000] w-[291px] leading-[56px]">
        We Stand for Fun,
        <br /> Not Harm
      </h2>
      <p className="mt-8 text-[25px] font-[400] text-center font-[Lato] text-[#000] w-[334px] leading-normal">
        Pump Memes is based — no creeps allowed, sorry! ;)
      </p>

      <img
        className="absolute top-[31%] left-[-30px] w-[50%] h-[291px]"
        src={leftBrackets}
        alt="brackets"
      />
      <img
        className="absolute top-[31%] right-[-30px] w-[50%] h-[291px]"
        src={rightBrackets}
        alt="brackets"
      />

      <h2 className="mt-12 text-[35px] font-[700] text-center font-[Tomorrow] text-[#3F44A5] w-[259px] leading-[40px]">
        We create a safe and cool space
        <br /> for crypto meme traders
      </h2>

      <img
        className="mt-[120px] w-[90%] max-w-[300px]"
        src={clipBoards}
        alt="clipboards"
      />
    </div>
  );
}

export default MobileStandForFun;
