import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const properties = [
  {
    id: 1,
    name: "Manhattan Heights",
    location: "New York, NY",
    tokenPrice: "$50",
    apy: "8.5% APY",
    status: "Available",
    statusColor: "bg-secondary-green/10 text-secondary-green",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 2,
    name: "Brooklyn Heritage",
    location: "Brooklyn, NY",
    tokenPrice: "$75",
    apy: "7.2% APY",
    status: "Limited",
    statusColor: "bg-accent-amber/10 text-accent-amber",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  },
  {
    id: 3,
    name: "Silicon Plaza",
    location: "San Francisco, CA",
    tokenPrice: "$100",
    apy: "9.1% APY",
    status: "Available",
    statusColor: "bg-secondary-green/10 text-secondary-green",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
  }
];

export default function PropertiesSection() {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-heading mb-4">
            Find Premium Properties with Built-in Cash Flow
          </h2>
          <p className="text-sub text-text max-w-2xl mx-auto">
            Discover tokenized real estate opportunities from verified properties across prime locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl shadow-card overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={property.image} 
                alt={property.name}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={property.statusColor}>
                    {property.status}
                  </Badge>
                  <span className="text-heading font-semibold">{property.apy}</span>
                </div>
                <h3 className="text-xl font-semibold text-heading mb-2">{property.name}</h3>
                <p className="text-text mb-4">{property.location}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-heading">{property.tokenPrice}</span>
                  <Button className="bg-primary hover:bg-teal-800 text-white px-4 py-2 rounded-button font-medium">
                    Invest Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-button font-semibold">
            View All Properties
          </Button>
        </div>
      </Container>
    </section>
  );
}
