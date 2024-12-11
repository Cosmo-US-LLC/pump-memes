import React from "react"

import MobileHeroSec from "./MobileHeroSec";
import MobileExplainerSection from "./MobileExplainerSection";
import MobileAlphaBoxesSec from "./MobileAlphaBoxesSec";
import MobileWhatIfPumpSec from "./MobileWhatIfPumpSec";
import MobileUsersSection from "./MobileUsersSection";
import MobileBigPotentialSec from "./MobileBigPotentialSec";
import MobileButNowSection from "./MobileButNowSection";



function MobileHome() {
  return (
    <div>
      <MobileHeroSec />
      <MobileExplainerSection />
      <MobileAlphaBoxesSec/>
      <MobileWhatIfPumpSec/>
      <MobileUsersSection/>
      <MobileBigPotentialSec/>
      <MobileButNowSection/>
    </div>
  );
}

export default MobileHome;
