"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

type ButtonProps = {
  text: string;
  href: string;
  icon?: string;       // Google / Microsoft icon
  fullWidth?: boolean; // For wide buttons
};

export default function UniversalButton({
  text,
  href,
  icon,
  fullWidth,
}: ButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className={`
        font-fig
        bg-[#FFFFFF]
        text-[#161618]
        rounded-lg
        font-bold
        text-[20px]
        h-[54px]
        transition
        duration-300
        hover:opacity-80
        flex items-center justify-center gap-3
        ${fullWidth ? "w-full" : "w-44"}
      `}
    >
      {icon && (
        <Image
          src={icon}
          alt="Icon"
          width={22}
          height={22}
        />
      )}

      {text}
    </button>
  );
}
