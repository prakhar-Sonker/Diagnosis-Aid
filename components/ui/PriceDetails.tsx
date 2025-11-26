"use client";

export default function PriceDetails() {
  return (
    <div
  className="
    w-[500px]
    bg-[linear-gradient(134.68deg,_#05B7CE_14.12%,_#06B2CC_15.75%,_#1B5DB2_41.2%,_#2828A1_59.62%,_#2D139B_68.28%)]
    rounded-[20px]
    p-6
    text-[#FFFFFF]
    flex flex-col gap-5
  "
>


      {/* Heading */}
      <h2 className="font-bold text-[24px]">
        Price Details
      </h2>
      <div className="border-b border-[#FFFFFF] -mt-2"></div>

      {/* Price Rows */}
      <div className="flex justify-between  font-medium text-[16px] opacity-90">
        <span>Price (1 item)</span>
        <span>$ 10</span>
      </div>

      <div className="flex justify-between text-[16px] border-b border-[#FFFFFF] pb-3">
        <span>Discount</span>
        <span>$ 0</span>
      </div>

      {/* Total */}
      <div className="flex justify-between mt-2">
        <span className="text-[20px] font-bold">Total Amount</span>
        <span className="text-[16px] font-medium">$ 10</span>
      </div>

      <p className="text-[14px] ">
        *Price is inclusive of all taxes
      </p>

      {/* Button */}
      <button className="
        w-full 
        bg-[#FFFFFF]
        text-[#161618]
        font-bold 
        rounded-[5px] 
        text-[20px]
        py-3 
        mt-2 
        hover:bg-gray-200 
        transition
      ">
        Pay & Book ($ 10)
      </button>

    </div>
  );
}
