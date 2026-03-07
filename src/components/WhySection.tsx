import { Check, X } from "lucide-react";

const diffs = [
  { old: "Veraltet", now: "Modern" },
  { old: "Kompliziert", now: "Verständlich" },
  { old: "Generisch", now: "Elegant" },
  { old: "Aufdringlich", now: "Strategisch" },
  { old: "Einheitslösung", now: "Individuell" },
];

const WhySection = () => (
  <section id="why" className="py-32 lg:py-44 relative">
    <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="section-label">Der Unterschied</p>

        <h2 className="section-heading">
          Warum <span className="text-gradient-gold">Gentlenance</span>?
        </h2>

        <p className="section-subtext">
          Wir machen Finanzberatung so, wie sie sein sollte — nicht so, wie sie schon immer war.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-5">
        {diffs.map((d, i) => (
          <div
            key={i}
            className="glass-card-elevated rounded-2xl px-10 py-6 flex items-center justify-between group hover:border-primary/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <X className="w-4 h-4 text-muted-foreground/50" strokeWidth={1.5} />
              <span className="text-muted-foreground/60 line-through text-base font-light">
                {d.old}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-primary" strokeWidth={2} />
              <span className="text-foreground font-semibold text-lg font-serif">
                {d.now}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;