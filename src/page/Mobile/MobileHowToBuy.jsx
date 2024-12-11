import React from "react";
import Card from "../../components/common/HowToBuyMobileCard";
import Button from "../../components/common/Button";
import HowToBuyBackground from "../../assets/images/howtobuypumpbackground.svg";
import PhantomIcon from "../../assets/images/how toBuyPhantant.svg";
import TrustWalletIcon from "../../assets/images/howToBuyTrust.svg";
import MetaMaskIcon from "../../assets/images/howToBuyCat.svg";
import HowToMakeBook from "../../assets/images/howToBuyBook.svg";
import TransactionIcon from "../../assets/images/howToBuyDoller.svg";
import ClaimIcon from "../../assets/images/howToiBuyCoine.svg";

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

const MobileHowToBuy = () => {
  return (
    <div
      id="howtobuy"
      className="relative flex flex-col items-center justify-center pt-16 pb-12 bg-center bg-cover"
      style={{
        backgroundImage: `url(${HowToBuyBackground})`,
      }}
    >
<div className="flex flex-col items-center justify-center mb-10">
  <p
    className="text-center text-[45px] font-[Tomorrow] font-bold text-[#FFF] w-[322px]"
    style={{
      WebkitTextStrokeWidth: "1.0600600242614746px",
      WebkitTextStrokeColor: "#000",
    }}
  >
    How To Buy
  </p>
  <span
    className="text-[#FFE524] mt-[-8px] text-center font-[Tomorrow] text-[45px] font-bold w-[322px]"
    style={{
      WebkitTextStrokeWidth: "1.0600600242614746px",
      WebkitTextStrokeColor: "#000",
    }}
  >
    $PUMP
  </span>
</div>


      <div className="flex flex-col gap-4 mb-6">
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

      <div className="flex flex-col gap-4 py-6">
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

      <div className="flex items-center justify-center gap-6 pt-4">
        <img src={PhantomIcon} alt="Phantom" className="w-16 h-16" />
        <img src={TrustWalletIcon} alt="Trust Wallet" className="w-16 h-16" />
        <img src={MetaMaskIcon} alt="MetaMask" className="w-16 h-16" />
      </div>
    </div>
  );
};

export default MobileHowToBuy;