import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./page/home";
import MobileHome from "./page/Mobile/MobileHome";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative bg-[#EDE8DC] overflow-hidden">
      <div className=""> <Navbar /></div>
      <div className="">{isMobile ? <MobileHome /> : <Home />}</div>
    </div>
  );
}

export default App;
