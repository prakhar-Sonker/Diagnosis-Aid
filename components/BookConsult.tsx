"use client";

import Image from "next/image";
import Calendar from "./ui/Calendar";
import SelectMode from "./ui/SelectMode";
import PriceDetails from "./ui/PriceDetails";

export default function BookAnAppointment() {
  return (
    <>
      {/* ---------------- HEADER ---------------- */}
      <div className="flex justify-between items-center w-full px-4 sm:px-8 py-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          <Image
            src="/dalogo.png"
            alt="logo"
            width={30}
            height={30}
            className="md:w-10 md:h-10"
          />
          <h2
            className="font-black text-[16px] sm:text-[17px]"
            style={{ fontFamily: "Nexa" }}
          >
            DiagnosisAid
          </h2>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/acclogo.png"
            alt="profile-pic"
            width={30}
            height={30}
            className="md:w-10 md:h-10 rounded-full"
          />
          <h2 className="font-bold text-[14px] sm:text-[16px]">
            My Account
          </h2>
        </div>
      </div>

      {/* ---------------- MAIN HEADING ---------------- */}
      <div className="flex flex-col items-center mt-6 px-4">
        <h1
          className="
            text-[#FFFFFF] 
            font-bold 
            text-3xl sm:text-4xl md:text-5xl 
            text-center 
            leading-tight
          "
        >
          Book An Appointment <br /> For Consultation
        </h1>

        <p className="text-[#FFFFFF] text-[16px] sm:text-[18px] md:text-[20px] mt-4 text-center max-w-[650px]">
          Based on your issue, here are some recommended doctors for you to consult with.
        </p>
      </div>

      {/* ---------------- MAIN CONTENT ---------------- */}
      <div
        className="
          p-4 sm:p-8 md:p-10 
          flex flex-col lg:flex-row 
          gap-10
          justify-center 
          mt-4
        "
      >
        {/* LEFT: Calendar */}
        <div className="w-full lg:w-auto flex justify-center">
          <Calendar />
        </div>

        {/* RIGHT: Select Mode + Price Details */}
        <div
          className="
            flex flex-col 
            gap-6 sm:gap-8 lg:gap-10 
            w-full 
            max-w-full 
            lg:max-w-[500px]
          "
        >
          {/* Select Mode */}
          <div className="w-full max-w-full">
            <SelectMode />
          </div>

          {/* Price Details */}
          <div className="w-full max-w-full">
            <PriceDetails />
          </div>
        </div>
      </div>
    </>
  );
}
