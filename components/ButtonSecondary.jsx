import React from "react";

const ButtonSecondary = ({ btnText }) => {
  return (
    <button className="relative min-w-[160px] inline-flex justify-center items-center px-6 py-[15px] overflow-hidden font-medium transition duration-300 ease-out rounded-full shadow-xl group">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-accent via-accent_secondary to-accent"></span>
      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-[#cb52ff] rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white text-sm uppercase tracking-[1px]">
        {btnText}
      </span>
    </button>
  );
};

export default ButtonSecondary;
