import React from "react";
import panAfrica from "../images/pan_africa.png";

export const PanAfricaLogo: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex justify-center items-center w-[50px] h-[50px] ${className}`}
    >
      <img
        src={panAfrica.src}
        alt="Pan Africa"
        className="max-w-full max-h-full object-contain"
      />
    </div>
  );
};
