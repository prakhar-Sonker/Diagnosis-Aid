export default function EnterpriseCard() {
  return (
    <div
      className="
        w-77 h-100 
      flex flex-col justify-between 
      p-6 rounded-2xl 
      bg-[#FFFFFF36]
        text-[#FFFFFF]
      "
    >
      {/* Top Section */}
      <div className="space-y-3">
        <h3 className="text-[36px] font-bold">Enterprise</h3>
        <p className="text-[24px] text-[#FFFFFF] font-medium">For large teams</p>

        {/* <div className="pt-4">
          <span className="text-[40px] font-bold">Contact</span>
          <span className="text-white/60 text-[14px] pl-2">us</span>
        </div> */}
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col gap-3 mt-4">

        {/* Contact Us - Outline Button */}
        <button
          className="
            w-full py-3 
            rounded-lg
            border border-[#FFFFFF]
            text-[#FFFFFF]
            font-bold text-[20px]
            hover:bg-white hover:text-black transition
          "
        >
          Contact Us
        </button>

        {/* Purchase - Solid Button */}
        <button
          className="
            w-full py-3
            text-[20px] 
            rounded-lg 
            bg-[#FFFFFF]
            text-[#303033]
            font-bold
            hover:bg-gray-200 transition
          "
        >
          Purchase
        </button>
      </div>
    </div>
  );
}
