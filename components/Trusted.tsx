import React from "react";

const Trusted = () => {
  return (
    // Changed mt-18 (non-standard) to py-12 for better vertical spacing
    <div className="w-full text-[#FFFFFF] text-center py-12 md:py-20">
      
      {/* Container: Stack (col) on mobile, Row on medium screens+ */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        {/* ===== Trusted Users ===== */}
        {/* Mobile: w-full, border-b (separator), padding-bottom. 
            Desktop: w-1/3, border-r (side separator), remove border-b, remove padding-bottom */}
        <div className="
            w-full md:w-1/3 
            px-5 
            border-b md:border-b-0 md:border-r border-[#74747D] 
            pb-8 md:pb-0 
            mb-8 md:mb-0
        ">
          <h2 className="text-[48px] md:text-[64px] font-bold leading-tight">
            100K+
          </h2>
          <p className="text-[#FFFFFF] text-[18px] md:text-[20px] font-medium mt-2">
            Trusted Users
          </p>
        </div>

        {/* ===== Trusted Hospitals ===== */}
        {/* Mobile: w-full, border-b (separator). 
            Desktop: w-1/3, no borders. */}
        <div className="
            w-full md:w-1/3 
            px-5 
            border-b md:border-b-0 border-[#74747D] 
            pb-8 md:pb-0 
            mb-8 md:mb-0
        ">
          <h2 className="text-[48px] md:text-[64px] font-bold leading-tight">
            1000+
          </h2>
          <p className="text-[#FFFFFF] text-[18px] md:text-[20px] font-medium mt-2">
            Trusted Hospitals
          </p>
        </div>

        {/* ===== Trusted Users (Right) ===== */}
        {/* Mobile: w-full. 
            Desktop: w-1/3, border-l (side separator). */}
        <div className="
            w-full md:w-1/3 
            px-5 
            md:border-l border-[#74747D]
        ">
          <h2 className="text-[48px] md:text-[64px] font-bold leading-tight">
            100K+
          </h2>
          <p className="text-[#FFFFFF] text-[18px] md:text-[20px] font-medium mt-2">
            Trusted Users
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default Trusted;