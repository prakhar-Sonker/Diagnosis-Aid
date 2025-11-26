import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";

const Magnitude: React.FC = () => {
  return (
    <section className="w-full text-[#FFFFFF]">
      <div className="px-24 flex flex-col space-y-16">
        {/* === Magnitude of the Problem (TOP SECTION) === */}
        <div className="text-center md:text-left space-y-6">
          <h2
            className="text-[48px] font-bold "
            
          >
            Magnitude of the Problem
          </h2>
          <p
            className="text-[24px] font-normal"
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
              className="text-[40px] font-bold"
              
            >
              Rate of Misdiagnoses
            </h3>

            {/* Description */}
            <span
              className="text-[16px] italic font-normal"
            >
              According to a recent study, as many as 12 million adults in the
              US are misdiagnosed each year, with one in six cases leading to
              serious harm. 
              </span> 
              <span> Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.</span>

            {/* Link */}
            
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
              <div>
  <Link 
    href="#" 
    className="text-[20px] font-medium underline decoration-solid underline-offset-2"
  >
    Learn more about our research ↗
  </Link>
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magnitude;
