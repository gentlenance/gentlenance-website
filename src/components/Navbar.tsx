import { useEffect, useState } from "react";

type NavbarProps = {
  onOpenContact: () => void;
};

const Navbar = ({ onOpenContact }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b border-border/40" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="font-serif text-xl tracking-tight font-semibold">
            Gentlenance
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">
              Leistungen
            </a>

            <a href="#why" className="hover:text-foreground transition-colors">
              Warum wir
            </a>

            <a href="#process" className="hover:text-foreground transition-colors">
              Ablauf
            </a>

            <a href="#testimonials" className="hover:text-foreground transition-colors">
              Stimmen
            </a>

            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          <button
            type="button"
            onClick={onOpenContact}
            className="gradient-gold text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Erstgespräch buchen
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;