# Power Stein Sonora — Sitio Web de Conversión de Leads

## Problem Statement (original)
Sitio web moderno, nivel agencia premium, para empresa de instalación de paneles solares en Hermosillo, Sonora. Objetivo: convertir visitantes en leads (cotizaciones). Multipágina con React Router (no scroll infinito), diseño mobile-first, colores de energía solar (azul eléctrico, naranja solar, blanco). Botón WhatsApp flotante global y CTA "Cotiza Gratis" en todas las páginas.

## Architecture
- **Frontend**: React 19 + React Router 7 (multipágina), Tailwind, framer-motion (reveals/parallax/transiciones), Lenis (smooth scroll), shadcn/ui (Slider, Accordion), sonner (toasts).
- **Backend**: FastAPI + MongoDB. Endpoint de leads con notificación por email vía Resend (Emergent managed).
- **Integración email**: POST /api/leads → guarda lead en Mongo + envía correo a ventas@powersteinsonora.com.

## Rutas / Páginas
- `/` Home (resumen de todas las secciones + "Ver más")
- `/nosotros` About (trayectoria 2008/2014, misión, cobertura, marcas)
- `/paneles-solares` Products (specs, calculadora, beneficios, proceso, FAQ)
- `/casos-de-exito` SuccessCases (4 casos con fotos + stats + confianza)
- `/contacto` Contact (formulario de cotización + datos de contacto + FAQ)
- `/aviso-de-privacidad` Privacy

## Implemented (2026-06-28)
- Header fijo con logo, menú, teléfono, CTA "Cotiza Gratis" y menú móvil.
- Hero kinético (masked line reveal, parallax en imagen, badges flotantes, stats).
- Calculadora de ahorro interactiva (slider + contadores animados mensual/anual/25 años).
- Beneficios (6 tarjetas con iconos lucide), Proceso (timeline 4 pasos con línea animada).
- Casos de éxito (tarjetas con fotos AI + % ahorro), Sellos de confianza + marcas, FAQ acordeón (6).
- Formulario de lead (nombre, teléfono, ciudad, recibo, email) → Mongo + email. Estado de éxito.
- Botón WhatsApp flotante global (662 433 2313), Footer completo con aviso de privacidad.
- 7 imágenes premium generadas por IA (instalaciones reales estilo Sonora).

## Verified
- Backend `/api/leads` POST/GET (curl + submit UI real → 2 leads en DB, email_sent=true).
- Home, Contacto, Casos de Éxito renderizados; navegación multipágina y colores de marca OK.

## Backlog / Next
- P1: Panel admin para ver leads (actualmente solo email + DB).
- P2: Integrar reseñas reales de Google (API), reemplazar fotos AI por fotos propias cuando el cliente las envíe.
- P2: Analítica/pixel para medir conversión de CTAs.

## Notes
- Sin autenticación (sitio público). No hay credenciales de prueba.
- Email destino configurable en backend/.env (LEAD_NOTIFICATION_EMAIL).
