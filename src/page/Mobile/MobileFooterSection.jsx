import { useState } from "react";
import footerLogo from "../../assets/Svgs/footerlogo.svg";
import social1 from "../../assets/Svgs/social1.svg";
import social2 from "../../assets/Svgs/social2.svg";
import social3 from "../../assets/Svgs/social3.svg";
import social4 from "../../assets/Svgs/social4.svg";
import social5 from "../../assets/Svgs/social5.svg";
import social6 from "../../assets/Svgs/social6.svg";

const languages = [
  { code: "EN", name: "English", flag: "https://flagcdn.com/w320/us.png" },
  { code: "JP", name: "Japanese", flag: "https://flagcdn.com/w320/jp.png" },
  { code: "PT", name: "Portuguese", flag: "https://flagcdn.com/w320/pt.png" },
  { code: "DE", name: "German", flag: "https://flagcdn.com/w320/de.png" },
  { code: "KO", name: "Korean", flag: "https://flagcdn.com/w320/kr.png" },
  { code: "VN", name: "Vietnamese", flag: "https://flagcdn.com/w320/vn.png" },
  { code: "FR", name: "French", flag: "https://flagcdn.com/w320/fr.png" },
  { code: "NO", name: "Norwegian", flag: "https://flagcdn.com/w320/no.png" },
  { code: "NL", name: "Dutch", flag: "https://flagcdn.com/w320/nl.png" },
  { code: "ES", name: "Spanish", flag: "https://flagcdn.com/w320/es.png" },
  { code: "RU", name: "Russian", flag: "https://flagcdn.com/w320/ru.png" },
  { code: "TR", name: "Turkish", flag: "https://flagcdn.com/w320/tr.png" },
  { code: "IT", name: "Italian", flag: "https://flagcdn.com/w320/it.png" },
  { code: "CN", name: "Chinese", flag: "https://flagcdn.com/w320/cn.png" },
];

function MobileFooterSection() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isCollapsed, setIsCollapsed] = useState(true); 

  const toggleCollapse = () => setIsCollapsed((prev) => !prev);  

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsCollapsed(true); 
  };

  return (
    <div className="flex flex-col items-center px-4 py-6 bg-black">
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
          <div className="flex flex-col w-[150px] gap-6"> {/* Adjusted width here */}
            <p className="text-[14px] text-white leading-[16px] font-[700]">
              How To Buy
            </p>
            <p className="text-[14px] text-white leading-[16px] font-[700]">
              Features
            </p>
            <p className="text-[14px] text-white leading-[16px] font-[700]">
              Tokenomics
            </p>
            <p className="text-[14px] text-white leading-[16px] font-[700]">
              Roadmap
            </p>
            <p className="text-[14px] text-white leading-[16px] font-[700]">
              FAQ
            </p>
           
          </div>
        </div>
        <div className="w-full max-w-[340px] mt-6 text-center flex flex-col items-end">
          <p className="text-[25px] text-white font-[500] leading-[20px] mb-4">
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
      <div className="relative inline-block w-full mt-2">
              <div
                className="flex items-center px-1 py-2 space-x-2 text-white bg-black rounded cursor-pointer"
                onClick={toggleCollapse}
              >
                <img
                  src={selectedLanguage.flag}
                  alt={`${selectedLanguage.name} Flag`}
                  className="w-5 h-3"
                />
                <span className="text-[14px]">{selectedLanguage.name}</span>
                <span className="text-sm">{isCollapsed ? "▼" : "▲"}</span>
              </div>
              <div
                className={`flex justify-center items-center rounded shadow-lg overflow-hidden transition-all duration-500 ease-in-out ${
                  isCollapsed ? "max-h-0" : "max-h-[300px]"
                }`}
              >
                <div className="flex flex-wrap w-full gap-4 px-2 mt-2 text-white">
                  {languages.map((language) => (
                    <div
                      key={language.code}
                      className="flex items-center  space-x-2 cursor-pointer w-[150px]"
                      onClick={() => selectLanguage(language)}
                    >
                      <img
                        src={language.flag}
                        alt={`${language.name} Flag`}
                        className="w-5 h-3"
                      />
                      <p>{language.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

      <div className="w-full max-w-[340px] mt-6 px-1">
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
