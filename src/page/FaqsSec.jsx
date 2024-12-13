import React, { useState } from "react";

import faqicn1 from "../assets/Svgs/faqicn (1).svg";
import faqicn2 from "../assets/Svgs/faqicn (2).svg";
import faqvet1 from "../assets/Svgs/faqsvt (1).svg";
import faqvet2 from "../assets/Svgs/faqsvt (2).svg";

const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9 ease, opacity 2s ease",
  };

  return (
    <div
      className={`border-b-[1.2px] border-solid ${
        isOpen ? "border-[#fff]" : "border-[#fff]"
      }  border-solid`}
    >
      <div
        className="flex justify-between items-center pt-[16px] xs:pt-[10px] xs:pb-[10] pb-[16px] gap-[25px] cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center justify-center gap-5 pt-[24px] xs:pt-[14px]">
          <div className="bg-[#FFF] w-[19px] h-[18px]"></div>
          <div className={`text-[24px] text-[#fff] font-[900]`}>{question}</div>
        </div>

        <h4
          className={`text-[18px] xs:text-[10px] rounded-full w-[26px] h-[26px] xs:h-[16px] xs:w-[16px]  flex items-center justify-center plusIcon  ${
            !isOpen
              ? "text-[#C3BABA] border-none rotate-0"
              : "rotate-[-180deg] border-none text-[#c3baba]"
          }`}
        >
          {isOpen ? (
            <>
              <div>
                <img src={faqicn1} alt="" />
              </div>
            </>
          ) : (
            <>
              <div>
                <img src={faqicn2} alt="" />
              </div>
            </>
          )}
        </h4>
      </div>
      <div style={contentStyles}>
        <div className="w-[100%] pr-[10px] pb-[12px]">
          <p
            className="pb-[10px]  text-[24px] text-[#fff] leading-[150%] font-[400]"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
    </div>
  );
};

const FaqSec = () => {
  const faqData = [
    {
      question: "What is Pump Memes?",
      answer:
        "Pump Memes is a community-driven Crypto Launchpad where you can easily launch and trade meme coins with unique features and enhanced functionalities.",
    },
    {
      question: "What is $PUMP?",
      answer:
        "Pump Memes is a community-driven Crypto Launchpad where you can easily launch and trade meme coins with unique features and enhanced functionalities.",
    },
    {
      question: "What makes Pump Memes different?",
      answer:
        "Pump Memes is a community-driven Crypto Launchpad where you can easily launch and trade meme coins with unique features and enhanced functionalities.",
    },
    {
      question: "How can I launch my own token?",
      answer:
        "Pump Memes is a community-driven Crypto Launchpad where you can easily launch and trade meme coins with unique features and enhanced functionalities.",
    },
    {
      question: "What rewards can I earn?",
      answer:
        "Pump Memes is a community-driven Crypto Launchpad where you can easily launch and trade meme coins with unique features and enhanced functionalities.",
    },
    {
      question: "Is the platform secure?",
      answer:
        "Pump Memes is a community-driven Crypto Launchpad where you can easily launch and trade meme coins with unique features and enhanced functionalities.",
    },
    {
      question: "What’s next for Pump Memes?",
      answer:
        "Pump Memes is a community-driven Crypto Launchpad where you can easily launch and trade meme coins with unique features and enhanced functionalities.",
    },
  ];
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <>
      <div className="bg-[#002D84] relative" id="faq">
        <div className=" w-[100%] max-w-[1155px] pt-[73px] mx-auto pb-[85px]">
          <div className="text-center ">
            <h2 className="text-[#fff] font-[Tomorrow] text-[55px] font-[500] pb-[10px]">
              FAQs
            </h2>
            <p className="text-[28px] font-[400] text-[#FFF] text-center">
              Check out our answers to the most common community questions
            </p>
            <img
              src={faqvet1}
              className="absolute left-[3%] top-[-6%]"
              alt=""
            />
            <img
              src={faqvet2}
              className="absolute right-[3%] top-[-6%]"
              alt=""
            />
          </div>
          <div className="2xl:w-[95%] xl:w-[95%] lg:w-[95%] md:w-[95%] sm:w-[95%] w-[100%] mx-auto">
            <div className="">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems === index}
                  handleClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSec;
