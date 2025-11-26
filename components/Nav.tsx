"use client";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/dalogo.png"
          alt="DiagnosisAid Logo"
          width={40}
          height={40}
        />
        <h1 className="text-[#FFFFFF] font-nexa font-extrabold text-[17px]">
          DiagnosisAid
        </h1>
      </div>

      {/* Links */}
      <ul className="hidden md:flex items-center space-x-8 text-[#FFFFFF] font-figtree text-[16px] font-bold text-center">
        {["Home", "Features", "How it Works", "Products", "Pricing", "Career"].map(
          (item) => (
            <li key={item}>
              <Link
                href="#"
                className={`flex items-center gap-1 transition-colors duration-200
                   hover:text-cyan-400 
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
        className="bg-[#FFFFFF] text-[#161618] w-[136px] h-[40] rounded-[5px] font-semibold shadow-md 
          hover:opacity-90 transition flex items-center justify-center"
      >
        Get Started
      </Link>
    </nav>
  );
}

export default Nav;
