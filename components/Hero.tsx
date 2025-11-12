import React from "react";
import Image from "next/image";
import Background from "./Background";
import HospitalTrustImg from "./HospitalTrustImg";
import Trusted from "./Trusted";

function Hero(){
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white px-6 pt-32 ">
      {/* === Background Layers === */}
      <Background />

      {/* === Centered Content === */}
      <div className="z-10 flex flex-col items-center justify-center max-w-4xl text-center space-y-8">
        {/* Heading */}
        <h1
          className="font-[Figtree] font-bold text-[64px] leading-[100%] text-white"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Revolutionizing Medical <br /> Diagnosis with DiagnosisAid
        </h1>

        {/* Paragraph */}
        <p
          className="font-[Figtree] font-medium text-[20px] leading-[100%] text-white max-w-3xl"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Welcome to DiagnosisAid, the AI-powered medical diagnosis tool that is
          transforming the healthcare industry. Our innovative solution is
          changing the way doctors diagnose and treat patients, providing
          faster, more accurate results.
        </p>

        {/* === Button === */}
        <button
          className="bg-white text-black font-[Figtree] font-bold text-[20px] rounded-[12px] flex items-center justify-center gap-[10px] px-[45px] py-[20px]"
          style={{ fontFamily: "Figtree" }}
        >
          Learn about DiagnosisAid
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7"
              stroke="#161618"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 7H17V17"
              stroke="#161618"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="mt-16 w-full flex justify-center relative">
  <Image
    src="/datype.png"
    alt="DiagnosisAid Product"
    width={1320}
    height={472}
    className="rounded-[40px 0px] object-contain border border-gray-800 shadow-lg"
    priority
  />
</div>
  
    {/* <HospitalTrustImg /> */}
    {/* <Trusted /> */}

  
        
  
    </section>
  );
};

export default Hero;
