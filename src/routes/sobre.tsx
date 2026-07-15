import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import interiorImg from "@/assets/interior.jpg";
import transferImg from "@/assets/transfer.jpg";
import {
  Award,
  Heart,
  Users,
  Globe,
  Car,
  MapPin,
  Moon,
  CalendarDays,
  Route as RouteIcon,
  Users2,
} from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Tours Roma Italia" },
      {
        name: "description",
        content:
          "Conheça a história da Tours Roma Italia: mais de 10 anos oferecendo transfers privados e tours de luxo pela Itália.",
      },
      { property: "og:title", content: "Sobre — Tours Roma Italia" },
      {
        property: "og:description",
        content: "Uma década de excelência em transporte privado e tours exclusivos.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi Siamo"
        title={
          <>
            Uma paixão italiana <span className="italic text-gold">pelo bem receber</span>.
          </>
        }
        subtitle="Somos motoristas, guias e planejadores dedicados a transformar cada viagem em uma experiência inesquecível."
        image={interiorImg}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">La nostra storia</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Nossa história</h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                A Tours Roma Italia surgiu através da paixão e da admiração por trabalhar oferecendo
                serviços de qualidade e conforto a pessoas de outros países que desejam conhecer o
                nosso país.
              </p>
              <p>
                Atuamos no ramo turístico há mais de 10 anos em várias cidades da Itália. Com sede
                em Roma, atendemos toda a região do Lazio, muitas cidades do Sul — como Nápoles,
                Positano, Amalfi e Pompeia — e do Centro-Norte, incluindo Florença, Pisa, Siena,
                entre muitas outras.
              </p>
              <p>
                Nosso diferencial está em oferecer sempre o melhor conforto, segurança e atendimento
                personalizado. Para receber cada viajante em sua própria língua, nossos motoristas
                atendem em quatro idiomas: português, italiano, inglês e espanhol.
              </p>
              <p className="font-display text-2xl italic text-gold">Grazie Mille!</p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full border border-gold/30" />
            <img
              src={transferImg}
              alt="Motorista profissional recebendo um passageiro"
              loading="lazy"
              className="relative h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">I nostri valori</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Nossos valores</h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {[
              {
                icon: Award,
                title: "Excelência",
                text: "Padrão europeu em cada detalhe do serviço.",
              },
              {
                icon: Heart,
                title: "Hospitalidade",
                text: "Recebemos como se você fosse da família.",
              },
              {
                icon: Users,
                title: "Personalização",
                text: "Cada roteiro é único, feito para você.",
              },
              { icon: Globe, title: "Multiculturalismo", text: "Atendimento em quatro idiomas." },
            ].map((v) => (
              <div key={v.title}>
                <div className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 text-gold">
                  <v.icon className="h-5 w-5" strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { n: "10+", l: "Anos de experiência" },
              { n: "20+", l: "Cidades atendidas" },
              { n: "4", l: "Idiomas fluentes" },
            ].map((s) => (
              <div key={s.l} className="border-l border-gold/40 pl-6">
                <p className="font-display text-5xl text-gold">{s.n}</p>
                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-[oklch(0.04_0_0)] py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Cosa offriamo</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">O que oferecemos</h2>
            <p className="mt-6 text-muted-foreground">
              Uma gama completa de serviços privados para você viver a Itália com conforto,
              segurança e liberdade.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Car,
                title: "Transfers",
                text: "Aeroportos, hotéis, portos e estações com pontualidade absoluta.",
              },
              {
                icon: MapPin,
                title: "Passeios Guiados",
                text: "Roteiros privados pelas principais cidades e atrações italianas.",
              },
              {
                icon: RouteIcon,
                title: "Viagens Multi-Cidades",
                text: "Itinerários que conectam várias cidades da Itália em uma só experiência.",
              },
              {
                icon: CalendarDays,
                title: "Estadias em Cidades",
                text: "Passeios de vários dias para conhecer uma cidade a fundo.",
              },
              {
                icon: Moon,
                title: "Roma by Night",
                text: "Roma iluminada em um tour noturno inesquecível.",
              },
              {
                icon: Users2,
                title: "Motorista para Eventos",
                text: "Chauffeur particular para casamentos, reuniões e ocasiões especiais.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="border border-border bg-card p-8 transition-colors hover:border-gold"
              >
                <s.icon className="h-7 w-7 text-gold" strokeWidth={1.3} />
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center">
        <div className="container-x">
          <p className="eyebrow">Il nostro saluto</p>
          <p className="mt-6 font-display text-6xl italic text-gold md:text-7xl">Grazie Mille!</p>
          <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
            Nossa forma de agradecer a quem escolhe viver a Itália ao nosso lado.
          </p>
        </div>
      </section>
    </>
  );
}
