
function Trusted () {
  return (
    <div className="w-full align-top bg-[#161618] text-white text-center ">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:divide-y-0 sm:divide-x ">
        {/* ===== Trusted Users ===== */}
        <div className="flex-1 py-8">
          <h2
            className="text-[64px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            100K+
          </h2>
          <p className="text-gray-300 text-lg mt-2">Trusted Users</p>
        </div>

        {/* ===== Trusted Hospitals ===== */}
        <div className="flex-1 py-8">
          <h2
            className="text-[64px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            1000+
          </h2>
          <p className="text-gray-300 text-lg mt-2">Trusted Hospitals</p>
        </div>

        {/* ===== AI Predictions ===== */}
        <div className="flex-1 py-8">
          <h2
            className="text-[64px] font-bold leading-[100%]"
            style={{ fontFamily: "Figtree, sans-serif" }}
          >
            100K+
          </h2>
          <p className="text-gray-300 text-lg mt-2">Trusted Users</p>
        </div>
      </div>
          {/* <IntroducingData /> */}

    </div>
 );
};

export default Trusted;
