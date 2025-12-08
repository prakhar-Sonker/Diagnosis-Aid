import React from "react";
import Image from "next/image";

const IntroducingData: React.FC = () => {
  return (
    // overflow-x-hidden is crucial to handle the negative margins safely
    <section className="w-full text-white py-12 md:py-20 lg:py-32 overflow-x-hidden">
      
      {/* === Main Container === */}
      {/* Standard padding ensures text is aligned, but we will break the image out of this */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
        
        {/* ==== LEFT SIDE (Heading + Image) ==== */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 md:space-y-12">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight">
            Introducing <br className="hidden md:block" /> DiagnosisAid
          </h2>

          {/* === LEFT SIDE IMAGE CONTAINER === 
             Logic: To make the image touch the left screen edge while the text remains padded:
             1. We apply a negative margin-left equal to the container's padding-left.
                (-ml-6 on mobile, -ml-12 on tablet, -ml-24 on desktop)
             2. We increase the width to compensate for that pull.
                (w-[calc(100%+24px)] etc.)
          */}
          <div className="
            relative
            border-2 border-white 
            rounded-r-[20px] rounded-l-none overflow-hidden
            
            /* The Responsive Pull */
            -ml-6 w-[calc(100%+24px)] 
            md:-ml-12 md:w-[calc(100%+48px)] 
            lg:-ml-24 lg:w-[calc(100%+96px)]
            
            /* Aspect Ratio preservation wrapper */
            aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3]
          ">
            <Image
              src="/productfimg.png"
              alt="DiagnosisAid Interface Dashboard"
              fill
              className="object-cover object-left-top"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
            />
          </div>
        </div>

        {/* ==== RIGHT SIDE (Content) ==== */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 lg:pt-12">
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-gray-100">
            DiagnosisAid is a cloud-based platform that provides real-time
            diagnostic support to doctors, using advanced AI and quantum
            computing technologies.
          </p>

          <hr className="border-gray-700 w-full" />

          {/* Problem Statement */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold italic text-white">
              Problem Statement
            </h3>
             
            <ul className="list-disc list-outside ml-5 text-base md:text-lg lg:text-xl font-normal text-gray-200 space-y-3">
              <li>
                <span className="font-bold text-white">Diagnostic Complexity:</span> Doctors face a multitude of possible
                diagnoses with each patient, relying on limited time and experience.
              </li>
              <li>
                <span className="font-bold text-white">Diagnostic Errors:</span> Errors are alarmingly common,
                leading to wasted resources and increased patient risk.
              </li>
            </ul>
          </div>

          {/* How We're Fixing It */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold italic text-white">
              How We’re Fixing It
            </h3>
            <ul className="list-disc list-outside ml-5 text-base md:text-lg lg:text-xl font-normal text-gray-200 space-y-3">
              <li>Faster and more accurate diagnoses leading to better patient outcomes.</li>
              <li>Improved doctor confidence and satisfaction.</li>
              <li>Time and resource savings for healthcare providers.</li>
              <li>Seamless integration with existing hospital workflows.</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IntroducingData;