const CtaSection = () => (
  <section id="cta" className="py-32 lg:py-44 relative">
    <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

    <div className="container mx-auto px-6 lg:px-12">
      <div className="relative glass-card-elevated rounded-3xl p-16 lg:p-24 text-center max-w-4xl mx-auto overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[2px] gradient-gold opacity-40" />

        <p className="section-label">Jetzt starten</p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold mb-8 leading-tight">
          Bereit für finanzielle{" "}
          <span className="text-gradient-gold italic">Klarheit</span>?
        </h2>

        <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Buche jetzt dein kostenloses Erstgespräch und erfahre, wie Gentlenance
          dir helfen kann, deine Finanzen strategisch und elegant zu ordnen.
        </p>

        <a
          href="#cta"
          className="inline-block gradient-gold text-primary-foreground px-12 py-5 rounded-xl text-lg font-semibold hover:opacity-90 transition-all shadow-lg"
        >
          Erstgespräch buchen
        </a>
      </div>
    </div>
  </section>
);

export default CtaSection;