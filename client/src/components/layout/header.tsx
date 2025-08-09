// src/components/Header.tsx
import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/ParcoLogo.png"
              alt="Parco Logo"
              className="h-8 w-auto"
            />
            <span className="font-bungee text-2xl font-bold text-[#056052]">
              PARCO
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/marketplace"
              className="font-inter text-base font-medium text-black hover:text-[#056052] transition-colors"
            >
              Marketplace
            </Link>
            <Link
              href="/about"
              className="font-inter text-base font-medium text-black hover:text-[#056052] transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/learn"
              className="font-inter text-base font-medium text-black hover:text-[#056052] transition-colors"
            >
              Learn
            </Link>
            <Link
              href="/tokenize"
              className="font-inter text-base font-medium text-black hover:text-[#056052] transition-colors"
            >
              Tokenize My Property
            </Link>
          </nav>

          {/* Actions + mobile toggle */}
          <div className="flex items-center space-x-4">
            <Button
              className="hidden md:inline-flex font-inter text-base font-semibold text-[#002610]
                         bg-[#CDFEED] px-6 py-2 rounded-lg"
            >
              Refer Friends
            </Button>
            <Button
              variant="outline"
              className="hidden md:inline-flex font-inter text-base font-semibold text-[#056052]
                         border-2 border-[#056052] px-6 py-2 rounded-lg"
            >
              Sign up / Login
            </Button>
            <button
              className="md:hidden text-black p-2"
              onClick={() => setIsMobileMenuOpen((o) => !o)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/marketplace"
                className="font-inter text-base font-medium text-black hover:text-[#056052] transition-colors"
              >
                Marketplace
              </Link>
              <Link
                href="/about"
                className="font-inter text-base font-medium text-black hover:text-[#056052] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/learn"
                className="font-inter text-base font-medium text-black hover:text-[#056052] transition-colors"
              >
                Learn
              </Link>
              <Link
                href="/tokenize"
                className="font-inter text-base font-medium text-black hover:text-[#056052] transition-colors"
              >
                Tokenize My Property
              </Link>
              <Button className="font-inter text-base font-semibold text-[#002610]
                                 bg-[#CDFEED] px-6 py-2 rounded-lg text-left">
                Refer Friends
              </Button>
              <Button
                variant="outline"
                className="font-inter text-base font-semibold text-[#056052]
                           border-2 border-[#056052] px-6 py-2 rounded-lg text-left"
              >
                Sign up / Login
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
