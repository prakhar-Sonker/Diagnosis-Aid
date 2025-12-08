import React from "react";

const Footer = () => {
  // Define navigation sections for cleaner rendering
  const researchLinks = ["Overview", "Index", "Diagnose"];
  const companyLinks = [
    "About",
    "Blog",
    "Career",
    "Security",
    "Customer Stories",
    "Safety",
  ];
  const productLinks = ["Feature", "How It Works", "Get Started", "Pricing"];
  const socialLinks = ["Twitter", "YouTube", "Facebook", "Instagram", "LinkedIn"];
  const policyLinks = ["Terms & Policies", "Privacy Policy", "Brand Guidelines"];

  // Custom class for link styling
  const linkClasses = "text-white/80 text-sm md:text-base hover:text-white transition-colors cursor-pointer";

  // SVG component for the Back To Top Arrow/Circle
  const BackToTopIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
      <path d="M9 9.8V13C9 13.2833 9.09583 13.5208 9.2875 13.7125C9.47917 13.9042 9.71667 14 10 14C10.2833 14 10.5208 13.9042 10.7125 13.7125C10.9042 13.5208 11 13.2833 11 13V9.8L11.9 10.7C12.0833 10.8833 12.3167 10.975 12.6 10.975C12.8833 10.975 13.1167 10.8833 13.3 10.7C13.4833 10.5167 13.575 10.2833 13.575 10C13.575 9.71667 13.4833 9.48333 13.3 9.3L10.7 6.7C10.5 6.5 10.2667 6.4 10 6.4C9.73333 6.4 9.5 6.5 9.3 6.7L6.7 9.3C6.51667 9.48333 6.425 9.71667 6.425 10C6.425 10.2833 6.51667 10.5167 6.7 10.7C6.88333 10.8833 7.11667 10.975 7.4 10.975C7.68333 10.975 7.91667 10.8833 8.1 10.7L9 9.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="white"/>
    </svg>
  );

  return (
    <footer className="w-full bg-[#161618] text-white py-12 md:py-16 lg:py-24 px-6 md:px-12 lg:px-20 flex justify-center">
      {/* Content wrapper: max width container */}
      <div className="w-full max-w-[1320px] flex flex-col">

        {/* ======================= TOP SECTION (Logo, Text, Nav Links) ======================= */}
        {/* Mobile: Logo/Text (full width) followed by Links (grid-cols-3) */}
        {/* Tablet/Laptop: Grid 4-columns total (Logo | Spacer | Links | Links) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 lg:gap-16 pb-12 md:pb-16">

          {/* LEFT SIDE: Logo, Text, Copyright */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 space-y-4 md:space-y-6">
            
            {/* Logo + DiagnosisAid */}
            <div className="flex items-center gap-3">
              <img src="/dalogo.png" alt="DiagnosisAid Logo" className="w-7 h-7 md:w-8 md:h-8"/>
              <h2 className="text-xl md:text-2xl font-black leading-none" 
                  style={{ fontFamily: "Nexa, sans-serif" }}> 
                DiagnosisAid
              </h2>
            </div>

            {/* Paragraph */}
            <p className="text-sm md:text-base leading-relaxed max-w-sm text-white/90">
              Harnessing quantum-powered AI to deliver faster, more accurate diagnostic support to healthcare professionals globally.
            </p>
             
            {/* Copyright moved down to bottom section for alignment */}
          </div>
          
          {/* SPACER COLUMN (Only visible on large desktop to push links right) */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* RIGHT SIDE: 3 COLUMN LINKS 
              Mobile/Tablet: Stacks right after the logo/text block. It uses 3 columns itself for efficient use of mobile width. 
              Desktop: Takes the remaining 2 columns.
          */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 grid grid-cols-3 gap-6 md:gap-12 pt-4 md:pt-0">

            {/* Research Column */}
            <div className="flex flex-col space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold mb-1">Research</h3>
              {researchLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className={linkClasses}>
                  {item}
                </a>
              ))}
            </div>

            {/* Company Column */}
            <div className="flex flex-col space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold mb-1">Company</h3>
              {companyLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className={linkClasses}>
                  {item}
                </a>
              ))}
            </div>

            {/* Product Column */}
            <div className="flex flex-col space-y-3 md:space-y-4">
              <h3 className="text-base md:text-lg font-bold mb-1">Product</h3>
              {productLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className={linkClasses}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-t border-white/20"/>

        {/* ======================= BOTTOM ROW (Copyright, Policy, Social, Back To Top) ======================= */}
        {/* Mobile: Copyright -> Policy -> Social/Back to Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 pt-4 md:pt-6 items-center">
          
          {/* LEFT SIDE: Copyright (Col 1) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 order-1">
            <span className="text-sm md:text-base font-semibold text-white/90">
              &copy; {new Date().getFullYear()} DiagnosisAid. All rights reserved.
            </span>
          </div>
          
          {/* CENTER: Policy Links (Col 2) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-wrap gap-x-4 gap-y-2 order-3 md:order-2">
            {policyLinks.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} 
                 className="text-sm text-white/70 hover:text-white transition-colors cursor-pointer">
                {item}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE: Social Links + Back To Top (Cols 3 & 4) */}
          <div className="col-span-1 md:col-span-4 lg:col-span-2 flex flex-col sm:flex-row justify-between items-start sm:items-center order-2 md:order-3 pt-4 md:pt-0">
            
            {/* Social Links Row */}
            <div className="flex gap-4 text-white/80">
              {socialLinks.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} 
                   className="text-sm md:text-base hover:text-white transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* Back To Top Button */}
            <a href="#top" className="flex items-center gap-1 text-sm md:text-base text-white hover:opacity-80 transition-opacity mt-4 sm:mt-0">
              Back To Top
              <BackToTopIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;