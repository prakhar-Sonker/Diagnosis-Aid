import React from "react";
import Image from "next/image";

function HospitalTrustImg() {
  return (
    <div className="w-full bg-[#2B2B2E] shadow-[0px_-30px_60px_0px_#000000] text-[#FFFFFF] py-10 px-6 text-center">
      
      {/* ===== Title ===== */}
      <h3
        className="text-[18px] md:text-[22px] font-medium uppercase mb-10"
        style={{ fontFamily: "Figtree, sans-serif" }}
      >
        HOSPITALS THAT TRUST US
      </h3>

      {/* ===== Logos Wrapper ===== */}
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">

        {/* Logo 1 */}
        <Image
          src="/frame9.png"
          alt="logo"
          width={90}
          height={90}
          className="object-contain w-14 md:w-20 lg:w-24"
        />

        {/* Logo 2 */}
        <Image
          src="/frame10.png"
          alt="logo"
          width={90}
          height={90}
          className="object-contain w-16 md:w-24 lg:w-28"
        />

        {/* Logo 3 */}
        <Image
          src="/image8.png"
          alt="logo"
          width={90}
          height={90}
          className="object-contain w-14 md:w-20 lg:w-24"
        />

        {/* Logo 4 */}
        <Image
          src="/image7.png"
          alt="logo"
          width={90}
          height={90}
          className="object-contain w-14 md:w-20 lg:w-24"
        />

        {/* Logo 5 */}
        <Image
          src="/image9.png"
          alt="logo"
          width={90}
          height={90}
          className="object-contain w-20 md:w-28 lg:w-32"
        />

        {/* Logo 6 */}
        <Image
          src="/south-african-medical-research-council-samrc-vector-logo 1.png"
          alt="logo"
          width={90}
          height={90}
          className="object-contain w-20 md:w-28 lg:w-36"
        />
      </div>
    </div>
  );
}

export default HospitalTrustImg;
