import { CONTACT } from "@/lib/data";

export const WhatsAppButton = () => (
  <a
    href={CONTACT.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    data-testid="whatsapp-float-button"
    aria-label="Escríbenos por WhatsApp"
    className="fixed bottom-6 right-6 z-[60] flex items-center gap-3 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-2xl shadow-green-600/30 hover:scale-105 transition-transform duration-300 group"
  >
    <svg viewBox="0 0 32 32" className="w-6 h-6 fill-current" aria-hidden="true">
      <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.4.7 4.7 1.9 6.7L3 29l6.8-2.1c1.9 1 4 1.6 6.2 1.6 7 0 12.7-5.7 12.7-12.7S23 3 16 3zm0 23c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-4 1.2 1.2-3.9-.3-.4a10.3 10.3 0 01-1.6-5.5C5.6 10 10.3 5.3 16 5.3S26.4 10 26.4 15.7 21.7 26 16 26zm5.8-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-.9-.8-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/>
    </svg>
    <span className="hidden sm:block font-bold text-sm max-w-0 group-hover:max-w-[160px] overflow-hidden whitespace-nowrap transition-all duration-500">
      {CONTACT.whatsappDisplay}
    </span>
  </a>
);
