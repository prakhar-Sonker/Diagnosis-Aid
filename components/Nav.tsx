"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-10 py-4 z-50 bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image src="/dalogo.png" alt="DiagnosisAid Logo" width={40} height={40} />
        <h1 className="text-white font-nexa font-extrabold text-[18px]">DiagnosisAid</h1>
      </div>

      {/* ===== Desktop Links ===== */}
      <ul className="hidden md:flex items-center space-x-8 text-white font-figtree text-[16px]">
        {["Home", "Features", "How it Works", "Products", "Pricing", "Career"].map(
          (item) => (
            <li key={item}>
              <Link
                href="#"
                className={`flex items-center gap-1 hover:text-cyan-400 transition duration-200
                ${item === "Home" ? "font-bold" : "font-normal"}`}
              >
                {item}
                {item === "Products" && <ChevronDown className="w-[18px] h-[18px]" />}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Desktop Button */}
      <div className="hidden md:flex">
        <Link
          href="/get-started"
          className="bg-white text-[#161618] px-5 py-2 rounded-md font-semibold shadow-md 
          hover:opacity-90 transition flex items-center justify-center"
        >
          Get Started
        </Link>
      </div>

      {/* ===== MOBILE MENU BUTTON ===== */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* ===== MOBILE DROPDOWN MENU ===== */}
      <div
        className={`absolute top-[70px] left-0 w-full bg-[#0F0F0F]/95 backdrop-blur-md 
        text-white py-6 px-6 flex flex-col space-y-6 font-medium text-lg
        transition-all duration-300 md:hidden
        ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}
        `}
      >
        {["Home", "Features", "How it Works", "Products", "Pricing", "Career"].map(
          (item) => (
            <Link
              key={item}
              href="#"
              className="flex items-center gap-2 hover:text-cyan-400 transition"
            >
              {item}
              {item === "Products" && <ChevronDown size={20} />}
            </Link>
          )
        )}

        <Link
          href="/get-started"
          className="bg-white text-black w-full py-3 rounded-lg font-semibold text-center hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
