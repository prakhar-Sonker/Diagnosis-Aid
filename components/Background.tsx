import React from "react";
import Image from "next/image";
import BgWave from "@/public/bg.png"; // your wave image in public folder

const Background: React.FC = () => {
  return (
    <>
      {/* Left Blue Blur */}
      <div
        className="absolute rounded-full blur-[420px]"
        style={{
          background: "#05B7CE",
          width: "571px",
          height: "571px",
          top: "80px",
          left: "0.23px",
          opacity: "1",
        }}
      />

      {/* Right White Wave */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "2014.51px",
          height: "930.04px",
          top: "322.67px",
          left: "434.78px",
          transform: "rotate(-4.3deg)",
        }}
      >
        <Image src={BgWave} alt="Wave Background" fill className="object-contain" />
      </div>
    </>
  );
};

export default Background;
