import React from "react";
import Image from "next/image";

const IntroducingData: React.FC = () => {
  return (
    <section className="w-full text-[#FFFFFF] py-50 ">
      {/* === Main Container === */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start">
        {/* ==== LEFT SIDE ==== */}
        <div className="flex-1 flex flex-col space-y-10 px-9">
          {/* Heading */}
          <h2
            className="text-[48px] font-bold"
          >
            Introducing DiagnosisAid
          </h2>

          {/* Left Side Image */}
      
<div className="border-2 border-[#FFFFFF]  w-fit overflow-hidden -ml-15 rounded-[20px]">
  <Image
    src="/productfimg.png"
    alt="DiagnosisAid Interface"
    width={800}
    height={1000}
    className="rounded-[20px] -ml-20"
  />
</div>

        </div>

        {/* ==== RIGHT SIDE ==== */}
        <div className="flex-1 pr-10 flex flex-col space-y-8">
          {/* Description */}
          <p
            className="text-[24px] font-normal  text-[#FFFFFF]"
          >
            DiagnosisAid is a cloud-based platform that provides real-time
            diagnostic support to doctors, using advanced AI and quantum
            computing technologies.
          </p>

          {/* Problem Statement */}
          <div>
            <h3
              className="text-[32px] font-bold italic mb-4"
            >
              Problem Statement
            </h3>
            <ul
              className="list-disc list-inside text-[24px] font-normal text-[#FFFFFF] space-y-2"
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
              className="text-[32px] font-bold italic mb-4"
            >
              How We’re Fixing It
            </h3>
            <ul
              className="list-disc list-inside text-[24px] font-normal text-[#FFFFFF] space-y-2"
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
