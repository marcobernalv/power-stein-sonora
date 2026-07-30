import { PageHero } from "@/components/PageHero";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { IMG } from "@/lib/data";
import { Check } from "lucide-react";

const SPECS = [
  "Paneles monocristalinos Tier 1 de alta eficiencia",
  "Inversores con monitoreo en tiempo real vía app",
  "Estructura de montaje anticorrosiva para clima de Sonora",
  "Medidor bidireccional y trámite ante CFE incluido",
  "Garantía de producción de hasta 25 años",
  "Diseño de ingeniería a la medida de tu consumo",
];

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Paneles Solares"
        title="Tecnología solar premium"
        subtitle="Sistemas fotovoltaicos residenciales y comerciales diseñados para el clima extremo de Sonora, con el mejor equipo del mercado."
      />

      <section className="py-20 md:py-28" data-testid="products-detail">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-square">
              <img src={IMG.panel} alt="Panel solar premium" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Equipo de calidad"
              title={<>Hecho para durar<br />bajo el sol de Sonora</>}
              subtitle="Cada sistema se diseña con componentes de grado industrial capaces de soportar más de 45°C, tolvaneras y la máxima radiación solar de la región."
            />
            <ul className="mt-8 space-y-4">
              {SPECS.map((s, i) => (
                <Reveal key={s} delay={i * 0.06}>
                  <li className="flex items-start gap-3" data-testid="product-spec">
                    <span className="mt-1 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-brand-ink" strokeWidth={3} />
                    </span>
                    <span className="text-slate-700 font-medium">{s}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <SavingsCalculator />
      <Benefits />
      <Process />
      <Faq />
      <CtaBand />
    </>
  );
}
