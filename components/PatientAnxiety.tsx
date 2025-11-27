import React from "react";
import Image from "next/image";

const PatientAnxiety: React.FC = () => {
  return (
    <section className="w-full bg-[#161618] text-white py lg:py-20 px-10 md:px-24">
      {/* === Top Divider === */}
      <div className="border-t-2 border-white w-full mb-16"></div>

      {/* === Main Layout === */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* === LEFT SIDE TEXT === */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <h2
            className="text-[40px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree, sans-serif", color: "#FFFFFF" }}
          >
            Patient Anxiety
          </h2>

          {/* Subtext (Italic paragraph) */}
          <p
            className="italic text-[18px] text-gray-300 leading-[150%]"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Anxiety among patients often arises due to uncertainty in their
            diagnosis and treatment journey. This can affect both mental and
            physical recovery.
          </p>

          {/* Description */}
          <p
            className="text-[18px] text-gray-300 leading-[150%]"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            DiagnosisAid provides clarity and reassurance to patients by ensuring
            accurate diagnosis and communication. Our AI helps reduce diagnostic
            delays, improving overall patient confidence and outcomes.
          </p>

          {/* Explore link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[20px] font-medium underline decoration-solid"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Explore our product
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
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

        {/* === RIGHT SIDE IMAGE === */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-[480px] overflow-hidden">
            <Image
              src="/Patient.jpg" // Replace with your actual image
              alt="Patient discussing with doctor"
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

export default PatientAnxiety;
