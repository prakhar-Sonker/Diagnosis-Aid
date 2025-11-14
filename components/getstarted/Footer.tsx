"use client";

import Image from "next/image";

export default function GetStartedFooter() {
  return (
    <div className="w-full  flex flex-col items-center md:text-base">

      {/* LEFT SIDE */}
      <div className="flex items-center flex-col gap-2 ">
        <div className="flex items-center justify-center gap-4 ">
          <Image
          src="/dalogo.png"
          alt="DiagnosisAid Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />

        <div className="flex items-center gap-2 mt-1">
          <h2
            className="text-[20px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree" }}
          >
            DiagnosisAid
          </h2>

          <span
            className="text-[16px] font-semibold opacity-80"
            style={{ fontFamily: "Figtree" }}
          >
            © 2024
          </span>
        </div>
        </div>

        <div className="font-fig text-[16px] mt-6 flex items-center gap-4">
        <p className="hover:opacity-60 cursor-pointer transition">Terms & Policies</p>
        {/* Separator added */}
        <span className="opacity-60 text-lg select-none">|</span> 
        <p className="hover:opacity-60 cursor-pointer transition">Privacy Policy</p>
      </div>
      </div>

      {/* RIGHT SIDE */}
       
    </div>
  );
}
