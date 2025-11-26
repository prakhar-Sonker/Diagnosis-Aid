"use client";

export default function SelectMode() {
  return (
    <div className="w-[500px] h-[236px] bg-[#202023] border border-[#434344] rounded-[20px] p-6 flex flex-col gap-5">

      {/* Heading */}
      <span className="text-[#FFFFFF] font-bold text-[20px] uppercase tracking-wide">
        Select Mode
      </span>

      {/* Video Call - ACTIVE (White background) */}
      <button className="w-full bg-[#FFFFFF] text-[#202023] font-extrabold text-[16px] rounded-[5px] py-3 text-left px-4 hover:bg-gray-200 transition">
        Virtual - Video Call
      </button>

      {/* Audio Call - Inactive (Dark background) */}
      <button className="w-full bg-[#4C4C52] text-[#FFFFFF]  rounded-[5px] py-3 font-medium text-[16px] text-left px-4 transition">
        Virtual - Audio Call
      </button>

    </div>
  );
}
