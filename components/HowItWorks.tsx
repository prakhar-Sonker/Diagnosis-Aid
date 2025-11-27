"use client";

import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section
      className="w-full text-white px-4 sm:px-8 md:px-14 lg:px-20 py lg:py-20 md:py-28 "
      style={{
        background:
          "linear-gradient(134.68deg, #05B7CE 14.12%, #06B2CC 15.75%, #1B5DB2 41.2%, #2828A1 59.62%, #2D139B 68.28%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT COLUMN */}
        <div className="flex flex-col space-y-10 relative">

          {/* RESPONSIVE HEADING */}
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight">
            How It Works
          </h2>

          {/* RESPONSIVE IMAGE CONTAINER */}
          <div className="
            border-2 border-white rounded-[22px] overflow-hidden 
            w-full max-w-[600px] sm:max-w-[500px] md:max-w-[820px] -ml-100
          ">
            <Image
              src="/howworkImg.png"
              alt="How It Works UI"
              width={820}
              height={600}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-10">

          {/* DESCRIPTION */}
          <p className="text-[18px] sm:text-[20px] md:text-[24px] leading-[140%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          {/* GET STARTED LINK */}
          <a
            href="#"
            className="inline-flex items-center gap-2 underline text-[18px] sm:text-[20px] font-medium"
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7H17V17" />
            </svg>
          </a>

          {/* STEPS */}
          <div className="space-y-10">

            {/* STEP TEMPLATE FUNCTION */}
            {[
              {
                heading: "1. Write a healthcare input",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              },
              {
                heading: "2. Get an AI advice",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              },
              {
                heading: "3. Book consultation with nearby doctor",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
              },
            ].map((step, index) => (
              <div key={index}>
                <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold">
                  {step.heading}
                </h3>
                <p
                  className="mt-3 sm:mt-4 text-[14px] sm:text-[15px] md:text-[16px] italic leading-[140%] text-white/90"
                >
                  {step.text}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
