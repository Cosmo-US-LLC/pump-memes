import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import tick from "../assets/Svgs/tick.svg";
import tree from "../assets/Svgs/trees.svg";
import awr1 from "../assets/Svgs/fetarw.svg";
import rdvect1 from "../assets/Svgs/rdvect (1).svg";
import rdvect2 from "../assets/Svgs/rdvect (2).svg";
// import awr2 from "../assets/Svgs/arw (2).svg";


function FutureSection() {

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
        <div className="bg-[#FF5400] py-24 flex flex-col gap-8" id="roadmap">
            <div className="flex max-w-[1228px] w-[100%] mx-auto flex-row justify-around items-center">
                <div className="space-y-[20px]">
                    <h2 className="text-[55px] font-[700] leading-[66px] font-[Tomorrow] text-[white]">The Future Of Memes</h2>
                    <p className="max-w-[744px] text-[26px] font-[400] leading-[33px] text-[white]">Our roadmap is focused on fast growth and mass adoption, delivering the best, safest, and most fun way to launch and trade meme coins.</p>
                </div>
                <img className="" src={tree} alt="tree" />
            </div>
            <div className="max-w-[1440px] w-[100%] mx-auto relative">
            <div className="max-w-[1310px] w-[100%] ml-auto ">
                  <Swiper
          modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={2.6}
            loop={false}
            className="!flex !items-center swiper-fet !py-[1rem]"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 2.6,
              },
              768: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 2,
              },
              320: {
                slidesPerView: 1,
              },
            }}
          >
        <SwiperSlide >
       <div className="px-2 relative">
       <div className="h-[443px]  bg-[#FCC105] w-[484px] border border-[4px] border-[black] p-12">
        <img src={rdvect1} className="absolute right-[-3%] top-[-2%]" alt="" />
                    <p className="text-[18px] font-[600] leading-[20px] mb-2 ml-4">PHASE 1</p>
                    <p className="text-[32px] font-[600] font-[Tomorrow] leading-[29px] ml-4">Idea and Concept</p>
                    <div className="flex flex-col gap-2 mt-10">
                        {
                            phase1.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-row items-center gap-4">
                                        <img className="" src={tick} alt="tick" />
                                        <p className={`text-[18px] font-[400] leading-[28px]`}>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-row items-end justify-end mt-6">
                        <button className="bg-[black] text-[white] w-[143px] rounded-full h-[41px] font-[700]">Current</button>
                    </div>
                    <img src={rdvect2} className="absolute left-[0%] bottom-[-1%]" alt="" />
                </div>
       </div>
        </SwiperSlide>
        <SwiperSlide >
       <div className="relative">
       <div className="h-[443px] bg-[white] w-[484px] border border-[4px] border-[black] p-12">
        <img src={rdvect1} className="absolute right-[-3%] top-[-2%]" alt="" />
                    <p className="text-[18px] font-[600] leading-[20px] mb-2 ml-4">PHASE 2</p>
                    <p className="text-[32px] font-[600] font-[Tomorrow]  leading-[29px] ml-4">Building</p>
                    <div className="flex flex-col gap-2 mt-10">
                        {
                            phase2.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-row items-center gap-4">
                                        {
                                            index <= 3 &&
                                            <img className="" src={tick} alt="tick" />
                                        }
                                        <p className={`${index > 3 && 'ml-[34px]'} text-[18px] font-[400] leading-[28px]`}>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-row items-end justify-end mt-6">
                        <button className="bg-[#808080] text-[white] w-[143px] rounded-full h-[41px] font-[700]">Pending</button>
                    </div>
                    <img src={rdvect2} className="absolute left-[0%] bottom-[-1%]" alt="" />
                </div>
       </div>
        </SwiperSlide>
        <SwiperSlide >
        <div className="relative">
        <div className="h-[443px] bg-[white] w-[484px] border border-[4px] border-[black] p-12">
        <img src={rdvect1} className="absolute right-[-1%] top-[-2%]" alt="" />

                    <p className="text-[18px] font-[600] leading-[20px] mb-2 ml-4">PHASE 3</p>
                    <p className="text-[32px] font-[600] font-[Tomorrow]  leading-[29px] ml-4">Launch</p>
                    <div className="flex flex-col gap-2 mt-10 ml-4">
                        {
                            phase3.map((item, index) => {
                                return (
                                    <div key={index} className="flex flex-row items-center gap-4">
                                        {/* <img className="" src={tick} alt="tick" /> */}
                                        <p className={`text-[18px] font-[400] leading-[28px]`}>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <img src={rdvect2} className="absolute left-[0%] bottom-[-1%]" alt="" />

        </div>
        </SwiperSlide>
          </Swiper>
            </div>

          <div className="!h-[65px] !w-[65px] swiper-button-prev  absolute !left-[4%] !top-[50%] -translate-y-1/2 ">
              <img src={awr1} className="" alt="Previous" />
            </div>
            </div>
            <div className="self-center mt-8 mb-8">
                <button className="border border-[2px] border-[black] bg-[#FFCE00] h-[50px] w-[192px] text-[18px] font-[700] leading-[21px]">Join Presale</button>
            </div>
        </div>
    );
}

export default FutureSection;
