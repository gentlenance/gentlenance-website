import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Endlich jemand, der Finanzen so erklärt, dass ich mich nicht dumm fühle. Die Beratung war klar, strukturiert und ohne Druck.",
    name: "Maximilian S.",
    role: "Unternehmer",
    stars: 5,
  },
  {
    quote:
      "Ich wusste nicht, wie viele Lücken ich in meiner Absicherung hatte. Gentlenance hat mir einen kompletten Überblick gegeben.",
    name: "Laura K.",
    role: "Ärztin",
    stars: 5,
  },
  {
    quote:
      "Professionell, modern und auf Augenhöhe. So sollte Finanzberatung heute aussehen.",
    name: "Daniel M.",
    role: "IT-Manager",
    stars: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-32 lg:py-44 relative">
    <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="section-label">Kundenstimmen</p>

        <h2 className="section-heading">
          Was unsere Kunden <span className="text-gradient-gold">sagen</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="glass-card-elevated rounded-2xl p-10 space-y-6 hover:border-primary/20 transition-all duration-300 relative"
          >
            <Quote className="w-8 h-8 text-primary/30 absolute top-8 right-8" strokeWidth={1} />

            <div className="flex gap-1">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>

            <p className="text-foreground/90 leading-relaxed text-[15px] font-light italic">
              „{t.quote}"
            </p>

            <div className="pt-2 border-t border-border/30">
              <p className="font-semibold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;