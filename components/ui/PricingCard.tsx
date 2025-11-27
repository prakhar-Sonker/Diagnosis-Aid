"use client";

import React from "react";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: string;
  priceNote?: string;
  buttonText: string;
  border?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  priceNote,
  buttonText,
  border,
}) => {
  return (
    <div className={`
      w-77 h-100
      flex flex-col justify-between 
      p-6 rounded-2xl 
      bg-[#FFFFFF36]
      border-2 ${border}
      text-[#FFFFFF]
      
    `}>
      
      {/* Top Section */}
      <div className="space-y-3">
        <h3 className="text-[36px] font-bold">{title}</h3>
        <p className="text-[24px] font-medium text-[#FFFFFF]">{subtitle}</p>

        <div className="pt-4 flex flex-row items-center">
          <span className="text-[48px] font-black">${price}</span>
          {priceNote && (
            <span className="text-[#FFFFFF52] text-[16px] pl-2">{priceNote}</span>
          )}
        </div>
      </div>

      {/* Button */}
      <button
        className="
          w-full py-3 mt-4 
          rounded-lg 
          text-[#303033]
          font-bold
          text-[20px]
          bg-[#FFFFFF]
          hover:bg-white hover:text-black transition
        "
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
