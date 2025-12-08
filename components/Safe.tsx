import React from "react";

const Safe = () => {
  return (
    <section className="w-full bg-[#161618] text-white py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
      {/* === Main Layout === */}
      {/* - flex-col: Stacked on Mobile
          - md:flex-row: Side-by-side on Tablet & Laptop
          - gap-8: Smaller gap on mobile
          - md:gap-12: Larger gap on bigger screens
      */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 lg:gap-20">
        
        {/* === Left Side (Heading) === */}
        <div className="w-full md:flex-1">
          <h2
            className="
              font-bold leading-[110%]
              /* Responsive Font Sizes */
              text-[32px]       /* Mobile */
              md:text-[40px]    /* Tablet */
              lg:text-[48px]    /* Laptop */
            "
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            Safety & Responsibility
          </h2>
        </div>

        {/* === Right Side (Content) === */}
        <div className="w-full md:flex-1 space-y-6">
          <p
            className="
              text-gray-200 leading-[160%]
              /* Responsive Font Sizes */
              text-[16px]       /* Mobile */
              md:text-[18px]    /* Tablet */
              lg:text-[20px]    /* Laptop */
            "
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
            className="
              inline-flex items-center gap-2 
              font-medium underline decoration-solid 
              hover:text-gray-300 transition-all
              /* Responsive Text for Link */
              text-[16px] md:text-[18px] lg:text-[20px]
            "
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
              // Scale icon slightly on larger screens if needed, otherwise w-5 h-5 is standard
              className="w-5 h-5 lg:w-6 lg:h-6"
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