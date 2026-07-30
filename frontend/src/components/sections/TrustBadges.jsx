import { Star, ShieldCheck, Award, Clock3 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TRUST, BRANDS } from "@/lib/data";

const ICONS = [ShieldCheck, Award, Star, Clock3];

export const TrustBadges = () => (
  <section className="py-20 md:py-28 bg-brand-light" data-testid="trust-section">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12">
      <Reveal className="text-center">
        <span className="text-sm uppercase tracking-[0.2em] font-bold text-brand-flare">Confianza comprobada</span>
        <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight text-slate-900 mt-3">
          Respaldados por resultados reales
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {TRUST.map((t, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={t.title} delay={i * 0.08}>
              <div data-testid="trust-badge" className="bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <Icon className="w-10 h-10 text-brand-green mx-auto" />
                <p className="font-display text-xl font-bold text-slate-900 mt-4">{t.title}</p>
                <p className="text-slate-500 text-sm mt-1">{t.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-16">
          <p className="text-center text-sm uppercase tracking-[0.2em] font-bold text-slate-400 mb-8">Marcas que instalamos</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {BRANDS.map((b) => (
              <span key={b} className="font-display text-xl md:text-2xl font-bold text-slate-400 hover:text-slate-800 transition-colors">{b}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
