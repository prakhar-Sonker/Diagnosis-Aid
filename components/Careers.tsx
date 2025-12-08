import React from "react";
import Image from "next/image";

const Careers = () => {
  return (
    // Added 'relative z-10' to ensure the negative margin doesn't hide content behind the previous section
    <section className="relative z-10 w-full bg-[#161618] text-white py-12 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24 -mt-14">
      
      {/* --- TOP CONTENT --- */}
      <div className="max-w-4xl mx-auto text-center mb-10 md:mb-16">
        
        {/* Title */}
        <h2
          className="
            font-bold leading-[110%]
            text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px]
          "
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Careers at DiagnosisAid
        </h2>

        {/* Subtitle */}
        <p
          className="
            mt-4 md:mt-6 leading-[150%] text-gray-200
            text-[16px] sm:text-[18px] md:text-[20px]
            max-w-2xl mx-auto
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        {/* Link */}
        <a
          href="#"
          className="
            inline-flex items-center mt-6 text-[#FFFFFF] underline gap-2 
            text-[16px] md:text-[18px] 
            hover:text-gray-300 transition-colors
          "
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
            className="w-4 h-4 md:w-5 md:h-5"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7H17V17" />
          </svg>
        </a>
      </div>

      {/* --- IMAGE SECTION --- */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1320px]">
          <Image
            src="/carrer.png"
            alt="Careers at DiagnosisAid"
            width={1320}
            height={1257}
            className="
              w-full h-auto object-cover
              rounded-[16px] md:rounded-[24px] lg:rounded-[32px]
              shadow-2xl
            "
          />
        </div>
      </div>

      {/* --- BOTTOM TAGLINE --- */}
      <div className="mt-12 md:mt-20 lg:mt-24 text-center px-2">
        <h3
          className="
            font-bold italic leading-[110%] text-[#FFFFFF]
            text-[28px] sm:text-[40px] md:text-[52px] lg:text-[64px]
             mx-auto
          "
        >
          Join us in shaping the future of technology.
        </h3>
      </div>
    </section>
  );
};

export default Careers;