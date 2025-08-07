import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Mailing List</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Stay updated with the latest property opportunities, market insights, and platform updates.
          </p>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-button text-heading bg-white border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
                required
              />
              <Button 
                type="submit"
                className="bg-secondary-green hover:bg-emerald-600 text-white px-6 py-3 rounded-button font-semibold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
