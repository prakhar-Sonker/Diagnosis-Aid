import React from "react";
import Image from "next/image";
import Link from "next/link";

const LostResourcesPage: React.FC = () => {
  return (
    <section className="w-full text-[#FFFFFF] py-20 px-10 md:px-24">
      
      {/* === Divider Line === */}
      <div className="border-t-2 border-[#FFFFFF] w-full mb-16"></div>

      {/* === Main Section === */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        
        {/* === LEFT SIDE TEXT === */}
        <div className="flex-1 space-y-6 font-[Figtree]">

          {/* Title */}
          <h2 className="text-[40px] font-bold leading-[100%] text-[#FFFFFF]">
            Lost Time & Resources
          </h2>

          {/* Subtext (Italic) */}
          <p className="italic text-[18px] text-gray-300 leading-[150%]">
            Misdiagnoses can lead to <em>excessive testing and prolonged treatments</em>,{" "}
            <em>wasting time, resources and money.</em>
          </p>

          {/* Description */}
          <p className="text-[18px] text-gray-300 leading-[150%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Underline Link */}
          <Link 
            href="#"
            className="inline-flex items-center gap-2 text-[20px] font-medium underline underline-offset-2 text-[#FFFFFF]"
          >
            Explore our product
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FFFFFF"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7H17V17" />
            </svg>
          </Link>
        </div>

        {/* === RIGHT SIDE IMAGE === */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-[480px] overflow-hidden">
            <Image
              src="/Lost.jpg"
              alt="Doctor consulting patient"
              width={480}
              height={320}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LostResourcesPage;
