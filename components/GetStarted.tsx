"use client";
import React from "react";
import Image from "next/image";

const GetStarted = () => {
  return (
    <section className="w-full min-h-screen flex">
      {/* Left Side */}
<div
  className="w-1/2 min-h-screen text-white px-16 flex flex-col justify-center"
  style={{
    background:
      "linear-gradient(134.68deg, #05B7CE 14.12%, #06B2CC 15.75%, #1B5DB2 41.2%, #2828A1 59.62%, #2D139B 68.28%)",
  }}
>
   {/* TOP: Logo */}
  <div className="flex items-center gap-3 mb-20 mt-7">
    <Image src="/dawhite.png" width={40} height={40} />
    <h1 className="text-[20px] font-bold" style={{ fontFamily: "Figtree" }}>
      DiagnosisAid
    </h1>
  </div>

  {/* CENTER AREA (empty for now) */}
  <div className="flex-1 flex flex-col justify-center">
    <h2
     className=" text-[64px] leading-[100%]"
      style={{ fontFamily: "Figtree, sans-serif", color:"#FFFFFF" }}
    >
      Lorem ipsum dolor sit amet consectetur adipiscing elit.
    </h2>
    <p className="text-[32px] leading-[100% lettter-spacing[0%]"
      style={{fontFamily: "Figtree, sans-serif", color: "#FFFFFF", fontStyle: "semi-bold"}} 
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam.
    </p>

  </div>
</div>


      {/* Right Side */}
      <div className="w-1/2 min-h-screen bg-black text-white">
        Right side
      </div>
    </section>
  );
};

export default GetStarted;
