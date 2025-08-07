import { Container } from "@/components/ui/container";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Smith",
    title: "Real Estate Investor",
    quote: "I just deposited my earnings for discovering investment properties with consistent returns. The platform makes real estate investing accessible to everyone.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  },
  {
    name: "Sarah Johnson",
    title: "Portfolio Manager",
    quote: "When we selected our properties for the program, we invested in all apartments that had strong cash flows and potential appreciation.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-surface">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-heading mb-4">Client Testimonials</h2>
          <p className="text-sub text-text">See what our investors are saying about their experience with PARCO.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-card">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-accent-amber fill-current" size={16} />
                  ))}
                </div>
              </div>
              <blockquote className="text-text mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover" 
                />
                <div>
                  <div className="font-semibold text-heading">{testimonial.name}</div>
                  <div className="text-text text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
