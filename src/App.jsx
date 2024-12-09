import react from "react";
import Navbar from "./components/navbar";
import Home from "./page/home";
import Footer from "./components/footer";

function App() {
  return (
    <div className="relative bg-[#EDE8DC]">
      <div className="">
        <Navbar />
      </div>
      <div className="">
        <Home />
      </div>
      {/* <div className="">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
