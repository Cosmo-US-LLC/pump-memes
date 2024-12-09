import React from "react";

const Button = ({ label, variant, onClick }) => {
  const baseStyles = "px-4 py-2 text-lg font-bold rounded shadow";
  const variants = {
    primary: "bg-yellow-400 text-black border-2 border-blue-500 hover:bg-yellow-300",
    secondary: "bg-gray-800 text-white border-2 border-gray-800 hover:bg-gray-700",
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
