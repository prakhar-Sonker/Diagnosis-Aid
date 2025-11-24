"use client";

import Image from "next/image";

export default function Password({ title, desc }) {
  return (
    <div className="w-screen flex flex-col items-center px-4 pt-12">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <Image src="/dalogo.png" width={40} height={40} alt="logo" />
        <h1 className="text-[22px] font-extrabold">
          DiagnosisAid
        </h1>
      </div>

      {/* Heading Section WITH EXACT 340PX GAP */}
      <div className="w-full flex flex-col items-center mt-45">
        <h2
          className="text-5xl font-bold"
        >
          {title}
        </h2>

        <p className="text-[20px] text-[#FFFFFF] mt-5 text-center">
          {desc}
        </p>
      </div>
    </div>
  );
}
