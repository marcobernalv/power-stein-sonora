import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";

export const CtaBand = () => (
  <section className="bg-brand-ink relative overflow-hidden" data-testid="cta-band">
    <div className="absolute inset-0 grid-bg opacity-[0.12]" />
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-green/20 blur-[120px]" />
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28 relative">
      <Reveal className="max-w-3xl">
        <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-brand-green">
          <span className="w-2.5 h-2.5 rounded-sm bg-brand-green inline-block" /> Sin costo · Sin compromiso
        </span>
        <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-white mt-4 leading-[0.95]">
          Cotiza tu proyecto.<br /> Respuesta en menos de <span className="text-brand-green">24 horas.</span>
        </h2>
        <p className="text-slate-300 text-lg mt-6 max-w-xl">
          Deja de rentarle tu dinero a CFE. Descubre cuánto puedes ahorrar con un sistema solar diseñado para tu consumo.
        </p>
        <div className="flex flex-wrap gap-4 mt-9">
          <Link to="/contacto" data-testid="ctaband-cotiza" className="rounded-full bg-brand-green text-brand-ink px-8 py-4 font-bold hover:brightness-95 transition-all duration-300">
            Solicita tu cotización gratis
          </Link>
          <Link to="/paneles-solares" data-testid="ctaband-conocenos" className="rounded-full border border-white/40 text-white px-8 py-4 font-bold hover:bg-white/10 transition-colors">
            Ver soluciones
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);
