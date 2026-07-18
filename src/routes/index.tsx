import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, UserCheck, Languages, MapPin, ArrowRight, Star, Shield, Sparkles, Ship, Plane, Building2, Route as RouteIcon, Camera, Sun } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import transferImg from "@/assets/transfer.jpg";
import toursImg from "@/assets/tours.jpg";
import interiorImg from "@/assets/interior.jpg";
import trevi from "@/assets/trevi.jpg";
import florence from "@/assets/florence.jpg";
import venice from "@/assets/venice.jpg";
import tuscany from "@/assets/tuscany.jpg";
import vatican from "@/assets/vatican.jpg";
import pompeii from "@/assets/pompeii.jpg";
import { WHATSAPP } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const highlights = [
  { icon: Clock, title: "10+ anos", text: "Uma década de excelência em turismo privado pela Itália." },
  { icon: UserCheck, title: "Motoristas & Guias", text: "Chauffeurs certificados e anfitriões locais dedicados." },
  { icon: Languages, title: "4 Idiomas", text: "Português, Italiano, Inglês e Espanhol." },
  { icon: MapPin, title: "Toda a Itália", text: "Roma e as principais cidades e destinos italianos." },
];

const services = [
  { icon: RouteIcon, title: "Transfers Privados", text: "Aeroportos, portos, estações e hotéis com pontualidade absoluta.", to: "/transfers" as const },
  { icon: Camera, title: "Passeios Personalizados", text: "Roteiros turísticos sob medida, no seu ritmo e estilo.", to: "/tours" as const },
  { icon: Building2, title: "City Tours", text: "Descubra Roma e outras cidades italianas com um anfitrião local.", to: "/tours" as const },
  { icon: Sun, title: "Excursões de um Dia", text: "Day tours para Toscana, Amalfi, Pompeia, Tivoli, Orvieto e mais.", to: "/tours" as const },
  { icon: Ship, title: "Cruzeiros — Civitavecchia", text: "Recepção no porto, passeio em Roma e retorno pontual ao embarque.", to: "/tours" as const },
  { icon: Plane, title: "Roteiros Personalizados", text: "Planejamos sua viagem do início ao fim, do transporte às experiências.", to: "/tours" as const },
];

const featuredServiceImgs = [transferImg, toursImg, interiorImg] as const;

