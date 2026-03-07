import { HelpCircle, ShieldOff, TrendingDown, AlertTriangle } from "lucide-react";

const problems = [
  {
    icon: HelpCircle,
    text: "Keine Klarheit über die eigene finanzielle Situation",
  },
  {
    icon: ShieldOff,
    text: "Lücken in der Absicherung, die erst im Ernstfall auffallen",
  },
  {
    icon: TrendingDown,
    text: "Vermögensaufbau ohne Plan oder Strategie",
  },
  {
    icon: AlertTriangle,
    text: "Überfordert von zu vielen Optionen und widersprüchlichen Tipps",
  },
];

const ProblemSection = () => (
  <section className="py-32 lg:py-44">
    <div className="container mx-auto px-6 lg:px-12">

      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="section-label">Das Problem</p>

        <h2 className="section-heading">
          Warum finanzielle{" "}
          <span className="text-gradient-gold">Klarheit</span> so wichtig ist
        </h2>

        <p className="section-subtext">
          Die meisten Menschen kümmern sich zu spät um ihre Finanzen — oder
          vertrauen auf veraltete Konzepte. Das Ergebnis: Unsicherheit,
          verpasste Chancen und fehlende Struktur.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {problems.map((p, i) => (
          <div
            key={i}
            className="glass-card-elevated rounded-2xl p-8 space-y-5 hover:border-primary/20 transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
              <p.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            </div>

            <p className="text-foreground font-medium leading-relaxed text-[15px]">
              {p.text}
            </p>
          </div>
        ))}

      </div>
    </div>
  </section>
);

export default ProblemSection;