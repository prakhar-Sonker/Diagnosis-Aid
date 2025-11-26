
function Trusted () {
  return (
    <div className="w-full align-top text-[#FFFFFF] text-center mt-18">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* ===== Trusted Users ===== */}
        <div className="w-[33%] border-r border-[#74747D] px-5 ">
          <h2
            className="text-[64px] font-bold "
          >
            100K+
          </h2>
          <p className="text-[#FFFFFF] text-[20px] font-medium mt-2">Trusted Users</p>
        </div>

        {/* ===== Trusted Hospitals ===== */}
        <div className="w-[33%]">
          <h2
            className="text-[64px] font-bold"
          >
            1000+
          </h2>
          <p className="text-[#FFFFFF] text-[20px] font-medium mt-2">Trusted Hospitals</p>
        </div>

        <div className="w-[33%] border-l border-[#74747D]">
          <h2
            className="text-[64px] font-bold "
          >
            100K+
          </h2>
          <p className="text-[#FFFFFF] text-[20px] font-medium mt-2">Trusted Users</p>
        </div>
      </div>
          {/* <IntroducingData /> */}

    </div>
 );
};

export default Trusted;
