"use client";

import React from "react";
import PricingCard from "./ui/PricingCard";
import Background from "./Background";
import Link from "next/link";

const PricingSection = () => {
  return (
    <section className="relative w-full py-24 px-6 md:px-20 text-white">

      {/* Background Blur */}
      <Background />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">

        {/* ===================== TOP HEADING ===================== */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-[48px] font-bold leading-tight">
            Choose flexible pricing plan <br /> for your team
          </h2>

          <p className="text-[20px] md:text-[24px] max-w-3xl text-[#FFFFFF] leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>

          {/* View All Updates */}
          <Link
            href="#"
            className="inline-flex items-center gap-2 text-[#FFFFFF] underline underline-offset-4 hover:opacity-80 font-medium text-[20px]"
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
          <div className="flex items-center bg-[#FFFFFF33] rounded-[10px] px-2 py-1">

            {/* MONTHLY (inactive) */}
            <button className="px-6 py-2 rounded-[10px] text-[#FFFFFF] hover:text-white transition text-sm font-semibold">
              Monthly
            </button>

            {/* ANNUAL (active) */}
            <button className="px-6 py-2 rounded-lg text-[#FFFFFF] font-semibold text-[17px] bg-[linear-gradient(134.68deg,#05B7CE_14.12%,#06B2CC_15.75%,#1B5DB2_41.2%,#2828A1_59.62%,#2D139B_68.28%)] transition">
              Annual
            </button>

          </div>
        </div>

        {/* ===================== PRICE CARDS SECTION ===================== */}
        <div className="relative">

          {/* MOST POPULAR (Above 3rd Card Only) */}
          

          {/* ---- CARD ROW ---- */}
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">

            <PricingCard
              title="Free"
              subtitle="For individuals getting started"
              price="0"
              priceNote="free forever"
              buttonText="Start Using"
              border="border-none"
            />

            <PricingCard
              title="Professional"
              subtitle="For teams getting started"
              price="10"
              priceNote="per month billed annually"
              buttonText="Purchase"
                            border="border-none"

            />

            {/* HIGHLIGHTED BUSINESS CARD */}
            <div className="flex flex-col items-center">
              <div className="flex flex-row gap-1 -mt-6
            "
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFD54F">
              <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
            </svg>
            MOST POPULAR
          </div>
            <PricingCard
              // highlight
              title="Business"
              subtitle="For all teams across your organization"
              price="30"
              priceNote="per month billed annually"
              buttonText="Purchase"
              border="border-[#06B2CC]"
               
            />
            </div>

            {/* ENTERPRISE CARD */}
            <PricingCard
              title="Enterprise"
              subtitle="For large teams"
              // price="Contact"
              // priceNote="us"
              buttonText="Contact Us"
            
              border="border-none"

              // special
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;
