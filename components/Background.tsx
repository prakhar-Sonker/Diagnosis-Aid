import React from "react";

const Background: React.FC = () => {
  return (
    <>
      {/* ===== LEFT BLUE BLUR ===== */}
      <div
        className="absolute rounded-full blur-[120px] md:blur-[180px] lg:blur-[220px]"
        style={{
          background: "#05B7CE",
          width: "clamp(250px, 40vw, 550px)",
          height: "clamp(250px, 40vw, 550px)",
          top: "clamp(20px, 10vw, 100px)",
          left: "0",
          opacity: "1",
        }}
      ></div>

      {/* ===== RIGHT PURPLE BLUR ===== */}
      <div
        className="
          absolute rounded-full 
          blur-[120px] md:blur-[180px] lg:blur-[220px]
          right-0 
        "
        style={{
          background: "#2D139B",
          width: "clamp(200px, 35vw, 450px)",
          height: "clamp(200px, 35vw, 450px)",
          top: "clamp(30px, 8vw, 120px)",
        }}
      ></div>
    </>
  );
};

export default Background;
