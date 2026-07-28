import { MaskReveal, Reveal } from "@/components/Reveal";

export const PageHero = ({ eyebrow, title, subtitle }) => (
  <section className="relative pt-36 md:pt-44 pb-14 md:pb-20 bg-brand-light overflow-hidden" data-testid="page-hero">
    <div className="absolute top-0 right-0 w-1/3 h-full grid-bg opacity-40" />
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative">
      <Reveal>
        <span className="text-sm uppercase tracking-[0.2em] font-bold text-brand-blue">{eyebrow}</span>
      </Reveal>
      <h1 className="font-display font-black tracking-tighter uppercase text-slate-900 mt-4 text-4xl md:text-6xl lg:text-7xl leading-[0.92]">
        <MaskReveal delay={0.1}>{title}</MaskReveal>
      </h1>
      {subtitle && (
        <Reveal delay={0.3}>
          <p className="text-lg md:text-xl text-slate-600 mt-6 max-w-2xl">{subtitle}</p>
        </Reveal>
      )}
    </div>
  </section>
);
