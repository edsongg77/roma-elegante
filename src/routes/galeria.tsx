import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import trevi from "@/assets/trevi.jpg";
import florence from "@/assets/florence.jpg";
import venice from "@/assets/venice.jpg";
import tuscany from "@/assets/tuscany.jpg";
import vatican from "@/assets/vatican.jpg";
import pompeii from "@/assets/pompeii.jpg";
import tours from "@/assets/tours.jpg";
import interior from "@/assets/interior.jpg";
import transfer from "@/assets/transfer.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Tours Roma Italia" },
      { name: "description", content: "Momentos capturados em nossos transfers e tours pela Itália." },
      { property: "og:title", content: "Galeria — Tours Roma Italia" },
      { property: "og:description", content: "Imagens dos nossos passeios e serviços pela Itália." },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: hero, alt: "Mercedes preto em frente ao Coliseu", label: "Roma" },
  { src: trevi, alt: "Fontana di Trevi iluminada à noite", label: "Trevi" },
  { src: vatican, alt: "Cúpula do Vaticano", label: "Vaticano" },
  { src: florence, alt: "Duomo de Florença ao pôr do sol", label: "Firenze" },
  { src: venice, alt: "Grande Canal de Veneza", label: "Venezia" },
  { src: tuscany, alt: "Colinas da Toscana com cipestres", label: "Toscana" },
  { src: tours, alt: "Vila de Positano ao entardecer", label: "Positano" },
  { src: pompeii, alt: "Ruínas de Pompeia com Vesúvio", label: "Pompei" },
  { src: interior, alt: "Interior de Mercedes V-Class", label: "Frota" },
  { src: transfer, alt: "Chauffeur profissional no aeroporto", label: "Transfer" },
];

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Galleria"
        title={<>Momentos capturados <span className="italic text-gold">pela Itália</span>.</>}
        subtitle="Uma seleção dos destinos, cenários e detalhes que fazem parte da nossa rotina."
        image={venice}
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {images.map((img, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden border border-border bg-card"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-4 p-6 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="eyebrow text-[0.65rem]">{img.label}</span>
                  <p className="mt-1 font-display text-lg text-foreground">{img.alt}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
