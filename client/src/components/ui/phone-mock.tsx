// src/components/ui/phone-mock.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface PhoneMockProps {
  src: string;
  alt: string;
  position: "front" | "back";
}

export function PhoneMock({ src, alt, position }: PhoneMockProps) {
  const base = `
    rounded-[22px]
    shadow-[3px_4px_10px_rgba(53,53,53,0.3)]
    transition-transform
    duration-300
  `;
  const positions = {
    back: "absolute left-0 bottom-0 w-[49%] transform -rotate-6 hover:rotate-0",
    front: "absolute right-0 top-0 w-[51%] transform rotate-0 hover:-rotate-6",
  };
  return (
    <div className={cn(base, positions[position])}>
      <img src={src} alt={alt} className="w-full h-auto rounded-[22px]" />
    </div>
  );
}