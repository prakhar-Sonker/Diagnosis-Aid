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
    <section className="w-full bg-[#161618] text-white py-20 px-10 md:px-24">
      {/* === Left-Aligned Content === */}
      <div className="max-w-4xl mx-auto md:mx-0 text-left space-y-8 mb-16">
        {/* Heading */}
        <h2
          className="text-[48px] font-bold leading-[100%]"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          Research
        </h2>

        {/* Subtext */}
        <p
          className="text-[20px] font-normal text-gray-300 leading-[150%] max-w-2xl"
          style={{ fontFamily: "Figtree, sans-serif" }}
        >
          We research generative models and how to align them with human values.
        </p>

        {/* Link */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[20px] font-medium underline decoration-solid hover:text-gray-300 transition-all"
          style={{ fontFamily: "Figtree, sans-serif" }}
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

      {/* === Research Cards === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        {researchItems.map((item, index) => (
          <div key={index} className="flex flex-col space-y-4">
            <div className="w-full h-[300px] md:h-[300px] overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={300}
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div>
              <h3
                className="text-[20px] font-semibold leading-snug"
                style={{ fontFamily: "Figtree, sans-serif" }}
              >
                {item.title}
              </h3>
              <p
                className="text-gray-400 text-[16px] mt-1"
                style={{ fontFamily: "Figtree, sans-serif" }}
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
