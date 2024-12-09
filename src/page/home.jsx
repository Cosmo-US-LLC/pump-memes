import react from "react"
import HeroSection from "./HeroSection";
import ExplainerSection from "./ExplainerSection";
import WhatIfPumpSec from "./WhatIfPumpSec";
import UsersSection from "./UsersSection";
import BigPotentialSec from "./BigPotentialSec";
import ButNowSection from "./ButNowSection";
import BecauseSec from "./BecauseSec";
import WelcomeSe from "./WelcomeSe";
import RewardsSection from "./RewardsSection";
import FutureSection from "./FutureSection";
import StandForFun from "./StandForFunSection";
import LaunchPadSection from "./LaunchPadSection";
import FooterSection from "./FooterSection";
import CopyBestTradersBanner from "./CopyBestTradersBanner";
import ComparisonTable from "./ComparisonTable";
import HowToBuy from "./HowToBuy";
import LiveStreamsSection from "./LiveStreamsSection";

function Home() {
  return (
    <div>
      <HeroSection />
      <ExplainerSection />
      <WhatIfPumpSec />
      <UsersSection />
      <BigPotentialSec />
      <ButNowSection />
      <BecauseSec />
      <WelcomeSe />
      <RewardsSection />
      <HowToBuy />
      <LiveStreamsSection />
      <CopyBestTradersBanner />
      <ComparisonTable />
      <FutureSection />
      <StandForFun />
      <LaunchPadSection />
      <FooterSection />
    </div>
  );
}

export default Home;
