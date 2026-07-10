import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import transferImg from "@/assets/transfer.jpg";
import { Plane, Hotel, Ship, TrainFront, Route as RouteIcon, Car, ArrowRight, Check } from "lucide-react";
import { WHATSAPP } from "@/components/SiteHeader";

export const Route = createFileRoute("/transfers")({
  head: () => ({
    meta: [
      { title: "Transfers Privados — Tours Roma Italia" },
      { name: "description", content: "Transfers privados aeroporto, porto, estação e entre cidades italianas: Roma, Florença, Pisa, Siena, Nápoles, Positano, Amalfi e Pompeia." },
      { property: "og:title", content: "Transfers Privados na Itália — Tours Roma Italia" },
      { property: "og:description", content: "Motorista particular por diária e transfers entre as principais cidades da Itália." },
    ],
  }),
  component: TransfersPage,
});

const services = [
  { icon: Plane, title: "Aeroporto → Hotel", text: "Recepção com placa no desembarque e traslado direto ao seu hotel." },
  { icon: Hotel, title: "Hotel → Aeroporto", text: "Partida pontual com monitoramento do seu voo em tempo real." },
  { icon: Ship, title: "Porto → Hotel", text: "Transfers de e para os principais portos de cruzeiro italianos." },
  { icon: TrainFront, title: "Estação → Hotel", text: "Encontre-se com seu motorista já na plataforma da estação." },
  { icon: RouteIcon, title: "Entre Cidades", text: "Roma, Florença, Pisa, Siena, Nápoles, Positano, Amalfi e Pompeia." },
  { icon: Car, title: "Motorista por Diária", text: "Chauffeur exclusivo à disposição por dia ou meio dia." },
];

const routes = [
  { from: "Roma", to: "Florença", km: "280 km" },
  { from: "Roma", to: "Nápoles", km: "230 km" },
  { from: "Roma", to: "Positano", km: "310 km" },
  { from: "Roma", to: "Amalfi", km: "300 km" },
  { from: "Roma", to: "Pompeia", km: "245 km" },
  { from: "Florença", to: "Pisa", km: "85 km" },
  { from: "Florença", to: "Siena", km: "75 km" },
  { from: "Nápoles", to: "Amalfi", km: "70 km" },
];

function TransfersPage() {
  return (
    <>
      <PageHero
        eyebrow="Transfers Privati"
        title={<>Elegância <span className="italic text-gold">em cada trajeto</span>.</>}
        subtitle="Frota Mercedes-Benz, motoristas licenciados e pontualidade absoluta em toda a Itália."
        image={transferImg}
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group border border-border bg-card p-8 transition-colors hover:border-gold">
                <s.icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold opacity-0 transition-opacity group-hover:opacity-100"
                >
                  Cotar <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[oklch(0.04_0_0)] py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Rotas populares</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Trajetos mais solicitados</h2>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {routes.map((r) => (
              <div key={`${r.from}-${r.to}`} className="bg-card p-6">
                <p className="eyebrow text-[0.6rem]">Trajeto</p>
                <p className="mt-3 font-display text-xl">
                  {r.from} <span className="text-gold">→</span> {r.to}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{r.km}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Incluso in ogni servizio</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Incluso em todo serviço</h2>
            <ul className="mt-10 space-y-4">
              {[
                "Motorista profissional licenciado NCC",
                "Frota Mercedes-Benz revisada e segurada",
                "Água mineral e wi-fi a bordo",
                "Meet & greet com placa personalizada",
                "Monitoramento de voos em tempo real",
                "Cadeira infantil sob solicitação",
                "Preço fixo, sem surpresas",
                "Suporte 24h em quatro idiomas",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-border bg-card p-10 md:p-12">
            <span className="eyebrow">Preventivo</span>
            <h3 className="mt-4 font-display text-3xl">Solicite seu orçamento</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Envie os detalhes do seu trajeto pelo WhatsApp e receba uma
              proposta personalizada em minutos.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-3 bg-gradient-to-br from-gold to-gold-deep px-8 py-4 text-xs font-medium tracking-[0.24em] uppercase text-primary-foreground"
            >
              Orçamento no WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
