import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { Logo } from "@/components/Logo";

export const Footer = () => (
  <footer className="bg-brand-ink text-white" data-testid="site-footer">
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16 md:py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <Logo className="h-20 w-72" />
        <p className="mt-5 text-slate-400 text-sm leading-relaxed max-w-xs">
          Energía solar de nivel premium en Hermosillo y Sonora. Ahorra hasta 98% en tu recibo de CFE.
        </p>
      </div>

      <div>
        <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-slate-500 mb-5">Navegación</h4>
        <ul className="space-y-3 text-slate-300">
          {[["Nosotros","/nosotros"],["Paneles Solares","/paneles-solares"],["Casos de Éxito","/casos-de-exito"],["Contacto","/contacto"]].map(([l,to]) => (
            <li key={to}><Link to={to} className="hover:text-brand-green transition-colors" data-testid={`footer-nav-${to.replace("/","")}`}>{l}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-slate-500 mb-5">Contacto</h4>
        <ul className="space-y-4 text-slate-300 text-sm">
          <li className="flex gap-3"><MapPin className="w-5 h-5 text-brand-green shrink-0" /> {CONTACT.address}</li>
          <li className="flex gap-3"><Phone className="w-5 h-5 text-brand-green shrink-0" /> <a href="tel:+526624332313" className="hover:text-brand-green transition-colors">{CONTACT.phone}</a></li>
          <li className="flex gap-3"><Mail className="w-5 h-5 text-brand-green shrink-0" /> <a href={`mailto:${CONTACT.email}`} data-testid="footer-email" className="underline underline-offset-4 hover:text-brand-green transition-colors">{CONTACT.email}</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-bold text-sm uppercase tracking-[0.2em] text-slate-500 mb-5">Síguenos</h4>
        <div className="flex gap-3">
          <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" data-testid="footer-facebook" aria-label="Facebook" className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram" aria-label="Instagram" className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:bg-brand-green hover:border-brand-green hover:text-brand-ink transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
        <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex mt-6 rounded-full bg-brand-green text-brand-ink px-6 py-3 font-bold text-sm hover:brightness-95 transition-all" data-testid="footer-cta-cotiza">
          Cotiza Gratis
        </a>
      </div>
    </div>
    <div className="border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between gap-3 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Power Stein Sonora. Todos los derechos reservados.</p>
        <Link to="/aviso-de-privacidad" className="hover:text-slate-300 transition-colors" data-testid="footer-privacy">Aviso de Privacidad</Link>
      </div>
    </div>
  </footer>
);
