import { Reveal } from "@/components/Reveal";
import { CASES } from "@/lib/data";

export const CasesGrid = ({ limit }) => {
  const items = limit ? CASES.slice(0, limit) : CASES;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-testid="cases-grid">
      {items.map((c, i) => (
        <Reveal key={c.zona} delay={i * 0.1}>
          <article data-testid="case-card" className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-[420px]">
            <img src={c.img} alt={`Instalación en ${c.zona}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute top-6 right-6 bg-brand-flare text-white rounded-2xl px-4 py-3 text-center shadow-lg">
              <p className="font-display text-2xl font-black leading-none">{c.ahorro}</p>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-0.5">de ahorro</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="text-sm font-bold text-brand-flare uppercase tracking-wider">{c.zona}</p>
              <p className="text-slate-200 mt-2">{c.desc}</p>
              <p className="mt-3 text-sm text-slate-300">Antes pagaba <span className="line-through">{c.antes}</span></p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
};
