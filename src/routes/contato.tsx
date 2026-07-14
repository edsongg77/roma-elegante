import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import interior from "@/assets/interior.jpg";
import { Phone, Mail, MessageCircle, Send } from "lucide-react";
import { WHATSAPP } from "@/components/SiteHeader";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Tours Roma Italia" },
      { name: "description", content: "Entre em contato com a Tours Roma Italia. Telefone, WhatsApp, e-mail e formulário de contato." },
      { property: "og:title", content: "Contato — Tours Roma Italia" },
      { property: "og:description", content: "Fale conosco e planeje sua próxima experiência pela Itália." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title={<>Fale <span className="italic text-gold">conosco</span>.</>}
        subtitle="Estamos disponíveis 24 horas por dia, em quatro idiomas, para planejar sua próxima viagem."
        image={interior}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-2">
          {/* Contact info */}
          <div>
            <span className="eyebrow">Informazioni</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Como nos encontrar</h2>
            <p className="mt-6 text-muted-foreground">
              Prefere falar diretamente? Estamos a um clique de distância nos
              canais abaixo.
            </p>

            <div className="mt-12 space-y-6">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "+39 339 741 0650", href: WHATSAPP },
                { icon: Phone, label: "Telefone", value: "+39 339 741 0650", href: "tel:+393397410650" },
                { icon: Mail, label: "E-mail", value: "info@toursromaitalia.com", href: "mailto:info@toursromaitalia.com" },
              ].map((c) => {
                const Wrap = c.href ? "a" : "div";
                return (
                  <Wrap
                    key={c.label}
                    {...(c.href ? { href: c.href, target: "_blank", rel: "noreferrer" } : {})}
                    className="group flex items-start gap-5 border-b border-border pb-6"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-gold/40 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                      <c.icon className="h-5 w-5" strokeWidth={1.4} />
                    </div>
                    <div className="min-w-0">
                      <p className="eyebrow text-[0.6rem]">{c.label}</p>
                      <p className="mt-2 text-base text-foreground">{c.value}</p>
                    </div>
                  </Wrap>
                );
              })}
            </div>

            <div className="mt-10 aspect-[16/10] overflow-hidden border border-border">
              <iframe
                title="Roma"
                src="https://www.openstreetmap.org/export/embed.html?bbox=12.46%2C41.88%2C12.52%2C41.91&layer=mapnik&marker=41.9028%2C12.4964"
                className="h-full w-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="border border-border bg-card p-8 md:p-12">
            <span className="eyebrow">Modulo di contatto</span>
            <h3 className="mt-4 font-display text-3xl">Envie uma mensagem</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Responderemos em até algumas horas.
            </p>

            {sent ? (
              <div className="mt-10 border border-gold/50 bg-gold/5 p-8 text-center">
                <p className="font-display text-2xl text-gold">Obrigado!</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Recebemos sua mensagem e retornaremos em breve.
                </p>
              </div>
            ) : (
              <form
                className="mt-8 space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                {[
                  { label: "Nome", type: "text", name: "name" },
                  { label: "E-mail", type: "email", name: "email" },
                  { label: "Telefone / WhatsApp", type: "tel", name: "phone" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      {f.label}
                    </label>
                    <input
                      required
                      type={f.type}
                      name={f.name}
                      className="mt-2 w-full border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    Mensagem
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="message"
                    className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-foreground outline-none transition-colors focus:border-gold"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-3 bg-gradient-to-br from-gold to-gold-deep px-8 py-4 text-xs font-medium tracking-[0.24em] uppercase text-primary-foreground"
                >
                  Enviar Mensagem <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
