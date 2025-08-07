import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Building, Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Building className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold text-heading">PARCO</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="#marketplace" className="text-text hover:text-heading transition-colors">
                Marketplace
              </Link>
              <Link href="#about" className="text-text hover:text-heading transition-colors">
                About
              </Link>
              <Link href="#news" className="text-text hover:text-heading transition-colors">
                News
              </Link>
              <Link href="#contact" className="text-text hover:text-heading transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:inline-flex text-text hover:text-heading">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-blue-700 text-white shadow-heroBtn">
              Get Started
            </Button>
            <button 
              className="md:hidden text-text p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="#marketplace" className="text-text hover:text-heading transition-colors">
                Marketplace
              </Link>
              <Link href="#about" className="text-text hover:text-heading transition-colors">
                About
              </Link>
              <Link href="#news" className="text-text hover:text-heading transition-colors">
                News
              </Link>
              <Link href="#contact" className="text-text hover:text-heading transition-colors">
                Contact
              </Link>
              <Button variant="ghost" className="text-text hover:text-heading justify-start">
                Sign In
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
