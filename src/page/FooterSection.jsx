import footerLogo from "../assets/Svgs/footerlogo.svg";
import social1 from "../assets/Svgs/social1.svg";
import social2 from "../assets/Svgs/social2.svg";
import social3 from "../assets/Svgs/social3.svg";
import social4 from "../assets/Svgs/social4.svg";
import social5 from "../assets/Svgs/social5.svg";
import social6 from "../assets/Svgs/social6.svg";
import flag from "../assets/Svgs/flag.svg";
import arrowDown from "../assets/Svgs/arrow-down.svg";

function FooterSection() {
    return (
        <div className="h-[490px] bg-[black] px-24 py-8 flex flex-col items-center">
            <div className="flex flex-row justify-between w-[80%] items-center">
                <div className="w-[703px]">
                    <img
                        className="mb-8"
                        src={footerLogo}
                        alt="footerLogo"
                    />
                    <h1 className="text-[32px] font-[400] leading-[40px] text-[white]">The Easiest And Most Fun Way To Launch And Trade Meme Coins</h1>
                    <div className="flex flex-row gap-8 mt-8 items-center">
                        <p className="text-[16px] text-[white] leading-[17px] font-[700]">How To Buy</p>
                        <p className="text-[16px] text-[white] leading-[17px] font-[700]">Features</p>
                        <p className="text-[16px] text-[white] leading-[17px] font-[700]">Tokenomics</p>
                        <p className="text-[16px] text-[white] leading-[17px] font-[700]">Roadmap</p>
                        <p className="text-[16px] text-[white] leading-[17px] font-[700]">FAQ</p>
                        <div className="flex flex-row gap-4 items-center">
                            <img
                                className=""
                                src={flag}
                                alt="flag"
                            />
                            <p className="text-[16px] text-[white] leading-[17px] font-[600]">EN</p>
                            <img
                                className=""
                                src={arrowDown}
                                alt="arrowDown"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-[28px] text-[white] font-[400] leading-[30px] mb-4">OUR SOCIALS</p>
                    <div className="flex flex-row gap-4">
                        <img
                            className=""
                            src={social1}
                            alt="social1"
                        />
                        <img
                            className=""
                            src={social2}
                            alt="social2"
                        />
                        <img
                            className=""
                            src={social3}
                            alt="social3"
                        />
                    </div>
                    <div className="flex flex-row gap-4 mt-4">
                        <img
                            className=""
                            src={social4}
                            alt="social4"
                        />
                        <img
                            className=""
                            src={social5}
                            alt="social5"
                        />
                        <img
                            className=""
                            src={social6}
                            alt="social6"
                        />
                    </div>
                </div>
            </div>
            <div className="w-[80%] mt-8">
                <p className="text-[#B4A5A5] text-[14px] font-[400] leading-[18px]">
                    Disclaimer: Trading cryptocurrencies, including meme coins like $PUMP, is highly speculative and comes with significant risk. The value of meme coins can be extremely volatile, and there is a possibility that you may lose some or all of your investment. Only trade with money you can afford to lose. The content provided on this platform is for entertainment purposes only and should not be considered financial advice. Legal Notice: $PUMP is a meme coin with no inherent value or expectation of financial return. It is meant purely for fun and enjoyment. Trading meme coins can be risky, and their prices can fluctuate wildly. Be sure to conduct your own research before making any decisions. By trading or purchasing $PUMP, you confirm that you understand and accept the risks involved. This platform is not intended for use in any jurisdiction where its use would violate local laws or regulations.
                </p>
            </div>
            <p className="absolute bottom-4 text-[#B4A5A5] text-[12px] font-[400] leading-[18px]">
                Copyright 2024 PUMP MEME | All rights reserved.
            </p>
        </div>
    );
}

export default FooterSection;
