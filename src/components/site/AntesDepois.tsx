import { transformacoes, whatsappLink } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function AntesDepois() {
  return (
    <section id="transformacoes" className="bg-mist py-24 sm:py-32 lg:py-40">
      <div className="container-site">
        <SectionHeading
          eyebrow="Antes e Depois"
          title="Transformações reais, feitas com calma"
          description="Arraste o controle (ou deslize o dedo) para revelar o resultado final."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {transformacoes.map((item, i) => (
            <Reveal key={item.titulo} delay={i * 0.09}>
              <BeforeAfterSlider
                beforeImage={item.antes}
                afterImage={item.depois}
                title={item.titulo}
                service={item.servico}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 flex justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-foreground/20 px-8 py-4 text-[0.72rem] uppercase tracking-[0.16em] text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/50 hover:bg-accent/60"
            >
              Ver mais transformações
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
