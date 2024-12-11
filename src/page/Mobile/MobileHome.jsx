import React from "react";

import MobileHeroSec from "./MobileHeroSec";
import MobileExplainerSection from "./MobileExplainerSection";
import MobileAlphaBoxesSec from "./MobileAlphaBoxesSec";
import MobileWhatIfPumpSec from "./MobileWhatIfPumpSec";
import MobileUsersSection from "./MobileUsersSection";
import MobileBigPotentialSec from "./MobileBigPotentialSec";
import MobileButNowSection from "./MobileButNowSection";


import MobileFromDegensSec from "./MobileFromDegensSec";
import MobileTopMemeSec from "./MobileTopMemeSec";
import MobilePumpnomicsSec from "./MobilePumpnomicsSec";
import MobileHowToBuy from "./MobileHowToBuy";

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
      <MobileTopMemeSec />
      <MobileHowToBuy/>
      <MobileFromDegensSec />
      <MobilePumpnomicsSec/>
    </div>
  );
}

export default MobileHome;
