import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoRT from "@/assets/logo-rt.png";

const nav = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/transfers", label: "Transfers" },
  { to: "/tours", label: "Tours" },
  { to: "/galeria", label: "Galeria" },
  { to: "/contato", label: "Contato" },
] as const;

const WHATSAPP = "https://wa.me/393397410650?text=Ol%C3%A1%21%20Gostaria%20de%20um%20or%C3%A7amento.";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="group flex items-center gap-3">
          <img src={logoRT} alt="Tours Roma Italia" width={40} height={40} className="h-10 w-10 shrink-0 object-contain" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-base tracking-wide text-foreground sm:text-lg">
              Tours Roma Italia
            </span>
            <span className="eyebrow text-[0.6rem]">Private Chauffeur & Tours</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-gold to-gold-soft transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-gold/60 bg-gold/5 px-5 py-2.5 text-xs font-medium tracking-[0.2em] uppercase text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            Solicitar Orçamento
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center text-foreground lg:hidden"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container-x flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 font-display text-xl text-muted-foreground hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center border border-gold/60 bg-gold/5 px-5 py-3 text-xs font-medium tracking-[0.2em] uppercase text-gold"
            >
              Orçamento no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export { WHATSAPP };
