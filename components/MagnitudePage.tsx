import React from "react";
import Image from "next/image";

const Magnitude: React.FC = () => {
  return (
    <section className="w-full bg-[#161618] text-white py-20 px-10 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* === Magnitude of the Problem (TOP SECTION) === */}
        <div className="text-center md:text-left space-y-6">
          <h2
            className="text-[48px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree, sans-serif", color: "#FFFFFF" }}
          >
            Magnitude of the Problem
          </h2>
          <p
            className="text-[24px] font-normal leading-[100%] text-gray-300 max-w-4xl"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* === Rate of Misdiagnoses Section === */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* LEFT SIDE CONTENT */}
          <div className="flex-1 space-y-6">
            {/* Title */}
            <h3
              className="text-[40px] font-bold leading-[100%]"
              style={{ fontFamily: "Figtree, sans-serif", color: "#FFFFFF" }}
            >
              Rate of Misdiagnoses
            </h3>

            {/* Description */}
            <p
              className="text-[16px] italic font-normal leading-[100%] text-gray-300"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              According to a recent study, as many as 12 million adults in the
              US are misdiagnosed each year, with one in six cases leading to
              serious harm. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Link */}
            <div>
              <a
                href="#"
                className="text-[20px] font-medium underline decoration-solid"
                style={{
                  fontFamily: "Figtree, sans-serif",
                  color: "#FFFFFF",
                  textUnderlineOffset: "2px",
                }}
              >
                Learn more about our research ↗
              </a>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-full max-w-[500px] border border-gray-700  overflow-hidden">
              <Image
                src="/magImg.jpg"
                alt="Research Discussion"
                width={500}
                height={350}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magnitude;
