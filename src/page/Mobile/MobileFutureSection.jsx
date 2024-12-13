import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import awr1 from "../../assets/Svgs/rdawr (1).svg";
import awr2 from "../../assets/Svgs/rdawr (2).svg";
import rdvect1 from "../../assets/Svgs/rdvect (1).svg";
import rdvect2 from "../../assets/Svgs/rdvect (2).svg";
import tick from "../../assets/Svgs/tick.svg";
import tree from "../../assets/Svgs/trees.svg";

function MobileFutureSection() {
    const phase1 = [
        "Pump.Fun sucks",
        "Build a better concept",
        "Create a Logo and Brand Vision",
        "Onboard the Pump Memes Team",
        "Assign Roles and Set Timelines",
        "Start Pump Memes Launchpad development"
    ];
    const phase2 = [
        "$PUMP token creation",
        "Define token distribution and initial pricing",
        "Security audits for $PUMP",
        "Testing token creation feature on testnet",
        "Add built-in security features",
        "Test livestream features "
    ];
    const phase3 = [
        "Launch $PUMP",
        "Beta Release PUMP Memes",
        "First 100 Successful Token Launch es",
        "Add Level System and Ranking",
        "Multiple CEX listings for $PUMP",
        "Start working on Telegram App"
    ];

    return (
        <div className="bg-[#FF5400] py-16 flex flex-col gap-6" id="roadmap">
            <div className="flex flex-col items-center px-4 text-center">
                <h2 className="text-[45px] bessttroksmp font-[700] leading-[40px] font-[Tomorrow] text-[white]">The Future Of Memes</h2>
                <p className="text-[18px] font-[400] leading-[24px] text-[white] mt-4">
                    Our roadmap is focused on fast growth and mass adoption, delivering the best, safest, and most fun way to launch and trade meme coins.
                </p>
                <img className="mt-6 w-[200px]" src={tree} alt="tree" />
            </div>
{/* 
            <div className="flex flex-col items-center gap-6 px-4">
                <div className="bg-[#FCC105] w-full max-w-[300px] border border-[4px] border-[black] p-6">
                    <p className="text-[16px] font-[600] leading-[20px] mb-2">PHASE 1</p>
                    <p className="text-[24px] font-[600] font-[Tomorrow] leading-[29px]">Idea and Concept</p>
                    <div className="flex flex-col gap-2 mt-6">
                        {phase1.map((item, index) => (
                            <div key={index} className="flex flex-row items-center gap-2">
                                <img className="w-4 h-4" src={tick} alt="tick" />
                                <p className="text-[14px] font-[400] leading-[20px]">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-[black] text-[white] w-[100px] rounded-full h-[36px] font-[700] text-[14px]">Current</button>
                    </div>
                </div>

                <div className="bg-[white] w-full max-w-[300px] border border-[4px] border-[black] p-6">
                    <p className="text-[16px] font-[600] leading-[20px] mb-2">PHASE 2</p>
                    <p className="text-[24px] font-[600] font-[Tomorrow] leading-[29px]">Building</p>
                    <div className="flex flex-col gap-2 mt-6">
                        {phase2.map((item, index) => (
                            <div key={index} className="flex flex-row items-center gap-2">
                                {index <= 3 && <img className="w-4 h-4" src={tick} alt="tick" />}
                                <p className={`text-[14px] font-[400] leading-[20px] ${index > 3 ? 'ml-6' : ''}`}>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-[#808080] text-[white] w-[100px] rounded-full h-[36px] font-[700] text-[14px]">Pending</button>
                    </div>
                </div>

                <div className="bg-[white] w-full max-w-[300px] border border-[4px] border-[black] p-6">
                    <p className="text-[16px] font-[600] leading-[20px] mb-2">PHASE 3</p>
                    <p className="text-[24px] font-[600] font-[Tomorrow] leading-[29px]">Launch</p>
                    <div className="flex flex-col gap-2 mt-6">
                        {phase3.map((item, index) => (
                            <div key={index} className="flex flex-row items-center gap-2">
                                <p className="text-[14px] font-[400] leading-[20px]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}
             <div className="relative px-4">
          {/* Swiper Slider */}
          <Swiper
          modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={false}
            className=""
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3.2,
              },
              768: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
            {/* Rookie Card */}
        <SwiperSlide >
          <div className="relative p-2"
         >
            <div className="bg-[#FCC105] w-full  border border-[4px] border-[black] p-[20px]">
            <img src={rdvect1} className="absolute right-[0%] top-[-1%]" alt="" />

                    <p className="text-[16px] font-[600] text-center leading-[20px] mb-2">PHASE 1</p>
                    <p className="text-[24px] font-[600] text-center font-[Tomorrow] leading-[29px]">Idea and Concept</p>
                    <div className="flex flex-col gap-2 mt-6">
                        {phase1.map((item, index) => (
                            <div key={index} className="flex flex-row items-center gap-2">
                                <img className="w-4 h-4" src={tick} alt="tick" />
                                <p className="text-[14px] font-[400] leading-[20px]">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-[black] text-[white] w-[100px] rounded-full h-[36px] font-[700] text-[14px]">Current</button>
                    </div>
                    <img src={rdvect2} className="absolute left-[0%] bottom-[-1%]" alt="" />
                </div>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div 
          className="relative p-2"
         >
             <div className="bg-[white] w-full  border border-[4px] border-[black] p-[20px]">
            <img src={rdvect1} className="absolute right-[0%] top-[-1%]" alt="" />

                    <p className="text-[16px] font-[600] text-center leading-[20px] mb-2">PHASE 2</p>
                    <p className="text-[24px] font-[600] text-center font-[Tomorrow] leading-[29px]">Building</p>
                    <div className="flex flex-col gap-2 mt-6">
                        {phase2.map((item, index) => (
                            <div key={index} className="flex flex-row items-center gap-2">
                                {index <= 3 && <img className="w-4 h-4" src={tick} alt="tick" />}
                                <p className={`text-[14px] font-[400] leading-[20px] ${index > 3 ? 'ml-6' : ''}`}>{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-[#808080] text-[white] w-[100px] rounded-full h-[36px] font-[700] text-[14px]">Completed</button>
                    </div>
                <img src={rdvect2} className="absolute left-[0%] bottom-[-1%]" alt="" />
                </div>

          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div 
          className="relative p-2"
         >
              <div className="bg-[white] w-full border border-[4px] border-[black] p-[20px]">
            <img src={rdvect1} className="absolute right-[1%] top-[-2%]" alt="" />
                    <p className="text-[16px] font-[600] text-center leading-[20px] mb-2">PHASE 3</p>
                    <p className="text-[24px] font-[600] text-center font-[Tomorrow] leading-[29px]">Launch</p>
                    <div className="flex flex-col gap-2 mt-6">
                        {phase3.map((item, index) => (
                            <div key={index} className="flex flex-row items-center gap-2">
                                <p className="text-[14px] font-[400] leading-[20px]">{item}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-[#808080] text-[white] w-[100px] rounded-full h-[36px] font-[700] text-[14px]">Completed</button>
                    </div>
                <img src={rdvect2} className="absolute left-[1%] bottom-[-2%]" alt="" />

                </div>
          </div>
        </SwiperSlide>
          </Swiper>
          
          {/* Navigation Arrows */}
          <div className="!h-[35px] !w-[35px] swiper-button-prev  absolute !left-[9%] !top-[19%] -translate-y-1/2 bg-[#fff] border border-black p-2 hover:bg-white/90 z-10"   style={{
            boxShadow: "4px 4px 0px #000",
          }}>
            <img src={awr1} className="" alt="Previous" />
          </div>
          <div className="!h-[35px] !w-[35px] swiper-button-next absolute !right-[9.5%] !top-[19%] -translate-y-1/2 bg-[#fff] border border-black p-2 hover:bg-white/90 z-10"
          style={{
            boxShadow: "4px 4px 0px #000",
          }}>
            <img src={awr2} className="" alt="Next" />
          </div>
        </div>

            <div className="self-center mt-8">
                <button className="border border-[2px] border-[black] bg-[#FFCE00] h-[40px] w-[160px] text-[14px] font-[700]">Join Presale</button>
            </div>
        </div>
    );
}

export default MobileFutureSection;
