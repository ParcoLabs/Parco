import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const appFeatures = [
  {
    title: "Property Discovery",
    description: "Browse and filter properties based on location, price, and expected returns.",
    image: "https://d17df1adcdc6196c2e4ab44e0007c7b8.cdn.bubble.io/f1739036058037x926064690587668900/Pink%20Circle%20Lotus%20Yoga%20Instructor%20Logo%20%282%29.svg",
    gradient: "from-primary/10 to-primary/5"
  },
  {
    title: "Portfolio Management",
    description: "Monitor your investments and track performance in real-time.",
    image: "https://d17df1adcdc6196c2e4ab44e0007c7b8.cdn.bubble.io/f1739036149077x177949591091408600/Pink%20Circle%20Lotus%20Yoga%20Instructor%20Logo%20%283%29.svg",
    gradient: "from-secondary-green/10 to-secondary-green/5"
  },
  {
    title: "Easy Trading",
    description: "Buy and sell property tokens with just a few taps on your mobile device.",
    image: "https://d17df1adcdc6196c2e4ab44e0007c7b8.cdn.bubble.io/f1739036661341x150401367071684160/Pink%20Circle%20Lotus%20Yoga%20Instructor%20Logo%20%285%29.svg",
    gradient: "from-accent-amber/10 to-accent-amber/5"
  }
];

export default function AppShowcaseSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-heading mb-4">
            Trading Real Property With Ease
          </h2>
          <p className="text-sub text-text max-w-2xl mx-auto">
            Experience seamless property trading with our intuitive mobile and web platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-8 mb-4`}>
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-32 h-56 mx-auto rounded-phone shadow-phone object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold text-heading mb-2">{feature.title}</h3>
              <p className="text-text">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800">
              <FaApple size={20} />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="font-semibold">App Store</div>
              </div>
            </Button>
            <Button variant="secondary" className="bg-black text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800">
              <FaGooglePlay size={20} />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
