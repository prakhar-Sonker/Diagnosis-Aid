import React from "react";
import Image from "next/image";

const Careers = () => {
  return (
    <section className="w-full bg-[#161618] text-white py-24 px-6 md:px-24">
      {/* --- TOP CONTENT --- */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        
        {/* Title */}
        <h2
          className="text-[40px] font-bold leading-[100%]"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Careers at DiagnosisAid
        </h2>

        {/* Subtitle */}
        <p
          className="text-[20px] mt-4 leading-[140%] text-gray-300"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>

        {/* Link */}
        <a
          href="#"
          className="inline-flex items-center mt-4 text-[18px] underline gap-2"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          View Careers
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7H17V17" />
          </svg>
        </a>
      </div>

      {/* --- IMAGE SECTION --- */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1320px] overflow-hidden">
          <Image
            src="/carrer.png"   // <-- your image path here
            alt="Careers Image"
            width={1320}
            height={1257}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* --- BOTTOM TAGLINE --- */}
      <div className="mt-20 text-center">
        <h3
          className="text-[64px] font-bold italic leading-[100%]"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Join us in shaping the future of technology.
        </h3>
      </div>
    </section>
  );
};

export default Careers;