const cities = [
  { name: "Roma", img: heroImg },
  { name: "Florença", img: florence },
  { name: "Veneza", img: venice },
  { name: "Nápoles", img: pompeii },
  { name: "Positano", img: toursImg },
  { name: "Costa Amalfitana", img: toursImg },
  { name: "Pompeia", img: pompeii },
  { name: "Pisa", img: florence },
  { name: "Siena", img: tuscany },
  { name: "Tivoli", img: trevi },
  { name: "Orvieto", img: tuscany },
  { name: "Vaticano", img: vatican },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Coliseu de Roma ao entardecer"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

        <div className="container-x relative flex h-full flex-col justify-end pb-20 pt-32 md:justify-center md:pb-0">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 animate-fade-in">
              <span className="gold-rule" />
              <span className="eyebrow">Private Chauffeur · Rome · Italy</span>
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[0.98] text-foreground animate-fade-up sm:text-6xl md:text-7xl lg:text-8xl">
              A Itália, <br />
              <span className="italic text-gold">à sua maneira.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground animate-fade-up sm:text-lg">
              Muito mais do que transfers: transfers privados, city tours, excursões
              de um dia, roteiros personalizados e recepção de cruzeiros no Porto de
              Civitavecchia. Uma experiência completa pela Itália.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 bg-gradient-to-br from-gold to-gold-deep px-8 py-4 text-xs font-medium tracking-[0.24em] uppercase text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/tours"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 text-xs font-medium tracking-[0.24em] uppercase text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Explorar Tours
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 hidden text-right md:block">
          <p className="eyebrow text-[0.65rem]">Since 2014</p>
          <p className="mt-2 font-display text-2xl text-gold">Roma · Firenze · Amalfi</p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="border-y border-border bg-card">
        <div className="container-x grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="bg-card p-8 md:p-10">
              <h.icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              <h3 className="mt-6 font-display text-xl">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="py-24 md:py-32">
        <div className="container-x grid gap-16 md:grid-cols-2 md:items-center">
          <div>
            <span className="eyebrow">Chi Siamo</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Uma década a serviço <br />
              <span className="italic text-gold">de quem viaja bem.</span>
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              A DSC Italy Tours nasceu do amor pela Itália e da certeza de que
              cada detalhe importa. Somos motoristas, guias e planejadores,
              dedicados a transformar deslocamentos em momentos memoráveis para
              famílias, executivos e viajantes exigentes.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-display text-3xl text-gold">10+</p>
                <p className="mt-1 text-xs tracking-wide uppercase text-muted-foreground">Anos</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">4</p>
                <p className="mt-1 text-xs tracking-wide uppercase text-muted-foreground">Idiomas</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gold">24/7</p>
                <p className="mt-1 text-xs tracking-wide uppercase text-muted-foreground">Suporte</p>
              </div>
            </div>
            <Link
              to="/sobre"
              className="mt-10 inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all"
            >
              Nossa história <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full border border-gold/30" />
            <img
              src={interiorImg}
              alt="Interior de van executiva de luxo"
              width={1600}
              height={1000}
              loading="lazy"
              className="relative h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border bg-[oklch(0.04_0_0)] py-24 md:py-32">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Servizi</span>
              <h2 className="mt-4 max-w-xl font-display text-4xl md:text-5xl">
                Serviços pensados para <span className="italic text-gold">quem exige</span>.
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Do primeiro contato ao último quilômetro, cada detalhe é planejado
              para oferecer conforto, discrição e pontualidade absoluta.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.title}
                to={s.to}
                className="group relative block overflow-hidden border border-border bg-card p-8 transition-colors hover:border-gold"
              >
                <s.icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold">
                  Saiba mais <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          {/* Featured service imagery */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredServiceImgs.map((img, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden border border-border">
                <img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRUISES — CIVITAVECCHIA */}
      <section className="relative overflow-hidden border-t border-border">
        <img src={toursImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="container-x relative grid gap-16 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <span className="eyebrow">Crociere · Civitavecchia</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
              Cruzeiros no <span className="italic text-gold">Porto de Roma</span>.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Recebemos turistas no Porto de Civitavecchia (Porto de Roma),
              realizamos passeios personalizados por Roma durante o dia e
              retornamos ao porto no horário de embarque — com conforto,
              pontualidade e uma experiência inesquecível.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Recepção do navio com placa personalizada",
                "Roteiro flexível ajustado ao tempo em terra",
                "Retorno pontual ao horário de reembarque",
                "Motorista/anfitrião em quatro idiomas",
              ].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <Ship className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-3 bg-gradient-to-br from-gold to-gold-deep px-8 py-4 text-xs font-medium tracking-[0.24em] uppercase text-primary-foreground"
            >
              Reservar experiência <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full border border-gold/30" />
            <img
              src={toursImg}
              alt="Costa italiana vista de um cruzeiro no Mediterrâneo"
              loading="lazy"
              className="relative h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section className="border-t border-border bg-[oklch(0.04_0_0)] py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Destinazioni</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Muito além de Roma <span className="italic text-gold">— toda a Itália</span>.
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">
              Operamos em Roma e nas principais cidades italianas, com roteiros
              personalizados e transporte privado porta a porta.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {cities.map((c) => (
              <div key={c.name} className="group relative aspect-[4/5] overflow-hidden border border-border bg-card">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center gap-2 text-gold">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="eyebrow text-[0.6rem]">Italia</span>
                  </div>
                  <p className="mt-2 font-display text-xl text-foreground">{c.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Perché noi</span>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Por que escolher <span className="italic text-gold">DSC Italy Tours</span>
            </h2>
          </div>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
              { icon: Shield, title: "Segurança absoluta", text: "Frota moderna, segurada e revisada. Motoristas licenciados NCC." },
              { icon: Sparkles, title: "Experiência premium", text: "Água mineral, wi-fi a bordo, assentos de couro e clima personalizado." },
              { icon: Star, title: "Atenção aos detalhes", text: "Meet & greet, monitoramento de voos e flexibilidade total no roteiro." },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold">
                  <v.icon className="h-5 w-5" strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-display text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-y border-border">
        <img
          src={toursImg}
          alt=""
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        <div className="container-x relative py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="eyebrow">Pronto per partire?</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              Vamos planejar sua <span className="italic text-gold">próxima viagem</span>.
            </h2>
            <p className="mt-6 max-w-lg text-base text-muted-foreground">
              Solicite um orçamento personalizado pelo WhatsApp e receba uma
              proposta em minutos.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-br from-gold to-gold-deep px-8 py-4 text-xs font-medium tracking-[0.24em] uppercase text-primary-foreground"
              >
                Orçamento no WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 border border-border px-8 py-4 text-xs font-medium tracking-[0.24em] uppercase hover:border-gold hover:text-gold"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
