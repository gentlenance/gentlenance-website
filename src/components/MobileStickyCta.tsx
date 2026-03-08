type MobileStickyCtaProps = {
  onOpenContact: () => void;
};

const MobileStickyCta = ({ onOpenContact }: MobileStickyCtaProps) => (
  <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 glass-card border-t border-border/30">
    <button
      type="button"
      onClick={onOpenContact}
      className="block w-full gradient-gold text-primary-foreground px-6 py-3.5 rounded-lg text-sm font-semibold text-center hover:opacity-90 transition-opacity"
    >
      Erstgespräch buchen
    </button>
  </div>
);

export default MobileStickyCta;