// client/src/components/sections/HeroSection.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PhoneMock } from "@/components/ui/phone-mock";

export default function HeroSection() {
  return (
    <section className="bg-white">
      {/* vertical padding = 30px on mobile, 96px on lg */}
      <div className="py-[30px] lg:py-[96px]">
        <Container className="px-[40px]">
          <div className="mx-auto w-[1119px] h-[500px] flex flex-col md:flex-row items-center justify-between gap-y-[30px] md:gap-x-[48px]">

            {/* TEXT + CTA (565px wide) */}
            <div className="flex flex-col max-w-[565px] space-y-[30px]">
              <h1 className="font-inter font-bold text-[55px] leading-[1.2] text-[#1B221F]">
                Invest in Real Estate<br className="hidden md:block" />
                Tokens Instantly
              </h1>
              <p className="font-inter text-[20px] leading-[1.4] text-[#1A1A1A]">
                Reimagining real estate through tokenized ownership.<br />
                Accessible, borderless, Real World Assets built for the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="
                  bg-[#056052] text-white 
                  px-[24px] py-[12px] h-[48px]
                  rounded-[7px]
                  shadow-[0_7px_30px_-10px_rgba(5,96,82,0.22)]
                  hover:bg-[#055044]
                  transition duration-300
                ">
                  View Marketplace
                </Button>
                <Button variant="outline" className="
                  border-2 border-[#056052] text-[#056052] 
                  px-[24px] py-[12px] h-[48px]
                  rounded-[7px] font-semibold
                  hover:bg-[#056052] hover:text-white
                  transition duration-300
                ">
                  Learn More
                </Button>
              </div>
            </div>

            {/* PHONE MOCKUPS (500×433) */}
            <div className="relative w-full max-w-[500px] h-[433px]">
              <PhoneMock
                src="/mobile2.png"
                alt="App screenshot behind"
                position="back"
              />
              <PhoneMock
                src="/Mobile1.png"
                alt="App screenshot front"
                position="front"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
