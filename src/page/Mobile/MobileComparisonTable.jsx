import React from "react";
import mobCap1 from "../../assets/Svgs/mob-cap-1.png";
import mobCap2 from "../../assets/Svgs/mob-cap-2.png";
import mobCap3 from "../../assets/Svgs/mob-cap-3.png";
const MobileComparisonTable = () => {
  const columns = [
    { name: "", bgColor: "", image: "" },
    { name: "Pump Memes", bgColor: "bg-[#FF6F2C]", image: mobCap1 },
    { name: "Pump.Fun", bgColor: "", image: mobCap2 },
    { name: "Moonshot", bgColor: "", image: mobCap3 },
  ];

  const rows = [
    ["Telegram App", "✔️", "❌", "❌"],
    ["Auto Trading", "✔️", "❌", "❌"],
    ["Multi-Chain", "✔️", "❌", "❌"],
    ["Credit Card Payment", "✔️", "❌", "❌"],
    ["PNL Statistics", "✔️", "❌", "❌"],
    ["Anti MEV Bots", "✔️", "❌", "❌"],
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#C8F1FF] w-full h-[704px] flex-shrink-0 ">
      <div className="bg-[#8F52FA] justify-center items-center text-white   shadow-[2.966px_3.559px_0px_0px_#F77B00] w-[345px] h-[607px] flex-shrink-0 border-[0.297px] border-[#000] flex flex-col">
        <h1 className="w-[378px] text-[#FFF] text-center font-[Tomorrow] text-[45px] font-[700] leading-[56px] capitalize mt-8 mb-10">
          Trade Memes Like A Pro
        </h1>

        <div className=" bg-[#8B48D4] w-[345px] h-[378px] flex-shrink-0 overflow-x-auto flex-grow">
          <table className="w-full text-sm text-center border-collapse table-auto">
            <thead>
              <tr className="bg-[#8B48D4] text-white z-20">
                {columns.map((col, index) => (
                  <th key={index} className={`py-2 px-3 ${col.bgColor || ""}`}>
                    {col.image ? (
                      <div className="flex items-center justify-center gap-2">
                        {/* Render image dynamically */}
                        <img
                          src={col.image}
                          alt={col.name}
                          className="w-16 h-6"
                        />
                      </div>
                    ) : (
                      col.name
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`h-[50px] ${
                    rowIndex !== rows.length - 1 ? "border-b border-[#FFF]" : ""
                  }`}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`px-2 py-1 text-center ${
                        cellIndex === 1 ? "bg-[#FF6F2C]" : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MobileComparisonTable;
