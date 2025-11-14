import React from "react";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section
      className="w-full text-white px-6 md:px-20 py-28"
      style={{
        background:
          "linear-gradient(134.68deg, #05B7CE 14.12%, #06B2CC 15.75%, #1B5DB2 41.2%, #2828A1 59.62%, #2D139B 68.28%)",
      }}
    >
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

        {/* LEFT COLUMN */}
        <div className="flex flex-col space-y-10">

          {/* Heading exactly like Figma */}
          <h2
            className="text-[48px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            How It Works
          </h2>

          {/* Figma exact image size */}
          <div className="w-full border-2  border-white rounded-[22px] overflow-hidden">
            <Image
              src="/howworkImg.png"
              alt="How It Works UI"
              width={430}
              height={720}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col space-y-10">

          {/* Top lorem ipsum paragraph */}
          <p
            className="text-[24px] leading-[100%] max-w-[600px]"
            style={{ fontFamily: "Figtree, sans-serif", fontWeight: 400 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          {/* Get Started link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 underline text-[20px]"
            style={{ fontFamily: "Figtree, sans-serif" }}
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

          {/* **STEPS — EXACT Figma SPACING + TYPOGRAPHY** */}
          <div className="space-y-10">

            {/* Step 1 */}
            <div>
              <h3
                className="text-[32px] font-bold leading-[100%]"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                1. Write a healthcare input
              </h3>
              <p
                className="mt-4"
                style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    color: "rgba(255,255,255,0.95)",
                }}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
               </p>
            </div>

            {/* Step 2 */}
            <div>
              <h3
                className="text-[32px] font-bold leading-[100%]"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                2. Get an AI advice
              </h3>
              <p
                className="mt-4"
                style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    color: "rgba(255,255,255,0.95)",
                }}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
               </p>
            </div>

            {/* Step 3 */}
            <div>
              <h3
                className="text-[32px] font-bold leading-[100%]"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                3. Book consultation with nearby doctor
              </h3>
              <p
                className="mt-4"
                style={{
                    fontFamily: "Figtree, sans-serif",
                    fontWeight: 400,
                    fontStyle: "italic",
                    fontSize: "16px",
                    lineHeight: "140%",
                    letterSpacing: "0%",
                    color: "rgba(255,255,255,0.95)",
                }}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
               </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
