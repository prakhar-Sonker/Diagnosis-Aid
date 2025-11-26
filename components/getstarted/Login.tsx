"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import UniversalButton from "../ui/UniversalButton";

export default function Login() {
  return (
    <div className="w-full min-h-screen bg-[#161618] text-white flex flex-col items-center pt-16 px-4">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <Image src="/dalogo.png" width={40} height={40} alt="logo" />
        <h1
          className="text-[22px] font-extrabold"
          style={{ fontFamily: "Figtree" }}
        >
          DiagnosisAid
        </h1>
      </div>

      {/* Title */}
      <h2
        className="text-[40px] font-bold mb-10 leading-[100%]"
        style={{ fontFamily: "Figtree" }}
      >
        Welcome Back!
      </h2>

      {/* Form Container */}
      <div className="w-full max-w-[420px] flex flex-col gap-5">

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full h-[50px] px-4 bg-transparent border border-white/20 rounded-md text-white text-[16px] outline-none focus:border-white"
          style={{ fontFamily: "Figtree" }}
        />

        {/* Password */}
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[50px] px-4 bg-transparent border border-white/20 rounded-md text-white text-[16px] outline-none focus:border-white"
            style={{ fontFamily: "Figtree" }}
          />
          <Eye className="absolute right-4 top-3 opacity-70" size={22} />
        </div>

        {/* Forgot Password */}
       <a 
  href="/get-started/forgot-password" 
  className="text-[14px] underline cursor-pointer"
  style={{ fontFamily: "Figtree" }}
>
  Forgot Password?
</a>


        {/* Login Button */}
        <UniversalButton text="Login" href="/get-started/appointment" fullWidth />


        {/* OR Divider */}
        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 border-t border-white/20" />
          <span className="text-white/50 text-[14px]">OR</span>
          <div className="flex-1 border-t border-white/20" />
        </div>

        {/* Google Button */}
        <UniversalButton 
            text="Continue with Google"
            href="#"
            icon="/google.png"
            fullWidth
            />

        {/* Microsoft Button */}
        <UniversalButton 
             text="Continue with Microsoft"
             href="#"
             icon="/microsoft.png"
             fullWidth
             />
      </div>
    </div>
  );
}
