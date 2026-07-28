import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, Zap } from "lucide-react";

const fmt = (n) => "$" + Math.round(n).toLocaleString("es-MX");

const AnimatedNumber = ({ value }) => {
  const [display, setDisplay] = useState(value);
  const ref = useRef(value);
  useEffect(() => {
    const start = ref.current;
    const end = value;
    const dur = 600;
    let startTime;
    let frame;
    const step = (t) => {
      if (!startTime) startTime = t;
      const p = Math.min((t - startTime) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(start + (end - start) * eased);
      if (p < 1) frame = requestAnimationFrame(step);
      else ref.current = end;
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return <span>{fmt(display)}</span>;
};

export const SavingsCalculator = () => {
  const [bill, setBill] = useState([3500]);
  const monthly = bill[0] * 0.9;
  const yearly = monthly * 12;
  const twentyFive = yearly * 25;

  return (
    <section className="bg-brand-ink text-white relative overflow-hidden" data-testid="savings-calculator">
      <div className="absolute inset-0 grid-bg opacity-[0.15]" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-blue/30 blur-[120px]" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-brand-flare/20 blur-[120px]" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-bold text-brand-flare">
              <Zap className="w-4 h-4" /> Calculadora de ahorro
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter mt-4 leading-[0.95]">
              ¿Cuánto pagas<br />de luz al mes?
            </h2>
            <p className="text-slate-400 mt-6 text-lg max-w-md">
              Mueve el control y descubre en tiempo real cuánto podrías ahorrar con energía solar.
            </p>

            <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <div className="flex justify-between items-end mb-6">
                <span className="text-slate-400 text-sm uppercase tracking-wider font-bold">Tu recibo mensual</span>
                <span className="font-display text-3xl font-extrabold text-white" data-testid="calc-bill-value">{fmt(bill[0])}</span>
              </div>
              <Slider
                value={bill}
                onValueChange={setBill}
                min={500}
                max={60000}
                step={100}
                data-testid="calc-slider"
                className="py-2"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-3">
                <span>$500</span><span>$60,000</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-white/[0.08] to-transparent border border-white/10 rounded-[2rem] p-8 md:p-12">
            <div className="flex items-center gap-2 text-brand-flare font-bold mb-8">
              <TrendingUp className="w-5 h-5" /> Tu ahorro estimado
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Al mes</p>
                <p className="font-display text-5xl md:text-6xl font-black text-white leading-none mt-1" data-testid="calc-monthly">
                  <AnimatedNumber value={monthly} />
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider">Al año</p>
                <p className="font-display text-5xl md:text-6xl font-black text-brand-flare leading-none mt-1" data-testid="calc-yearly">
                  <AnimatedNumber value={yearly} />
                </p>
              </div>
              <div className="h-px bg-white/10" />
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider">En 25 años</p>
                <p className="font-display text-4xl md:text-5xl font-black text-brand-blue leading-none mt-1" data-testid="calc-lifetime">
                  <AnimatedNumber value={twentyFive} />
                </p>
              </div>
            </div>
            <Link
              to="/contacto"
              data-testid="calc-cta"
              className="mt-10 w-full inline-flex justify-center rounded-full bg-brand-flare text-white px-8 py-4 font-bold hover:bg-orange-600 hover:scale-[1.02] transition-all duration-300"
            >
              Agenda tu cotización personalizada
            </Link>
            <p className="text-center text-slate-500 text-xs mt-4">*Estimado con ahorro promedio del 90%. Tu ahorro real puede llegar al 98%.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
