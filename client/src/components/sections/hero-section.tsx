import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PhoneMock } from "@/components/ui/phone-mock";

export default function HeroSection() {
  return (
    <section className="bg-surface py-heroY lg:py-24">
      <Container>
        <div className="h-auto md:h-[500px] flex flex-col md:flex-row items-center justify-between gap-y-heroY md:gap-x-gap">
          {/* Text Column */}
          <div className="max-w-[565px] space-y-heroY">
            <h1 className="font-inter font-bold text-hero text-heading leading-tight">
              Invest in Real Estate{" "}
              <span className="text-primary">Tokens Instantly</span>
            </h1>
            <p className="font-inter text-sub text-text">
              Own a piece of premium real estate with as little as $100. Our platform tokenizes high-value properties, making real estate investment accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-button shadow-heroBtn font-semibold">
                View Marketplace
              </Button>
              <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-button font-semibold">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Mobile Mockups */}
          <div className="relative w-full max-w-[500px] h-[400px] md:h-[433px]">
            <PhoneMock 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800"
              alt="Mobile app showing property listings"
              position="back"
            />
            <PhoneMock 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=800"
              alt="Mobile app showing investment dashboard"
              position="front"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
