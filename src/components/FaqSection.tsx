import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Ist das Erstgespräch kostenlos?",
    a: "Ja, das Erstgespräch ist völlig kostenlos und unverbindlich. Wir lernen uns kennen, besprechen deine Situation und schauen gemeinsam, ob und wie wir dir helfen können.",
  },
  {
    q: "Für wen lohnt sich die Beratung?",
    a: "Für alle, die ihre Finanzen strategisch ordnen möchten — ob Berufstätige, Selbstständige oder Menschen, die einfach Klarheit über Absicherung und Vermögensaufbau wollen.",
  },
  {
    q: "Ist die Empfehlung unverbindlich?",
    a: "Absolut. Wir beraten dich transparent und du entscheidest selbst, ob und was du umsetzen möchtest. Kein Druck, keine versteckten Verpflichtungen.",
  },
  {
    q: "Läuft die Beratung online oder vor Ort?",
    a: "Beides ist möglich. Die meisten Gespräche finden bequem per Videocall statt, aber persönliche Termine sind ebenfalls möglich.",
  },
  {
    q: "Welche Themen deckt Gentlenance ab?",
    a: "Wir decken Absicherung, Vermögensaufbau, Altersvorsorge, Risikoanalyse und finanzielle Strukturierung ab — individuell auf deine Situation zugeschnitten.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-32 lg:py-44 relative">
    <div className="section-divider absolute top-0 left-[10%] right-[10%]" />

    <div className="container mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="section-label">FAQ</p>

        <h2 className="section-heading">
          Häufig gestellte <span className="text-gradient-gold">Fragen</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card-elevated rounded-2xl px-8 border-border/20 overflow-hidden"
            >
              <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline py-6 text-[15px]">
                {f.q}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 font-light">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FaqSection;