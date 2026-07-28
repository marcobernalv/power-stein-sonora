import { Receipt, Leaf, ShieldCheck, TrendingDown, Activity, Home } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import { BENEFITS } from "@/lib/data";

const ICONS = { Receipt, Leaf, ShieldCheck, TrendingDown, Activity, Home };

export const Benefits = () => (
  <section className="bg-brand-light py-20 md:py-32" data-testid="benefits-section">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <SectionHeader
        eyebrow="Por qué invertir"
        title={<>Razones para dar el<br /><span className="text-brand-blue">salto solar</span></>}
        subtitle="No es un gasto, es la mejor inversión para tu hogar o negocio en Sonora. Estos son los beneficios que te esperan."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-14">
        {BENEFITS.map((b, i) => {
          const Icon = ICONS[b.icon];
          return (
            <Reveal key={b.title} delay={i * 0.08}>
              <div data-testid="benefit-card" className="group bg-white border border-slate-100 rounded-3xl p-8 h-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-6">{b.title}</h3>
                <p className="text-slate-600 mt-3 leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
