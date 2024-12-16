import Logo from "../assets/Svgs/Logo.svg";
import arwdwn from "../assets/Svgs/arrwdwn.svg";
import flag from "../assets/Svgs/eng.svg";
import menu from "../assets/Svgs/navmenu.svg";


function Navbar() {
  const handleScroll = (event, targetId, offset) => {
    event.preventDefault(); // Prevent default anchor link behavior

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };
  return (
    <div className="fixed w-[100%] z-[99]">
      <div className="max-w-[1296px] 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[90%]  mx-auto bg-[#7D67BF] mt-[24px] mb-2 border border-[#000] 2xl:h-[90px] xl:h-[90px] lg:h-[90px] md:h-[90px] sm:h-[60px] h-[60px]  shadow-3xl flex justify-between items-center px-[17px]">
        <div onClick={(e) => handleScroll(e, "features", 90)}>
          <img className="2xl:max-w-[100%] xl:max-w-[100%] lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100px] max-w-[130px]" src={Logo} alt="" />
        </div>
        <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden justify-center items-center space-x-[30px]">
          <a
            href="#howtobuy"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "howtobuy", 90)}
          >
            How To Buy
          </a>
          <a
            href="#features"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "features", 90)}
          >
            Features
          </a>
          <a
            href="#tokenomics"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "tokenomics", 90)}
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "roadmap", 90)}
          >
            Roadmap
          </a>
          <a
            href="#faq"
            className="text-[#fff] text-[16px] font-[700]"
            onClick={(e) => handleScroll(e, "faq", 90)}
          >
            FAQ
          </a>

          <div className="flex items-center justify-center space-x-2">
            <img src={flag} alt="" />
            <span className="text-[#fff] text-[16px] font-[600]">EN</span>
            <img src={arwdwn} alt="" />
          </div>
        </div>
        <div className="flex justify-between space-x-[24px]">
          <button className="2xl:flex xl:flex lg:flex md:flex sm:hidden hidden 2xl:w-[178px] xl:w-[178px] lg:w-[178px] md:w-[178px] sm:w-[178px] justify-center items-center w-[87.259px] 2xl:h-[56px] xl:h-[56px] lg:h-[56px] md:h-[56px] sm:h-[27px]  h-[27px] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[12px]  text-[12px]  text-[#fff] bg-[#000] hover:bg-[#FFCE00] hover:text-[#000] border border-[#000]  font-[700]">
            Register for Beta
          </button>
          <button className="2xl:w-[178px] xl:w-[178px] lg:w-[178px] md:w-[178px] sm:w-[178px] w-[87.259px] 2xl:h-[56px] xl:h-[56px] lg:h-[56px] md:h-[56px] sm:h-[27px]  h-[27px] bg-[#FFCE00] hover:bg-[#000] hover:text-[#fff] border border-[#000] 2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[20px] sm:text-[12px]  text-[12px] font-[700]">
            Join Presale
          </button>
          <button className="2xl:hidden xl:hidden lg:hidden md:hidden sm:flex flex justify-center items-center bg-[#000] px-2">
            <img src={menu} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
