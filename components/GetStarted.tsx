"use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";
import GetStartedFooter from "./getstarted/Footer";

const GetStarted = () => {
  return (
    // Changed: flex-col for mobile (stack), lg:flex-row for desktop (side-by-side)
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      
      {/* =============== LEFT SIDE =============== */}
      <div
        // Responsive width: w-full (mobile/tablet), lg:w-1/2 (desktop)
        // Responsive height: min-h-fit or 50vh (mobile), min-h-screen (desktop)
        // Adjusted padding for smaller screens
        className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen text-white px-6 py-10 md:px-12 lg:px-16 lg:pt-10 flex flex-col"
        style={{
          background:
            "linear-gradient(134.68deg, #05B7CE 14.12%, #06B2CC 15.75%, #1B5DB2 41.2%, #2828A1 59.62%, #2D139B 68.28%)",
        }}
      >
        {/* TOP LOGO */}
        <div className="flex items-center gap-3 mb-10 lg:mb-20">
          <Image src="/dawhite.png" width={40} height={40} alt="logo" />
          <h1
            className="text-[20px] font-bold leading-[100%]"
          >
            DiagnosisAid
          </h1>
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col justify-center flex-1">
          <h2
            // Responsive font size: 36px (mobile) -> 64px (desktop)
            className="font-fig font-semibold text-[36px] md:text-[48px] lg:text-[64px] leading-[110%] lg:leading-[100%] mb-4 lg:mb-6"
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </h2>

          <p
            // Responsive font size: 18px (mobile) -> 32px (desktop)
            className="font-fig text-[18px] md:text-[24px] lg:text-[32px] leading-[140%] lg:leading-[120%] opacity-95 max-w-[600px]"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim
            ad minim veniam.
          </p>
        </div>
      </div>

      {/* =============== RIGHT SIDE =============== */}
      <div 
        // Responsive width and height
        // Added padding-bottom (pb-24) on mobile to ensure footer doesn't overlap content
        className="w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen bg-[#161618] text-white flex flex-col justify-center relative py-12 lg:py-0 pb-24 lg:pb-0"
      >
        {/* CENTER TITLE */}
        <div className="flex justify-center mb-8 lg:mb-10">
          <h2
            // Responsive font size
            className="font-bold text-[32px] md:text-[48px] leading-[100%]"
            style={{ fontFamily: "Figtree" }}
          >
            Get Started
          </h2>
        </div>

        {/* BUTTONS */}
        {/* Stack buttons on very small screens if needed, otherwise row */}
        <div className="flex flex-row justify-center gap-4 md:gap-5 mb-10 lg:mb-24 px-4">
          <PrimaryButton text="Login" href="/get-started/login" />
          <PrimaryButton text="SignUp" href="/get-started/signup" />
        </div>

        {/* FOOTER INSIDE RIGHT SIDE */}
        {/* Absolute positioning works well on desktop. 
            On mobile, we ensure enough padding-bottom on the parent so this doesn't overlap buttons. */}
        <div className="absolute bottom-6 w-full px-6 text-center">
          <GetStartedFooter />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;