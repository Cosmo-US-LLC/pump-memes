import tick from "../assets/Svgs/tick.svg";
import tree from "../assets/Svgs/trees.svg";

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
        <div className="h-[903px] bg-[#FF5400] py-24 flex flex-col gap-8" id="roadmap">
            <div className="flex flex-row justify-around items-center">
                <div className="space-y-[20px]">
                    <h2 className="text-[55px] font-[700] leading-[66px] font-[Tomorrow] text-[white]">The Future Of Memes</h2>
                    <p className="max-w-[744px] text-[26px] font-[400] leading-[33px] text-[white]">Our roadmap is focused on fast growth and mass adoption, delivering the best, safest, and most fun way to launch and trade meme coins.</p>
                </div>
                <img className="" src={tree} alt="tree" />
            </div>
            <div className="flex flex-row items-center justify-center gap-10">
                <div className="h-[443px] bg-[#FCC105] w-[484px] border border-[4px] border-[black] p-12">
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
                </div>
                <div className="h-[443px] bg-[white] w-[484px] border border-[4px] border-[black] p-12">
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
                </div>
                <div className="h-[443px] bg-[white] w-[484px] border border-[4px] border-[black] p-12">
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
            </div>
            <div className="self-center mt-8">
                <button className="border border-[2px] border-[black] bg-[#FFCE00] h-[50px] w-[192px] text-[18px] font-[700] leading-[21px]">Join Presale</button>
            </div>
        </div>
    );
}

export default FutureSection;
