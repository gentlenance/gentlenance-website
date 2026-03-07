const steps = [
  {
    num: "01",
    title: "Erstgespräch",
    desc: "Wir lernen dich und deine Situation kennen — unverbindlich und kostenlos.",
  },
  {
    num: "02",
    title: "Analyse & Strategie",
    desc: "Wir analysieren deine Finanzen und entwickeln eine maßgeschneiderte Strategie.",
  },
  {
    num: "03",
    title: "Umsetzung & Optimierung",
    desc: "Wir setzen den Plan gemeinsam um und optimieren ihn laufend.",
  },
];

const ProcessSection = () => (
  <section id="process" className="py-32 lg:py-44 relative">
    <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="section-label">Ablauf</p>

        <h2 className="section-heading">
          So funktioniert die <span className="text-gradient-gold">Beratung</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <div
            key={i}
            className="glass-card-elevated rounded-2xl p-10 text-center space-y-6 hover:border-primary/20 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="text-7xl font-serif font-bold text-gradient-gold opacity-60 group-hover:opacity-80 transition-opacity">
              {s.num}
            </span>

            <h3 className="font-serif text-2xl font-semibold text-foreground">
              {s.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;