import { Container } from "@/components/ui/container";

const features = [
  {
    title: "Portfolio Analytics",
    description: "Own fractional shares in income-generating real estate. Buy ownership in properties across top U.S. markets and earn rental income effortlessly.",
    image: "https://d17df1adcdc6196c2e4ab44e0007c7b8.cdn.bubble.io/cdn-cgi/image/w=384,h=384,f=auto,dpr=1.25,fit=contain/f1744479041600x140549823149429980/Pink%20Circle%20Lotus%20Yoga%20Instructor%20Logo%20%2826%29.png"
  },
  {
    title: "Market Research",
    description: "Receive rental payouts directly to your wallet, starting on day one. Your investment generates real-time income, and your holdings appreciate as property values grow.",
    image: "https://d17df1adcdc6196c2e4ab44e0007c7b8.cdn.bubble.io/cdn-cgi/image/w=384,h=384,f=auto,dpr=1.25,fit=contain/f1744478676584x368105054446560500/Pink%20Circle%20Lotus%20Yoga%20Instructor%20Logo%20%2825%29.png"
  },
  {
    title: "Mobile Trading",
    description: "Reinvest your earnings to scale your real estate portfolio. With every payout, you’re one step closer to long-term wealth and financial independence.",
    image: "https://d17df1adcdc6196c2e4ab44e0007c7b8.cdn.bubble.io/cdn-cgi/image/w=384,h=384,f=auto,dpr=1.25,fit=contain/f1744478687076x605162419201151500/Pink%20Circle%20Lotus%20Yoga%20Instructor%20Logo%20%2823%29.png"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-surface">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-heading mb-4">
            Real Estate Investing, <span className="text-primary">Track & Demands</span>
          </h2>
          <p className="text-sub text-text max-w-2xl mx-auto">
            Monitor your portfolio, track performance, and manage your real estate investments all from one platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-xl p-8 shadow-card">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-40 object-cover rounded-lg mb-4" 
                />
                <h3 className="text-xl font-semibold text-heading mb-2">{feature.title}</h3>
                <p className="text-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
