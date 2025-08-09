// client/src/components/sections/HeroSection.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PhoneMock } from "@/components/ui/phone-mock";

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* Mobile-first responsive layout */}
      <div className="py-8 lg:py-24">
        <Container>
          {/* Mobile: Full-width centered layout, Desktop: Two-column layout */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:max-w-[1119px] lg:mx-auto lg:min-h-[500px]">
            
            {/* Text Content */}
            <div className="text-center lg:text-left lg:max-w-[565px] space-y-6 lg:space-y-8">
              <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-[55px] leading-tight text-[#1B221F]">
                Invest in Real Estate Tokens Instantly
              </h1>
              
              <p className="font-inter text-base sm:text-lg lg:text-[20px] leading-relaxed text-[#1A1A1A] max-w-md mx-auto lg:mx-0">
                Reimagining real estate through tokenized ownership.
                Accessible, borderless, Real World Assets built for the future.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
                <Button className="
                  bg-[#056052] text-white 
                  px-8 py-3 h-12 w-full max-w-sm lg:w-auto
                  rounded-lg font-semibold
                  shadow-[0_7px_30px_-10px_rgba(5,96,82,0.22)]
                  hover:bg-[#055044]
                  transition duration-300
                ">
                  View Marketplace
                </Button>
                
                {/* Desktop-only second button */}
                <Button variant="outline" className="
                  hidden lg:inline-flex
                  border-2 border-[#056052] text-[#056052] 
                  px-8 py-3 h-12
                  rounded-lg font-semibold
                  hover:bg-[#056052] hover:text-white
                  transition duration-300
                ">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Phone Mockups */}
            <div className="relative w-full max-w-[320px] h-[400px] mx-auto mt-12 lg:mt-0 lg:max-w-[500px] lg:h-[433px]">
              <PhoneMock
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800"
                alt="App screenshot showing portfolio analytics"
                position="back"
              />
              <PhoneMock
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800"
                alt="App screenshot showing property listings"
                position="front"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
