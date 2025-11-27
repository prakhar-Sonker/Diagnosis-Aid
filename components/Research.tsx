import Image from "next/image";

const Research = () => {
  const researchItems = [
    {
      img: "/resimg1.png",
      title: "Weak-to-strong generalization",
      date: "Dec 15, 2023",
    },
    {
      img: "/resimg2.png",
      title: "Practices for Governing Agentic AI Systems",
      date: "Dec 14, 2023",
    },
    {
      img: "/resimg3.png",
      title: "DALL·E 3 system card",
      date: "Oct 3, 2023",
    },
    {
      img: "/resimg4.png",
      title: "DiagnosisAid system card",
      date: "Sep 25, 2023",
    },
  ];

  return (
    <section className="w-full bg-[#161618] text-[#FFFFFF] py-12 px-4 sm:px-10 md:py-20 md:px-16 lg:px-24">

      {/* ===== Heading + Description ===== */}
      <div className="w-full max-w-4xl mx-auto md:mx-0 text-left space-y-6 mb-12 md:mb-16">

        {/* Heading */}
        <h2
          className="
            text-[48px]
            font-bold
            leading-tight
          "
        >
          Research
        </h2>

        {/* Subtitle */}
        <p
          className="
            text-[24px]
            font-normal text-[#FFFFFF] 
          "
        >
          We research generative models and how to align them with human values.
        </p>

        {/* Link */}
        <a
          href="#"
          className="
            inline-flex items-center gap-2 
            text-[20px] font-medium 
            underline decoration-solid 
            hover:text-gray-300 transition-all
          "
        >
          View All Updates
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7" />
            <path d="M7 7H17V17" />
          </svg>
        </a>
      </div>

      {/* ===== Research Cards Grid ===== */}
      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-4 
          gap-y-10 gap-x-6
        "
      >
        {researchItems.map((item, index) => (
          <div 
            key={index} 
            className="flex flex-col space-y-4 w-full items-center sm:items-start"
          >
            {/* Image Container */}
            {/* Changed fixed width to max-width to ensure it shrinks on small mobile screens */}
            <div
              className="
                w-full max-w-[320px]
                h-[330px] sm:h-[280px] md:h-[300px] 
                overflow-hidden 
              "
            >
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={500}
                className="
                  object-cover w-full h-full 
                  transition-transform duration-300 
                  hover:scale-105
                "
              />
            </div>

            {/* Title & Date */}
            {/* Added max-width here so text aligns with the image boundary */}
            <div className="flex flex-col w-full max-w-[320px]">
              <h3
                className="text-[24px] font-bold leading-tight"
              >
                {item.title}
              </h3>

              <p
                className="text-[#FFFFFF] font-semibold text-[16px] mt-2"
              >
                {item.date}
              </p>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Research;