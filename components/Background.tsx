import React from "react";

const Background: React.FC = () => {
  return (
    <>
      {/* Left Blue Blur */}
      <div
        className="absolute rounded-full blur-[200px]"
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
      <div className="bg-[#2D139B] w-120 h-120 rounded-full absolute right-0 blur-[200px] top-10">
      </div>

      
    </>
  );
};

export default Background;


