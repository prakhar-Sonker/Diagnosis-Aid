"use client";
import React from "react";
import Image from "next/image";
import PrimaryButton from "./ui/PrimaryButton";
import GetStartedFooter from "./getstarted/Footer";

const GetStarted = () => {
  return (
    <section className="w-full min-h-screen flex">
      {/* =============== LEFT SIDE =============== */}
      <div
        className="w-1/2 min-h-screen text-white px-16 pt-10 flex flex-col"
        style={{
          background:
            "linear-gradient(134.68deg, #05B7CE 14.12%, #06B2CC 15.75%, #1B5DB2 41.2%, #2828A1 59.62%, #2D139B 68.28%)",
        }}
      >
        {/* TOP LOGO */}
        <div className="flex items-center gap-3 mb-20">
          <Image src="/dawhite.png" width={40} height={40} alt="logo" />
          <h1
            className="text-[20px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree" }}
          >
            DiagnosisAid
          </h1>
        </div>

        {/* CENTER CONTENT */}
        <div className="flex flex-col justify-center flex-1">
          <h2
            className="font-fig font-semibold text-[64px] leading-[100%] mb-6"
            // style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </h2>

          <p
            className="font-fig text-[32px] leading-[120%] opacity-95 max-w-[600px]"
            // style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim
            ad minim veniam.
          </p>
        </div>
      </div>

      {/* =============== RIGHT SIDE =============== */}
      <div className="w-1/2 min-h-screen bg-[#161618] text-white flex flex-col justify-center relative">
        {/* CENTER TITLE */}
        <div className="flex justify-center mb-10">
          <h2
            className="font-bold text-[48px] leading-[100%]"
            style={{ fontFamily: "Figtree" }}
          >
            Get Started
          </h2>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center gap-5 mb-24">
          <PrimaryButton text="Login" href="/get-started/login" />
          <PrimaryButton text="SignUp" href="/get-started/signup" />
        </div>

        {/* FOOTER INSIDE RIGHT SIDE */}
        <div className="absolute bottom-6 w-full">
          <GetStartedFooter />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
