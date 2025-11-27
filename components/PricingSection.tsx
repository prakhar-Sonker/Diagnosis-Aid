"use client";

import React from "react";
import PricingCard from "./ui/PricingCard";
import Background from "./Background";
import Link from "next/link";
import EnterpriseCard from "./ui/EnterpriseCard";

const PricingSection = () => {
  return (
    <section className="relative py-16 px-4 md:px-12 lg:px-20 text-[#FFFFFF] overflow-hidden">

      {/* Background Blur */}
      <Background />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">

        {/* ===================== TOP HEADING ===================== */}
        <div className="text-center md:text-left space-y-4 px-2">
          <h2 className="text-[32px] md:text-[48px] font-bold leading-tight">
            Choose flexible pricing plan <br className="hidden md:block" /> for your team
          </h2>

          <p className="text-[18px] md:text-[24px] max-w-3xl text-[#FFFFFF] leading-relaxed mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#FFFFFF] underline underline-offset-4 hover:opacity-80 font-medium text-[18px] md:text-[20px]"
          >
            View All Updates
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M7 17L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 7H17V17" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </Link>
        </div>

        {/* ===================== TOGGLE BUTTON ===================== */}
        <div className="flex justify-center w-full">
          <div className="flex items-center justify-end bg-[#FFFFFF33] rounded-[10px] px-1 py-1 w-[260px] md:w-[300px]">
            
            <button className="px-6 py-2 rounded-[10px] text-[#FFFFFF] hover:text-white transition text-sm font-semibold">
              Monthly
            </button>
            
            <button className="px-6 py-2 rounded-lg text-[#FFFFFF] font-semibold text-[15px] md:text-[17px]
              bg-[linear-gradient(134.68deg,#05B7CE_14.12%,#06B2CC_15.75%,#1B5DB2_41.2%,#2828A1_59.62%,#2D139B_68.28%)] transition w-40 ">
              Annual
            </button>

          </div>
        </div>

        {/* ===================== PRICE CARDS ===================== */}
        <div className="flex justify-center">

          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-10 
            w-full
            max-w-7xl
            justify-items-center
          ">

            {/* Card 1 */}
            <PricingCard
              title="Free"
              subtitle="For individuals getting started"
              price="0"
              priceNote="free forever"
              buttonText="Start Using"
              border="border-none"
            />

            {/* Card 2 */}
            <PricingCard
              title="Professional"
              subtitle="For teams getting started"
              price="10"
              priceNote="per month billed annually"
              buttonText="Purchase"
              border="border-none"
            />

            {/* ===== BUSINESS CARD WITH MOST POPULAR BADGE ===== */}
            <div className="relative flex flex-col items-center w-full">

              {/* MOST POPULAR Badge */}
              <div className="
                absolute 
                -top-6 
                flex items-center gap-1
                text-[#FFFFFF] 
                font-semibold 
                tracking-wide
                text-sm
                md:text-base
              ">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#FFD54F">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                </svg>
                MOST POPULAR
              </div>

              {/* Card */}
              <PricingCard
                title="Business"
                subtitle="For all teams across your organization"
                price="30"
                priceNote="per month billed annually"
                buttonText="Purchase"
                border="border-[#06B2CC]"
              />
            </div>

            {/* Card 4 */}
            <EnterpriseCard />

          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;
