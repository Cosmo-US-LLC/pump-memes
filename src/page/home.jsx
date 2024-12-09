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

function Home() {
  return (
    <div>
          <HeroSection />
          <ExplainerSection />
          <WhatIfPumpSec />
          <UsersSection />
          <BigPotentialSec />
          <ButNowSection/>
          <BecauseSec/>
          <WelcomeSe/>
          <RewardsSection />
    </div>
  );
}

export default Home;
