import React from "react";

const ComparisonTable = () => {
  const columns = [
    { name: "", bgColor: "" },
    { name: "Pump Memes", bgColor: "bg-[#FF6F2C]" },
    { name: "Pump.Fun", bgColor: "" },
    { name: "Moonshot", bgColor: "" },
  ];

  const rows = [
    ["Telegram App", "✔️", "❌", "❌"],
    ["Auto Trading", "✔️", "❌", "❌"],
    ["Multi-Chain", "✔️", "❌", "❌"],
    ["Credit Card Payment", "✔️", "❌", "❌"],
    ["PNL Statistics", "✔️", "❌", "❌"],
    ["API Access", "✔️", "❌", "❌"],
  ];

  return (
    <div className="flex items-center justify-center bg-[#C8F1FF] w-[100%] py-[88px]">
      <div className="bg-[#8B48D4] text-white rounded-lg shadow-lg p-6 w-[992px] h-[741px] flex-shrink-0 flex flex-col rounded-[8px] shadow-[10px_12px_0px_0px_#F77B00]">
      <h1
  className="mb-4 text-[55px] font-bold text-center text-white capitalize font-tomorrow"
>
  Trade Memes Like A Pro
</h1>

        <div className="flex-grow overflow-x-auto">
          <table className="w-full h-full text-lg text-center border-collapse table-auto">
            <thead>
              <tr className="bg-[#8B48D4] text-white">
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className={`py-4 px-6 border border-white ${
                      col.bgColor ? col.bgColor : ""
                    }`}
                  >
                    {index === 1 ? (
                      <div className="flex items-center justify-center gap-2">
                        {/* <img
                          src="/pump-memes-logo.png"  
                          alt="Pump Memes"
                          className="h-6"
                        /> */}
                        {col.name}
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
                <tr key={rowIndex} className="h-[1/6]">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`px-4 py-2 text-center border border-white ${
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

export default ComparisonTable;
