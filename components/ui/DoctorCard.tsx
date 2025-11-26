import React from "react";
import Image from "next/image";
import UniversalButton from "./UniversalButton";

interface DoctorCardProps {
  img: string;
  name: string;
  specialization: string;
  description: string;
  experience: string;
  fee: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({
  img,
  name,
  specialization,
  description,
  experience,
  fee,
}) => {
  return (
    <div className="bg-[#161618] border border-[#4C4C52] rounded-xl p-5 w-full max-w-[380px] shadow-lg hover:shadow-xl transition-all duration-200">
      {/* TOP — IMAGE + NAME */}
      <div className="flex items-start gap-4">
        <Image
          src={img}
          alt={name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />

        <div>
          <h3 className="text-[#FFFFFF] font-semibold text-[20px]">{name}</h3>
          <p className="text-[#FFFFFF] text-sm font-medium">{specialization}</p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="text-[#FFFFFF] text-sm mt-3 leading-relaxed">
        {description}
      </p>

      {/* EXPERIENCE + FEE ROW */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-[#FFFFFF] text-sm opacity-60">Experience</p>
          <span className="text-[#FFFFFF] text-[20px] font-bold">
            {experience}
          </span>
          {/* <p className="text-[#FFFFFF] font-medium text-sm">Year (s)</p> */}
        </div>

        <div className="gap-2">
          <p className="text-[#FFFFFF] text-sm opacity-60">Fee</p>
          <span className="text-[#FFFFFF] font-bold text-[20px]">{fee}</span>
          {/* <p className="text-[#FFFFFF] font-medium text-sm">Per Consultation</p> */}
        </div>
      </div>
      <div className="mt-3 border-[1] border-[#4C4C52]"></div>

      {/* BOOK NOW BUTTON */}
      <UniversalButton text="Book Consult" href="/get-started/appointment/book-consult" fullWidth />
    </div>
  );
};

export default DoctorCard;
