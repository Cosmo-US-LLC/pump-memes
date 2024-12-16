import React, { useState } from "react";

import faqicn1 from "../../assets/Svgs/faqicn (1).svg";
import faqicn2 from "../../assets/Svgs/faqicn (2).svg";
import faqvet1 from "../../assets/Svgs/faqsvt (1).svg";
import faqvet2 from "../../assets/Svgs/faqsvt (2).svg";

const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9s ease, opacity 2s ease",
  };

  return (
    <div className={`border-b ${isOpen ? "border-[#fff]" : "border-[#fff]"}`}>
      <div
        className="flex items-center justify-between gap-4 py-4 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-start space-x-3">
        <div className="h-[19px] w-[19px] bg-[#fff] pt-[6px]"></div>
        <div className="text-[18px] text-[#fff] font-[700]">{question}</div>
        </div>
        <div
          className={`text-[14px] w-[20px] h-[20px] flex items-center justify-center plusIcon ${
            !isOpen ? "rotate-0" : "rotate-[-180deg]"
          }`}
        >
          {isOpen ? (
            <img src={faqicn1} alt="Open" />
          ) : (
            <img src={faqicn2} alt="Closed" />
          )}
        </div>
      </div>
      <div style={contentStyles} className="pb-3 pr-2">
        <p
          className="text-[14px] text-[#fff] leading-[20px]"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
    </div>
  );
};

const MobileFaqSec = () => {
  const faqData = [
    {
      question: "What is Pump Memes?",
      answer:
        "Pump Memes is a community-driven Crypto Launchpad where you can easily launch and trade meme coins with unique features and enhanced functionalities.",
    },
    {
      question: "What is $PUMP?",
      answer:
        "$PUMP is the native token of the Pump Memes ecosystem. Holders earn rewards from fees generated on the platform. 90% of the fees are automatically redistributed to all $PUMP holders, and a portion is used for buybacks and burns to support the token’s growth.",
    },
    {
      question: "What makes Pump Memes different?",
      answer:
        "Pump Memes stands out by being more secure and offering better features. Unlike other launchpads that keep all earnings, Pump Memes gives back 90% of the fees to the community.",
    },
    {
      question: "How can I launch my own token?",
      answer:
        "You can easily launch your token with just a few clicks on Pump Memes.",
    },
    {
      question: "What rewards can I earn?",
      answer:
        "Rewards are paid daily in SOL to all holders, based on the amount of $PUMP they hold.",
    },
    {
      question: "Is the platform secure?",
      answer:
        "Yes, Pump Memes uses 24/7 AI monitoring for security and is audited by top crypto firms to ensure safety.",
    },
    {
      question: "What’s next for Pump Memes?",
      answer:
        "We will soon release the Pump Memes Launchpad Beta, followed by the $PUMP token after the pre-sale ends. PUMP holders will start earning daily SOL rewards from day one.",
    },
  ];
  const [openItems, setOpenItems] = useState(null);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <div className="bg-[#002D84] py-8 px-4" id="faq">
      <div className="flex flex-col items-center mb-6 text-center">
        <h2 className="text-[#FFF] text-center font-[Tomorrow] text-[45px] font-[500] leading-normal">
          FAQs
        </h2>
        <p className="w-[293px] text-[25px] font-[400] text-[#FFF] text-center font-lato normal-case leading-normal">
          Check out our answers to the most common community questions
        </p>
        <img
          src={faqvet1}
          className="absolute left-[5%] top-[-5%] w-[40px]"
          alt="Decoration"
        />
        <img
          src={faqvet2}
          className="absolute right-[5%] top-[-5%] w-[40px]"
          alt="Decoration"
        />
      </div>
      <div className="w-full max-w-[340px] mx-auto">
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
  );
};

export default MobileFaqSec;
