import React from "react";
import Image from "next/image";
import MagnitudePage from "./MagnitudePage";

const IntroducingData: React.FC = () => {
  return (
    <section className="w-full bg-[#161618] text-white py-20 px-0 ">
      {/* === Main Container === */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start">
        {/* ==== LEFT SIDE ==== */}
        <div className="flex-1 pl-16 flex flex-col space-y-8">
          {/* Heading */}
          <h2
            className="text-[48px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree, sans-serif", color: "#FFFFFF" }}
          >
            Introducing DiagnosisAid
          </h2>

          {/* Left Side Image */}
          <div className="border-2 border-white rounded-[20px] w-fit">
            <Image
              src="/product-main.png"
              alt="DiagnosisAid Interface"
              width={600}
              height={1000}
              className="rounded-[20px] object-contain"
            />
          </div>
        </div>

        {/* ==== RIGHT SIDE ==== */}
        <div className="flex-1 pr-16 flex flex-col space-y-8">
          {/* Description */}
          <p
            className="text-[24px] font-normal leading-[100%] text-gray-200"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            DiagnosisAid is a cloud-based platform that provides real-time
            diagnostic support to doctors, using advanced AI and quantum
            computing technologies.
          </p>

          {/* Problem Statement */}
          <div>
            <h3
              className="text-[32px] font-bold italic leading-[100%] mb-4"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              Problem Statement
            </h3>
            <ul
              className="list-disc list-inside text-[24px] font-normal text-gray-200 space-y-2"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              <li>
                Diagnostic Complexity – Doctors face a multitude of possible
                diagnoses with each patient, relying on their knowledge and
                experience to narrow down the options.
              </li>
              <li>
                Diagnostic Errors – Diagnostic errors are alarmingly common,
                leading to wasted resources, increased morbidity and mortality
                rates, and weakened trust in the healthcare system.
              </li>
            </ul>
          </div>

          {/* How We're Fixing It */}
          <div>
            <h3
              className="text-[32px] font-bold italic leading-[100%] capitalize mb-4"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              How we’re fixing it
            </h3>
            <ul
              className="list-disc list-inside text-[24px] font-normal text-gray-200 space-y-2"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              <li>
                Faster and more accurate diagnoses leading to better patient
                outcomes.
              </li>
              <li>Improved doctor confidence and satisfaction.</li>
              <li>Time and resource savings for healthcare providers.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default IntroducingData;
