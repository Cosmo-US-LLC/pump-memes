import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/Svgs/Logo.svg";
import arwdwn from "../assets/Svgs/arrwdwn.svg";
import flag from "../assets/Svgs/eng.svg";
import menu from "../assets/Svgs/navmenu.svg";
import flg1 from "../assets/images/lan/flg (14).png";
import flg2 from "../assets/images/lan/flg (13).png";
import flg3 from "../assets/images/lan/flg (12).png";
import flg4 from "../assets/images/lan/flg (11).png";
import flg5 from "../assets/images/lan/flg (10).png";
import flg6 from "../assets/images/lan/flg (9).png";
import flg7 from "../assets/images/lan/flg (8).png";
import flg8 from "../assets/images/lan/flg (7).png";
import flg9 from "../assets/images/lan/flg (6).png";
import flg10 from "../assets/images/lan/flg (5).png";
import flg11 from "../assets/images/lan/flg (4).png";
import flg12 from "../assets/images/lan/flg (3).png";
import flg13 from "../assets/images/lan/flg (2).png";
import flg14 from "../assets/images/lan/flg (1).png";

const flagData = [
  { img: flg1, title: "English", code: "EN" },
  { img: flg2, title: "Japan", code: "JA" },
  { img: flg3, title: "Portugese", code: "PT" },
  { img: flg4, title: "German", code: "DE" },
  { img: flg5, title: "Korean", code: "KO" },
  { img: flg6, title: "Vietnamese", code: "VI" },
  { img: flg7, title: "French", code: "FR" },
  { img: flg8, title: "Norwegian", code: "NO" },
  { img: flg9, title: "Dutch", code: "NL" },
  { img: flg10, title: "Spanish", code: "ES" },
  { img: flg11, title: "Russian", code: "RU" },
  { img: flg12, title: "Turkey", code: "TR" },
  { img: flg13, title: "Italian", code: "IT" },
  { img: flg14, title: "Chinese", code: "ZH" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    img: flag,
    code: "EN",
  });

  const buttonRef = useRef(null);
  const languageRef = useRef(null);
  const menuRef = useRef(null);

  const handleScroll = (event, targetId, offset) => {
    event.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setMenuOpen(false);
    }
    if (
      languageRef.current &&
      !languageRef.current.contains(event.target) &&
      isOpen
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, isOpen])

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="fixed w-[100%] z-[99]">
      <div className="max-w-[1296px] relative 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%]  mx-auto bg-[#7D67BF] mt-[24px] mb-2 border border-[#000] 2xl:h-[90px] xl:h-[90px] lg:h-[90px] md:h-[90px] sm:h-[60px] h-[60px]  shadow-3xl flex justify-between items-center px-[17px]">
        <div onClick={(e) => handleScroll(e, "features", 90)}>
          <img
            className="2xl:max-w-[100%] xl:max-w-[100%] lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100px] max-w-[130px]"
            src={Logo}
            alt=""
          />
        </div>
        <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden justify-center items-center space-x-[30px]">
          <a
            href="#howtobuy"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "howtobuy", 90)}
          >
            How To Buy
          </a>
          <a
            href="#features"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "features", 90)}
          >
            Features
          </a>
          <a
            href="#tokenomics"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "tokenomics", 90)}
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "roadmap", 90)}
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "faq", 90)}
          >
            FAQ
          </a>

          <div className="" ref={languageRef}>
            <div
              className="flex items-center justify-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <img src={selectedLanguage.img} className=" max-h-[25px]" alt="Selected Flag" />
              <span className="text-[#fff] text-[16px] font-[600]">
              {selectedLanguage.code}
              </span>
              <img
                src={arwdwn}
                alt="Dropdown Arrow"
                className={`transform transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {isOpen && (
              <div className="w-[612px] bg-[#7D67BF] shadow-3xl px-[58px] pt-[45px] pb-[50px] border absolute top-[111%] right-0 border-[#000] z-10 space-y-[35px]">
                <h3 className="font-[700] text-[20.593px] font-[Tomorrow] uppercase text-[#FFF]">
                  Languages
                </h3>
                <div className="grid grid-cols-3 gap-y-[18px]">
                  {flagData.map((items) => (
                    <div
                      key={items.key}
                      className="flex space-x-2 items-center cursor-pointer"
                      onClick={() => handleLanguageSelect(items)}
                    >
                      <img
                        src={items.img}
                        alt=""
                        className=""
                      />
                      <h4 className="text-[#fff] text-[17.599px] leading-[110%] font-[500]">
                        {items.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between space-x-[24px]">
          <button className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden 2xl:w-[178px] xl:w-[178px] lg:w-[178px] md:w-[178px] sm:w-[178px] justify-center items-center w-[87.259px] 2xl:h-[56px] xl:h-[56px] lg:h-[56px] md:h-[56px] sm:h-[27px]  h-[27px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[12px]  text-[12px]  text-[#fff] bg-[#000] hover:bg-[#FFCE00] hover:text-[#000] border border-[#000]  font-[700]">
            Register for Beta
          </button>
          <button className="2xl:w-[178px] xl:w-[178px] lg:w-[178px] md:w-[178px] sm:w-[178px] w-[87.259px] 2xl:h-[56px] xl:h-[56px] lg:h-[56px] md:h-[56px] sm:h-[27px]  h-[27px] bg-[#FFCE00] hover:bg-[#000] hover:text-[#fff] border border-[#000] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[12px]  text-[12px] font-[700]">
            Join Presale
          </button>
          <button
            onClick={toggleMenu}
            ref={buttonRef}
            className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex justify-center items-center bg-[#000] px-2"
          >
            <img src={menu} alt="" />
          </button>
        </div>
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-[62px] left-0 w-[100%] mx-auto py-[30px] bg-[#7D67BF] text-center z-50"
          >
            <a
              href="#howtobuy"
              className="block text-[#fff] text-[16px] font-[700] py-2"
              onClick={(e) => handleScroll(e, "howtobuy", 90)}
            >
              How To Buy
            </a>
            <a
              href="#features"
              className="block text-[#fff] text-[16px] font-[700] py-2"
              onClick={(e) => handleScroll(e, "features", 90)}
            >
              Features
            </a>
            <a
              href="#tokenomics"
              className="block text-[#fff] text-[16px] font-[700] py-2"
              onClick={(e) => handleScroll(e, "tokenomics", 90)}
            >
              Tokenomics
            </a>
            <a
              href="#roadmap"
              className="block text-[#fff] text-[16px] font-[700] py-2"
              onClick={(e) => handleScroll(e, "roadmap", 90)}
            >
              Roadmap
            </a>
            <a
              href="#faq"
              className="block text-[#fff] text-[16px] font-[700] py-2"
              onClick={(e) => handleScroll(e, "faq", 90)}
            >
              FAQ
            </a>
            <div className="py-2" ref={languageRef}>
            <div
              className="flex items-center justify-center space-x-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <img src={selectedLanguage.img} className=" max-h-[18px]" alt="Selected Flag" />
              <span className="text-[#fff] text-[16px] font-[600]">
              {selectedLanguage.code}
              </span>
              <img
                src={arwdwn}
                alt="Dropdown Arrow"
                className={`transform transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            {isOpen && (
              <div className="w-[335px] bg-[#7D67BF] shadow-3xl px-[15px] pt-[25px] pb-[30px] border absolute top-[92%] right-0 border-[#000] z-10 space-y-[20px]">
                <h3 className="font-[700] text-[20.593px] font-[Tomorrow] uppercase text-[#FFF]">
                  Languages
                </h3>
                <div className="grid grid-cols-3 gap-y-[18px] gap-x-[2px]">
                  {flagData.map((items) => (
                    <div
                      key={items.key}
                      className="flex space-x-1 items-center cursor-pointer"
                      onClick={() => handleLanguageSelect(items)}
                    >
                      <img
                        src={items.img}
                        alt=""
                        className="max-h-[18px]"
                      />
                      <h4 className="text-[#fff] text-[14px] leading-[110%] font-[500]">
                        {items.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
