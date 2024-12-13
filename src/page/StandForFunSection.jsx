import topBorder from "../assets/Svgs/border.svg";
import leftBrackets from "../assets/Svgs/left-braket-d.png";
import rightBrackets from "../assets/Svgs/right-braket-d.png";
import clipBoards from "../assets/Svgs/clipboards.svg";

function StandForFun() {
  return (
    <div className="relative h-[1120px] bg-[#C8F1FF] py-24 flex flex-col items-center">
      <img
        className="absolute top-0 left-0 w-full"
        src={topBorder}
        alt="top border"
      />
      <h2 className="mt-14 w-[514px] text-[#000] text-center font-[Tomorrow] text-[55px] font-[700] leading-[normal]">
        We Stand for Fun,
        <br /> Not Harm
      </h2>
      <p className="mt-6 text-[#000] text-center font-[Lato] text-[28px] font-[400] leading-[normal]">
        Pump Memes is based — no creeps allowed, sorry! ;)
      </p>
      <img
        className="absolute top-[31%] right-[17%] w-[90px] h-[197px]"
        src={rightBrackets}
        alt="brackets"
      />
      <img
        className="absolute top-[31%] left-[16%] w-[90px] h-[197px]"
        src={leftBrackets}
        alt="brackets"
      />
      <h2 className="mt-12 w-[933px] text-[#3F44A5] text-center font-[Tomorrow] text-[56px] font-[700] leading-[normal]">
        We create a safe and cool space
        <br /> for crypto meme traders
      </h2>
      <img className="mt-[6%]" src={clipBoards} alt="clipboards" />
    </div>
  );
}

export default StandForFun;
