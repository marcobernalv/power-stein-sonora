import { PageHero } from "@/components/PageHero";
import { CasesGrid } from "@/components/sections/CasesGrid";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/Reveal";
import { STATS } from "@/lib/data";

export default function SuccessCases() {
  return (
    <>
      <PageHero
        eyebrow="Casos de Éxito"
        title="Ahorros que hablan solos"
        subtitle="Cientos de familias y negocios de Sonora ya dejaron de pagar recibos altos. Estos son algunos de sus resultados reales."
      />

      <section className="py-16" data-testid="cases-stats">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center bg-brand-light rounded-3xl py-8 border border-slate-100">
                <p className="font-display text-4xl font-black text-brand-flare">{s.value}</p>
                <p className="text-sm text-slate-500 mt-2">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-20 md:pb-28" data-testid="cases-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <CasesGrid />
        </div>
      </section>

      <TrustBadges />
      <CtaBand />
    </>
  );
}
