import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MaskReveal, Reveal } from "@/components/Reveal";
import { IMG, STATS } from "@/lib/data";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section ref={ref} className="relative pt-32 md:pt-40 pb-16 overflow-hidden" data-testid="hero-section">
      <div className="absolute top-0 right-0 w-1/2 h-full grid-bg opacity-40 pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 text-brand-flare px-4 py-2 text-sm font-bold">
                ☀️ #1 en energía solar en Sonora
              </span>
            </Reveal>
            <h1 className="font-display font-black tracking-tighter uppercase text-slate-900 mt-6 text-5xl md:text-6xl lg:text-7xl leading-[0.92]">
              <MaskReveal delay={0.1}>Ahorra hasta</MaskReveal>
              <MaskReveal delay={0.22}><span className="text-brand-blue">98%</span> en tu</MaskReveal>
              <MaskReveal delay={0.34}>recibo de luz</MaskReveal>
            </h1>
            <Reveal delay={0.5}>
              <p className="text-lg md:text-xl text-slate-600 mt-7 max-w-xl leading-relaxed">
                Más de <strong className="text-slate-900">1,600 instalaciones</strong>, <strong className="text-slate-900">$300 millones</strong> ahorrados a nuestros clientes y <strong className="text-slate-900">43,000 toneladas</strong> de CO₂ evitadas. Con el sol de Sonora, tu inversión se paga sola.
              </p>
            </Reveal>
            <Reveal delay={0.6}>
              <div className="flex flex-wrap gap-4 mt-9">
                <Link to="/contacto" data-testid="hero-cta-cotiza" className="group inline-flex items-center gap-2 rounded-full bg-brand-blue text-white px-8 py-4 font-bold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-xl shadow-blue-600/25">
                  Solicita tu cotización gratis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/nosotros" data-testid="hero-cta-conocenos" className="inline-flex items-center rounded-full border border-slate-300 text-slate-900 px-8 py-4 font-bold hover:bg-slate-50 transition-colors">
                  Conócenos
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 relative">
            <Reveal delay={0.3}>
              <div className="relative clip-arch overflow-hidden aspect-[4/5] shadow-2xl">
                <motion.img
                  src={IMG.hero}
                  alt="Instalación de paneles solares en Hermosillo"
                  style={{ y: imgY, scale }}
                  className="w-full h-[115%] object-cover"
                />
              </div>
              <div className="absolute -left-4 md:-left-8 top-10 bg-white rounded-2xl shadow-xl px-5 py-4 border border-slate-100">
                <p className="font-display text-3xl font-black text-brand-blue leading-none">1,600+</p>
                <p className="text-xs text-slate-500 font-semibold mt-1">Instalaciones</p>
              </div>
              <div className="absolute -right-2 md:-right-6 bottom-16 bg-brand-ink text-white rounded-2xl shadow-xl px-5 py-4">
                <p className="font-display text-3xl font-black text-brand-flare leading-none">98%</p>
                <p className="text-xs text-slate-300 font-semibold mt-1">Ahorro máximo</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-slate-200">
            {STATS.map((s) => (
              <div key={s.label} data-testid="hero-stat">
                <p className="font-display text-3xl md:text-4xl font-black text-slate-900">{s.value}</p>
                <p className="text-sm text-slate-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
