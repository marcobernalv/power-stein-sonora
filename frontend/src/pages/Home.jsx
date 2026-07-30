import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { Benefits } from "@/components/sections/Benefits";
import { Process } from "@/components/sections/Process";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Faq } from "@/components/sections/Faq";
import { CasesGrid } from "@/components/sections/CasesGrid";
import { CtaBand } from "@/components/CtaBand";
import { Marquee } from "@/components/Marquee";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { IMG } from "@/lib/data";

const VerMas = ({ to, label, testid }) => (
  <Link to={to} data-testid={testid} className="group inline-flex items-center gap-2 font-bold text-brand-flare hover:gap-3 transition-all">
    {label} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Link>
);

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["Ahorra 98%", "1,600+ Instalaciones", "Deducible de Impuestos", "Garantía 25 Años", "Energía Limpia"]} />
      <SavingsCalculator />
      <Benefits />
      <Process />

      {/* About preview */}
      <section className="py-20 md:py-32 bg-brand-light" data-testid="about-preview">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={IMG.team} alt="Equipo Power Stein Sonora" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <div>
            <SectionHeader
              eyebrow="Sobre nosotros"
              title={<>Expertos solares<br />desde 2008</>}
              subtitle="Somos una empresa sonorense con más de 15 años de trayectoria. Desde 2014 operamos en Hermosillo, dando servicio en Hermosillo, San Carlos y alrededores. Nuestra misión: hacer que cada hogar y negocio deje de rentarle su dinero a CFE."
            />
            <div className="mt-8"><VerMas to="/nosotros" label="Conoce nuestra historia" testid="home-vermas-nosotros" /></div>
          </div>
        </div>
      </section>

      {/* Cases preview */}
      <section className="py-20 md:py-32" data-testid="cases-preview">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
            <SectionHeader eyebrow="Casos de éxito" title={<>Resultados reales<br />en Sonora</>} />
            <VerMas to="/casos-de-exito" label="Ver más casos" testid="home-vermas-casos" />
          </div>
          <CasesGrid limit={2} />
        </div>
      </section>

      <TrustBadges />
      <Faq />
      <CtaBand />
    </>
  );
}
