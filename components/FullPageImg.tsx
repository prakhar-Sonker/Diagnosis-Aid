import Image from "next/image";

const FullPageImg = () => {
  return (
    <section className="w-full bg-[#161618] flex justify-center">
      {/* === Centered container with limited width === */}
      <div className="relative w-[90%] md:w-[85%] lg:w-[80%]">
        <Image
          src="/fullPage.png" // make sure image is inside /public folder
          alt="Full Page Team Image"
          width={1600}
          height={900}
          className="object-contain w-full h-auto shadow-[0px_-30px_60px_0px_#000000]"
          priority
        />
      </div>
    </section>
  );
};

export default FullPageImg;
