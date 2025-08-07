import { Container } from "@/components/ui/container";

const features = [
  {
    title: "Portfolio Analytics",
    description: "Track your investments with real-time analytics and detailed performance metrics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
  },
  {
    title: "Market Research",
    description: "Access comprehensive market data and research to make informed investment decisions.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
  },
  {
    title: "Mobile Trading",
    description: "Manage your portfolio on-the-go with our mobile app available on iOS and Android.",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
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
