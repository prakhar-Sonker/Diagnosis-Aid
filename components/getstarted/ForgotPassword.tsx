"use client";

import { useState } from "react";
import UniversalButton from "../ui/UniversalButton";
import Password from "../password";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  return (
    <div className="w-screen min-h-screen bg-[#161618] text-white flex flex-col items-center">

      {/* Top section */}
      <Password 
        title="Forgot Password?" 
        desc="Forgot your password? Don’t worry, just enter your registered email. We will share an OTP to reset your password."
      />

      {/* Form Section */}
      <div className="w-full max-w-[420px] flex flex-col gap-5 mt-11">

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[50px] px-4 bg-transparent border border-[#4C4C52] rounded-md 
                     text-[#FFFFFF] text-[14px] outline-none focus:border-white"
        />

        {/* Continue Button */}
        <div className="mt-7">
          <UniversalButton 
            text="Continue" 
            href={`/get-started/otp-verification?email=${encodeURIComponent(email)}`} 
            fullWidth 
          />
        </div>

      </div>
    </div>
  );
}
