"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";   // <-- added
import UniversalButton from "../ui/UniversalButton";
import Password from "../password";

export default function OtpVerification() {

  const params = useSearchParams();
  const email = params.get("email") || "";   // <-- GET EMAIL FROM URL

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move to next box
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <div className="w-screen min-h-screen bg-[#161618] text-white flex flex-col items-center px-4 pt-1 ">

      {/* Logo */}
      {/* <div className="flex items-center gap-3 mb-16">
        <Image src="/dalogo.png" width={40} height={40} alt="logo" />
        <h1 className="text-[22px] font-extrabold">DiagnosisAid</h1>
      </div>

      {/* Heading + Subtext */}
      {/* <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-[48px] font-bold">
          OTP Verification
        </h2>

        <p className="text-[20px] text-[#FFFFFF] mt-4">
          We have sent an OTP to your registered email address:
          <span className="underline ml-2">{email}</span>
        </p>
      </div> */}

      <Password 
         title="OTP Verification"
         desc={`We have sent an OTP to your registered email address: ${email}`}
         />

      {/* OTP BOXES */}
      <div className="flex gap-3 mt-15">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            className="w-[45px] h-[50px] bg-transparent border border-[#4C4C52]
                       rounded-md text-center text-[22px] text-white outline-none
                       focus:border-white"
          />
        ))}
      </div>
<div className="w-[320px] mx-auto mt-15">
  <UniversalButton text="Verify OTP" href="#" fullWidth />
</div>


      {/* Resend OTP */}
      <p className="text-[20px] mt-4 underline cursor-pointer text-[#FFFFFF]">
        Resend OTP
      </p>

    </div>
  );
}
