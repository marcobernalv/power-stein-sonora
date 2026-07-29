import { useState } from "react";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Clock } from "lucide-react";
import { submitLead } from "@/lib/api";
import { CONTACT } from "@/lib/data";

const CITIES = ["Hermosillo", "San Carlos", "Guaymas", "Nogales", "Ciudad Obregón", "Otra"];

export const LeadForm = ({ compact = false }) => {
  const [form, setForm] = useState({ nombre: "", telefono: "", ciudad: "Hermosillo", recibo: "", email: "", mensaje: "" });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.telefono || !form.recibo) {
      toast.error("Por favor completa nombre, teléfono y tu pago de luz.");
      return;
    }
    setLoading(true);

    const lines = [
      "*Nombre:*", form.nombre,
      "", "*Teléfono / WhatsApp:*", form.telefono,
      "", "*Ciudad:*", form.ciudad,
      "", "*¿Cuánto pagas de luz al mes?:*", form.recibo,
    ];
    if (form.email && form.email.trim()) {
      lines.push("", "*Correo (opcional):*", form.email.trim());
    }
    const waUrl = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(waUrl, "_blank");

    try {
      await submitLead({ ...form, origen: "Formulario de contacto" });
      setDone(true);
      toast.success("¡Solicitud enviada! Te contactamos en menos de 24 horas.");
    } catch (err) {
      setDone(true);
      toast.success("Abrimos WhatsApp para enviar tu cotización.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center border border-slate-100 shadow-xl" data-testid="lead-success">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
        <h3 className="font-display text-3xl font-bold mt-6 text-slate-900">¡Gracias, {form.nombre.split(" ")[0]}!</h3>
        <p className="text-slate-600 mt-3">Recibimos tu solicitud. Uno de nuestros asesores te contactará en menos de 24 horas con tu cotización personalizada.</p>
      </div>
    );
  }

  const inputCls = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all";

  return (
    <form onSubmit={onSubmit} data-testid="lead-form" className="bg-white rounded-3xl p-7 md:p-9 border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="inline-flex items-center gap-2 bg-orange-50 text-brand-flare rounded-full px-4 py-2 text-sm font-bold mb-6">
        <Clock className="w-4 h-4" /> Recibe tu cotización en menos de 24 horas
      </div>
      <div className={`grid gap-4 ${compact ? "" : "md:grid-cols-2"}`}>
        <div>
          <label className="text-sm font-bold text-slate-700 mb-1.5 block">Nombre*</label>
          <input data-testid="lead-nombre" value={form.nombre} onChange={update("nombre")} placeholder="Tu nombre completo" className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-bold text-slate-700 mb-1.5 block">Teléfono / WhatsApp*</label>
          <input data-testid="lead-telefono" value={form.telefono} onChange={update("telefono")} placeholder="662 000 0000" className={inputCls} />
        </div>
        <div>
          <label className="text-sm font-bold text-slate-700 mb-1.5 block">Ciudad</label>
          <select data-testid="lead-ciudad" value={form.ciudad} onChange={update("ciudad")} className={inputCls}>
            {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="text-sm font-bold text-slate-700 mb-1.5 block">¿Cuánto pagas de luz al mes?*</label>
          <input data-testid="lead-recibo" value={form.recibo} onChange={update("recibo")} placeholder="Ej. 3,500" className={inputCls} />
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <label className="text-sm font-bold text-slate-700 mb-1.5 block">Correo (opcional)</label>
          <input data-testid="lead-email" type="email" value={form.email} onChange={update("email")} placeholder="tucorreo@ejemplo.com" className={inputCls} />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        data-testid="lead-submit"
        className="mt-6 w-full inline-flex justify-center items-center gap-2 rounded-full bg-brand-blue text-white px-8 py-4 font-bold text-lg hover:bg-blue-700 hover:scale-[1.01] transition-all duration-300 shadow-lg shadow-blue-600/25 disabled:opacity-60"
      >
        {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</> : "Solicita tu cotización gratis"}
      </button>
      <p className="text-center text-slate-400 text-xs mt-4">Al enviar aceptas ser contactado por Power Stein Sonora. Tus datos están protegidos.</p>
    </form>
  );
};
