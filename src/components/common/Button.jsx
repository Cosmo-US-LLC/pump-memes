import React from "react";

const Button = ({ label, variant, onClick }) => {
  const baseStyles = "px-6 py-3 text-lg text-[18px] font-bold font-lato text-[18px] shadow";
  const variants = {
    primary: "bg-[#FFCE00] text-black border-2 border-black hover:bg-yellow-300",
    secondary: "bg-[#313131] text-white border-2 border-[#000] hover:bg-[#313131]/90",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
