"use client";

import Image from "next/image";
import Calendar from "./ui/Calendar";
import SelectMode from "./ui/SelectMode";
import PriceDetails from "./ui/PriceDetails";

export default function BookAnAppointment() {
  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <div className="flex justify-between items-center w-full px-8 py-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Image
            src="/dalogo.png"
            alt="logo"
            width={30}
            height={30}
            className="md:w-10 md:h-10"
          />
          <h2 className="font-black text-[17px]" style={{ fontFamily: "Nexa" }}>
            DiagnosisAid
          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Image
            src="/acclogo.png"
            alt="profile-pic"
            width={30}
            height={30}
            className="md:w-10 md:h-10 rounded-full"
          />
          <h2 className="font-bold text-[16px]">My Account</h2>
        </div>
      </div>

      {/* ---------------- MAIN HEADING ---------------- */}
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-[#FFFFFF] font-bold text-5xl text-center leading-tight">
          Book An Appointment <br /> For Consultation
        </h1>

        <p className="text-[#FFFFFF] text-[20px] mt-4 text-center">
          Based on your issue, here are some recommended doctors for you to consult with.
        </p>
      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div className="p-10 flex gap-10 justify-center mt-4">
        {/* Left: Calendar */}
        <Calendar />

        {/* Right Side: Mode + Price */}
        <div className="flex flex-col gap-10">
          <SelectMode />
          <PriceDetails />
        </div>
      </div>
    </>
  );
}
