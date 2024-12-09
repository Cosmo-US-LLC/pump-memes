import topBorder from "../assets/Svgs/border.svg";
import brackets from "../assets/Svgs/brackets.svg";
import clipBoards from "../assets/Svgs/clipboards.svg";

function StandForFun() {

    return (
        <div className="relative h-[1120px] bg-[#C8F1FF] py-24 flex flex-col items-center">
            <img
                className="absolute top-0 left-0 w-full"
                src={topBorder}
                alt="top border"
            />
            <h2 className="mt-12 text-[56px] font-[700] leading-[66px] text-center">We Stand for Fun,<br /> Not Harm</h2>
            <p className="mt-10 text-[28px] font-[400] leading-[33px] text-center">Pump Memes is based — no creeps allowed, sorry! ;)</p>
            <div>

            </div>
            <img
                className="absolute top-[33%] left-[22%] w-[55%]"
                src={brackets}
                alt="brackets"
            />
            <h2 className="mt-12 text-[55px] font-[700] leading-[66px] text-center text-[#3F44A5]">We create a safe and cool space<br /> for crypto meme traders</h2>
            <img
                className="mt-[6%]"
                src={clipBoards}
                alt="clipboards"
            />
        </div>
    );
}

export default StandForFun;
