import { useEffect, useState } from "react";

type ContactPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const THEMEN = [
  "Absicherung",
  "Vermögensaufbau",
  "Förderungs-Check",
  "Sonstiges",
];

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Gentlenance Lead:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        topic: "",
        message: "",
      });
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4 py-10 overflow-y-auto">
      <button
        type="button"
        aria-label="Popup schließen"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-primary/15 bg-card/95 backdrop-blur-xl shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
              Erstgespräch
            </p>
            <h3 className="mt-2 text-2xl font-serif font-bold text-foreground">
              Unverbindlich anfragen
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-foreground/80 transition hover:bg-white/5 hover:text-foreground"
          >
            ×
          </button>
        </div>

        <div className="px-6 py-6 md:px-8 md:py-8">
          {submitted ? (
            <div className="rounded-2xl border border-primary/20 bg-primary/10 px-5 py-8 text-center">
              <h4 className="text-xl font-semibold text-foreground">
                Anfrage erfolgreich erfasst
              </h4>
              <p className="mt-3 text-muted-foreground">
                Danke. Wir melden uns schnellstmöglich bei dir.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Vorname / Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Max Mustermann"
                    className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="max@beispiel.de"
                    className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+49 123 456789"
                    className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Thema auswählen
                  </label>
                  <select
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-foreground outline-none transition focus:border-primary/40"
                  >
                    <option value="">Bitte auswählen</option>
                    {THEMEN.map((thema) => (
                      <option key={thema} value={thema}>
                        {thema}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  Anliegen / Nachricht (optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Worum geht es genau?"
                  className="w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary/40"
                />
              </div>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Unverbindliche Anfrage. Wir melden uns persönlich bei dir.
                </p>

                <button
                  type="submit"
                  className="rounded-xl bg-primary px-7 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Erstgespräch buchen
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;