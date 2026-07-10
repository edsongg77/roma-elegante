import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import interiorImg from "@/assets/interior.jpg";
import transferImg from "@/assets/transfer.jpg";
import { Award, Heart, Users, Globe } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre — Tours Roma Italia" },
      { name: "description", content: "Conheça a história da Tours Roma Italia: mais de 10 anos oferecendo transfers privados e tours de luxo pela Itália." },
      { property: "og:title", content: "Sobre — Tours Roma Italia" },
      { property: "og:description", content: "Uma década de excelência em transporte privado e tours exclusivos." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi Siamo"
        title={<>Uma paixão italiana <span className="italic text-gold">pelo bem receber</span>.</>}
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
                Fundada em Roma há mais de uma década, a Tours Roma Italia nasceu
                de um propósito simples: oferecer a viajantes de todo o mundo um
                serviço de transporte privado que combine a hospitalidade
                italiana com a excelência do serviço europeu.
              </p>
              <p>
                Começamos com um único Mercedes e o desejo genuíno de mostrar a
                Itália como só quem vive aqui pode mostrar. Hoje, atendemos
                centenas de famílias, executivos e agências de luxo ao redor do
                mundo, sempre com a mesma discrição e atenção ao detalhe.
              </p>
              <p>
                Falamos português, italiano, inglês e espanhol — porque cada
                viajante merece ser recebido em sua própria língua.
              </p>
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
              { icon: Award, title: "Excelência", text: "Padrão europeu em cada detalhe do serviço." },
              { icon: Heart, title: "Hospitalidade", text: "Recebemos como se você fosse da família." },
              { icon: Users, title: "Personalização", text: "Cada roteiro é único, feito para você." },
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
          <div className="grid gap-12 md:grid-cols-4">
            {[
              { n: "10+", l: "Anos de experiência" },
              { n: "5.000+", l: "Viajantes atendidos" },
              { n: "20+", l: "Cidades atendidas" },
              { n: "4", l: "Idiomas fluentes" },
            ].map((s) => (
              <div key={s.l} className="border-l border-gold/40 pl-6">
                <p className="font-display text-5xl text-gold">{s.n}</p>
                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
