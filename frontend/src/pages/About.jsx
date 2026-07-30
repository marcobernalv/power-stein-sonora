import { MapPin, Target, Calendar, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { CtaBand } from "@/components/CtaBand";
import { BRANDS, IMG } from "@/lib/data";

const TIMELINE = [
  { year: "2008", icon: Calendar, title: "Nace Power Stein", text: "Comenzamos con la visión de democratizar la energía solar en el noroeste de México." },
  { year: "2014", icon: MapPin, title: "Llegamos a Hermosillo", text: "Abrimos oficinas en la capital de Sonora para atender la creciente demanda de ahorro." },
  { year: "Hoy", icon: Users, title: "1,600+ instalaciones", text: "Somos referentes en energía solar residencial y comercial en todo el estado." },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Energía que nace en Sonora"
        subtitle="Somos una empresa sonorense con más de 15 años transformando la manera en que los hogares y negocios consumen energía."
      />

      <section className="py-20 md:py-28" data-testid="about-intro">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={IMG.family} alt="Familia sonorense" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Nuestra misión"
              title={<>Que dejes de rentarle<br />tu dinero a CFE</>}
              subtitle="Establecidos desde 2008 y con oficinas en Hermosillo desde 2014, nuestra misión es simple: llevar energía solar de la más alta calidad a cada techo de Sonora, con un servicio honesto, ingeniería de precisión y un ahorro real y comprobable."
            />
            <div className="flex items-center gap-3 mt-8 text-slate-700">
              <MapPin className="w-6 h-6 text-brand-flare" />
              <span className="font-semibold">Cobertura: Hermosillo, San Carlos y alrededores</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-light" data-testid="about-timeline">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <SectionHeader eyebrow="Trayectoria" title="Nuestra historia" align="center" />
          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {TIMELINE.map((t, i) => {
              const Icon = t.icon;
              return (
                <Reveal key={t.year} delay={i * 0.1}>
                  <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm h-full">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-brand-flare" />
                      </div>
                      <span className="font-display text-3xl font-black text-slate-200">{t.year}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-slate-900 mt-6">{t.title}</h3>
                    <p className="text-slate-600 mt-2 leading-relaxed">{t.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" data-testid="about-brands">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-brand-flare/10 items-center justify-center mx-auto">
            <Target className="w-8 h-8 text-brand-flare" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight text-slate-900 mt-6">Marcas de paneles que instalamos</h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Trabajamos únicamente con equipo Tier 1 y marcas líderes a nivel mundial, respaldadas por garantías de hasta 25 años.</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 mt-12">
            {BRANDS.map((b) => (
              <span key={b} className="font-display text-xl md:text-2xl font-bold text-slate-400 hover:text-slate-800 transition-colors">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
