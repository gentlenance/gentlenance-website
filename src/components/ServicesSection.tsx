import { Shield, TrendingUp, Search, LayoutGrid } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Absicherung optimieren",
    desc: "Wir analysieren deine bestehenden Versicherungen und schließen Lücken — ohne unnötige Kosten.",
  },
  {
    icon: TrendingUp,
    title: "Vermögen aufbauen",
    desc: "Individuelle Strategien für nachhaltigen Vermögensaufbau, angepasst an deine Ziele und Lebenssituation.",
  },
  {
    icon: Search,
    title: "Finanzielle Lücken erkennen",
    desc: "Eine umfassende Analyse zeigt dir genau, wo du Potenziale verschenkst oder Risiken eingehst.",
  },
  {
    icon: LayoutGrid,
    title: "Struktur & Klarheit",
    desc: "Wir bringen Ordnung in deine Finanzen — verständlich, übersichtlich und mit klarem Plan.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-32 lg:py-44 relative">
    <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="section-label">Leistungen</p>

        <h2 className="section-heading">
          Was wir für dich <span className="text-gradient-gold">tun</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <div
            key={i}
            className="glass-card-elevated rounded-2xl p-10 space-y-6 hover:border-primary/20 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl gradient-gold flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <s.icon className="w-6 h-6 text-primary-foreground" strokeWidth={1.5} />
            </div>

            <h3 className="text-2xl font-serif font-semibold text-foreground">
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

export default ServicesSection;