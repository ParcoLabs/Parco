import { cn } from "@/lib/utils";

interface PhoneMockProps {
  src: string;
  alt: string;
  position: "front" | "back";
  className?: string;
}

export function PhoneMock({ src, alt, position, className }: PhoneMockProps) {
  const baseClasses = "rounded-phone shadow-phone transition-transform";
  
  const positionClasses = {
    back: "absolute top-0 right-0 w-[49%] transform rotate-12 hover:rotate-6",
    front: "absolute top-8 left-0 w-[51%] z-10 hover:scale-105"
  };

  return (
    <div className={cn(baseClasses, positionClasses[position], className)}>
      <img 
        src={src} 
        alt={alt}
        className="w-full rounded-phone shadow-phone object-cover"
      />
    </div>
  );
}
