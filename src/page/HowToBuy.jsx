import React from "react";
import Card from "../components/common/HowToBuyCard";
import Button from "../components/common/Button";
import HowToBuyBackground from "../assets/Svgs/howtobuy/howtobuypumpbackground.svg";
import PhantomIcon from "../assets/images/howtobuy/how toBuyPhantant.svg";
import TrustWalletIcon from "../assets/images/howtobuy/howToBuyTrust.svg";
import MetaMaskIcon from "../assets/images/howtobuy/howToBuyCat.svg";
import HowToMakeBook from "../assets/images/howtobuy/howToBuyBook.svg";
import TransactionIcon from "../assets/images/howtobuy/howToBuyDoller.svg";
import ClaimIcon from "../assets/images/howtobuy/howToiBuyCoine.svg";

const cardData = [
  {
    step: "Step 1",
    title: "Connect your Wallet",
    description:
      "Use Phantom Wallet, Metamask or Trust Wallet to connect your wallet in seconds.",
    icon: HowToMakeBook,
    bgColor: "bg-yellow-400",
  },
  {
    step: "Step 2",
    title: "Confirm Transaction",
    description: "You can buy $PUMP with SOL, USDT, ETH, BNB.",
    icon: TransactionIcon,
    bgColor: "bg-white",
  },
  {
    step: "Step 3",
    title: "Claim Tokens",
    description:
      "Congratulations! You can claim your $PUMP once the pre-sale ends.",
    icon: ClaimIcon,
    bgColor: "bg-yellow-400",
  },
];

const HowToBuy = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-screen min-h-screen bg-center bg-cover"
      style={{
        backgroundImage: `url(${HowToBuyBackground})`,
      }}
    >
      <div className="flex flex-col items-center justify-center mb-[60px]">
        <p
          className="text-center text-[55px] text-[#FFF] font-bold capitalize"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#000",
            fontFamily: "Tomorrow, sans-serif",
          }}
        >
          How To Buy
        </p>
        <span
          className="text-[#FFE524] text-center text-[55px] font-bold mt-[-10px]"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#000",
            fontFamily: "Tomorrow, sans-serif",
          }}
        >
          $PUMP
        </span>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            step={card.step}
            title={card.title}
            description={card.description}
            icon={card.icon}
            bgColor={card.bgColor}
          />
        ))}
      </div>

      <div className="flex gap-6 mb-6">
        <Button
          label="Buy $PUMP"
          variant="primary"
          onClick={() => alert("Buy $PUMP clicked!")}
        />
        <Button
          label="Do you need help?"
          variant="secondary"
          onClick={() => alert("Help clicked!")}
        />
      </div>

      <div className="flex items-center justify-center gap-10">
        <img src={PhantomIcon} alt="Phantom" className="h-[76px] w-[84px]" />
        <img src={TrustWalletIcon} alt="Trust Wallet" className="h-[76px] w-[84px]" />
        <img src={MetaMaskIcon} alt="MetaMask" className="h-[76px] w-[84px]" />
      </div>
    </div>
  );
};

export default HowToBuy;
