import { useState } from "react";
import footerLogo from "../assets/Svgs/footerlogo.svg";
import social1 from "../assets/Svgs/social1.svg";
import social2 from "../assets/Svgs/social2.svg";
import social3 from "../assets/Svgs/social3.svg";
import social4 from "../assets/Svgs/social4.svg";
import social5 from "../assets/Svgs/social5.svg";
import social6 from "../assets/Svgs/social6.svg";
import { motion } from "framer-motion";

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

function FooterSection() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="bg-[black] w-[100%]">
      <div className="h-full w-[100%] max-w-[1155px] pt-[73px] mx-auto  py-8 flex flex-col items-center">
        <div className="flex flex-row justify-between w-[100%] items-center">
          <div className="w-[703px]">
            <img className="mb-8" src={footerLogo} alt="footerLogo" />
            <h1 className="text-[32px] font-normal leading-[40px] text-white font-tomorrow">
              The Easiest And Most Fun Way
              <br /> To Launch And Trade Meme Coins
            </h1>
            <div className="flex flex-row items-center gap-8 mt-8">
              <p className="text-[16px] text-[white] leading-[17px] font-[700]">
                How To Buy
              </p>
              <p className="text-[16px] text-[white] leading-[17px] font-[700]">
                Features
              </p>
              <p className="text-[16px] text-[white] leading-[17px] font-[700]">
                Tokenomics
              </p>
              <p className="text-[16px] text-[white] leading-[17px] font-[700]">
                Roadmap
              </p>
              <p className="text-[16px] text-[white] leading-[17px] font-[700]">
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
              </div>
            </div>
          </div>
          <div>
            <p className="text-[28px] text-[white] font-[400] leading-[30px] mb-4">
              OUR SOCIALS
            </p>
            <div className="flex flex-row gap-4">
              <img className="" src={social1} alt="social1" />
              <img className="" src={social2} alt="social2" />
              <img className="" src={social3} alt="social3" />
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <img className="" src={social4} alt="social4" />
              <img className="" src={social5} alt="social5" />
              <img className="" src={social6} alt="social6" />
            </div>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-row gap-4 flex-wrap mt-4"
          >
            {languages.map((language) => (
              <div
                key={language.name}
                onClick={() => {
                  selectLanguage(language);
                }}
                className="flex flex-row items-center justify-start gap-4 w-[150px] mt-4 cursor-pointer"
              >
                <img
                  src={language.flag}
                  alt={`${language.name} Flag`}
                  className="w-[35px] h-[35px] rounded-full"
                />
                <p className="text-[white] text-[17px] font-[500] leading-[19px]">
                  {language.name}
                </p>
              </div>
            ))}
          </motion.div>
        )}
        <div className="w-[100%] mt-8">
          <p className="text-[#B4A5A5] text-[14px] font-[400] leading-[18px]">
            Disclaimer: Trading cryptocurrencies, including meme coins like
            $PUMP, is highly speculative and comes with significant risk. The
            value of meme coins can be extremely volatile, and there is a
            possibility that you may lose some or all of your investment. Only
            trade with money you can afford to lose. The content provided on
            this platform is for entertainment purposes only and should not be
            considered financial advice. Legal Notice: $PUMP is a meme coin with
            no inherent value or expectation of financial return. It is meant
            purely for fun and enjoyment. Trading meme coins can be risky, and
            their prices can fluctuate wildly. Be sure to conduct your own
            research before making any decisions. By trading or purchasing
            $PUMP, you confirm that you understand and accept the risks
            involved. This platform is not intended for use in any jurisdiction
            where its use would violate local laws or regulations.
          </p>
        </div>
        <p className="absolute bottom-4 text-[#B4A5A5] text-[12px] font-[400] leading-[18px]">
          Copyright 2024 PUMP MEMES | All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default FooterSection;
