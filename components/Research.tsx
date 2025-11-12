import React from "react";

const Research = () => {
  return (
    <section className="w-full bg-[#161618] text-white py-20 px-10 md:px-24">

      {/* === Left-Aligned Content === */}
      <div className="max-w-4xl mx-auto md:mx-0 text-left space-y-8">
        {/* Heading */}
        <h2
          className="text-[48px] font-bold leading-[100%]"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Research
        </h2>

        {/* Subtext */}
        <p
          className="text-[20px] font-normal text-gray-300 leading-[150%] max-w-2xl"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          We research generative models and how to align them with human values.
        </p>

        {/* Link */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[20px] font-medium underline decoration-solid hover:text-gray-300 transition-all"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          View all updates
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
    </section>
  );
};

export default Research;
