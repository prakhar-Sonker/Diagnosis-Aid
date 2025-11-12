import React from "react";
import Image from "next/image";
// baad me use krna ise


const Chat: React.FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row rounded-[40px] overflow-hidden border border-gray-800 bg-[#111111] mt-16 mx-auto">
      {/* ==== Left Sidebar ==== */}
      <aside className="w-full md:w-64 bg-[#0C0C0C] border-r border-gray-800 p-6 flex flex-col justify-between rounded-l-[40px]">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div>
              <Image src="/dalogo.png" alt="Logo" width={50} height={50} />
            </div>
            <h1 className="font-semibold text-lg">DiagnosisAid</h1>
          </div>

          <button className="w-full py-3 bg-[#1A1A1A] border border-gray-700 rounded-xl text-sm text-gray-200 hover:border-cyan-400 transition-all">
            + New Chat
          </button>
        </div>

        <div className="text-gray-500 text-xs text-center mt-8">
          © 2025 DiagnosisAid
        </div>
      </aside>

      {/* ==== Main Chat Area ==== */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Welcome to DiagnosisAid
        </h2>
        <p className="text-gray-400 max-w-lg mb-10">
          Get started by DiagnosisAid and our AI will do the rest. Ask any health-related
          question and our AI will give you your answers.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          {[
            "Give me some suggestions for Thigh pain",
            "Give me some suggestions for Pond Swim infection",
            "I have a headache, what should I do?",
            "Suggest remedies for back pain",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-4 text-gray-300 hover:border-cyan-500 hover:shadow-cyan-500/20 shadow transition-all cursor-pointer"
            >
              {text}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Chat;
