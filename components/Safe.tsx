import React from "react";

const Safe = () => {
  return (
    <section className="w-full bg-[#161618] text-white py-20 px-10 md:px-24">

      {/* === Main Layout === */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* === Left Side === */}
        <div className="flex-1">
          <h2
            className="text-[48px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Safety & Responsibility
          </h2>
        </div>

        {/* === Right Side === */}
        <div className="flex-1 space-y-6">
          <p
            className="text-[20px] text-gray-200 leading-[150%]"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-[20px] font-medium underline decoration-solid hover:text-gray-300 transition-all"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Learn about safety
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
      </div>
    </section>
  );
};

export default Safe;
