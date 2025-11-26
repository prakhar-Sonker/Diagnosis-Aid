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
      w-70 h-80 
      flex flex-col justify-between 
      p-6 rounded-2xl 
      bg-[#FFFFFF36]
      border-2 ${border}
      text-white
      
    `}>
      
      {/* Top Section */}
      <div className="space-y-3">
        <h3 className="text-[28px] font-semibold">{title}</h3>
        <p className="text-[16px] text-gray-300">{subtitle}</p>

        <div className="pt-4">
          <span className="text-[42px] font-bold">${price}</span>
          {priceNote && (
            <span className="text-gray-400 text-[14px] pl-2">{priceNote}</span>
          )}
        </div>
      </div>

      {/* Button */}
      <button
        className="
          w-full py-3 mt-4 
          rounded-lg 
          border border-gray-400 
          text-white 
          font-medium 
          hover:bg-white hover:text-black transition
        "
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
