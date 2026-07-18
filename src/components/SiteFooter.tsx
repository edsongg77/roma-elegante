import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logoRT from "@/assets/logo-rt.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[oklch(0.04_0_0)]">
      <div className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoRT} alt="DSC Italy Tours" width={40} height={40} loading="lazy" className="h-10 w-10 object-contain" />
              <span className="font-display text-xl">DSC Italy Tours</span>
            </div>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Transfers privados e tours exclusivos pela Itália. Mais de uma década
              transformando deslocamentos em experiências memoráveis.
            </p>
            <p className="mt-6 font-display text-2xl italic text-gold">Grazie Mille!</p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="eyebrow">Navegação</h4>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-gold">Início</Link></li>
              <li><Link to="/sobre" className="hover:text-gold">Sobre</Link></li>
              <li><Link to="/transfers" className="hover:text-gold">Transfers</Link></li>
              <li><Link to="/tours" className="hover:text-gold">Tours</Link></li>
              <li><Link to="/galeria" className="hover:text-gold">Galeria</Link></li>
              <li><Link to="/contato" className="hover:text-gold">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow">Contato</h4>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>+39 339 741 0650</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>giuliadgdsilva@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Via del Corso, Roma — Itália</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} DSC Italy Tours. Todos os direitos reservados.</p>
          <p className="tracking-[0.2em] uppercase">Made with care in Roma</p>
        </div>
      </div>
    </footer>
  );
}
