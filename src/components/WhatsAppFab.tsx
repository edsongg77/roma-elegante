import { WHATSAPP } from "./SiteHeader";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-primary-foreground shadow-gold transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
