import { useState } from "react";
import footerLogo from "../../assets/Svgs/footerlogo.svg";
import social1 from "../../assets/Svgs/social1.svg";
import social2 from "../../assets/Svgs/social2.svg";
import social3 from "../../assets/Svgs/social3.svg";
import social4 from "../../assets/Svgs/social4.svg";
import social5 from "../../assets/Svgs/social5.svg";
import social6 from "../../assets/Svgs/social6.svg";

const languages = [
  { code: "EN", name: "English", flag: "https://flagcdn.com/w320/gb.png" },
  { code: "FR", name: "French", flag: "https://flagcdn.com/w320/fr.png" },
  { code: "DE", name: "German", flag: "https://flagcdn.com/w320/de.png" },
  { code: "ES", name: "Spanish", flag: "https://flagcdn.com/w320/es.png" },
];

function MobileFooterSection() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  return (
    <div className="bg-[black] px-4 py-6 flex flex-col items-center">
      <div className="w-full max-w-[340px] flex flex-col">
        <img
          className="mb-4 w-[138px] h-[60px]"
          src={footerLogo}
          alt="footerLogo"
        />
        <h1 className="text-[25px] font-[400] leading-[31.134px] text-white font-tomorrow w-[350px]">
          The Easiest And Most Fun
          <br /> Way To Launch And Trade Meme Coins
        </h1>
      </div>
      <div className="flex gap-[20px]">
        <div className="flex mt-6">
          <div className="flex flex-col w-[150px] gap-6">
            <p className="text-[14px] text-[white] leading-[16px] font-[700]">
              How To Buy
            </p>
            <p className="text-[14px] text-[white] leading-[16px] font-[700]">
              Features
            </p>
            <p className="text-[14px] text-[white] leading-[16px] font-[700]">
              Tokenomics
            </p>
            <p className="text-[14px] text-[white] leading-[16px] font-[700]">
              Roadmap
            </p>
            <p className="text-[14px] text-[white] leading-[16px] font-[700]">
              FAQ
            </p>
            <div className="relative inline-block">
              <div
                className="flex items-center py-2 space-x-2 text-white bg-black rounded cursor-pointer"
                onClick={toggleDropdown}
              >
                <img
                  src={selectedLanguage.flag}
                  alt={`${selectedLanguage.name} Flag`}
                  className="w-5 h-3"
                />
                <span>{selectedLanguage.code}</span>
                <span className="text-sm">▼</span>
              </div>

              {isOpen && (
                <ul className="absolute bg-white border border-gray-300 rounded shadow-lg mt-22 w-22">
                  {languages.map((language) => (
                    <li
                      key={language.code}
                      className="flex items-center px-4 py-2 space-x-2 cursor-pointer hover:bg-gray-100"
                      onClick={() => selectLanguage(language)}
                    >
                      <img
                        src={language.flag}
                        alt={`${language.name} Flag`}
                        className="w-5 h-3"
                      />
                      <span>{language.code}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="w-full max-w-[340px] mt-6 text-center flex flex-col items-end">
          <p className="text-[25px] text-[white] font-[500] leading-[20px] mb-4">
            OUR SOCIALS
          </p>
          <div className="flex justify-center gap-4">
            <img
              src={social1}
              alt="social1"
              className="w-[45.545px] h-[45.545px]"
            />
            <img
              src={social2}
              alt="social2"
              className="w-[45.545px] h-[45.545px]"
            />
            <img
              src={social3}
              alt="social3"
              className="w-[45.545px] h-[45.545px]"
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <img
              src={social4}
              alt="social4"
              className="w-[45.545px] h-[45.545px]"
            />
            <img
              src={social5}
              alt="social5"
              className="w-[45.545px] h-[45.545px]"
            />
            <img
              src={social6}
              alt="social6"
              className="w-[45.545px] h-[45.545px]"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[340px] mt-6">
        <p className="text-[#B4A5A5] text-[12px] font-[400] leading-[18px]">
          Disclaimer: Trading cryptocurrencies, including meme coins like $PUMP,
          is highly speculative and comes with significant risk. The value of
          meme coins can be extremely volatile, and there is a possibility that
          you may lose some or all of your investment. Only trade with money you
          can afford to lose. The content provided on this platform is for
          entertainment purposes only and should not be considered financial
          advice. Legal Notice: $PUMP is a meme coin with no inherent value or
          expectation of financial return. It is meant purely for fun and
          enjoyment. Trading meme coins can be risky, and their prices can
          fluctuate wildly. Be sure to conduct your own research before making
          any decisions. By trading or purchasing $PUMP, you confirm that you
          understand and accept the risks involved. This platform is not
          intended for use in any jurisdiction where its use would violate local
          laws or regulations.
        </p>
      </div>
      <p className="mt-4 text-[#B4A5A5] text-[10px] font-[400] leading-[14px] text-center">
        Copyright 2024 PUMP MEMES | All rights reserved.
      </p>
    </div>
  );
}

export default MobileFooterSection;
