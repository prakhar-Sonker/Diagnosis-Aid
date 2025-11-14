"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-transparent z-50 backdrop-blur-md">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/dalogo.png"
          alt="DiagnosisAid Logo"
          width={40}
          height={40}
        />
        <h1 className="text-white font-nexa font-extrabold text-[17px] leading-[100%]">
          DiagnosisAid
        </h1>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center space-x-8 text-white font-figtree text-[16px] leading-[100%] text-center">
        {["Home", "Features", "How it Works", "Products", "Pricing", "Career"].map(
          (item) => (
            <li key={item}>
              <Link
                href="#"
                className={`flex items-center gap-1 transition-colors duration-200 hover:text-cyan-400 
                  ${item === "Home" ? "font-bold" : "font-normal"}`}
              >
                <span>{item}</span>
                {item === "Products" && (
                  <ChevronDown className="w-[18px] h-[18px] opacity-100" />
                )}
              </Link>
            </li>
          )
        )}
      </ul>
<Link
        href="/get-started"
        className="bg-white text-black w-[136px] h-[40px] rounded-[5px] font-semibold shadow-md 
          hover:opacity-90 transition flex items-center justify-center"
      >
        Get Started
      </Link>
    </nav>
  );
}

export default Nav;
