import { Briefcase, User, Lightbulb, Target } from "lucide-react";

const targets = [
  {
    icon: Briefcase,
    label: "Ambitionierte Berufstätige",
    desc: "Die mehr aus ihrem Einkommen machen wollen.",
  },
  {
    icon: User,
    label: "Gut verdienende Angestellte",
    desc: "Die strategisch absichern und aufbauen möchten.",
  },
  {
    icon: Lightbulb,
    label: "Selbstständige",
    desc: "Die ihre Finanzen professionell strukturieren wollen.",
  },
  {
    icon: Target,
    label: "Finanzbewusste Menschen",
    desc: "Die klare Entscheidungen statt Bauchgefühl wollen.",
  },
];

const TargetSection = () => (
  <section className="py-32 lg:py-44 relative">
    <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="section-label">Zielgruppe</p>

        <h2 className="section-heading">
          Für wen ist <span className="text-gradient-gold">Gentlenance</span>?
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {targets.map((t, i) => (
          <div
            key={i}
            className="glass-card-elevated rounded-2xl p-10 text-center space-y-5 hover:border-primary/20 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-2xl gradient-gold flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300">
              <t.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
            </div>

            <h3 className="font-serif font-semibold text-xl text-foreground">
              {t.label}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {t.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetSection;