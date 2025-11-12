// import React from "react";
// import Image from "next/image";
// import ChatUI from "@/public/chat.png"; // your main center chat image

// // Import all 6 hospital logos
// import Hospital1 from "@/public/Frame 10.png";
// import Hospital2 from "@/public/south-african-medical-research-council-samrc-vector-logo 1.png";
// import Hospital3 from "@/public/image 9.png";
// import Hospital4 from "@/public/image 8.png";
// import Hospital5 from "@/public/image 7.png";
// import Hospital6 from "@/public/Frame 9.png";

// const MidSection: React.FC = () => {
//   return (
//     <section className="bg-[#0B0B0B] text-white py-20 px-6 md:px-16 relative overflow-hidden">
//       <div className="max-w-7xl mx-auto text-center">
//         {/* === Chat Section === */}
//         <div className="flex justify-center mb-16">
//           <div className="rounded-3xl overflow-hidden border border-gray-700 shadow-lg w-full max-w-5xl">
//             <Image
//               src={ChatUI}
//               alt="Chat UI"
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>

//         {/* === Hospitals Section === */}
//         <h3 className="text-gray-300 text-lg mb-8 tracking-wide">
//           HOSPITALS THAT TRUST US
//         </h3>
//         <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 mb-20">
//           {[
//             Hospital1,
//             Hospital2,
//             Hospital3,
//             Hospital4,
//             Hospital5,
//             Hospital6,
//           ].map((logo, index) => (
//             <div key={index} className="w-28 md:w-36">
//               <Image
//                 src={logo}
//                 alt={`Hospital ${index + 1}`}
//                 className="w-full h-auto object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         {/* === Stats Section === */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-gray-700 divide-x divide-gray-700">
//           <div className="py-10">
//             <h2 className="text-4xl font-bold text-white">100K+</h2>
//             <p className="text-gray-400">Trusted Users</p>
//           </div>
//           <div className="py-10">
//             <h2 className="text-4xl font-bold text-white">1000+</h2>
//             <p className="text-gray-400">Trusted Hospitals</p>
//           </div>
//           <div className="py-10">
//             <h2 className="text-4xl font-bold text-white">100K+</h2>
//             <p className="text-gray-400">AI Predictions Made</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MidSection;
