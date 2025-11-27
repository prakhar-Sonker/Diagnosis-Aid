"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Magnitude: React.FC = () => {
  return (
    <section className="w-full text-[#FFFFFF] px-6 sm:px-10 md:px-16 lg:px-79 py lg:py-20">

      {/* MAIN WRAPPER */}
      <div className="flex flex-col space-y-16">

        {/* ===================== TOP HEADING ===================== */}
        <div className=" md:text-left space-y-6 max-w-4xl">
          <h2 className="text-[48px] font-bold">
            Magnitude of the Problem
          </h2>

          <p className="lg:text-[24px] font-normal leading-[140%] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* ===================== RATE OF MISDIAGNOSIS ===================== */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">

          {/* LEFT TEXT SECTION */}
          <div className="flex-1 space-y-6">

            <h3 className="text-[40px] font-bold">
              Rate of Misdiagnoses
            </h3>

            <div>
              <span className="text-[16px] italic font-normal leading-[150%] ">
              According to a recent study, as many as 12 million adults in the US 
              are misdiagnosed each year, with one in six cases leading to serious harm.
            </span>

            <span className="text-[16px] font-normal leading-[150%]">
              {" "}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            </div>

            <div c>
                <Link
                  href="#"
                  className="text-[20px] font-medium underline underline-offset-2 flex items-center gap-2"
                >
                  Learn more about our research
                  {/* your exact SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 7H17V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </Link>
              </div>

          </div>

          {/* ===================== RIGHT IMAGE SECTION ===================== */}
          <div className="flex-1 flex justify-center md:justify-end w-full">
            <div className="w-full max-w-[530px] overflow-hidden">

              <Image
                src="/magImg.jpg"
                alt="Research Discussion"
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />

              {/* LINK BELOW IMAGE WITH SVG */}
              

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Magnitude;
