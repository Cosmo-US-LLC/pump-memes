import React from "react";

import tabletricn1 from "../assets/Svgs/tbtricn (3).svg";
import tabletricn2 from "../assets/Svgs/tbtricn (2).svg";
import tabletricn3 from "../assets/Svgs/tbtricn (1).svg";
import tbltd1 from "../assets/Svgs/tbltd (2).svg";
import tbltd2 from "../assets/Svgs/tbltd (1).svg";

const ComparisonTable = () => {
  const columns = [
    { name: "", bgColor: "" },
    { name: tabletricn1, bgColor: "bg-[#F26C2F]" },
    { name: tabletricn2, bgColor: "bg-[#823fca]" },
    { name: tabletricn3, bgColor: " bg-[#823fca]" },
  ];

  const rows = [
    ["Telegram App", tbltd1, tbltd2, tbltd2],
    ["Auto Trading", tbltd1, tbltd2, tbltd2],
    ["Multi-Chain", tbltd1, tbltd2, tbltd2],
    ["Credit Card Payment", tbltd1, tbltd2, tbltd2],
    ["PNL Statistics", tbltd1, tbltd2, tbltd2],
    ["Anti MEV Bots", tbltd1, tbltd2, tbltd2],
  ];

  return (
    <div className="flex items-center justify-center bg-[#C8F1FF] w-[100%] py-[88px]">
      <div
        className="bg-[#8B48D4] text-white  px-[70px] py-[60px] w-[1199px] w-[100%]  flex-shrink-0 flex flex-col border border-[#000]  "
        style={{
          boxShadow: "10px 12px 0px 0px #F77B00",
        }}
      >
        <h1 className="mb-4 text-[55px] font-bold text-center text-white capitalize font-tomorrow">
          Trade Memes Like A Pro
        </h1>

        <div className="flex-grow overflow-x-auto ">
          <table className="w-full h-full text-lg text-center table-auto">
            <thead>
              <tr className="bg-[#823fca] text-white">
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className={`py-6 px-6 borde-b  items-center border-gray-200/80 ${
                      col.bgColor ? col.bgColor : "bg-[#823fca]"
                    }`}
                  >
                    {index === 1 ? (
                      <div className="flex items-center justify-center gap-2">
                        {/* <img
                          src="/pump-memes-logo.png"  
                          alt="Pump Memes"
                          className="h-6"
                        /> */}

                        <img src={col.name} alt="" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                      <img src={col.name} alt="" />
                    </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`px-6 py-6 text-center text-[28px] font-[700]  ${
                        cellIndex === 1 ?  "bg-[#F26C2F]" : "bg-[#823fca]"
                      } ${
                        rowIndex === rows.length - 1 ? "border-none !pb-[3rem]" : "border-b border-gray-200/50" 
                      }`}
                    >
                      {cellIndex === 0 ? (
                        <h4>{cell}</h4>
                      ) : (
                       <div className="flex justify-center w-[100%] items-center">
                        <img src={cell} alt="" />
                       </div>
                      )}
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

export default ComparisonTable;
