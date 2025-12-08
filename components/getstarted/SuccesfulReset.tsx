"use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "../ui/PrimaryButton";
import GetStartedFooter from "./Footer";

const SuccesfulReset = () => {
  return (
    <section
      className="
        w-full min-h-screen 
        flex flex-col lg:flex-row 
      "
    >
      {/* =============== LEFT SIDE =============== */}
      <div
        className="
          w-full lg:w-1/2 
          min-h-[50vh] lg:min-h-screen 
          text-white 
          px-6 sm:px-12 lg:px-16 
          pt-10 
          flex flex-col
        "
        style={{
          background:
            "linear-gradient(134.68deg, #05B7CE 14.12%, #06B2CC 15.75%, #1B5DB2 41.2%, #2828A1 59.62%, #2D139B 68.28%)",
        }}
      >
        {/* TOP LOGO */}
        <div className="flex items-center gap-3 mb-10 sm:mb-16 lg:mb-20">
          <Image src="/dawhite.png" width={40} height={40} alt="logo" />
          <h1
            className="text-[20px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree" }}
          >
            DiagnosisAid
          </h1>
        </div>

        {/* CENTER TEXT */}
        <div className="flex flex-col justify-center flex-1">
          <h2
            className="
              font-fig font-semibold 
              text-[32px] sm:text-[40px] lg:text-[64px] 
              leading-[110%] lg:leading-[100%]
              mb-6
            "
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </h2>

          <p
            className="
              font-fig 
              text-[18px] sm:text-[22px] lg:text-[32px] 
              leading-[130%] lg:leading-[120%]
              opacity-95 
              max-w-[600px]
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim
            ad minim veniam.
          </p>
        </div>
      </div>

      {/* =============== RIGHT SIDE =============== */}
      <div
        className="
          w-full lg:w-1/2 
          min-h-[50vh] lg:min-h-screen 
          bg-[#161618] text-white 
          flex flex-col justify-center 
          relative 
          px-6 sm:px-10
        "
      >
        {/* TITLE */}
        <div className="flex justify-center mb-6 sm:mb-10">
          <h2
            className="
              font-bold 
              text-[32px] sm:text-[40px] lg:text-[48px] 
              leading-[100%]
            "
            style={{ fontFamily: "Figtree" }}
          >
            Get Started
          </h2>
        </div>

        {/* BUTTONS */}
        <div
          className="
            flex justify-center 
            gap-4 sm:gap-5 
            mb-14 sm:mb-20 lg:mb-24
          "
        >
          <PrimaryButton text="Login" href="/get-started/login" />
          <PrimaryButton text="SignUp" href="/get-started/signup" />
        </div>

        {/* SUCCESS BOX */}
        <div className="flex flex-col items-center -mt-4 lg:-mt-6 px-2">
          <div
            className="
              flex items-center justify-center 
              bg-[#3381F8]
              w-full sm:w-96 lg:w-116 
              h-14 sm:h-16 
              px-2 py-1 
              rounded-[10px]
              text-center
            "
          >
            <p className="font-bold text-[16px] sm:text-[18px] lg:text-[20px] text-[#FFFFFF]">
              Your password has been successfully reset!
            </p>
          </div>
        </div>

        {/* ========================= FOOTER FIX ========================= */}
        <div
          className="
            w-full 
            mt-10            /* mobile: pushes footer down */
            lg:mt-0          /* desktop: remove margin */
            relative         /* mobile: normal flow */
            lg:absolute lg:bottom-6   /* desktop: stick to bottom */
          "
        >
          <GetStartedFooter />
        </div>
        {/* ============================================================= */}
      </div>
    </section>
  );
};

export default SuccesfulReset;
