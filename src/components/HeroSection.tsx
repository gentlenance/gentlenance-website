import heroVisual from "@/assets/hero-visual.png";

type HeroSectionProps = {
  onOpenContact: () => void;
};

const HeroSection = ({ onOpenContact }: HeroSectionProps) => (
  <section className="relative min-h-[100vh] flex items-center overflow-hidden">
    <div className="absolute inset-0 gradient-hero" />
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/10" />

    <div
      className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.07]"
      style={{ background: "radial-gradient(circle, hsl(40, 52%, 62%), transparent 70%)" }}
    />

    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsla(40,52%,62%,0.3) 1px, transparent 1px), linear-gradient(90deg, hsla(40,52%,62%,0.3) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-32 pb-20 lg:pb-32">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-10">
          <div className="space-y-2">
            <p className="text-primary/80 font-sans text-sm font-medium tracking-[0.3em] uppercase">
              Premium Finanzberatung
            </p>
            <div className="w-12 h-[2px] gradient-gold rounded-full" />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-serif font-bold leading-[1.05] tracking-tight">
            Finanzen,
            <br />
            <span className="text-gradient-gold italic">elegant erklärt.</span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-lg leading-relaxed font-light">
            Gentlenance hilft dir, Absicherung, Vermögensaufbau und finanzielle
            Entscheidungen modern, verständlich und strategisch anzugehen.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="gradient-gold text-primary-foreground px-10 py-[18px] rounded-xl text-base font-semibold hover:opacity-90 transition-all text-center"
            >
              Erstgespräch buchen
            </button>

            <a
              href="#services"
              className="border border-primary/20 text-primary px-10 py-[18px] rounded-xl text-base font-medium hover:bg-primary/5 hover:border-primary/30 transition-all text-center"
            >
              Mehr erfahren
            </a>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <div className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background glass-card flex items-center justify-center text-xs text-primary font-semibold"
                >
                  {["M", "L", "D"][i]}
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-sm font-light">
              Über <span className="text-foreground font-medium">200+</span> zufriedene Kunden
            </p>
          </div>
        </div>

        <div className="hidden lg:flex justify-center relative">
          <div
            className="absolute -inset-8 rounded-3xl opacity-20"
            style={{ background: "radial-gradient(circle at center, hsl(40, 52%, 62%), transparent 70%)" }}
          />
          <img
            src={heroVisual}
            alt="Abstrakte Finanz-Visualisierung"
            className="w-full max-w-xl rounded-3xl relative z-10 shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default HeroSection;