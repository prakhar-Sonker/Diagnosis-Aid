import React from "react";
import Image from "next/image";

const Team: React.FC = () => {
  // Team member details with bios
  const teamMembers = [
    {
      name: "Richard A. Hill",
      role: "Co-Founder Chief Executive Officer",
      img: "/founder1.png",
      bio: "Mr. Hill has 25 years combined fixed income trading, investment banking and consulting experience in corporate finance and capital markets. He has completed structured finance transactions valued at $16.5 billion and managed trading books valued at over $300 million.",
    },
    {
      name: "Jeremy Lasman",
      role: "Co-Founder Chief Technology Officer",
      img: "/founder2.jpg",
      bio: "Mr. Lasman is the Co-Founder of Quantum Star Systems, a Cloud Quantum Computing Software Development Hub. Jeremy is a former SpaceX Technologist working directly under the CIO and Elon Musk.",
    },
    {
      name: "Dr. Allan Tissenbaum",
      role: "Co-Founder Chief Medical Officer",
      img: "/founder3.png",
      bio: "Dr. Tissenbaum is an orthopedic surgeon who founded and exited four medical practices. In aggregate, these practices employed 90 people and had $70MM in annual revenues.",
    },
  ];

  return (
    <section className="w-full bg-[#161618] text-white py-20 px-10 md:px-24">
      {/* === Top Divider === */}
      <div className="border-t-2 border-white w-full mb-16"></div>

      {/* === Section Heading === */}
      <div className="text-center mb-16">
        <h2
          className="text-[48px] font-bold leading-[100%]"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Team
        </h2>

        <p
          className="text-[20px] text-gray-300 mt-4 max-w-3xl mx-auto"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
        </p>
      </div>

      {/* === Team Grid === */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4 max-w-sm"
          >
            {/* Image (No border, fills column) */}
            <div className="w-full h-auto overflow-hidden flex justify-center">
              <Image
                src={member.img}
                alt={member.name}
                width={350}
                height={350}
                className="object-cover w-[350px] h-[350px]"
              />
            </div>

            {/* Name */}
            <h3
              className="text-[20px] font-semibold leading-[100%]"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              {member.name}
            </h3>

            {/* Role */}
            <p
              className="text-[16px] text-gray-400 font-medium leading-[100%]"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              {member.role}
            </p>

            {/* Bio */}
            <p
              className="text-[14px] italic text-gray-300 leading-relaxed"
              style={{ fontFamily: "Figtree, sans-serif" }}
            >
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
