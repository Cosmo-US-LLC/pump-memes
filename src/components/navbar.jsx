import react from "react"
import Logo from "../assets/Svgs/Logo.svg" 
import flag from "../assets/Svgs/eng.svg" 
import arwdwn from "../assets/Svgs/arrwdwn.svg" 

function Navbar() {
  return (
    <div className="fixed w-[100%] z-[99]">
        <div className="max-w-[1296px] w-[100%] mx-auto bg-[#7D67BF] mt-[24px] mb-2 border border-[#000] h-[90px]  shadow-3xl flex justify-between items-center px-[17px]">
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className="flex justify-center items-center space-x-[30px]">
                <a href="" className="text-[#fff] text-[16px] font-[700]" >How To Buy</a>
                <a href="" className="text-[#fff] text-[16px] font-[700]">Features</a>
                <a href="" className="text-[#fff] text-[16px] font-[700]">Tokenomics</a>
                <a href="" className="text-[#fff] text-[16px] font-[700]">Roadmap</a>
                <a href="" className="text-[#fff] text-[16px] font-[700]">FAQ</a>
                <div className="flex justify-center items-center space-x-2">
                    <img src={flag} alt="" />
                    <span className="text-[#fff] text-[16px] font-[600]">EN</span>
                    <img src={arwdwn} alt="" />
                </div>
            </div>
            <div className="flex justify-between space-x-[24px]">
                <button className="w-[178px] h-[56px] text-[#fff] bg-[#000] hover:bg-[#FFCE00] hover:text-[#000] border border-[#000] text-[20px] font-[700]">Register for Beta</button>
                <button className="w-[178px] h-[56px] bg-[#FFCE00] hover:bg-[#000] hover:text-[#fff] border border-[#000] text-[20px] font-[700]">Join Presale</button>
            </div>
        </div>
    </div>
  );
}

export default Navbar;
