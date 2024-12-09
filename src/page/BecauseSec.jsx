import beacuesimg1 from "../assets/images/besauseimg (1).png";
import beacuesimg2 from "../assets/images/besauseimg (2).png";
import beacuesimg3 from "../assets/images/besauseimg (3).png";
import beacuesvect from "../assets/Svgs/because.svg";

function BecauseSec() {
  return (
    <div className="bg-[#D2FB35] relative">
        <div className="bgnonebox">
      <div className="  pt-[50px] pb-[30px]">
        <div className="pb-[45px]">
            <h3 className="font-[Tomorrow] text-[55px] font-[700] text-[#fff] bessttrok text-center">Because</h3>
        </div>
        <div className="w-[100%] max-w-[1241px] w-[100%] mx-auto flex justify-between">
          <div className="w-[50%] space-y-[35px] ">
            <h3 className="max-w-[427px] w-[100%] leading-[120%] font-[Tomorrow] text-[55px] font-[700] text-center">We Want More of This..</h3>
           <div className="">
           <img className="w-[80%]" src={beacuesimg1} alt="" />
           </div>
          </div>
          <div className="w-[50%] space-y-[35px] ">
            <h3 className="max-w-[380px] w-[100%] mx-auto leading-[120%] font-[Tomorrow] text-[55px] font-[700] text-center">..And None Of this</h3>
           <div className="flex justify-end">
           <img className="w-[90%]" src={beacuesimg2} alt="" />
           </div>
          </div>
        </div>
      </div>
      <img src={beacuesimg3} className="w-[100%]" alt="" />
      <img src={beacuesvect} className="absolute bottom-[11%] right-0" alt="" />
        </div>
    </div>
  );
}

export default BecauseSec;
