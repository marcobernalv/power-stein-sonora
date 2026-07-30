import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { CONTACT } from "@/lib/data";
import { Logo } from "@/components/Logo";

const NAV = [
  { to: "/nosotros", label: "Nosotros" },
  { to: "/paneles-solares", label: "Paneles Solares" },
  { to: "/casos-de-exito", label: "Casos de Éxito" },
  { to: "/contacto", label: "Contacto" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/85 backdrop-blur-xl border-b border-slate-100 shadow-sm" : "bg-white/70 backdrop-blur-md"}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-24">
        <Link to="/" data-testid="logo-link" aria-label="Power Stein Sonora inicio">
          <Logo className="h-16 w-56 md:w-64" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              data-testid={`nav-${n.to.replace("/", "")}`}
              className={({ isActive }) =>
                `text-[15px] font-semibold transition-colors relative py-1 ${isActive ? "text-brand-blue" : "text-slate-700 hover:text-brand-blue"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={`tel:+52${CONTACT.whatsapp}`} data-testid="header-phone" className="hidden xl:flex items-center gap-2 text-slate-800 font-bold text-sm">
            <Phone className="w-4 h-4 text-brand-flare" />
            {CONTACT.whatsappDisplay}
          </a>
          <Link
            to="/contacto"
            data-testid="header-cta-cotiza"
            className="hidden sm:inline-flex rounded-full bg-brand-blue text-white px-6 py-3 font-bold text-sm hover:bg-blue-700 hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-blue-600/20"
          >
            Cotiza Gratis
          </Link>
          <button
            data-testid="mobile-menu-toggle"
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col gap-4" data-testid="mobile-menu">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} className="text-lg font-semibold text-slate-800" data-testid={`mobile-nav-${n.to.replace("/", "")}`}>
              {n.label}
            </NavLink>
          ))}
          <Link to="/contacto" className="mt-2 rounded-full bg-brand-blue text-white px-6 py-3 font-bold text-center" data-testid="mobile-cta-cotiza">
            Cotiza Gratis
          </Link>
        </div>
      )}
    </header>
  );
};
