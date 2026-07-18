import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import toursImg from "@/assets/tours.jpg";
import trevi from "@/assets/trevi.jpg";
import florence from "@/assets/florence.jpg";
import venice from "@/assets/venice.jpg";
import tuscany from "@/assets/tuscany.jpg";
import vatican from "@/assets/vatican.jpg";
import pompeii from "@/assets/pompeii.jpg";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { WHATSAPP } from "@/components/SiteHeader";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "Tours Privados na Itália — DSC Italy Tours" },
      { name: "description", content: "Passeios privados por Roma, Vaticano, Toscana, Amalfi, Pompeia, Florença e Veneza. Guias e motoristas exclusivos." },
      { property: "og:title", content: "Tours Privados na Itália — DSC Italy Tours" },
      { property: "og:description", content: "Roteiros exclusivos por Roma e principais destinos da Itália, com motorista particular." },
    ],
  }),
  component: ToursPage,
});

const tours = [
  { title: "Roma Clássica", img: trevi, duration: "8h", places: "Coliseu · Fórum · Trevi · Piazza Navona", text: "Um dia completo pelos ícones eternos da Cidade Eterna." },
  { title: "Vaticano Exclusivo", img: vatican, duration: "5h", places: "Basílica · Museus · Capela Sistina", text: "Entrada preferencial e roteiro sem filas pela menor cidade do mundo." },
  { title: "Toscana em um dia", img: tuscany, duration: "10h", places: "San Gimignano · Siena · Vinícola", text: "Colinas, ciprestes e degustação em uma vinícola familiar." },
  { title: "Florença & Pisa", img: florence, duration: "12h", places: "Duomo · Ponte Vecchio · Torre", text: "O berço do Renascimento em um dia inesquecível." },
  { title: "Costa Amalfitana", img: toursImg, duration: "10h", places: "Positano · Amalfi · Ravello", text: "Mar, penhascos e vilarejos suspensos entre o azul." },
  { title: "Pompeia & Vesúvio", img: pompeii, duration: "9h", places: "Ruínas · Vulcão · Nápoles", text: "Arqueologia romana e paisagens vulcânicas ao sul." },
  { title: "Veneza Romântica", img: venice, duration: "Dia inteiro", places: "San Marco · Rialto · Gondola", text: "Canais, arte e um passeio de gôndola ao entardecer." },
];

function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Tour Privati"
        title={<>Roteiros que revelam <span className="italic text-gold">a alma da Itália</span>.</>}
        subtitle="Passeios privados desenhados sob medida, conduzidos por motoristas locais que conhecem cada esquina."
        image={toursImg}
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((t, i) => (
              <article
                key={t.title}
                className={`group relative overflow-hidden border border-border bg-card ${
                  i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className={`overflow-hidden ${i === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-full" : "aspect-[4/5]"}`}>
                  <img
                    src={t.img}
                    alt={t.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-gold">
                    <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3" /> {t.duration}</span>
                  </div>
                  <h3 className={`mt-4 font-display ${i === 0 ? "text-4xl lg:text-5xl" : "text-2xl"}`}>{t.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                    <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" /> {t.places}
                  </p>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-gold"
                  >
                    Reservar <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-[oklch(0.04_0_0)] py-24 text-center">
        <div className="container-x">
          <span className="eyebrow">Su misura</span>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Um roteiro <span className="italic text-gold">só seu</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Combinamos destinos, tempo e ritmo conforme o seu desejo. Conte-nos o
            que você imagina e criamos a experiência ideal.
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-gradient-to-br from-gold to-gold-deep px-8 py-4 text-xs font-medium tracking-[0.24em] uppercase text-primary-foreground"
          >
            Planejar meu tour <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
