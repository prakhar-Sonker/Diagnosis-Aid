import React from "react";
import Image from "next/image";
// import DoctorCard from "./ui/DoctorCard";

import DoctorCard from "./ui/DoctorCard";

const doctors = [
  {
    img: "/acclogo.png",
    name: "Dr. Jim M. Farina",
    specialization: "Cardiologists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    experience: "20 Year (s)",
    fee: "$100 Per Consultation",
  },
  {
    img: "/acclogo.png",
    name: "Dr. Donna C. Walker",
    specialization: "Cardiologists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    experience: "20",
    fee: "$100",
  },
  {
    img: "/acclogo.png",
    name: "Dr. Ricky T. Burgett",
    specialization: "Cardiologists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    experience: "20",
    fee: "$100",
  },
  {
    img: "/acclogo.png",
    name: "Dr. Susan C. Kelly",
    specialization: "Cardiologists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    experience: "20",
    fee: "$100",
  },
  {
    img: "/acclogo.png",
    name: "Dr. Ruth W. Britton",
    specialization: "Cardiologists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    experience: "20",
    fee: "$100",
  },
  {
    img: "/acclogo.png",
    name: "Dr. Dennis W. Grossman",
    specialization: "Cardiologists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    experience: "20",
    fee: "$100",
  },
  {
    img: "/acclogo.png",
    name: "Dr. Willy I. Bradford",
    specialization: "Cardiologists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    experience: "20",
    fee: "$100",
  },
  {
    img: "/acclogo.png",
    name: "Dr. James K. Jackson",
    specialization: "Cardiologists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    experience: "20",
    fee: "$100",
  },
  {
    img: "/acclogo.png",
    name: "Dr. Jason M. Lind",
    specialization: "Cardiologists",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    experience: "20",
    fee: "$100",
  },
];

const BookAnAppointment = () => {
  return (
    <>
    
      {/* header- left logo anf right logo with m account */}
      <div className="flex justify-between items-center w-full px-8 py-6">
        <div className="flex items-center gap-3">
          {/* left side */}
          <Image
            src="/dalogo.png"
            alt="logo"
            width={30}
            height={30}
            className="md:w-10 md:h-10 "
          />
          <h2 className="font-black text-[17px]" style={{ fontFamily: "Nexa" }}>
            DiagnosisAid
          </h2>
        </div>

        {/* right side */}
        <div className="flex items-center gap-4">
          <Image
            src="/acclogo.png"
            alt="profile-pic"
            width={30}
            height={30}
            className="md:w-10 md:h-10 rounded-full"
          />
          <h2 className="font-bold text-[16px]">My Account</h2>
        </div>
      </div>

      {/* center heading */}
      <div className="flex flex-col items-center mt-8 ">
        <h1 className="text-[#FFFFFF] font-bold text-5xl text-center leading-tight">
          Book An Appointment <br /> For Consultation
        </h1>
        {/* center subheading */}
        <p className="text-[#FFFFFF] text-[20px] mt-4 text-center">
          Based on your issue, here are some recommended doctors for you to consult with.
        </p>
      </div>
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:place-items-center lg:px-80 lg:gap-6 lg:py-10 mt-4">
        {doctors.map((doc, index) => (
          <DoctorCard
            key={index}
            img={doc.img}
            name={doc.name}
            specialization={doc.specialization}
            description={doc.description}
            experience={doc.experience}
            fee={doc.fee}
          />
        ))}
      </div>
      </>
  );
};

export default BookAnAppointment;
