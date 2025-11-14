import React from "react";
import Image from "next/image";

const Features = () => {
  return (
    <section className="w-full bg-[#161618] text-white py-24 px-10 md:px-24">
      
      {/* ===== Title & Subtext ===== */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h2
          className="text-[48px] font-bold leading-[100%]"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Features & Benefits
        </h2>

        <p
          className="text-[20px] text-gray-300 mt-6 leading-[140%]"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud.
        </p>
      </div>

      {/* ===== Two Column Layout ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full">

        {/* ===== Left Column (Feature List) ===== */}
        <div className="space-y-16">

          {/* Block 1 */}
          <div>
            <h3
              className="text-[32px] font-bold leading-[100%]"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              Intuitive Interface
            </h3>

            <p
              className="text-[18px] text-gray-300 mt-4 leading-[140%] max-w-xl"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              Our user-friendly interface allows doctors to easily input patient data
              and receive clear and concise diagnostic recommendations.
            </p>

            <div className="border-b border-[#3A3A3D] mt-10"></div>
          </div>

          {/* Block 2 */}
          <div>
            <h3
              className="text-[32px] font-bold leading-[100%]"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              Multi-Dimensional Analysis
            </h3>

            <p
              className="text-[18px] text-gray-300 mt-4 leading-[140%] max-w-xl"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              Our technology analyzes a broad range of data, including medical history,
              genetic factors, imaging and lab results to provide comprehensive diagnoses.
            </p>

            <div className="border-b border-[#3A3A3D] mt-10"></div>
          </div>

          {/* Block 3 */}
          <div>
            <h3
              className="text-[32px] font-bold leading-[100%]"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              Collaboration Tools
            </h3>

            <p
              className="text-[18px] text-gray-300 mt-4 leading-[140%] max-w-xl"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              Our platform encourages collaboration between doctors, healthcare teams, and
              patients, ensuring optimal care and outcomes.
            </p>
          </div>
        </div>

        {/* ===== Right Column (Full Image, White Border, 30px Radius) ===== */}
        <div className="flex justify-center items-start w-full">
          <Image
            src="/productfimg.png"
            alt="Feature UI"
            width={1012}
            height={720}
            className="rounded-[30px] border-2 border-white object-contain shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Features;
