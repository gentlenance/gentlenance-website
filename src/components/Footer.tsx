const Footer = () => (
  <footer className="border-t border-border/20 py-16">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="#" className="font-serif text-xl font-bold text-gradient-gold tracking-tight">
          Gentlenance
        </a>

        <div className="flex gap-10 text-[13px] text-muted-foreground tracking-wide">
          <a href="#services" className="hover:text-foreground transition-colors">
            Leistungen
          </a>
          <a href="#why" className="hover:text-foreground transition-colors">
            Warum wir
          </a>
          <a href="#process" className="hover:text-foreground transition-colors">
            Ablauf
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
        </div>

        <p className="text-[13px] text-muted-foreground/60">
          © {new Date().getFullYear()} Gentlenance
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;