import React from "react";

import MobileFromDegensSec from "./MobileFromDegensSec";
import MobileTopMemeSec from "./MobileTopMemeSec";
import MobilePumpnomicsSec from "./MobilePumpnomicsSec";
import MobileHowToBuy from "./MobileHowToBuy";

function MobileHome() {
  return (
    <div>
      <MobileFromDegensSec />
      <MobileTopMemeSec />
      <MobilePumpnomicsSec/>
      <MobileHowToBuy/>
    </div>
  );
}

export default MobileHome;
