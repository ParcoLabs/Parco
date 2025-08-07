import { Container } from "@/components/ui/container";
import { SiCoinbase, SiStripe, SiPaypal } from "react-icons/si";

export default function PartnersSection() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="flex flex-wrap justify-center items-center space-x-8 opacity-60">
          <div className="flex items-center space-x-2 mb-4">
            <SiCoinbase size={24} />
            <span className="text-lg font-semibold">Coinbase</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <SiStripe size={24} />
            <span className="text-lg font-semibold">Stripe</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <SiPaypal size={24} />
            <span className="text-lg font-semibold">PayPal</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
