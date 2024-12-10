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
      className={`relative p-6 rounded-[16px] shadow-lg border-4 border-[#000] ${bgColor} flex flex-col justify-between w-[400px] h-[340px]`}
    >
      <div className="flex justify-between gap-6 ">
        <div className="  text-[14px] font-semibold text-[#000]">{step}</div>

        {/* Icon */}
        {icon && (
          <div className="  w-[40px] h-[40px]  flex items-center justify-center">
            {typeof icon === "string" ? (
              <img src={icon} alt={title} className="h-8" />
            ) : (
              icon  
            )}
          </div>
        )}
      </div>
      {/* Step */}

      <div className="flex flex-col gap-12">
        <h2 className=" text-[32px] font-semibold leading-[29.94px] font-tomorrow text-[#000]">
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
