import React from "react";
import Image from "next/image";

function HospitalTrustImg() {
  return (
    <div className=" w-full bg-[#434344] shadow-[grey] text-white py-10 px-6 text-center relative">
      {/* ===== Title ===== */}
      <h3
        className="text-[20px] font-medium text-white uppercase leading-[100%] tracking-[0%] mb-8"
        style={{ fontFamily: "Figtree, sans-serif" }}
      >
        HOSPITALS THAT TRUST US
      </h3>

      {/* ===== Logos Section ===== */}
      <div className="flex flex-wrap items-center justify-center gap-53px">
        <div className="w-24 h-16 flex items-center justify-center">
          <Image
            src="/frame9.png"
            alt="logo"
            width={70}
            height={85}
            className="object-contain"
          />
        </div>

        <div className="w-24 h-16 flex items-center justify-center">
          <Image
            src="/frame10.png"
            alt="logo"
            width={70}
            height={88}
            className="object-contain"
          />
        </div>

        <div className="w-24 h-16 flex items-center justify-center">
          <Image
            src="/image8.png"
            alt="logo"
            width={70}
            height={88}
            className="object-contain"
          />
        </div>

        <div className="w-24 h-16 flex items-center justify-center">
          <Image
            src="/image7.png"
            alt="logo"
            width={70}
            height={88}
            className="object-contain"
          />
        </div>

        <div className="w-24 h-16 flex items-center justify-center">
          <Image
            src="/image9.png"
            alt="logo"
            width={70}
            height={88}
            className="object-contain"
          />
        </div>

        <div className="w-24 h-16 flex items-center justify-center">
          <Image
            src="/south-african-medical-research-council-samrc-vector-logo 1.png"
            alt="logo"
            width={70}
            height={88}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HospitalTrustImg;
