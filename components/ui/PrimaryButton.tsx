"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  text: string;
  href: string;
};

export default function PrimaryButton({ text, href }: ButtonProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(href)}
      className="
        font-fig
        w-[176px] 
        h-[54px]
        bg-[#FFFFFF]
        text-[#161618] 
        rounded-[5px] 
        text-[20px] 
        font-bold
        leading-[100%]
        tracking-[0px]
        flex
        items-center
        justify-center
        transition
        duration-300
        hover:opacity-80
      "
    >
      {text}
    </button>
  );
}
