import React from "react";

const HowToBuyCard = ({
  step,
  title,
  description,
  icon,
  bgColor = "bg-yellow-400",
}) => {
  return (
    <div
      className={`relative px-[37px] py-[24px] border-[0.6px] border-[#fff] ${bgColor} flex flex-col justify-between w-[400px] h-[340px]`}
      style={{
        boxShadow: "7.409px 8.891px 0px 0px #000",
      }}
    >
      <div className="flex items-center justify-between gap-6">
      <div className="text-black font-[800] text-[20px] leading-[28.8px] font-lato">{step}</div>


        {icon && (
          <div className="max-h-[46px] flex items-center justify-center">
            {typeof icon === "string" ? (
              <img src={icon} alt={title} className="" />
            ) : (
              icon
            )}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-12 min-h-[220px]">
        <h2
          className="text-[32px] font-medium leading-[29.94px] font-[Tomorrow] text-[#000]"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#000",
          }}
        >
          {title}
        </h2>

        <p className="w-[341px] text-[#000] font-normal text-[28px] leading-none font-lato">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowToBuyCard;
