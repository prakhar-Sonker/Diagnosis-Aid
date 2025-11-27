import React from "react";
import Image from "next/image";

const IntroducingData: React.FC = () => {
  return (
    // overflow-x-hidden is crucial here to prevent horizontal scrolling
    <section className="w-full text-[#FFFFFF] py-12 md:py-24 lg:py-32 overflow-x-hidden">
      
      {/* === Main Container === */}
      {/* We apply standard padding here (px-6 mobile, px-24 desktop) 
          so the TEXT and HEADINGS are aligned nicely. */}
      <div className="w-full px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-0">
        
        {/* ==== LEFT SIDE ==== */}
        <div className="flex-1 flex flex-col space-y-8 md:space-y-10 w-full lg:pr-12">
          
          {/* Heading (Stays inside the padding) */}
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight">
            Introducing DiagnosisAid
          </h2>

          {/* Left Side Image Container */}
          {/* LOGIC FOR FLUSH LEFT:
             1. The parent container has padding (px-6 mobile, px-24 desktop).
             2. To make the image touch the screen edge, we use a negative margin-left
                exactly equal to that padding.
             3. Mobile: px-6 -> -ml-6
             4. Tablet: px-12 -> -ml-12
             5. Desktop: px-24 -> -ml-24
          */}
          <div className="
            border-2 border-[#FFFFFF] 
            overflow-hidden 
            rounded-r-[20px] rounded-l-none 
            ml-0 lg:-ml-55
            
            /* Pull image to left screen edge */
            
            
            /* Adjust width to compensate for the shift */
            w-[calc(100%+24px)] md:w-[calc(100%+48px)] lg:w-fit
          ">
            <Image
              src="/productfimg.png"
              alt="DiagnosisAid Interface"
              width={800}
              height={1000}
              className="
                object-cover 
                w-full h-auto
                /* Optional: If you want the 'cut' effect inside the border, keep negative margin on image too */
                ml-0
              "
            />
          </div>

        </div>

        {/* ==== RIGHT SIDE ==== */}
        {/* Added pl-12 on desktop to separate text from the image area */}
        <div className="flex-1 flex flex-col space-y-8 lg:pl-12">
          
          {/* Description */}
          <p className="text-[18px] md:text-[24px] font-normal text-[#FFFFFF] leading-relaxed">
            DiagnosisAid is a cloud-based platform that provides real-time
            diagnostic support to doctors, using advanced AI and quantum
            computing technologies.
          </p>

          {/* Problem Statement */}
          <div>
            <h3 className="text-[28px] md:text-[32px] font-bold italic mb-4">
              Problem Statement
            </h3>
            <ul className="list-disc list-inside text-[18px] md:text-[24px] font-normal text-[#FFFFFF] space-y-4">
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
            <h3 className="text-[28px] md:text-[32px] font-bold italic mb-4">
              How We’re Fixing It
            </h3>
            <ul className="list-disc list-inside text-[18px] md:text-[24px] font-normal text-[#FFFFFF] space-y-4">
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