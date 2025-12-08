"use client";

import React from "react";
import Image from "next/image";
import Background from "./Background"; // keep your existing Background import

const Features = () => {
  return (
    <section className=" w-full !bg-[#161618] text-white py lg:py-16 px-6 sm:px-10 md:px-16 lg:px-24 mb-10">

      {/* ===== BACKGROUND (always behind content) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Background />
      </div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-16">

        {/* ===== Title & Subtext ===== */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2
            className="
              text-[32px] sm:text-[40px] md:text-[48px] 
              font-bold leading-tight
            "
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Features & Benefits
          </h2>

          <p
            className="
              text-[16px] sm:text-[18px] md:text-[20px] 
              text-gray-300 mt-4 sm:mt-6 leading-relaxed
            "
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
        </div>

        {/* ===== MAIN GRID (content + image) ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24">

          {/* LEFT COLUMN — Feature list */}
          <div className="space-y-14 sm:space-y-16">

            {/* Block 1 */}
            <div>
              <h3
                className="text-[24px] sm:text-[28px] md:text-[32px] font-bold"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Intuitive Interface
              </h3>

              <p
                className="
                  text-[16px] sm:text-[17px] md:text-[18px]
                  text-gray-300 mt-3 sm:mt-4 leading-relaxed max-w-xl
                "
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Our user-friendly interface allows doctors to easily input patient data and receive
                clear and concise diagnostic recommendations.
              </p>

              <div className="border-b border-[#3A3A3D] mt-8 sm:mt-10"></div>
            </div>

            {/* Block 2 */}
            <div>
              <h3
                className="text-[24px] sm:text-[28px] md:text-[32px] font-bold"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Multi-Dimensional Analysis
              </h3>

              <p
                className="
                  text-[16px] sm:text-[17px] md:text-[18px]
                  text-gray-300 mt-3 sm:mt-4 leading-relaxed max-w-xl
                "
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Our technology analyzes medical history, genetics, imaging, and lab results to
                provide a deep, comprehensive diagnosis.
              </p>

              <div className="border-b border-[#3A3A3D] mt-8 sm:mt-10"></div>
            </div>

            {/* Block 3 */}
            <div>
              <h3
                className="text-[24px] sm:text-[28px] md:text-[32px] font-bold"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Collaboration Tools
              </h3>

              <p
                className="
                  text-[16px] sm:text-[17px] md:text-[18px]
                  text-gray-300 mt-3 sm:mt-4 leading-relaxed max-w-xl
                "
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                Our platform encourages collaboration between doctors, teams, and patients, ensuring 
                optimal care and better outcomes.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN — Image */}
          <div className="flex justify-center lg:justify-end items-start w lg:w-full ml lg:ml-130">
            <Image
              src="/productfimg.png"
              alt="Feature UI"
              width={1012}
              height={800}
              className="
                rounded-[20px] sm:rounded-[24px] md:rounded-[30px]
                border border-white 
                object-contain 
                w-full h-auto 
                max-w-[500px] sm:max-w-[650px] md:max-w-[800px] lg:max-w-[1100px]
                shadow-xl
              "
            />
          </div>

        </div>

      </div>
      
    </section>
  );
};

export default Features;
