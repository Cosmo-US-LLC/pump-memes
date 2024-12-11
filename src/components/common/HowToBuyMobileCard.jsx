import React from "react";

const HowToBuyMobileCard = ({
  step,
  title,
  description,
  icon,
  bgColor = "bg-yellow-400",
}) => {
  return (
    <div
      className={`relative px-[24px] py-[24px] border-[0.6px] border-[#fff] ${bgColor} flex flex-col justify-between w-[345px] h-[320px]`}
      style={{
        boxShadow: "7.409px 8.891px 0px 0px #000",
      }}
    >
      <div className="flex items-center justify-between gap-6">
        <div className="text-[16.146px] font-normal leading-[25.833px] font-[Lato] text-[#000]">
          {step}
        </div>

        {/* Icon */}
        {icon && (
          <div className="w-[51px] h-[47px] flex items-center justify-center">
            {typeof icon === "string" ? (
              <img src={icon} alt={title} className="" />
            ) : (
              icon
            )}
          </div>
        )}
      </div>
      {/* Step */}

      <div className="flex flex-col gap-8 min-h-[220px] pt-2">
        <h2 className="text-[28px] font-semibold leading-[26.856px] font-[Tomorrow] text-[#000]">
          {title}
        </h2>

        <p className="w-[305.872px] text-[#000] font-normal text-[25px] leading-normal font-[Lato]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HowToBuyMobileCard;
