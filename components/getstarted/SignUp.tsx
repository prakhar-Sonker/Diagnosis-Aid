"use client";

import Image from "next/image";
import UniversalButton from "../ui/UniversalButton";
import { useState, useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";

/* ---------------- SVGs ---------------- */

const genderIcon = `
<svg width="16" height="16" fill="none" stroke="#FFFFFF" stroke-width="2">
  <path d="M1 5l6 6 6-6" />
</svg>`;

const calendarIcon = `
<svg width="22" height="22" fill="none" stroke="#FFFFFF" stroke-width="2">
  <rect x="3" y="4" width="18" height="16" rx="2"/>
  <path d="M3 10h18"/>
  <path d="M8 2v4"/>
  <path d="M16 2v4"/>
</svg>`;

const eyeOpen = `
<svg width="24" height="24" fill="none" stroke="#FFFFFF" stroke-width="2">
<path d="M1 12S5 4 12 4s11 8 11 8-4 8-11 8S1 12 1 12Z"/>
<circle cx="12" cy="12" r="3"/>
</svg>`;

const eyeClosed = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003M9.9 4.24002C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19M14.12 14.12C13.8454 14.4148 13.5141 14.6512 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.4811 9.80385 14.1962C9.51897 13.9113 9.29439 13.572 9.14351 13.1984C8.99262 12.8249 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2219 9.18488 10.8539C9.34884 10.4859 9.58525 10.1547 9.88 9.88003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 1L23 23" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  // Default Country Code
  const [countryCode, setCountryCode] = useState("+91");

  const dobRef = useRef(null);

  return (
    <div className="w-full min-h-screen bg-[#161618] text-[#FFFFFF] flex flex-col items-center pt-20 px-4 pb-10">
      
      {/* Logo */}
      <div className="flex items-center gap-3 mb-12">
        <Image src="/dalogo.png" width={42} height={42} alt="logo" />
        <h1 className="text-[22px] font-extrabold">DiagnosisAid</h1>
      </div>

      {/* Title */}
      <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-[700] mb-12 text-center leading-tight">
        Welcome To DiagnosisAid!
      </h2>

      {/* FORM CONTAINER */}
      <Box
        component="form"
        sx={{
          width: "100%",
          maxWidth: "420px", // Standardized max width
          display: "flex",
          flexDirection: "column",
          gap: 3,
          opacity: "70%",

          /* GLOBAL INPUT + LABEL TYPOGRAPHY */
          "& .MuiOutlinedInput-root": {
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontSize: "17px",
            fontWeight: 400,
            letterSpacing: "0px",
            
            "& fieldset": { borderColor: "#4C4C52" },
            "&:hover fieldset": { borderColor: "#FFFFFF" },
            "&.Mui-focused fieldset": { borderColor: "#FFFFFF" },
          },

          "& .MuiInputBase-input": {
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontSize: "17px",
            fontWeight: 400,
          },

          "& .MuiInputLabel-root": {
            fontFamily: "Figtree",
            fontSize: "17px",
            fontWeight: 400,
            color: "#FFFFFF",
            "&.Mui-focused": {
              color: "#FFFFFF",
              fontSize: "14px",
            },
          },

          "& .MuiMenuItem-root": {
            backgroundColor: "#161618",
            color: "#FFFFFF",
            fontFamily: "Figtree",
            fontSize: "17px",
            fontWeight: 400,
          },
        }}
      >
        {/* Name */}
        <TextField label="Name" variant="outlined" fullWidth />

        {/* Email */}
        <TextField label="Email Address" type="email" variant="outlined" fullWidth />

        {/* PHONE FIELD ROW */}
        <div className="flex w-full">
            {/* Country Code */}
            <TextField
                select
                // label="Code"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                variant="outlined"
                sx={{ width: "100px", flexShrink: 0 }}
                SelectProps={{
                    MenuProps: {
                        PaperProps: { sx: { backgroundColor: "#161618", color: "#FFFFFF" } },
                    },
                }}
            >
                <MenuItem value="+27">+27</MenuItem>
                <MenuItem value="+91">+91</MenuItem>
                <MenuItem value="+1">+1</MenuItem>
                <MenuItem value="+44">+44</MenuItem>
            </TextField>

            {/* Phone Number */}
            <TextField 
                label="Phone Number" 
                variant="outlined" 
                fullWidth 
                type="tel"
            />
        </div>

        {/* GENDER */}
        <div className="relative">
          <TextField
            select
            label="Gender"
            variant="outlined"
            defaultValue=""
            fullWidth
            SelectProps={{
              IconComponent: () => null, // Hide default arrow
              MenuProps: { PaperProps: { sx: { backgroundColor: "#161618", color: "#FFFFFF" } } },
            }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          <span
            className="absolute right-4 top-[18px] pointer-events-none"
            dangerouslySetInnerHTML={{ __html: genderIcon }}
          />
        </div>

        {/* DOB */}
        <div className="relative">
          <TextField
            id="dob-display"
            label="DOB"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }} // Ensures label doesn't overlap text
            inputRef={dobRef}
            // Logic to make it readonly so only the picker works, maintaining your style
            InputProps={{
               readOnly: true,
               style: { cursor: 'pointer' }
            }}
            onClick={() => document.getElementById("dob-picker").showPicker()}
          />

          <span
            className="absolute right-4 top-[18px] cursor-pointer"
            onClick={() => document.getElementById("dob-picker").showPicker()}
            dangerouslySetInnerHTML={{ __html: calendarIcon }}
          />

          {/* Hidden Native Date Picker */}
          <input
            id="dob-picker"
            type="date"
            className="absolute opacity-0 bottom-0 left-0 w-full h-full -z-10"
            onChange={(e) => {
              const selected = e.target.value;
              if (selected) {
                const [y, m, d] = selected.split("-");
                const formatted = `${d}/${m}/${y}`;
                if (dobRef.current) {
                  dobRef.current.value = formatted;
                  // Trigger visual update if using controlled component
                }
              }
            }}
          />
        </div>

        {/* PASSWORD */}
        <div className="relative">
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
          />
          <span
            className="absolute right-4 top-[18px] cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
            dangerouslySetInnerHTML={{ __html: showPassword ? eyeOpen : eyeClosed }}
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative">
          <TextField
            label="Confirm Password"
            type={showCPassword ? "text" : "password"}
            fullWidth
            variant="outlined"
          />
          <span
            className="absolute right-4 top-[18px] cursor-pointer"
            onClick={() => setShowCPassword(!showCPassword)}
            dangerouslySetInnerHTML={{ __html: showCPassword ? eyeOpen : eyeClosed }}
          />
        </div>
      </Box>

      {/* FOOTER BUTTONS */}
      <div className="w-full max-w-[420px] mt-8">
        {/* SIGN UP */}
        <UniversalButton text="Sign Up" href="/get-started/login" fullWidth />

        {/* OR */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 border-t border-[#FFFFFF]/20" />
          <span className="text-[#FFFFFF]/50 text-[14px]">OR</span>
          <div className="flex-1 border-t border-[#FFFFFF]/20" />
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <UniversalButton text="Continue with Google" icon="/google.png" fullWidth />
          <UniversalButton text="Continue with Microsoft" icon="/microsoft.png" fullWidth />
        </div>
      </div>
    </div>
  );
}