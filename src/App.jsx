import { useState, useEffect, useRef } from "react";
import tsoftwareLogo from "./assets/tsoftware-logo.jpeg";
import heroCarousel2 from "./assets/hero-carousel-2.jpg";
import heroCarousel3 from "./assets/hero-carousel-3.jpeg";
import heroCarouselMobile from "./assets/hero-carousel-mobile.jpeg";
import heroCarouselOfficeDesktop from "./assets/hero-carousel-office-desktop.jpeg";
import heroAgencyOffice from "./assets/hero-agency-office.jpeg";
import heroDeviceShowcaseDesktop from "./assets/hero-device-showcase-desktop.jpeg";
import heroMonitorDesktop from "./assets/hero-monitor-desktop.jpeg";
import heroDeviceMobile from "./assets/hero-device-mobile.jpeg";
import logoLight from "./assets/logo-light.jpeg";

const Logo = ({
  src = tsoftwareLogo,
  size = 32,
  objectPosition = "center 65%",
  objectFit = "cover",
  transform = "none",
  borderRadius = "50%",
}) => {
  return (
    <img
      src={src}
      alt="Logo TSoftware"
      style={{
        width: size,
        height: size,
        objectFit,
        objectPosition,
        transform,
        transformOrigin: "center",
        borderRadius,
        display: "block",
      }}
    />
  );
};

const ICON_PATHS = {
  calculator: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-5.97 4.06L14.09 6l1.41 1.41L16.91 6l1.06 1.06-1.41 1.41 1.41 1.41-1.06 1.06-1.41-1.4-1.41 1.41-1.06-1.06 1.41-1.41ZM6.25 7.72h5v1.5h-5Zm5.25 8.28h-2v2H8v-2H6v-1.5h2v-2h1.5v2h2Zm6.5 1.25h-5v-1.5h5Zm0-2.5h-5v-1.5h5Z",
  code: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4Zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4Z",
  landing: "M21 5v6.5H9.33V5h11.67Zm-6.33 14v-6.5H9.33V19h5.34Zm1-6.5V19H21v-6.5h-5.33ZM8.33 19V5H3v14h5.33Z",
  web: "M14 2H4c-1.11 0-2 .9-2 2v10h2V4h10V2Zm4 4H8c-1.11 0-2 .9-2 2v10h2V8h10V6Zm2 4h-8c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2Z",
  systems: "M22 11V3h-7v3H9V3H2v8h7V8h2v8H9v-3H2v8h7v-3h6v3h7v-8h-7v3h-2V8h2v3h7Z",
  grid: "M3 3v8h8V3H3Zm6 6H5V5h4v4Zm-6 4v8h8v-8H3Zm6 6H5v-4h4v4Zm4-16v8h8V3h-8Zm6 6h-4V5h4v4Zm-6 4v8h8v-8h-8Zm6 6h-4v-4h4v4Z",
  whatsapp: "M12.04 2C6.57 2 2.12 6.42 2.12 11.85c0 1.87.53 3.63 1.45 5.12L2 22l5.18-1.52a9.96 9.96 0 0 0 4.86 1.25c5.47 0 9.92-4.42 9.92-9.88S17.51 2 12.04 2Zm5.79 14.06c-.24.67-1.39 1.29-1.94 1.34-.5.05-1.13.07-1.82-.11-.42-.11-.96-.31-1.65-.6-2.9-1.25-4.79-4.15-4.94-4.34-.14-.19-1.18-1.57-1.18-3 0-1.43.75-2.13 1.02-2.42.27-.29.59-.36.78-.36h.56c.18.01.42-.07.66.5.24.58.82 2.01.89 2.16.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.3.38-.43.5-.14.14-.29.29-.12.58.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.45.29.14.46.12.62-.07.19-.22.72-.84.91-1.13.19-.29.38-.24.65-.14.26.1 1.68.79 1.97.94.29.14.48.22.55.34.07.12.07.7-.17 1.37Z",
  analytics: "M5 9.2h3V20H5V9.2Zm5.5-5.2h3v16h-3V4Zm5.5 8h3v8h-3v-8Z",
  copy: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1Zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm-1 12H9v-2h9v2Zm0-4H9v-2h9v2Z",
  video: "M17 10.5V6c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-4.5l4 4v-11l-4 4Z",
  booking: "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 16H5V8h14v11Zm-7-2 5-5-1.41-1.41L12 14.17l-1.59-1.58L9 14l3 3Z",
  languages: "M12.87 15.07 10.33 12.56l.03-.03A17.52 17.52 0 0 0 14.07 6H17V4h-7V2H8v2H1v2h11.17A15.7 15.7 0 0 1 9 11.35 15.44 15.44 0 0 1 6.69 8h-2c.65 1.46 1.55 2.84 2.67 4.06l-5.09 5.02L3.69 18.5 9 13.18l3.31 3.31.56-1.42ZM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12Zm-2.62 7 1.62-4.33L19.12 17h-3.24Z",
  search: "M9.5 3a6.5 6.5 0 0 1 5.15 10.46l4.45 4.44-1.2 1.2-4.44-4.45A6.5 6.5 0 1 1 9.5 3Zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z",
  speed: "M20.38 8.57a9 9 0 0 0-16.76 0A8.92 8.92 0 0 0 3 12c0 2.12.74 4.07 1.97 5.61.38.47 1.08.5 1.5.08l.02-.02c.35-.35.38-.9.07-1.29A6.96 6.96 0 0 1 5 12c0-3.86 3.14-7 7-7s7 3.14 7 7c0 1.63-.56 3.13-1.5 4.32-.31.39-.28.94.07 1.29.43.43 1.13.4 1.51-.08A8.94 8.94 0 0 0 21 12c0-1.2-.23-2.36-.62-3.43ZM11 6v6.59l-2.24 2.24 1.41 1.41 2.83-2.83V6h-2Z",
  responsive: "M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Zm0 17H7V4h10v14Zm-3 3h-4v-1h4v1Z",
  support: "M12 1a9 9 0 0 0-9 9v7c0 1.1.9 2 2 2h3v-8H5v-1a7 7 0 0 1 14 0v1h-3v8h3v1h-7v2h7c1.1 0 2-.9 2-2V10a9 9 0 0 0-9-9Z",
  automation: "M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.6-.22l-2.49 1a7.2 7.2 0 0 0-1.69-.98L14.5 2.42A.49.49 0 0 0 14 2h-4a.49.49 0 0 0-.5.42L9.12 5.07c-.61.24-1.18.56-1.69.98l-2.49-1a.5.5 0 0 0-.6.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.05.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46c.13.22.39.31.6.22l2.49-1c.51.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.24 1.18-.57 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46a.5.5 0 0 0-.12-.64l-2.11-1.65ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z",
  verified: "M11.19 1.36 4.19 4.47C3.47 4.79 3 5.51 3 6.3V11c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6.3c0-.79-.47-1.51-1.19-1.83l-7-3.11a2 2 0 0 0-1.62 0Zm-1.9 14.93L6.7 13.7a1 1 0 0 1 1.41-1.41L10 14.17l5.88-5.88a1 1 0 0 1 1.41 1.41l-6.59 6.59a1 1 0 0 1-1.41 0Z",
  launch: "M12 2.5c2.76 0 5 2.24 5 5 0 1.75-.91 3.3-2.28 4.18L16 19l-4-2-4 2 1.28-7.32A4.98 4.98 0 0 1 7 7.5c0-2.76 2.24-5 5-5Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z",
  help: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 17a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 19Zm1.2-4.75h-2v-.6c0-1.1.6-1.72 1.45-2.3.78-.53 1.35-.96 1.35-1.85 0-.95-.75-1.55-1.82-1.55-1.04 0-1.78.55-2.18 1.48L8.2 8.7C8.85 7.1 10.27 6 12.25 6 14.58 6 16 7.36 16 9.35c0 1.58-.88 2.35-1.88 3.02-.67.45-.92.78-.92 1.35v.53Z",
};

const SvgIcon = ({ name, size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d={ICON_PATHS[name]} />
  </svg>
);

const QuoteSelect = ({ value, placeholder, options, onChange }) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((option) => option.value === value);

  return (
    <div style={styles.quoteSelectWrap} className="quote-select-wrap">
      <button
        type="button"
        style={{ ...styles.quoteSelectButton, ...(open ? styles.quoteSelectButtonOpen : {}) }}
        className={`quote-select-button${open ? " quote-select-button-open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span style={styles.quoteSelectButtonMain}>
          {selected?.icon && (
            <span style={styles.quoteSelectButtonIcon} className="quote-select-button-icon">
              <SvgIcon name={selected.icon} size={18} />
            </span>
          )}
          <span style={styles.quoteSelectButtonCopy}>
            <strong>{selected?.label || placeholder}</strong>
            {selected?.sub && <small>{selected.sub}</small>}
          </span>
        </span>
        <span style={styles.quoteSelectCaret} className="quote-select-caret">⌄</span>
      </button>
      {open && (
        <div style={styles.quoteSelectMenu} className="quote-select-menu">
          <button
            type="button"
            style={{ ...styles.quoteSelectOption, ...styles.quoteSelectPlaceholderOption }}
            className="quote-select-option quote-select-option-placeholder"
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
          >
            <span style={styles.quoteSelectOptionCopy}>
              <strong>{placeholder}</strong>
            </span>
          </button>
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              style={{ ...styles.quoteSelectOption, ...(option.value === value ? styles.quoteSelectOptionActive : {}) }}
              className={`quote-select-option${option.value === value ? " quote-select-option-active" : ""}`}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.icon && (
                <span style={styles.quoteSelectOptionIcon} className="quote-select-option-icon">
                  <SvgIcon name={option.icon} size={18} />
                </span>
              )}
              <span style={styles.quoteSelectOptionCopy}>
                <strong>{option.label}</strong>
                {option.sub && <small>{option.sub}</small>}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Cotizador", href: "#cotizador", icon: "calculator" },
  { label: "Contacto", href: "#contacto" },
];

const DESKTOP_SERVICE_LINKS = [
  { label: "Landing Pages", href: "#landing-pages", icon: "landing", sub: "Campañas y captación de leads" },
  { label: "Webs Institucionales", href: "#webs-institucionales", icon: "web", sub: "Presencia profesional y confianza" },
  { label: "Sistemas a Medida", href: "#sistemas-a-medida", icon: "systems", sub: "Automatización y gestión interna" },
  { label: "Todos los servicios", href: "#servicios", icon: "grid", sub: "Ver la oferta completa", accent: true },
];

const MOBILE_SERVICE_LINKS = [
  { label: "Landing Pages", href: "#landing-pages", icon: "landing", sub: "Campañas y leads" },
  { label: "Webs Institucionales", href: "#webs-institucionales", icon: "web", sub: "Presencia profesional" },
  { label: "Sistemas a Medida", href: "#sistemas-a-medida", icon: "systems", sub: "Automatización interna" },
  { label: "Todos los servicios", href: "#servicios", icon: "grid", sub: "Oferta completa", accent: true },
  { label: "Cotizador", href: "#cotizador", icon: "calculator", sub: "Calculá tu inversión", accent: true },
];

const QUOTE_PROJECTS = {
  landing: {
    icon: "landing",
    label: "Landing Page",
    tagline: "Convierte visitantes en clientes",
    description: "Una página estratégica enfocada en captar consultas, presentar una oferta clara y convertir tráfico en oportunidades reales.",
    bestFor: ["Campañas publicitarias", "Lanzamientos", "Servicios puntuales", "Captación de leads"],
    plans: [
      {
        id: "basic",
        name: "Básico",
        subtitle: "Presencia simple y efectiva",
        price: 180000,
        delivery: "5-7 días hábiles",
        includes: ["Hasta 3 secciones", "Formulario de contacto", "Botón de WhatsApp", "Diseño responsive", "SEO básico"],
      },
      {
        id: "standard",
        name: "Estándar",
        subtitle: "Más contenido y optimización",
        price: 280000,
        delivery: "7-10 días hábiles",
        includes: ["Todo lo del plan Básico", "Hasta 6 secciones", "Animaciones sutiles", "SEO avanzado", "Integración con Analytics"],
      },
      {
        id: "premium",
        name: "Premium",
        subtitle: "Landing preparada para escalar",
        price: 420000,
        delivery: "10-14 días hábiles",
        includes: ["Todo lo del plan Estándar", "Copy orientado a conversión", "Pixel de Meta", "Optimización de velocidad", "5 rondas de revisión"],
      },
    ],
  },
  web: {
    icon: "web",
    label: "Web Completa / Institucional",
    tagline: "Tu empresa en internet, con todo lo que necesita",
    description: "Un sitio web completo para presentar tu empresa, servicios, historia y canales de contacto con una estructura profesional.",
    bestFor: ["Empresas consolidadas", "Profesionales", "Instituciones", "Comercios con varios servicios"],
    plans: [
      {
        id: "basic",
        name: "Básico",
        subtitle: "Sitio institucional inicial",
        price: 320000,
        delivery: "8-12 días hábiles",
        includes: ["Hasta 4 páginas", "Inicio, servicios, nosotros y contacto", "Formulario funcional", "Diseño responsive", "SEO básico"],
      },
      {
        id: "standard",
        name: "Estándar",
        subtitle: "Web completa para crecer",
        price: 520000,
        delivery: "12-18 días hábiles",
        includes: ["Todo lo del plan Básico", "Hasta 8 páginas", "Blog o novedades", "SEO avanzado", "Integración con herramientas"],
      },
      {
        id: "premium",
        name: "Premium",
        subtitle: "Solución institucional avanzada",
        price: 780000,
        delivery: "18-25 días hábiles",
        includes: ["Todo lo del plan Estándar", "Panel de contenidos", "Área privada simple", "SEO premium", "Soporte post-entrega"],
      },
    ],
  },
};

const QUOTE_ADDONS = {
  landing: [
    { id: "whatsapp", icon: "whatsapp", name: "Widget de WhatsApp", description: "Botón flotante para contacto directo.", price: 35000 },
    { id: "analytics", icon: "analytics", name: "Analytics + Pixel", description: "Medición de visitas y campañas.", price: 55000 },
    { id: "copy", icon: "copy", name: "Copywriting comercial", description: "Textos orientados a conversión.", price: 70000 },
    { id: "video", icon: "video", name: "Sección con video", description: "Integración de video provisto por el cliente.", price: 45000 },
  ],
  web: [
    { id: "blog", icon: "copy", name: "Blog / Novedades", description: "Sección administrable para contenidos.", price: 85000 },
    { id: "catalog", icon: "grid", name: "Catálogo de servicios", description: "Listado organizado de servicios o productos.", price: 95000 },
    { id: "booking", icon: "booking", name: "Turnos o reservas", description: "Formulario avanzado para coordinar citas.", price: 120000 },
    { id: "languages", icon: "languages", name: "Versión bilingüe", description: "Estructura para dos idiomas.", price: 140000 },
  ],
};

const QUOTE_MAINTENANCE = [
  { id: "none", name: "Sin mantenimiento", price: 0, description: "Te entregamos el proyecto finalizado con código y archivos listos." },
  { id: "basic", name: "Básico", price: 45000, description: "Actualizaciones menores, backups y soporte por email.", includes: ["Backups mensuales", "Ajustes menores", "Soporte por email"] },
  { id: "standard", name: "Estándar", price: 70000, description: "Mantenimiento activo con mejoras y soporte prioritario.", includes: ["Todo lo del plan Básico", "Actualizaciones de contenido", "Soporte por WhatsApp"] },
  { id: "premium", name: "Premium", price: 120000, description: "Soporte completo, mejoras continuas y seguimiento SEO.", includes: ["Todo lo del plan Estándar", "SEO mensual activo", "Soporte prioritario"] },
];

const SERVICES = [
  {
    icon: "landing",
    title: "Landing Pages",
    desc: "Páginas enfocadas en captar consultas, convertir visitas en clientes y acompañar campañas, anuncios o lanzamientos.",
  },
  {
    icon: "web",
    title: "Páginas Web Profesionales",
    desc: "Sitios institucionales modernos, responsive, con formularios, contenido claro y base SEO para aparecer mejor en Google.",
  },
  {
    icon: "systems",
    title: "Sistemas y CRM a Medida",
    desc: "Software para gestionar clientes, turnos, reservas, stock, ventas, equipos y procesos internos desde un solo lugar.",
  },
  {
    icon: "automation",
    title: "SEO, IA y Automatización",
    desc: "Optimizamos la presencia digital e integramos automatizaciones, chatbots e IA para que tu operación trabaje mejor.",
  },
];

const DIGITAL_SOLUTIONS = [
  {
    id: "landing-pages",
    icon: "landing",
    tag: "Captación",
    title: "Landing pages que convierten",
    desc: "Una página directa, rápida y persuasiva para presentar tu oferta, recibir consultas y medir resultados desde el primer día.",
    points: ["Diseño responsive", "Formulario o WhatsApp", "Estructura orientada a ventas"],
  },
  {
    id: "webs-institucionales",
    icon: "web",
    tag: "Presencia",
    title: "Webs institucionales",
    desc: "Una base digital sólida para mostrar quién sos, qué hacés y por qué confiar en tu negocio, con una experiencia clara en celular y escritorio.",
    points: ["Secciones completas", "SEO técnico inicial", "Carga rápida"],
  },
  {
    id: "sistemas-a-medida",
    icon: "systems",
    tag: "Operación",
    title: "Sistemas personalizados",
    desc: "Herramientas internas para ordenar procesos, ahorrar tiempo y reemplazar planillas o tareas manuales por software hecho para tu forma de trabajar.",
    points: ["CRM y paneles", "Reservas o turnos", "Roles y reportes"],
  },
];

const BENEFITS = [
  {
    icon: "speed",
    title: "Velocidad optimizada",
    desc: "Construimos experiencias livianas, rápidas y preparadas para usuarios que navegan desde cualquier dispositivo.",
  },
  {
    icon: "search",
    title: "SEO técnico incluido",
    desc: "Cuidamos estructura, etiquetas, performance y contenido base para que tu web tenga mejores señales para buscadores.",
  },
  {
    icon: "responsive",
    title: "100% responsive",
    desc: "Diseños adaptados a celular, tablet y escritorio, porque la mayoría de tus clientes te encuentra desde el teléfono.",
  },
  {
    icon: "support",
    title: "Soporte post-lanzamiento",
    desc: "Después de publicar, seguimos cerca para ajustes, mejoras y acompañamiento técnico sin vueltas.",
  },
];

const FAQS = [
  {
    icon: "help",
    question: "¿Qué puedo pedirles?",
    answer: "Una landing page, una web institucional, una tienda, un sistema interno, un CRM, automatizaciones o una integración con IA.",
  },
  {
    icon: "launch",
    question: "¿Trabajan con negocios que recién empiezan?",
    answer: "Sí. Podemos armar una primera versión simple y escalable, pensada para validar rápido sin gastar de más.",
  },
  {
    icon: "search",
    question: "¿La web queda lista para Google?",
    answer: "Incluimos una base técnica SEO: estructura clara, performance, textos ordenados, responsive y metadatos esenciales.",
  },
  {
    icon: "support",
    question: "¿Puedo pedir cambios después de lanzar?",
    answer: "Sí. El soporte post-entrega está incluido y también podemos coordinar mejoras continuas según lo que necesites.",
  },
];

const STATS = [
  { value: "100%", label: "Compromiso" },
  { value: "24/7", label: "Soporte post-entrega" },
  { value: "$0", label: "Primera consulta" },
];

const TESTIMONIALS = [
  {
    name: "Rodrigo M.",
    role: "Dueño de distribuidora",
    text: "T-Software nos armó un sistema de stock que nos ahorró 3 horas diarias. En serio, no lo puedo creer.",
  },
  {
    name: "Valentina C.",
    role: "Emprendedora digital",
    text: "Mi tienda online quedó exactamente como la imaginé. Profesionales de verdad, responden rápido y saben lo que hacen.",
  },
  {
    name: "Marcos T.",
    role: "Gerente de PYME",
    text: "Implementaron un chatbot con IA en nuestro WhatsApp y duplicamos la cantidad de consultas respondidas al día.",
  },
];

const PROCESS = [
  { num: "01", title: "Consulta gratuita", desc: "Nos contás tu idea o problema. Sin compromiso, sin costo." },
  { num: "02", title: "Propuesta a medida", desc: "En 72hs te enviamos un plan detallado con tiempos y precio." },
  { num: "03", title: "Desarrollo ágil", desc: "Trabajamos en fases con actualizaciones constantes." },
  { num: "04", title: "Entrega y soporte", desc: "Lanzamos el producto y te acompañamos 30 días post-entrega." },
];

const HERO_SLIDES = [heroDeviceShowcaseDesktop, heroCarousel2, heroCarousel3, heroCarouselOfficeDesktop];
const HERO_SLIDES_MOBILE = [heroDeviceMobile, heroMonitorDesktop, heroAgencyOffice, heroCarouselMobile, heroCarousel3];
const SHOW_TESTIMONIALS = false;

export default function TSoftware() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [activeService, setActiveService] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [quoteMode, setQuoteMode] = useState("quoter");
  const [quoteProject, setQuoteProject] = useState("");
  const [quotePlan, setQuotePlan] = useState("");
  const [quoteAddons, setQuoteAddons] = useState([]);
  const [quoteMaintenance, setQuoteMaintenance] = useState("none");
  const [quoteContact, setQuoteContact] = useState({ name: "", email: "", phone: "" });
  const [customForm, setCustomForm] = useState({ name: "", email: "", company: "", details: "" });
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth <= 768 : false));
  const heroRef = useRef(null);
  const currentHeroSlides = isMobile ? HERO_SLIDES_MOBILE : HERO_SLIDES;
  const getHeroImagePosition = (image) => {
    if (image !== heroAgencyOffice) {
      return "center";
    }

    return isMobile ? "center 54%" : "center 55%";
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      const nextIsMobile = window.innerWidth <= 768;
      setIsMobile((prevIsMobile) => {
        if (prevIsMobile !== nextIsMobile) {
          setActiveHeroSlide(0);
        }
        return nextIsMobile;
      });
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % currentHeroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [currentHeroSlides.length]);

  useEffect(() => {
    document.body.style.background = theme === "light" ? "#fff" : "#000";
    document.body.style.color = theme === "light" ? "#111" : "#fff";
  }, [theme]);

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll(".reveal, .reveal-item"));

    if (!("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    revealNodes.forEach((node, index) => {
      if (node.classList.contains("reveal-item")) {
        node.style.setProperty("--reveal-delay", `${Math.min(index % 8, 6) * 70}ms`);
      }
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, [quoteMode, quoteProject, quotePlan, quoteMaintenance]);

  const navBg = scrollY > 60;
  const navBackground = navBg ? (theme === "light" ? "rgba(255,255,255,0.92)" : "rgba(0,0,0,0.92)") : "transparent";
  const navBorder = navBg ? (theme === "light" ? "0.5px solid #e5e5e5" : "0.5px solid #1a1a1a") : "none";
  const formatPrice = (value) => value.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
  const selectedProject = quoteProject ? QUOTE_PROJECTS[quoteProject] : null;
  const selectedPlan = selectedProject?.plans.find((plan) => plan.id === quotePlan);
  const selectedAddons = quoteProject ? QUOTE_ADDONS[quoteProject].filter((addon) => quoteAddons.includes(addon.id)) : [];
  const selectedMaintenance = QUOTE_MAINTENANCE.find((item) => item.id === quoteMaintenance) || QUOTE_MAINTENANCE[0];
  const quoteProjectTotal = (selectedPlan?.price || 0) + selectedAddons.reduce((total, addon) => total + addon.price, 0);
  const hasQuote = Boolean(selectedProject && selectedPlan);
  const quoteMessage = hasQuote
    ? `Hola T-Software, quiero avanzar con esta cotización:
Proyecto: ${selectedProject.label}
Plan: ${selectedPlan.name} - ${formatPrice(selectedPlan.price)}
Extras: ${selectedAddons.length ? selectedAddons.map((addon) => addon.name).join(", ") : "Sin extras"}
Proyecto pago único: ${formatPrice(quoteProjectTotal)}
Mantenimiento: ${selectedMaintenance.price ? `${formatPrice(selectedMaintenance.price)}/mes` : "Sin mantenimiento"}
Nombre: ${quoteContact.name || "No informado"}
Email: ${quoteContact.email || "No informado"}
Teléfono: ${quoteContact.phone || "No informado"}`
    : "Hola T-Software, quiero cotizar mi proyecto digital.";
  const customMessage = `Hola T-Software, quiero cotizar un desarrollo a medida.
Nombre: ${customForm.name || "No informado"}
Email: ${customForm.email || "No informado"}
Empresa: ${customForm.company || "No informado"}
Detalle: ${customForm.details || "No informado"}`;
  const toggleAddon = (addonId) => {
    setQuoteAddons((prev) => (prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]));
  };

  return (
    <div style={styles.root} className={theme === "light" ? "light-mode" : ""}>
      <style>{css}</style>
      <div style={styles.pageGrid} className="page-grid" />
      <div style={styles.pageContent}>

      {/* NAV */}
      <nav
        style={{ ...styles.nav, background: navBackground, backdropFilter: navBg ? "blur(20px)" : "none", borderBottom: navBorder }}
        className={navBg ? "nav-scrolled" : ""}
      >
        <div style={styles.navInner} className="nav-inner">
          <div style={styles.navLogo}>
            <Logo size={36} src={theme === "light" ? logoLight : tsoftwareLogo} />
            <span style={styles.navBrand} className="nav-brand">T-SOFTWARE</span>
          </div>
          <div style={styles.navLinks} className="nav-links">
            {NAV_LINKS.map((l) => (
              l.label === "Servicios" ? (
                <div key={l.label} style={styles.navDropdownWrap} className="nav-dropdown-wrap">
                  <button
                    type="button"
                    style={styles.navDropdownButton}
                    className={`nav-link nav-dropdown-button${servicesMenuOpen ? " nav-dropdown-button-open" : ""}`}
                    onClick={() => setServicesMenuOpen((prev) => !prev)}
                    aria-expanded={servicesMenuOpen}
                    aria-controls="desktop-services-menu"
                  >
                    Servicios
                    <span style={styles.navDropdownChevron} className="nav-dropdown-chevron">⌄</span>
                  </button>
                  {servicesMenuOpen && (
                    <div id="desktop-services-menu" style={styles.navDropdownMenu} className="nav-dropdown-menu">
                      {DESKTOP_SERVICE_LINKS.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          style={styles.navDropdownItem}
                          className={`nav-dropdown-item${item.accent ? " nav-dropdown-item-accent" : ""}`}
                          onClick={() => setServicesMenuOpen(false)}
                        >
                          <span style={{ ...styles.navDropdownItemIcon, ...(item.accent ? styles.navDropdownItemIconAccent : {}) }} className="nav-dropdown-item-icon">
                            <SvgIcon name={item.icon} size={18} />
                          </span>
                          <span style={styles.navDropdownItemCopy}>
                            <span style={styles.navDropdownItemTitle} className="nav-dropdown-item-title">{item.label}</span>
                            <span style={styles.navDropdownItemSub} className="nav-dropdown-item-sub">{item.sub}</span>
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a key={l.label} href={l.href} style={l.icon ? styles.navIconLink : styles.navLink} className={l.icon ? "nav-link nav-icon-link" : "nav-link"} onClick={() => setServicesMenuOpen(false)}>
                  {l.icon && <span style={styles.navIconSymbol} aria-hidden="true"><SvgIcon name={l.icon} size={16} /></span>}
                  <span>{l.label}</span>
                </a>
              )
            ))}
          </div>
          <button
            type="button"
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            style={styles.themeToggle}
            className="theme-toggle"
            aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
          >
            {theme === "dark" ? (
              <span className="theme-icon theme-icon-sun" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="4.2" stroke="white" strokeWidth="1.8" />
                  <path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </span>
            ) : (
              <span className="theme-icon theme-icon-moon" aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path d="M20 14.6A8.4 8.4 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6Z" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
          </button>
          <a href="#contacto" style={styles.navCta} className="cta-btn nav-cta">Hablemos</a>
          <button style={styles.burger} className="burger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ ...styles.burgerLine, transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ ...styles.burgerLine, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ ...styles.burgerLine, transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
        {menuOpen && (
          <div style={styles.mobileMenu} className="mobile-menu">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} style={styles.mobileLink} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
            <div style={styles.mobileMenuDivider} />
            <div style={styles.mobileMenuLabel}>Servicios</div>
            {MOBILE_SERVICE_LINKS.map((l) => (
              <a key={l.label} href={l.href} style={styles.mobileServiceLink} className={l.accent ? "mobile-service-link mobile-service-link-accent" : "mobile-service-link"} onClick={() => setMenuOpen(false)}>
                <span style={{ ...styles.mobileServiceIcon, ...(l.accent ? styles.mobileServiceIconAccent : {}) }}>
                  <SvgIcon name={l.icon} size={17} />
                </span>
                <span style={styles.mobileServiceCopy}>
                  <strong>{l.label}</strong>
                  <small>{l.sub}</small>
                </span>
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section ref={heroRef} id="inicio" style={styles.hero} className="hero-section">
        <div style={styles.heroBgCarousel} className="hero-bg-carousel">
          {currentHeroSlides.map((image, index) => (
            <div
              key={image}
              style={{
                ...styles.heroBgSlide,
                backgroundImage: `url(${image})`,
                backgroundPosition: getHeroImagePosition(image),
                opacity: activeHeroSlide === index ? 1 : 0,
              }}
            />
          ))}
        </div>
        <div style={styles.heroOverlay} className="hero-overlay" />
        <div style={styles.heroGrid} className="hero-grid" />
        <div style={{ ...styles.heroGlow, transform: `translateY(${scrollY * 0.3}px)` }} className="hero-glow" />
        <div style={styles.heroContent} className="fade-in hero-content">
          <div style={styles.heroMain} className="hero-main">
            <div style={styles.heroTextCol} className="hero-text-col">
              <div style={styles.heroPill} className="slide-up hero-pill">
                <span style={styles.heroPillDot} className="hero-pill-dot" />
                Disponible para proyectos
              </div>
              <h1 style={styles.heroTitle} className="slide-up-delay hero-title">
                T-SOFT<span style={styles.heroTitleAccentInline} className="hero-title-accent-inline">WARE</span>
              </h1>
              <p style={styles.heroSub} className="slide-up-delay-2 hero-sub">
                Apps, webs y sistemas a medida.<br />Con tecnología de punta.
              </p>
              <div style={styles.heroActions} className="slide-up-delay-3 hero-actions">
                <a href="https://wa.me/5493886576724" target="_blank" rel="noreferrer" style={styles.btnPrimary} className="cta-btn">Empezar proyecto</a>
                <a href="#servicios" style={styles.btnGhost} className="ghost-btn">Ver servicios →</a>
              </div>
              <div style={styles.heroStats} className="hero-stats">
                {STATS.map((s) => (
                  <div key={s.label} style={styles.heroStat}>
                    <span style={styles.heroStatVal} className="hero-stat-val">{s.value}</span>
                    <span style={styles.heroStatLabel}>{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={styles.heroOrbWrap} className="hero-orb-wrap">
              <div style={styles.introOrbRingTechA} className="intro-orb-ring-tech-a" />
              <div style={styles.introOrbRingTechB} className="intro-orb-ring-tech-b" />
              <div style={styles.introOrbRingCore} className="intro-orb-ring-core" />
              <div style={styles.introOrbLogo} className="intro-orb-logo">
                <Logo
                  size="100%"
                  src={theme === "light" ? logoLight : tsoftwareLogo}
                  objectPosition="center"
                  objectFit="cover"
                  transform="none"
                  borderRadius="50%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO POSTER */}
      <section style={styles.introPoster} className="reveal">
        <div style={styles.introFrame} className="intro-frame">
          <div style={styles.introTopTitle} className="intro-title">
            Construimos el <span style={styles.accent}>futuro digital</span> de tu negocio.
          </div>
        </div>
      </section>

      {/* LOGOS BAR */}
      <div style={styles.logosBar} className="logos-bar reveal">
        <div style={styles.logosInner} className="logos-inner">
          {["React", "Node.js", "Flutter", "Python", "OpenAI", "Firebase", "AWS", "PostgreSQL"].map((t) => (
            <span key={t} style={styles.logoTag} className="logo-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section style={styles.about} id="nosotros" className="about-section reveal">
        <div style={styles.container}>
          <div style={styles.aboutGrid} className="about-grid">
            <div style={styles.aboutLeft}>
              <div style={styles.sectionLabel}>SOBRE NOSOTROS</div>
              <h2 style={styles.aboutTitle} className="about-title">
                Una Familia<br />
                <span style={styles.accent}>Una visión.</span>
              </h2>
              <p style={styles.aboutText}>
                T-Software es una agencia formada por una familia apasionada por la tecnología.Tenemos la convicción de que cualquier negocio sin importar su tamaño merece acceso a soluciones digitales de primer nivel.
              </p>
              <p style={styles.aboutText}>
                No somos una fábrica de código. Somos un equipo que entiende tu negocio primero y construye la solución después. Esa es la diferencia.
              </p>
            </div>
            <div style={styles.aboutRight}>
              <div style={styles.aboutCard} className="about-card">
                <div style={styles.aboutCardTop}>
                  <Logo size={48} src={theme === "light" ? logoLight : tsoftwareLogo} />
                  <div>
                    <div style={styles.aboutCardTitle} className="about-card-title">T-Software Agency</div>
                    <div style={styles.aboutCardSub} className="about-card-sub">· Argentina · 2026</div>
                  </div>
                </div>
                <div style={styles.aboutDivider} />
                <div style={styles.aboutPoints}>
                  {["Desarrollo a medida 100%", "Comunicación directa con el equipo", "Sin intermediarios", "Precios transparentes", "Soporte post-entrega incluido"].map((p) => (
                    <div key={p} style={styles.aboutPoint} className="about-point">
                      <span style={styles.aboutPointDot} className="about-point-dot">◆</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.services} id="servicios" className="services-section reveal">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLabel}>NUESTROS SERVICIOS</div>
            <h2 style={styles.sectionTitle} className="section-title">Lo que construimos</h2>
            <p style={styles.sectionSub}>Soluciones digitales completas para captar clientes, profesionalizar tu marca y ordenar tu operación.</p>
          </div>
          <div style={styles.servicesGrid} className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                style={{ ...styles.serviceCard, ...(activeService === i ? styles.serviceCardActive : {}) }}
                className="service-card reveal-item"
                onMouseEnter={() => setActiveService(i)}
              >
                <div style={styles.serviceIcon} className="service-icon">
                  <SvgIcon name={s.icon} size={28} />
                </div>
                <h3 style={styles.serviceTitle} className="service-title">{s.title}</h3>
                <p style={styles.serviceDesc}>{s.desc}</p>
                <div style={styles.serviceArrow} className="service-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIGITAL SOLUTIONS */}
      <section style={styles.solutions} className="solutions-section reveal">
        <div style={styles.container}>
          <div style={styles.splitHeader} className="split-header">
            <div>
              <div style={styles.sectionLabel}>SOLUCIONES DIGITALES</div>
              <h2 style={styles.sectionTitle} className="section-title">
                Tu web, landing o sistema<br /><span style={styles.accent}>listo para crecer.</span>
              </h2>
            </div>
            <p style={styles.splitHeaderText}>
              Diseñamos y desarrollamos productos digitales modernos, optimizados y entregados en tiempo y forma. La idea es simple: más confianza, más consultas y menos tareas manuales.
            </p>
          </div>
          <div style={styles.solutionsGrid} className="solutions-grid">
            {DIGITAL_SOLUTIONS.map((item) => (
              <article key={item.title} id={item.id} style={styles.solutionCard} className="solution-card reveal-item">
                <div style={styles.solutionCardTop}>
                  <span style={styles.solutionIcon} className="solution-icon">
                    <SvgIcon name={item.icon} size={26} />
                  </span>
                  <span style={styles.solutionTag} className="solution-tag">{item.tag}</span>
                </div>
                <h3 style={styles.solutionTitle} className="solution-title">{item.title}</h3>
                <p style={styles.solutionDesc}>{item.desc}</p>
                <div style={styles.solutionPoints}>
                  {item.points.map((point) => (
                    <span key={point} style={styles.solutionPoint} className="solution-point">{point}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={styles.benefits} className="benefits-section reveal">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLabel}>QUÉ INCLUIMOS</div>
            <h2 style={styles.sectionTitle} className="section-title">Detalles que hacen<br />la diferencia.</h2>
            <p style={styles.sectionSub}>No se trata solo de que se vea bien. También tiene que cargar rápido, funcionar en móvil y quedar preparada para vender.</p>
          </div>
          <div style={styles.benefitsGrid} className="benefits-grid">
            {BENEFITS.map((benefit, index) => (
              <div key={benefit.title} style={styles.benefitItem} className="benefit-item reveal-item">
                <div style={styles.benefitTop}>
                  <span style={styles.benefitIcon} className="benefit-icon">
                    <SvgIcon name={benefit.icon} size={26} />
                  </span>
                  <span style={styles.benefitIndex}>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 style={styles.benefitTitle} className="benefit-title">{benefit.title}</h3>
                <p style={styles.benefitDesc}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={styles.process} className="process-section reveal">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLabel}>CÓMO TRABAJAMOS</div>
            <h2 style={styles.sectionTitle} className="section-title">Del concepto al producto<br /><span style={styles.accent}>en 4 pasos.</span></h2>
          </div>
          <div style={styles.processGrid} className="process-grid">
            {PROCESS.map((p, i) => (
              <div key={p.num} style={styles.processStep} className="process-step reveal-item">
                <div style={styles.processNum}>{p.num}</div>
                {i < PROCESS.length - 1 && <div style={styles.processLine} className="process-line" />}
                <div style={styles.processBody}>
                  <h3 style={styles.processTitle} className="process-title">{p.title}</h3>
                  <p style={styles.processDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={styles.faq} className="faq-section reveal">
        <div style={styles.container}>
          <div style={styles.splitHeader} className="split-header">
            <div>
              <div style={styles.sectionLabel}>PREGUNTAS FRECUENTES</div>
              <h2 style={styles.sectionTitle} className="section-title">Antes de empezar</h2>
            </div>
            <p style={styles.splitHeaderText}>
              Si ya tenés una idea, un problema operativo o solo la intuición de que tu negocio necesita una mejor presencia digital, podemos convertirlo en un plan concreto.
            </p>
          </div>
          <div style={styles.faqGrid} className="faq-grid">
            {FAQS.map((faq) => (
              <div key={faq.question} style={styles.faqItem} className="faq-item reveal-item">
                <div style={styles.faqTop}>
                  <span style={styles.faqIcon} className="faq-icon">
                    <SvgIcon name={faq.icon} size={22} />
                  </span>
                  <h3 style={styles.faqQuestion} className="faq-question">{faq.question}</h3>
                </div>
                <p style={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={styles.quote} id="cotizador" className="quote-section reveal">
        <div style={styles.container}>
          <div style={styles.quoteHero} className="quote-hero">
            <div style={styles.quoteBadge} className="quote-badge">
              <SvgIcon name="calculator" size={15} />
              Calculá tu inversión
            </div>
            <h2 style={styles.sectionTitle} className="section-title">
              Cotizá tu <span style={styles.accent}>Proyecto Digital</span>
            </h2>
            <p style={styles.quoteText} className="quote-text">
              Calculá el precio de tu landing page o sitio web de forma instantánea y transparente. Para proyectos a medida, completá el formulario y te enviamos un presupuesto personalizado.
            </p>
          </div>
          <div style={styles.quoteTabs} className="quote-tabs">
            {[
              { id: "quoter", label: "Cotizador Online", icon: "calculator" },
              { id: "custom", label: "Desarrollo a Medida", icon: "code" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                style={{ ...styles.quoteTab, ...(quoteMode === tab.id ? styles.quoteTabActive : {}) }}
                className={`quote-tab${quoteMode === tab.id ? " quote-tab-active" : ""}`}
                onClick={() => setQuoteMode(tab.id)}
              >
                <SvgIcon name={tab.icon} size={17} />
                {tab.label}
              </button>
            ))}
          </div>

          {quoteMode === "quoter" ? (
            <div style={styles.quoteLayout} className="quote-layout">
              <div style={styles.quoteSteps}>
                <div style={styles.quoteStepCard} className="quote-step-card reveal-item">
                  <div style={styles.quoteStepTitleRow}>
                    <span style={styles.quoteStepNumber}>1</span>
                    <h3 style={styles.quoteStepTitle} className="quote-step-title">¿Qué tipo de proyecto necesitás?</h3>
                  </div>
                  <QuoteSelect
                    value={quoteProject}
                    placeholder="Seleccioná el tipo de proyecto"
                    options={Object.entries(QUOTE_PROJECTS).map(([value, project]) => ({
                      value,
                      label: project.label,
                      sub: project.tagline,
                      icon: project.icon,
                    }))}
                    onChange={(nextProject) => {
                      setQuoteProject(nextProject);
                      setQuotePlan("");
                      setQuoteAddons([]);
                      setQuoteMaintenance("none");
                    }}
                  />

                  {selectedProject && (
                    <div style={styles.quoteInfoBox} className="quote-info-box">
                      <div style={styles.quoteInfoHeader}>
                        <span style={styles.quoteInfoIcon} className="quote-info-icon">
                          <SvgIcon name={selectedProject.icon} size={22} />
                        </span>
                        <div>
                          <h4 style={styles.quoteInfoTitle} className="quote-info-title">{selectedProject.label}</h4>
                          <p style={styles.quoteInfoTagline}>{selectedProject.tagline}</p>
                        </div>
                      </div>
                      <p style={styles.quoteInfoText} className="quote-info-text">{selectedProject.description}</p>
                      <div style={styles.quoteBestFor}>
                        {selectedProject.bestFor.map((item) => (
                          <span key={item} style={styles.quoteChip} className="quote-chip">{item}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {selectedProject && (
                  <div style={styles.quoteStepCard} className="quote-step-card reveal-item">
                    <div style={styles.quoteStepTitleRow}>
                      <span style={styles.quoteStepNumber}>2</span>
                      <h3 style={styles.quoteStepTitle} className="quote-step-title">¿Qué plan se adapta mejor a tus necesidades?</h3>
                    </div>
                    <QuoteSelect
                      value={quotePlan}
                      placeholder="Seleccioná un plan"
                      options={selectedProject.plans.map((plan) => ({
                        value: plan.id,
                        label: `${plan.name} - ${formatPrice(plan.price)}`,
                        sub: plan.subtitle,
                        icon: "grid",
                      }))}
                      onChange={setQuotePlan}
                    />

                    {selectedPlan && (
                      <div style={styles.quoteInfoBox} className="quote-info-box">
                        <h4 style={styles.quoteInfoTitle} className="quote-info-title">{selectedPlan.name} · {selectedPlan.subtitle}</h4>
                        <p style={styles.quoteInfoText} className="quote-info-text">Entrega estimada: {selectedPlan.delivery}</p>
                        <div style={styles.quoteIncludes} className="quote-includes">
                          {selectedPlan.includes.map((item) => (
                            <span key={item} style={styles.quoteInclude} className="quote-include">✓ {item}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {selectedPlan && (
                  <div style={styles.quoteStepCard} className="quote-step-card reveal-item">
                    <div style={styles.quoteStepTitleRow}>
                      <span style={styles.quoteStepNumber}>3</span>
                      <h3 style={styles.quoteStepTitle} className="quote-step-title">Extras opcionales</h3>
                    </div>
                    <div style={styles.quoteAddonList} className="quote-addon-list">
                      {QUOTE_ADDONS[quoteProject].map((addon) => (
                        <button
                          key={addon.id}
                          type="button"
                          style={{ ...styles.quoteAddon, ...(quoteAddons.includes(addon.id) ? styles.quoteAddonActive : {}) }}
                          className={`quote-addon${quoteAddons.includes(addon.id) ? " quote-addon-active" : ""}`}
                          onClick={() => toggleAddon(addon.id)}
                        >
                          <span style={styles.quoteAddonIcon} className="quote-addon-icon">
                            <SvgIcon name={addon.icon} size={18} />
                          </span>
                          <span style={styles.quoteAddonCopy}>
                            <strong>{addon.name}</strong>
                            <small>{addon.description}</small>
                          </span>
                          <b>+{formatPrice(addon.price)}</b>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedPlan && (
                  <div style={styles.quoteStepCard} className="quote-step-card reveal-item">
                    <div style={styles.quoteStepTitleRow}>
                      <span style={styles.quoteStepNumber}>4</span>
                      <h3 style={styles.quoteStepTitle} className="quote-step-title">¿Querés incluir mantenimiento mensual?</h3>
                    </div>
                    <QuoteSelect
                      value={quoteMaintenance}
                      placeholder="Seleccioná mantenimiento"
                      options={QUOTE_MAINTENANCE.map((item) => ({
                        value: item.id,
                        label: `${item.name} ${item.price ? `- ${formatPrice(item.price)}/mes` : "- Sin cargo"}`,
                        sub: item.description,
                        icon: item.id === "none" ? "calculator" : "systems",
                      }))}
                      onChange={setQuoteMaintenance}
                    />
                    <div style={styles.quoteInfoBox} className="quote-info-box">
                      <h4 style={styles.quoteInfoTitle} className="quote-info-title">{selectedMaintenance.name}</h4>
                      <p style={styles.quoteInfoText} className="quote-info-text">{selectedMaintenance.description}</p>
                      {selectedMaintenance.includes && (
                        <div style={styles.quoteIncludes} className="quote-includes">
                          {selectedMaintenance.includes.map((item) => (
                            <span key={item} style={styles.quoteInclude} className="quote-include">✓ {item}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <aside style={styles.quoteSummary} className="quote-summary reveal-item">
                <h3 style={styles.quoteSummaryTitle} className="quote-summary-title">Tu Cotización</h3>
                <p style={styles.quoteSummarySub} className="quote-summary-sub">Precios en pesos argentinos (ARS)</p>
                {hasQuote ? (
                  <>
                    <div style={styles.quoteSummaryRow}>
                      <span>Plan {selectedPlan.name}</span>
                      <strong>{formatPrice(selectedPlan.price)}</strong>
                    </div>
                    {selectedAddons.map((addon) => (
                      <div key={addon.id} style={styles.quoteSummaryRow}>
                        <span>{addon.name}</span>
                        <strong>+{formatPrice(addon.price)}</strong>
                      </div>
                    ))}
                    <div style={styles.quoteDivider} />
                    <div style={styles.quoteTotalBox} className="quote-total-box">
                      <span>Proyecto (pago único)</span>
                      <strong>{formatPrice(quoteProjectTotal)}</strong>
                      {selectedMaintenance.price > 0 && <small>+ {formatPrice(selectedMaintenance.price)}/mes mantenimiento</small>}
                    </div>
                    <p style={styles.quoteNote} className="quote-note">
                      Precio orientativo. El dominio, hosting y contenidos finales pueden ajustarse según los requerimientos del proyecto.
                    </p>
                    <div style={styles.quoteContactGrid}>
                      <input
                        value={quoteContact.name}
                        onChange={(event) => setQuoteContact((prev) => ({ ...prev, name: event.target.value }))}
                        placeholder="Nombre completo"
                        style={styles.quoteInput}
                        className="quote-input"
                      />
                      <input
                        value={quoteContact.email}
                        onChange={(event) => setQuoteContact((prev) => ({ ...prev, email: event.target.value }))}
                        placeholder="Email"
                        type="email"
                        style={styles.quoteInput}
                        className="quote-input"
                      />
                      <input
                        value={quoteContact.phone}
                        onChange={(event) => setQuoteContact((prev) => ({ ...prev, phone: event.target.value }))}
                        placeholder="Teléfono"
                        style={styles.quoteInput}
                        className="quote-input"
                      />
                    </div>
                    <a
                      href={`https://wa.me/5493886576724?text=${encodeURIComponent(quoteMessage)}`}
                      target="_blank"
                      rel="noreferrer"
                      style={styles.quotePrimaryBtn}
                      className="quote-primary-btn"
                    >
                      Solicitar cotización
                    </a>
                  </>
                ) : (
                  <div style={styles.quoteEmpty} className="quote-empty">
                    <div style={styles.quoteEmptyIcon}>
                      <SvgIcon name="calculator" size={44} />
                    </div>
                    <p>Seleccioná el tipo de proyecto y el plan para ver el precio de tu cotización.</p>
                  </div>
                )}
              </aside>
            </div>
          ) : (
            <div style={styles.customQuoteLayout} className="custom-quote-layout">
              <div style={styles.quoteStepCard} className="quote-step-card reveal-item">
                <h3 style={styles.customTitle} className="custom-title">Desarrollo de <span style={styles.accent}>Sistemas a Medida</span></h3>
                <p style={styles.quoteText} className="quote-text">
                  Los proyectos personalizados tienen una complejidad y alcance únicos. Contanos qué necesitás y te armamos una propuesta a medida.
                </p>
                <div style={styles.customFeatureList}>
                  {["CRM, ERP o paneles internos", "Turnos, reservas o portales de usuarios", "Automatizaciones e integraciones", "Apps web o móviles personalizadas"].map((item) => (
                    <div key={item} style={styles.customFeature} className="custom-feature">✓ {item}</div>
                  ))}
                </div>
              </div>
              <div style={styles.quoteStepCard} className="quote-step-card reveal-item">
                <h3 style={styles.quoteStepTitle} className="quote-step-title">Completá el formulario</h3>
                <p style={styles.quoteSummarySub} className="quote-summary-sub">Te contacto con una propuesta personalizada.</p>
                <div style={styles.quoteContactGrid}>
                  <input
                    value={customForm.name}
                    onChange={(event) => setCustomForm((prev) => ({ ...prev, name: event.target.value }))}
                    placeholder="Nombre completo *"
                    style={styles.quoteInput}
                    className="quote-input"
                  />
                  <input
                    value={customForm.email}
                    onChange={(event) => setCustomForm((prev) => ({ ...prev, email: event.target.value }))}
                    placeholder="Email *"
                    type="email"
                    style={styles.quoteInput}
                    className="quote-input"
                  />
                  <input
                    value={customForm.company}
                    onChange={(event) => setCustomForm((prev) => ({ ...prev, company: event.target.value }))}
                    placeholder="Empresa / Organización"
                    style={styles.quoteInput}
                    className="quote-input"
                  />
                  <textarea
                    value={customForm.details}
                    onChange={(event) => setCustomForm((prev) => ({ ...prev, details: event.target.value }))}
                    placeholder="Contanos qué necesitás *"
                    style={{ ...styles.quoteInput, ...styles.quoteTextarea }}
                    className="quote-input"
                  />
                </div>
                <a
                  href={`https://wa.me/5493886576724?text=${encodeURIComponent(customMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={styles.quotePrimaryBtn}
                  className="quote-primary-btn"
                >
                  Enviar solicitud
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS: guardado temporalmente para reactivar más adelante. */}
      {SHOW_TESTIMONIALS && (
        <section style={styles.testimonials} id="proyectos" className="testimonials-section reveal">
          <div style={styles.container}>
            <div style={styles.sectionHeader}>
              <div style={styles.sectionLabel}>VOCES DE CLIENTES</div>
              <h2 style={styles.sectionTitle} className="section-title">Lo que dicen<br />de nosotros.</h2>
            </div>
            <div style={styles.testimonialsGrid} className="testimonials-grid">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} style={styles.testimonialCard} className="testimonial-card">
                  <div style={styles.testimonialQuote}>"</div>
                  <p style={styles.testimonialText}>{t.text}</p>
                  <div style={styles.testimonialAuthor}>
                    <div style={styles.testimonialAvatar}>
                      {t.name[0]}
                    </div>
                    <div>
                      <div style={styles.testimonialName} className="testimonial-name">{t.name}</div>
                      <div style={styles.testimonialRole} className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA BANNER */}
      <section style={styles.ctaBanner} id="contacto" className="cta-section reveal">
        <div style={styles.ctaBannerGlow} />
        <div style={styles.ctaContent} className="cta-content">
          <div style={styles.sectionLabel}>EMPEZÁ HOY</div>
          <h2 style={styles.ctaTitle} className="cta-title">¿Tu negocio listo<br />para el siguiente nivel?</h2>
          <p style={styles.ctaSub}>Primera consulta sin costo. Respondemos en menos de 24 horas.</p>
          <div style={styles.ctaActions} className="cta-actions">
            <a href="https://wa.me/5493886576724" style={styles.btnPrimary} className="cta-btn">
              Escribinos por WhatsApp
            </a>
            <a href="mailto:tsoftware@gmail.com" style={styles.btnGhost} className="ghost-btn">
              Enviar un email →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer} className="footer reveal">
        <div style={styles.footerTop} className="footer-top">
          <div style={styles.footerBrand}>
            <Logo size={36} src={theme === "light" ? logoLight : tsoftwareLogo} />
            <div>
              <div style={styles.footerBrandName} className="footer-brand-name">T-SOFTWARE</div>
              <div style={styles.footerBrandSub} className="footer-brand-sub">AGENCY</div>
            </div>
          </div>
          <div style={styles.footerLinks} className="footer-links">
            <div style={styles.footerCol}>
              <div style={styles.footerColTitle} className="footer-col-title">Contacto</div>
              <a
                href="https://instagram.com/t.software.agency"
                target="_blank"
                rel="noreferrer"
                style={styles.footerIconLink}
                className="footer-link footer-icon-link"
                aria-label="Instagram oficial de T-Software"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-icon-svg">
                  <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="5.2" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="12" cy="12" r="4.35" stroke="currentColor" strokeWidth="1.7" />
                  <circle cx="17.55" cy="6.55" r="1.25" fill="currentColor" />
                </svg>
                <span>@t.software.agency</span>
              </a>
              <a
                href="https://wa.me/5493886576724"
                target="_blank"
                rel="noreferrer"
                style={styles.footerIconLink}
                className="footer-link footer-icon-link"
                aria-label="WhatsApp de T-Software"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-icon-svg">
                  <path d="M12 3.2c-4.86 0-8.8 3.84-8.8 8.58 0 1.64.48 3.23 1.39 4.6L3.4 21l4.74-1.24a8.94 8.94 0 0 0 3.86.86c4.86 0 8.8-3.84 8.8-8.58 0-4.74-3.94-8.84-8.8-8.84Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.08 8.76c.18-.38.4-.44.67-.44h.58c.2 0 .42.03.53.32l.86 2.09c.1.25.07.44-.02.58l-.43.61c-.15.19-.11.4.01.58.29.49.78 1.15 1.5 1.74.87.72 1.66 1.07 2.16 1.27.23.09.41.03.56-.14l.67-.77c.17-.2.39-.24.61-.14l1.89.87c.2.1.34.21.37.45v.62c-.02.35-.2.62-.5.82-.52.33-1.34.57-2.2.33-1.07-.28-2.43-.79-3.9-2.03-1.35-1.14-2.28-2.54-2.72-3.68-.38-.98-.3-1.9-.04-2.44Z" fill="currentColor" />
                </svg>
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:t_software_agency@gmail.com"
                style={styles.footerIconLink}
                className="footer-link footer-icon-link"
                aria-label="Email de T-Software"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="footer-icon-svg">
                  <rect x="3" y="5" width="18" height="14" rx="2.4" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M4.2 6.4 12 12.2l7.8-5.8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>t_software_agency@gmail.com</span>
              </a>
             
            </div>
            <div style={styles.footerCol}>
              <div style={styles.footerColTitle} className="footer-col-title">Servicios</div>
              <span style={styles.footerLink} className="footer-link">Desarrollo Web</span>
              <span style={styles.footerLink} className="footer-link">Apps Móviles</span>
              <span style={styles.footerLink} className="footer-link">Sistemas de Gestión</span>
              <span style={styles.footerLink} className="footer-link">Automatización con IA</span>
            </div>
            <div style={styles.footerCol}>
              <div style={styles.footerColTitle} className="footer-col-title">Atención</div>
              <span style={styles.footerLink} className="footer-link">Respuesta en menos de 24hs</span>
              <span style={styles.footerLink} className="footer-link">Consulta inicial sin costo</span>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom} className="footer-bottom">
          <span style={styles.footerCopy} className="footer-copy">© 2026 T-Software Agency. Todos los derechos reservados.</span>
        </div>
      </footer>
      <a
        href="https://wa.me/5493886576724"
        target="_blank"
        rel="noreferrer"
        style={styles.whatsappFloat}
        className="whatsapp-float"
        aria-label="Escribinos por WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" className="whatsapp-float-icon">
          <path d="M16.02 4C9.4 4 4.03 9.2 4.03 15.62c0 2.06.57 4.08 1.64 5.84L4 28l6.76-1.72a12.28 12.28 0 0 0 5.26 1.16C22.64 27.44 28 22.24 28 15.82 28 9.4 22.64 4 16.02 4Z" fill="currentColor" />
          <path d="M22.94 19.18c-.29.78-1.44 1.45-2.04 1.5-.55.05-1.25.08-2.02-.13-.46-.12-1.06-.34-1.82-.66-3.2-1.37-5.29-4.47-5.45-4.68-.16-.21-1.3-1.68-1.3-3.2 0-1.53.82-2.28 1.11-2.6.29-.31.64-.39.85-.39h.61c.2.01.46-.07.72.54.27.63.91 2.16.99 2.32.08.15.13.34.03.55-.1.21-.15.34-.31.52-.16.18-.33.4-.47.54-.16.16-.32.33-.14.64.18.31.8 1.28 1.72 2.07 1.18.99 2.17 1.3 2.49 1.45.32.16.51.13.69-.08.19-.21.8-.91 1.01-1.22.21-.31.43-.26.72-.16.29.1 1.86.85 2.18 1 .32.16.53.23.61.36.08.13.08.86-.2 1.63Z" fill="currentColor" />
        </svg>
      </a>
      </div>
    </div>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html {
    overflow-x: hidden;
    overflow-y: auto;
  }
  body {
    overflow: hidden;
    width: 100%;
    background: #000;
    color: #fff;
  }
  html { scroll-behavior: smooth; }

  .fade-in { animation: fadeIn 1s ease forwards; }
  .slide-up { animation: slideUp 0.8s ease forwards; }
  .slide-up-delay { animation: slideUp 0.8s 0.15s ease both; }
  .slide-up-delay-2 { animation: slideUp 0.8s 0.3s ease both; }
  .slide-up-delay-3 { animation: slideUp 0.8s 0.45s ease both; }

  .reveal,
  .reveal-item {
    opacity: 0;
    transform: translateY(34px);
    filter: blur(8px);
    transition:
      opacity 0.8s cubic-bezier(0.22, 0.61, 0.36, 1),
      transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1),
      filter 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
    transition-delay: var(--reveal-delay, 0ms);
    will-change: opacity, transform, filter;
  }

  .reveal.is-visible,
  .reveal-item.is-visible {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }

  .reveal-item {
    transform: translateY(28px) scale(0.985);
  }

  .reveal-item.is-visible {
    transform: translateY(0) scale(1);
  }

  @media (prefers-reduced-motion: reduce) {
    .fade-in,
    .slide-up,
    .slide-up-delay,
    .slide-up-delay-2,
    .slide-up-delay-3,
    .scroll-hint,
    .intro-orb-logo,
    .intro-orb-ring-tech-a,
    .intro-orb-ring-tech-b,
    .reveal,
    .reveal-item {
      animation: none !important;
      transition: none !important;
      opacity: 1 !important;
      transform: none !important;
      filter: none !important;
    }
  }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
  .hero-pill-dot { animation: availabilityPulse 2.8s ease-in-out infinite; }
  @keyframes availabilityPulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(34,197,94,0.28); }
    50% { opacity: 0.75; box-shadow: 0 0 0 4px rgba(34,197,94,0); }
  }

  .scroll-hint { animation: scrollHint 2s ease-in-out infinite; }
  @keyframes scrollHint {
    0%,100% { opacity: 0.4; transform: translateX(-50%) translateY(0); }
    50% { opacity: 1; transform: translateX(-50%) translateY(8px); }
  }

  .nav-link { transition: color 0.2s; }
  .nav-link:hover { color: #fff !important; }
  .nav-icon-link { transition: color 0.2s, border-color 0.2s, background 0.2s, box-shadow 0.2s !important; }
  .nav-icon-link:hover { border-color: #2a2a2a !important; background: rgba(255,255,255,0.04) !important; box-shadow: none !important; }
  .nav-dropdown-button { transition: color 0.2s, border-color 0.2s, background 0.2s !important; }
  .nav-dropdown-button:hover,
  .nav-dropdown-button-open { color: #fff !important; border-color: #2a2a2a !important; background: rgba(255,255,255,0.04) !important; }
  .nav-dropdown-chevron { transition: transform 0.2s ease !important; }
  .nav-dropdown-button-open .nav-dropdown-chevron { transform: rotate(180deg); }
  .nav-dropdown-menu { animation: dropdownIn 0.18s ease both; }
  .nav-dropdown-item { transition: background 0.2s, border-color 0.2s, transform 0.2s !important; }
  .nav-dropdown-item:hover { background: #0a0a0a !important; border-color: #2a2a2a !important; transform: translateY(-1px); }
  .nav-dropdown-item:hover .nav-dropdown-item-icon { background: #111 !important; color: #fff !important; }
  .nav-dropdown-item-accent:hover { background: #0a0a0a !important; border-color: #2a2a2a !important; }
  .mobile-service-link { transition: background 0.2s, border-color 0.2s !important; }
  .mobile-service-link:hover { background: rgba(255,255,255,0.04) !important; border-color: #2a2a2a !important; }
  .mobile-service-link strong { color: inherit; font-size: 0.92rem; line-height: 1.25; }
  .mobile-service-link small { color: rgba(255,255,255,0.48); font-size: 0.76rem; line-height: 1.3; }

  @keyframes dropdownIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .theme-toggle { transition: all 0.2s !important; }
  .theme-toggle:hover { transform: translateY(-1px); }
  .theme-icon { display: inline-flex; align-items: center; justify-content: center; }

  .cta-btn { transition: all 0.2s !important; }
  .cta-btn:hover { background: #e0e0e0 !important; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(255,255,255,0.15) !important; }

  .ghost-btn { transition: all 0.2s !important; }
  .ghost-btn:hover { background: rgba(255,255,255,0.08) !important; transform: translateY(-2px); }

  .about-card,
  .service-card,
  .solution-card,
  .benefit-item,
  .faq-item,
  .quote-step-card,
  .quote-summary,
  .quote-info-box,
  .quote-total-box,
  .testimonial-card,
  .quote-addon,
  .quote-select-button,
  .quote-select-menu,
  .footer-icon-link {
    background: rgba(5,5,5,0.82) !important;
    border: 0.5px solid rgba(255,255,255,0.1) !important;
    backdrop-filter: blur(18px) saturate(1.15);
    -webkit-backdrop-filter: blur(18px) saturate(1.15);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.04), 0 18px 44px rgba(0,0,0,0.26) !important;
  }

  .service-card:hover,
  .solution-card:hover,
  .benefit-item:hover,
  .faq-item:hover,
  .about-card:hover,
  .testimonial-card:hover,
  .quote-addon:hover,
  .quote-select-button:hover,
  .quote-select-button-open,
  .quote-select-option:hover {
    background: rgba(8,8,8,0.92) !important;
    border-color: rgba(255,255,255,0.16) !important;
  }

  .service-card {
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1) !important;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    outline: none !important;
  }
  .service-card:hover { transform: translateY(-8px) !important; }
  .service-card:active,
  .service-card:focus,
  .service-card:focus-visible {
    background: rgba(8,8,8,0.92) !important;
    border-color: rgba(255,255,255,0.16) !important;
    box-shadow: none !important;
    outline: none !important;
  }

  .service-arrow { transition: transform 0.2s !important; }
  .service-card:hover .service-arrow { transform: translate(4px,-4px) !important; }

  .solution-card,
  .benefit-item,
  .faq-item { transition: all 0.25s ease !important; }
  .solution-card:hover,
  .benefit-item:hover,
  .faq-item:hover { transform: translateY(-4px); }

  .quote-tab,
  .quote-addon,
  .quote-primary-btn { transition: all 0.2s ease !important; }
  .quote-tab:hover,
  .quote-addon:hover { border-color: rgba(255,255,255,0.28) !important; background: #0a0a0a !important; }
  .quote-primary-btn:hover { transform: translateY(-1px); background: #e0e0e0 !important; }
  .quote-tab svg,
  .quote-badge svg,
  .quote-info-icon svg,
  .quote-addon-icon svg,
  .quote-select-button-icon svg,
  .quote-select-option-icon svg,
  .service-icon svg,
  .solution-icon svg,
  .benefit-icon svg,
  .faq-icon svg,
  .nav-icon-symbol svg,
  .nav-dropdown-item-icon svg,
  .mobile-service-link svg { display: block; }
  .quote-select-button,
  .quote-select-option { transition: background 0.2s, border-color 0.2s, color 0.2s !important; }
  .quote-select-button:hover,
  .quote-select-button-open { border-color: rgba(255,255,255,0.22) !important; }
  .quote-select-button-open .quote-select-caret { transform: rotate(180deg); }
  .quote-select-menu { animation: dropdownIn 0.18s ease both; }
  .quote-select-option:hover { border-color: rgba(255,255,255,0.18) !important; }
  .quote-select-option-active { background: rgba(255,255,255,0.12) !important; border-color: #fff !important; color: #fff !important; }
  .quote-select-option-active .quote-select-option-icon { color: #fff !important; border-color: #fff !important; }
  .quote-addon strong,
  .quote-total-box strong { color: inherit; font-size: 0.95rem; }
  .quote-addon small,
  .quote-total-box small { display: block; color: #777; font-size: 0.78rem; line-height: 1.45; margin-top: 4px; }

  .about-card { transition: transform 0.3s !important; }
  .about-card:hover { transform: translateY(-4px) !important; }

  .testimonial-card { transition: all 0.3s !important; }
  .testimonial-card:hover { border-color: rgba(255,255,255,0.25) !important; transform: translateY(-4px) !important; }

  .logo-tag { transition: all 0.2s !important; }
  .logo-tag:hover { color: #fff !important; border-color: #fff !important; }

  .footer-link { transition: color 0.2s !important; }
  .footer-link:hover { color: #fff !important; }

  .whatsapp-float { transition: background 0.2s, color 0.2s, border-color 0.2s !important; }
  .whatsapp-float:hover { box-shadow: 0 12px 28px rgba(255,255,255,0.14) !important; }
  .whatsapp-float-icon { display: block; flex: 0 0 auto; width: 32px; height: 32px; }

  .process-step { transition: transform 0.2s !important; }
  .process-step:hover { transform: translateY(-4px) !important; }

  .intro-frame { transition: transform 0.25s ease; }
  .intro-frame:hover { transform: translateY(-2px); }
  .intro-orb-logo { animation: introLogoZoom 3.2s ease-in-out infinite; transform-origin: center; }
  .intro-orb-ring-tech-a { animation: ringOrbitA 34s cubic-bezier(0.22, 0.61, 0.36, 1) infinite; transform-origin: center; }
  .intro-orb-ring-tech-b { animation: ringOrbitB 46s cubic-bezier(0.22, 0.61, 0.36, 1) infinite; transform-origin: center; }

  @keyframes introLogoZoom {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.08); }
  }

  @keyframes ringOrbitA {
    0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.62; }
    50% { transform: rotate(180deg) scale(1.012); opacity: 0.88; }
  }

  @keyframes ringOrbitB {
    0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.48; }
    50% { transform: rotate(-180deg) scale(1.018); opacity: 0.76; }
  }

  @media (max-width: 1024px) {
    .about-grid {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }

    .footer-top {
      grid-template-columns: 1fr !important;
      gap: 40px !important;
    }

    .intro-frame {
      min-height: auto !important;
      padding: 16px 8px !important;
    }

    .intro-title {
      max-width: 760px !important;
    }

    .intro-orb-wrap {
      width: 240px !important;
      height: 240px !important;
      margin: 40px auto 0 !important;
    }

    .intro-orb-logo {
      width: 170px !important;
      height: 170px !important;
    }

    .intro-orb-ring-tech-a {
      width: 260px !important;
      height: 260px !important;
    }

    .intro-orb-ring-tech-b {
      width: 220px !important;
      height: 220px !important;
    }

    .intro-orb-ring-core {
      width: 192px !important;
      height: 192px !important;
    }
  }

  @media (max-width: 768px) {
    .nav-inner {
      padding: 0 16px !important;
      height: 60px !important;
      gap: 12px !important;
      position: relative !important;
    }

    .nav-brand,
    .nav-links,
    .nav-cta {
      display: none !important;
    }

    .burger-btn {
      display: flex !important;
      margin-left: auto !important;
    }

    .theme-toggle {
      position: absolute !important;
      left: 50% !important;
      transform: translateX(-50%) !important;
      margin-left: 0 !important;
      width: 34px !important;
      height: 34px !important;
      padding: 0 !important;
    }

    .hero-section,
    .about-section,
    .services-section,
    .process-section,
    .quote-section,
    .testimonials-section,
    .cta-section,
    .footer {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }

    .hero-section {
      min-height: 100dvh !important;
      padding-top: 72px !important;
      padding-bottom: 0 !important;
      display: flex !important;
      align-items: stretch !important;
    }

    .hero-content {
      min-height: calc(100dvh - 72px) !important;
      gap: 12px !important;
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
      max-width: 640px !important;
      margin: 0 auto !important;
      padding: 8px 0 24px !important;
    }

    .hero-main {
      display: flex !important;
      flex-direction: column !important;
      min-height: 100% !important;
      justify-content: center !important;
      justify-items: center !important;
      gap: 14px !important;
    }

    .hero-text-col {
      display: contents !important;
    }

    .hero-orb-wrap {
      width: 170px !important;
      height: 170px !important;
      justify-self: center !important;
      order: 3 !important;
      margin: 4px auto 0 !important;
    }

    .hero-pill { order: 1 !important; }
    .hero-title { order: 2 !important; }
    .hero-sub { order: 4 !important; }
    .hero-actions { order: 5 !important; }
    .hero-stats { order: 6 !important; }

    .hero-pill { margin-top: 20px !important; }

    .hero-content > * {
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .hero-title {
    margin-bottom: 50px !important;
      padding-top: 30px;
      font-size: clamp(40px, 9vw, 48px) !important;
      line-height: 1.08 !important;
      text-wrap: balance !important;
      text-align: center !important;
    }

    .hero-sub {
      font-size: 14px !important;
      max-width: 34ch !important;
      line-height: 1.65 !important;
      text-wrap: balance !important;
      padding-top: 20px !important;
    }

    .hero-actions,
    .cta-actions {
      width: auto !important;
      max-width: 100% !important;
      flex-direction: row !important;
      align-items: center !important;
      justify-content: center !important;
      flex-wrap: wrap !important;
      gap: 10px !important;
      padding-top: 0 !important;
    }

    .hero-actions a,
    .cta-actions a {
      width: auto !important;
      min-width: 0 !important;
      text-align: center !important;
      white-space: nowrap !important;
      padding-bottom:50px;
    }

    .hero-stats {
    bottom: 120px;
      gap: 14px 22px !important;
      justify-content: center !important;
      text-align: center !important;
      margin-top: 48px !important;
    }

    .scroll-hint {
      display: flex !important;
      bottom: 18px !important;
      opacity: 0.9 !important;
    }

    .logos-inner {
      justify-content: center !important;
    }

    .services-grid,
    .solutions-grid,
    .benefits-grid,
    .faq-grid,
    .quote-layout,
    .custom-quote-layout,
    .testimonials-grid,
    .process-grid,
    .footer-links {
      grid-template-columns: 1fr !important;
    }

    .service-card,
    .solution-card,
    .testimonial-card,
    .benefit-item,
    .faq-item {
      padding: 22px !important;
    }

    .split-header {
      grid-template-columns: 1fr !important;
      gap: 18px !important;
      margin-bottom: 36px !important;
    }

    .quote-layout,
    .custom-quote-layout {
      gap: 28px !important;
    }

    .quote-step-card,
    .quote-summary {
      padding: 22px !important;
    }

    .quote-tabs {
      width: 100% !important;
    }

    .quote-tab {
      flex: 1 !important;
      padding-left: 12px !important;
      padding-right: 12px !important;
    }

    .quote-select-menu {
      position: static !important;
      margin-top: 6px !important;
      box-shadow: none !important;
    }

    .quote-addon {
      grid-template-columns: 34px 1fr !important;
      gap: 8px !important;
      text-align: left !important;
    }

    .quote-addon b {
      grid-column: 2 !important;
      justify-self: start !important;
    }

    .quote-primary-btn {
      width: 100% !important;
      text-align: center !important;
      padding-left: 14px !important;
      padding-right: 14px !important;
    }

    .quote-includes {
      grid-template-columns: 1fr !important;
    }

    .process-step {
      padding: 0 !important;
      border: none !important;
      border-radius: 0 !important;
      margin-bottom: 22px !important;
    }

    .process-line {
      display: none !important;
    }

    .about-cta {
      align-self: center !important;
      margin-top: 8px !important;
    }

    .footer-bottom {
      flex-direction: column !important;
      gap: 14px !important;
      align-items: flex-start !important;
    }

    .whatsapp-float {
      right: 16px !important;
      bottom: 16px !important;
      width: 56px !important;
      height: 56px !important;
      transform: none !important;
      backface-visibility: hidden !important;
      -webkit-font-smoothing: antialiased !important;
      box-shadow: none !important;
    }

    .whatsapp-float:hover {
      transform: none !important;
      box-shadow: none !important;
    }

    .whatsapp-float-icon {
      width: 32px !important;
      height: 32px !important;
    }

    .intro-frame {
      min-height: auto !important;
      padding: 20px !important;
      overflow: visible !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 24px !important;
    }

    .intro-title {
      font-size: clamp(34px, 8vw, 58px) !important;
      max-width: 620px !important;
      line-height: 0.98 !important;
      text-align: center !important;
    }

    .intro-orb-wrap {
      width: 180px !important;
      height: 180px !important;
      margin: 18px auto 0 !important;
    }

    .intro-orb-logo {
      width: 138px !important;
      height: 138px !important;
    }

    .intro-orb-ring-tech-a {
      width: 200px !important;
      height: 200px !important;
    }

    .intro-orb-ring-tech-b {
      width: 168px !important;
      height: 168px !important;
    }

    .intro-orb-ring-core {
      width: 150px !important;
      height: 150px !important;
    }
  }

  .light-mode {
    background: #fff !important;
    color: #111 !important;
  }

  .light-mode .page-grid {
    background-image: linear-gradient(rgba(0,0,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.03) 1px,transparent 1px) !important;
  }

  .light-mode .section-title,
  .light-mode .about-title,
  .light-mode .cta-title,
  .light-mode .footer-col-title,
  .light-mode .footer-brand-name,
  .light-mode .testimonial-name,
  .light-mode .process-title,
  .light-mode .solution-title,
  .light-mode .benefit-title,
  .light-mode .faq-question,
  .light-mode .quote-step-title,
  .light-mode .quote-summary-title,
  .light-mode .quote-info-title,
  .light-mode .custom-title,
  .light-mode .service-title {
    color: #111 !important;
  }

  .light-mode section:not(.hero-section) p,
  .light-mode .about-point,
  .light-mode .about-card-sub,
  .light-mode .service-desc,
  .light-mode .process-step p,
  .light-mode .testimonial-card p,
  .light-mode .testimonial-role,
  .light-mode .cta-sub,
  .light-mode .footer-link,
  .light-mode .footer-brand-sub,
  .light-mode .footer-copy,
  .light-mode .logo-tag,
  .light-mode .solution-point,
  .light-mode .solution-tag,
  .light-mode .quote-text,
  .light-mode .quote-note,
  .light-mode .quote-summary-sub,
  .light-mode .quote-info-text {
    color: #222 !important;
  }

  .light-mode .nav-brand {
    color: #fff !important;
  }

  .light-mode .nav-link {
    color: #777 !important;
  }

  .light-mode .nav-link:hover {
    color: #fff !important;
  }

  .light-mode .nav-icon-link:hover {
    background: rgba(255,255,255,0.08) !important;
  }

  .light-mode .nav-dropdown-button {
    color: #777 !important;
  }

  .light-mode .nav-dropdown-button:hover,
  .light-mode .nav-dropdown-button-open {
    color: #fff !important;
    background: rgba(255,255,255,0.08) !important;
  }

  .light-mode .nav-scrolled .nav-brand,
  .light-mode .nav-scrolled .nav-link,
  .light-mode .nav-scrolled .nav-icon-link,
  .light-mode .nav-scrolled .nav-dropdown-button {
    color: #111 !important;
  }

  .light-mode .nav-scrolled .nav-link:hover,
  .light-mode .nav-scrolled .nav-icon-link:hover,
  .light-mode .nav-scrolled .nav-dropdown-button:hover,
  .light-mode .nav-scrolled .nav-dropdown-button-open {
    color: #000 !important;
    background: #f5f5f5 !important;
  }

  .light-mode .nav-scrolled .burger-btn span {
    background: #111 !important;
  }

  .light-mode .nav-scrolled .nav-cta {
    background: #111 !important;
    color: #fff !important;
  }

  .light-mode .burger-btn span {
    background: #fff !important;
  }

  .light-mode .theme-toggle {
    border-color: #2a2a2a !important;
    color: #fff !important;
    background: #111 !important;
  }

  .light-mode .cta-btn {
    background: #111 !important;
    color: #fff !important;
  }

  .light-mode .nav-cta {
    background: #fff !important;
    color: #000 !important;
  }

  .light-mode .ghost-btn {
    color: #222 !important;
    border-color: #d8d8d8 !important;
  }

  .light-mode .hero-pill {
    color: #fff !important;
    border-color: #2a2a2a !important;
  }

  .light-mode .hero-pill span {
    background: #fff !important;
  }

  .light-mode .hero-title,
  .light-mode .hero-sub,
  .light-mode .hero-stat-val {
    color: #fff !important;
  }

  .light-mode .hero-stat-val {
    color: #fff !important;
  }

  .light-mode .hero-title-accent-inline {
    color: transparent !important;
    -webkit-text-stroke: 1.5px rgba(255,255,255,0.5) !important;
  }

  .light-mode .hero-overlay {
    background: rgba(0,0,0,0.78) !important;
  }

  .light-mode .hero-grid {
    background-image: linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px) !important;
  }

  .light-mode .hero-stat-label {
    color: #777 !important;
  }

  .light-mode .hero-section .cta-btn {
    background: #fff !important;
    color: #000 !important;
    box-shadow: 0 8px 32px rgba(255,255,255,0.08) !important;
  }

  .light-mode .hero-section .ghost-btn {
    color: #aaa !important;
    border-color: #2a2a2a !important;
    background: transparent !important;
  }

  .light-mode .section-title span,
  .light-mode .about-title span {
    color: transparent !important;
    -webkit-text-stroke: 1px rgba(0,0,0,0.82) !important;
  }

  .light-mode .intro-title span {
    color: transparent !important;
    -webkit-text-stroke: 1.5px rgba(0,0,0,0.86) !important;
  }

  .light-mode .logo-tag,
  .light-mode .service-card,
  .light-mode .solution-card,
  .light-mode .benefit-item,
  .light-mode .faq-item,
  .light-mode .solution-point,
  .light-mode .quote-step-card,
  .light-mode .quote-summary,
  .light-mode .quote-tab,
  .light-mode .quote-addon,
  .light-mode .quote-info-box,
  .light-mode .quote-total-box,
  .light-mode .quote-input,
  .light-mode .quote-select,
  .light-mode .quote-select-button,
  .light-mode .quote-select-menu,
  .light-mode .quote-select-option,
  .light-mode .testimonial-card,
  .light-mode .about-card,
  .light-mode .footer-icon-link {
    background: rgba(255,255,255,0.92) !important;
    border-color: rgba(0,0,0,0.1) !important;
    color: #111 !important;
    backdrop-filter: blur(18px) saturate(1.12) !important;
    -webkit-backdrop-filter: blur(18px) saturate(1.12) !important;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.62), 0 18px 44px rgba(0,0,0,0.08) !important;
  }

  .light-mode .testimonial-card:hover,
  .light-mode .solution-card:hover,
  .light-mode .benefit-item:hover,
  .light-mode .faq-item:hover,
  .light-mode .quote-tab:hover,
  .light-mode .quote-addon:hover,
  .light-mode .quote-select-button:hover,
  .light-mode .quote-select-button-open,
  .light-mode .quote-select-option:hover,
  .light-mode .about-card:hover {
    background: rgba(245,245,245,0.94) !important;
    border-color: rgba(0,0,0,0.16) !important;
    color: #111 !important;
    backdrop-filter: blur(18px) saturate(1.12) !important;
    -webkit-backdrop-filter: blur(18px) saturate(1.12) !important;
  }

  .light-mode .service-card {
    border: 0.5px solid rgba(0,0,0,0.1) !important;
  }

  .light-mode .service-card:hover {
    background: rgba(245,245,245,0.94) !important;
    border: 0.5px solid rgba(0,0,0,0.16) !important;
  }

  .light-mode .service-card:hover .service-title,
  .light-mode .service-card:hover .service-icon,
  .light-mode .testimonial-card:hover .testimonial-name,
  .light-mode .about-card:hover .about-card-title,
  .light-mode .about-card:hover {
    color: #111 !important;
  }

  .light-mode .service-card:hover p,
  .light-mode .testimonial-card:hover p,
  .light-mode .about-card:hover span,
  .light-mode .about-card:hover div {
    color: #333 !important;
  }

  .light-mode .service-card:hover .service-arrow {
    color: #000 !important;
  }

  .light-mode .quote-tab-active,
  .light-mode .quote-addon-active {
    background: #111 !important;
    color: #fff !important;
    border-color: #111 !important;
  }

  .light-mode .quote-primary-btn {
    background: #111 !important;
    color: #fff !important;
  }

  .light-mode .quote-select-option-active {
    background: #111 !important;
    color: #fff !important;
    border-color: #111 !important;
  }

  .light-mode .quote-select-button-icon,
  .light-mode .quote-select-option-icon,
  .light-mode .service-icon,
  .light-mode .solution-icon,
  .light-mode .benefit-icon,
  .light-mode .faq-icon {
    background: #f5f5f5 !important;
    border-color: #e5e5e5 !important;
    color: #111 !important;
  }

  .light-mode .quote-select-option-active .quote-select-option-icon {
    background: #111 !important;
    border-color: #111 !important;
    color: #fff !important;
  }

  .light-mode .about-card:hover .about-point-dot {
    color: #000 !important;
  }

  .light-mode .footer-icon-svg {
    color: #111 !important;
  }

  .light-mode .footer,
  .light-mode .footer-brand-name,
  .light-mode .footer-brand-sub,
  .light-mode .footer-col-title,
  .light-mode .footer-link,
  .light-mode .footer-icon-link,
  .light-mode .footer-copy {
    color: #222 !important;
  }

  .light-mode .mobile-menu {
    background: #fff !important;
    border-top: 0.5px solid #e5e5e5 !important;
  }

  .light-mode .mobile-menu a {
    color: #222 !important;
  }

  .light-mode .nav-dropdown-menu {
    background: #fff !important;
    border-color: #e5e5e5 !important;
    box-shadow: 0 18px 50px rgba(0,0,0,0.12) !important;
  }

  .light-mode .nav-dropdown-item {
    background: #fff !important;
    border-color: #eee !important;
  }

  .light-mode .nav-dropdown-item:hover {
    background: #f5f5f5 !important;
    border-color: #ddd !important;
  }

  .light-mode .nav-dropdown-item-title {
    color: #111 !important;
  }

  .light-mode .nav-dropdown-item-sub,
  .light-mode .mobile-service-link small {
    color: #555 !important;
  }

  .light-mode .intro-title {
    color: #111 !important;
  }

  .light-mode .about-point-dot {
    color: #000 !important;
  }

  .light-mode .service-icon {
    color: #000 !important;
  }

  .light-mode .intro-orb-ring-tech-a {
    border-color: rgba(255,255,255,0.18) !important;
    background: conic-gradient(from 18deg, rgba(255,255,255,0.68) 0deg 18deg, transparent 18deg 128deg, rgba(255,255,255,0.54) 128deg 152deg, transparent 152deg 262deg, rgba(255,255,255,0.62) 262deg 286deg, transparent 286deg 360deg) !important;
  }

  .light-mode .intro-orb-ring-tech-b {
    border-color: rgba(255,255,255,0.14) !important;
    background: conic-gradient(from 212deg, transparent 0deg 56deg, rgba(255,255,255,0.58) 56deg 70deg, transparent 70deg 192deg, rgba(255,255,255,0.45) 192deg 206deg, transparent 206deg 330deg, rgba(255,255,255,0.52) 330deg 344deg, transparent 344deg 360deg) !important;
  }

  .light-mode .intro-orb-ring-core {
    border-color: rgba(255,255,255,0.2) !important;
    box-shadow: inset 0 0 10px rgba(255,255,255,0.06) !important;
  }

  .light-mode .footer,
  .light-mode .logos-bar {
    border-color: #e6e6e6 !important;
  }

  .light-mode .whatsapp-float {
    background: #000 !important;
    color: #fff !important;
    border-color: #000 !important;
    box-shadow: none !important;
  }

  .light-mode .whatsapp-float:hover {
    box-shadow: none !important;
  }

  @media (max-width: 480px) {
    .hero-pill {
      margin-bottom: 20px !important;
    }

    .hero-title {
      text-align: center !important;
    }

    .hero-sub {
      padding-top: 8px !important;
    }

    .hero-actions {
      padding-top: 0 !important;
    }

    .hero-orb-wrap {
      width: 146px !important;
      height: 146px !important;
      order: 3 !important;
      margin-top: 2px !important;
    }

    .intro-frame {
      min-height: auto !important;
      padding: 18px !important;
      overflow: visible !important;
    }

    .intro-title {
      font-size: clamp(28px, 9.8vw, 42px) !important;
      max-width: 92% !important;
      margin-top: 2px !important;
    }

    .intro-tag {
      display: none !important;
    }

    .intro-orb-wrap {
      width: 150px !important;
      height: 150px !important;
      margin-top: 14px !important;
    }

    .intro-orb-logo {
      width: 118px !important;
      height: 118px !important;
    }

    .intro-orb-ring-tech-a {
      width: 166px !important;
      height: 166px !important;
    }

    .intro-orb-ring-tech-b {
      width: 142px !important;
      height: 142px !important;
    }

    .intro-orb-ring-core {
      width: 126px !important;
      height: 126px !important;
    }

    .hero-section {
      min-height: 100dvh !important;
      padding-top: 72px !important;
      padding-bottom: 0 !important;
    }

    .hero-content {
      min-height: calc(100dvh - 72px) !important;
      gap: 10px !important;
      max-width: 92vw !important;
      justify-content: center !important;
      padding: 6px 0 20px !important;
    }

    .hero-title {
      font-size: clamp(30px, 10vw, 42px) !important;
      line-height: 1.05 !important;
    }

    .hero-sub {
      font-size: 13px !important;
      max-width: 30ch !important;
    }

    .hero-actions {
      gap: 8px !important;
    }

    .hero-actions a {
      padding: 11px 16px !important;
      font-size: 11px !important;
      letter-spacing: 0.05em !important;
    }

    .hero-stats {
      display: grid !important;
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      gap: 10px 12px !important;
      width: 100% !important;
      max-width: 360px !important;
      margin-top: 48px !important;
    }

    .scroll-hint {
      bottom: 12px !important;
    }

    .hero-stats > div:last-child {
      grid-column: span 2;
    }
  }

`;

const styles = {
  root: { fontFamily: "'Outfit', sans-serif", background: "transparent", color: "#fff", minHeight: "100vh", position: "relative" },
  pageGrid: { position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none", zIndex: 0 },
  pageContent: { position: "relative", zIndex: 1 },

  // NAV
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.3s" },
  navInner: { maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", gap: 32 },
  navLogo: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none" },
  navBrand: { fontSize: 12, fontWeight: 500, letterSpacing: "0.24em", color: "#fff" },
  navLinks: { display: "flex", gap: 22, marginLeft: "auto", alignItems: "center" },
  navLink: { minHeight: 34, display: "inline-flex", alignItems: "center", fontSize: 12, color: "#777", textDecoration: "none", letterSpacing: "0.08em", fontWeight: 400 },
  navIconLink: { minHeight: 34, display: "inline-flex", alignItems: "center", gap: 7, fontSize: 12, color: "#777", textDecoration: "none", letterSpacing: "0.08em", fontWeight: 400, border: "0.5px solid transparent", borderRadius: 6, padding: "0 9px" },
  navIconSymbol: { color: "#aaa", lineHeight: 1, display: "inline-flex", alignItems: "center" },
  navDropdownWrap: { position: "relative", display: "flex", alignItems: "center", minHeight: 34 },
  navDropdownButton: { minHeight: 34, display: "inline-flex", alignItems: "center", gap: 6, fontSize: 12, color: "#777", textDecoration: "none", letterSpacing: "0.08em", fontWeight: 400, background: "transparent", border: "0.5px solid transparent", borderRadius: 6, padding: "0 9px", cursor: "pointer", fontFamily: "'Outfit', sans-serif", lineHeight: 1 },
  navDropdownChevron: { display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, lineHeight: 1, transformOrigin: "center" },
  navDropdownMenu: { position: "absolute", top: "calc(100% + 14px)", left: -16, width: 292, background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 12, padding: 8, display: "flex", flexDirection: "column", gap: 6, boxShadow: "0 18px 50px rgba(0,0,0,0.45)", zIndex: 140 },
  navDropdownItem: { display: "grid", gridTemplateColumns: "34px 1fr", alignItems: "center", gap: 12, background: "transparent", border: "1px solid transparent", borderRadius: 8, padding: "10px 12px", textDecoration: "none" },
  navDropdownItemIcon: { width: 32, height: 32, borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#aaa", background: "#0a0a0a", border: "0.5px solid #1a1a1a", flexShrink: 0 },
  navDropdownItemIconAccent: { color: "#fff", background: "#111" },
  navDropdownItemCopy: { display: "flex", flexDirection: "column", gap: 3, minWidth: 0 },
  navDropdownItemTitle: { color: "#fff", fontSize: 13, fontWeight: 600, letterSpacing: "0.02em", lineHeight: 1.25 },
  navDropdownItemSub: { color: "rgba(255,255,255,0.45)", fontSize: 11, lineHeight: 1.35 },
  themeToggle: { marginLeft: 24, width: 34, height: 34, border: "0.5px solid #2a2a2a", color: "#fff", background: "#111", borderRadius: "50%", padding: 0, cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", lineHeight: 1, flexShrink: 0 },
  navCta: { fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", color: "#000", background: "#fff", padding: "8px 20px", borderRadius: 4, textDecoration: "none", textTransform: "uppercase" },
  burger: { display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 },
  burgerLine: { width: 22, height: 1.5, background: "#fff", transition: "all 0.3s", display: "block" },
  mobileMenu: { background: "#000", borderTop: "0.5px solid #1a1a1a", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 },
  mobileMenuDivider: { height: 0.5, background: "#1a1a1a", margin: "4px 0" },
  mobileMenuLabel: { fontSize: 10, color: "#555", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'Space Mono', monospace", paddingTop: 4 },
  mobileLink: { fontSize: 15, color: "#aaa", textDecoration: "none", padding: "8px 0" },
  mobileServiceLink: { display: "grid", gridTemplateColumns: "32px 1fr", alignItems: "center", gap: 12, color: "#fff", textDecoration: "none", padding: "9px 10px", borderRadius: 10, border: "0.5px solid #1a1a1a", background: "#050505" },
  mobileServiceIcon: { width: 30, height: 30, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 8, color: "#aaa", background: "#0a0a0a", border: "0.5px solid #1a1a1a" },
  mobileServiceIconAccent: { color: "#fff", background: "#111" },
  mobileServiceCopy: { display: "flex", flexDirection: "column", gap: 2 },

  // INTRO POSTER
  introPoster: { background: "transparent", padding: "110px 24px 72px" },
  introFrame: { maxWidth: 1200, minHeight: 340, margin: "0 auto", position: "relative", display: "block", overflow: "hidden" },
  introTopTitle: { position: "relative", zIndex: 2, color: "#fff", fontSize: "clamp(34px, 5.6vw, 78px)", lineHeight: 0.98, letterSpacing: "-0.02em", textTransform: "uppercase", maxWidth: 760, margin: "0 auto", textAlign: "center" },
  introTopTitleAccent: { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" },
  introOrbWrap: { position: "relative", width: 300, height: 300, display: "flex", alignItems: "center", justifyContent: "center", margin: "56px auto 0" },
  introOrbRingTechA: { position: "absolute", width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.18)", background: "conic-gradient(from 18deg, rgba(255,255,255,0.68) 0deg 18deg, transparent 18deg 128deg, rgba(255,255,255,0.54) 128deg 152deg, transparent 152deg 262deg, rgba(255,255,255,0.62) 262deg 286deg, transparent 286deg 360deg)", WebkitMask: "radial-gradient(circle, transparent 62.5%, #000 63.7%, #000 67.3%, transparent 68.5%)", mask: "radial-gradient(circle, transparent 62.5%, #000 63.7%, #000 67.3%, transparent 68.5%)" },
  introOrbRingTechB: { position: "absolute", width: 270, height: 270, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.14)", background: "conic-gradient(from 212deg, transparent 0deg 56deg, rgba(255,255,255,0.58) 56deg 70deg, transparent 70deg 192deg, rgba(255,255,255,0.45) 192deg 206deg, transparent 206deg 330deg, rgba(255,255,255,0.52) 330deg 344deg, transparent 344deg 360deg)", WebkitMask: "radial-gradient(circle, transparent 65.5%, #000 66.5%, #000 69.5%, transparent 70.5%)", mask: "radial-gradient(circle, transparent 65.5%, #000 66.5%, #000 69.5%, transparent 70.5%)" },
  introOrbRingCore: { position: "absolute", width: 228, height: 228, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "inset 0 0 10px rgba(255,255,255,0.06)" },
  introOrbLogo: { position: "relative", zIndex: 2, width: 200, height: 200, borderRadius: "50%", overflow: "hidden", boxShadow: "0 22px 54px rgba(0,0,0,0.5)" },

  // HERO
  hero: { minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "80px 24px 40px" },
  heroBgCarousel: { position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" },
  heroBgSlide: { position: "absolute", inset: 0, backgroundSize: "cover", backgroundPosition: "center", transition: "opacity 1s ease-in-out" },
  heroOverlay: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.78)", zIndex: 1, pointerEvents: "none" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "40px 40px", zIndex: 2 },
  heroGlow: { position: "absolute", top: "20%", right: "10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 3 },
  heroContent: { maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: 28, position: "relative", zIndex: 5, flex: 1 },
  heroMain: { width: "100%", display: "grid", gridTemplateColumns: "minmax(0, 1fr) auto", alignItems: "center", gap: 36 },
  heroTextCol: { display: "flex", flexDirection: "column", gap: 16, minHeight: "62vh" },
  heroOrbWrap: { position: "relative", width: 290, height: 290, display: "flex", alignItems: "center", justifyContent: "center", justifySelf: "end" },
  heroPill: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, color: "#fff", border: "0.5px solid #2a2a2a", borderRadius: 99, padding: "6px 14px", letterSpacing: "0.06em", width: "fit-content" },
  heroPillDot: { width: 6, height: 6, borderRadius: "50%", background: "#fff", flexShrink: 0 },
  heroTitle: { fontSize: "clamp(42px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "0", textTransform: "uppercase" },
  heroTitleAccent: { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" },
  heroTitleAccentInline: { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.5)", marginLeft: "0.04em" },
  heroSub: { fontSize: 15, color: "#fff", lineHeight: 1.8, maxWidth: 420, fontWeight: 300 },
  heroActions: { display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" },
  btnPrimary: { fontSize: 12, fontWeight: 500, color: "#000", background: "#fff", padding: "12px 28px", borderRadius: 4, textDecoration: "none", letterSpacing: "0.08em", display: "inline-block", textTransform: "uppercase" },
  btnGhost: { fontSize: 12, fontWeight: 400, color: "#aaa", background: "transparent", padding: "12px 20px", borderRadius: 4, textDecoration: "none", border: "0.5px solid #2a2a2a", letterSpacing: "0.06em" },
  heroStats: { display: "flex", gap: 32, flexWrap: "wrap", marginTop: "auto" },
  heroStat: { display: "flex", flexDirection: "column", gap: 4 },
  heroStatVal: { fontSize: 26, fontWeight: 500, color: "#fff" },
  heroStatLabel: { fontSize: 11, color: "#777", letterSpacing: "0.08em", textTransform: "uppercase" },
  scrollHint: { position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 5 },
  scrollLine: { width: 0.5, height: 40, background: "linear-gradient(to bottom, transparent, #666)" },
  scrollText: { fontSize: 9, color: "#666", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Space Mono', monospace" },

  // LOGOS BAR
  logosBar: { borderTop: "0.5px solid #111", borderBottom: "0.5px solid #111", padding: "16px 0", overflow: "hidden" },
  logosInner: { maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", justifyContent: "center" },
  logoTag: { fontSize: 11, color: "#666", border: "0.5px solid #222", borderRadius: 4, padding: "4px 12px", letterSpacing: "0.06em", fontFamily: "'Space Mono', monospace", cursor: "default" },

  // ABOUT
  about: { padding: "100px 24px" },
  container: { maxWidth: 1200, margin: "0 auto" },
  aboutGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" },
  aboutLeft: { display: "flex", flexDirection: "column", gap: 20 },
  aboutRight: {},
  aboutTitle: { fontSize: "clamp(38px, 5.2vw, 64px)", fontWeight: 400, lineHeight: 1.06, letterSpacing: "-0.015em", textTransform: "uppercase" },
  aboutCta: { fontSize: 12, fontWeight: 500, color: "#000", background: "#fff", padding: "10px 18px", borderRadius: 4, textDecoration: "none", letterSpacing: "0.06em", display: "inline-block", textTransform: "uppercase", width: "fit-content", alignSelf: "flex-start", marginTop: 6 },
  sectionLabel: { fontSize: 10, color: "#777", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Space Mono', monospace", marginBottom: 12 },
  sectionTitle: { fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.01em", textTransform: "uppercase" },
  accent: { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" },
  aboutText: { fontSize: 15, color: "#8a8a8a", lineHeight: 1.85, fontWeight: 300 },
  aboutCard: { background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 12, padding: 36, minHeight: 430 },
  aboutCardTop: { display: "flex", alignItems: "center", gap: 18, marginBottom: 24 },
  aboutCardTitle: { fontSize: 18, fontWeight: 700, letterSpacing: "0.06em" },
  aboutCardSub: { fontSize: 13, color: "#777", fontFamily: "'Space Mono', monospace", marginTop: 6 },
  aboutDivider: { height: 0.5, background: "#1a1a1a", marginBottom: 24 },
  aboutPoints: { display: "flex", flexDirection: "column", gap: 14 },
  aboutPoint: { display: "flex", alignItems: "center", gap: 12, fontSize: 16, color: "#aaa" },
  aboutPointDot: { fontSize: 10, color: "#fff" },

  // SERVICES
  services: { padding: "100px 24px", background: "transparent" },
  sectionHeader: { textAlign: "center", marginBottom: 60 },
  sectionSub: { fontSize: 15, color: "#777", marginTop: 12, maxWidth: 480, margin: "12px auto 0" },
  servicesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 },
  serviceCard: { background: "#050505", border: "none", borderRadius: 12, padding: 28, display: "flex", flexDirection: "column", gap: 14, cursor: "pointer" },
  serviceCardActive: { border: "none", background: "#080808" },
  serviceIcon: { width: 46, height: 46, borderRadius: 12, color: "#fff", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", justifyContent: "center" },
  serviceTitle: { fontSize: 17, fontWeight: 500 },
  serviceDesc: { fontSize: 13, color: "#8a8a8a", lineHeight: 1.7, flex: 1 },
  serviceArrow: { fontSize: 18, color: "#666", marginTop: 8, display: "block" },

  // DIGITAL SOLUTIONS
  solutions: { padding: "100px 24px", borderTop: "0.5px solid #111", borderBottom: "0.5px solid #111" },
  splitHeader: { display: "grid", gridTemplateColumns: "1fr minmax(280px, 430px)", gap: 40, alignItems: "end", marginBottom: 48 },
  splitHeaderText: { fontSize: 15, color: "#777", lineHeight: 1.8, fontWeight: 300 },
  solutionsGrid: { display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 16 },
  solutionCard: { background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 12, padding: 28, display: "flex", flexDirection: "column", gap: 16, minHeight: 330 },
  solutionCardTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 },
  solutionIcon: { width: 46, height: 46, borderRadius: 12, color: "#fff", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  solutionTag: { width: "fit-content", fontSize: 10, color: "#aaa", border: "0.5px solid #222", borderRadius: 4, padding: "5px 10px", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'Space Mono', monospace" },
  solutionTitle: { fontSize: 21, fontWeight: 500, lineHeight: 1.22, textTransform: "uppercase" },
  solutionDesc: { fontSize: 14, color: "#8a8a8a", lineHeight: 1.75, fontWeight: 300, flex: 1 },
  solutionPoints: { display: "flex", flexWrap: "wrap", gap: 8, paddingTop: 8 },
  solutionPoint: { fontSize: 11, color: "#888", border: "0.5px solid #222", borderRadius: 4, padding: "6px 9px", background: "#070707", fontFamily: "'Space Mono', monospace" },

  // BENEFITS
  benefits: { padding: "100px 24px" },
  benefitsGrid: { display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 16 },
  benefitItem: { background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 12, padding: 26, minHeight: 240 },
  benefitTop: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 28 },
  benefitIcon: { width: 46, height: 46, borderRadius: 12, color: "#fff", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  benefitIndex: { fontSize: 13, color: "#444", fontFamily: "'Space Mono', monospace" },
  benefitTitle: { fontSize: 17, fontWeight: 500, marginBottom: 12, textTransform: "uppercase" },
  benefitDesc: { fontSize: 13, color: "#777", lineHeight: 1.75 },

  // PROCESS
  process: { padding: "100px 24px" },
  processGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0, marginTop: 60, position: "relative" },
  processStep: { padding: "0 24px 0 0", position: "relative" },
  processNum: { fontSize: 48, fontWeight: 800, color: "#111", lineHeight: 1, marginBottom: 16, fontFamily: "'Space Mono', monospace" },
  processLine: { position: "absolute", top: 28, left: "calc(100% - 12px)", width: "24px", height: 0.5, background: "#222" },
  processBody: {},
  processTitle: { fontSize: 16, fontWeight: 500, marginBottom: 8 },
  processDesc: { fontSize: 13, color: "#777", lineHeight: 1.7 },

  // FAQ
  faq: { padding: "100px 24px", borderTop: "0.5px solid #111" },
  faqGrid: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 },
  faqItem: { background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 12, padding: 28 },
  faqTop: { display: "flex", alignItems: "center", gap: 14, marginBottom: 10 },
  faqIcon: { width: 40, height: 40, borderRadius: 12, color: "#fff", background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.14)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 },
  faqQuestion: { fontSize: 17, fontWeight: 500, marginBottom: 0, textTransform: "uppercase" },
  faqAnswer: { fontSize: 14, color: "#777", lineHeight: 1.75 },

  // QUOTE
  quote: { padding: "100px 24px", borderTop: "0.5px solid #111" },
  quoteHero: { textAlign: "center", maxWidth: 760, margin: "0 auto 32px", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 },
  quoteBadge: { display: "inline-flex", alignItems: "center", gap: 8, width: "fit-content", color: "#aaa", border: "0.5px solid #222", background: "transparent", borderRadius: 99, padding: "6px 14px", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "'Space Mono', monospace" },
  quoteText: { fontSize: 15, color: "#777", lineHeight: 1.85, fontWeight: 300, maxWidth: 680 },
  quoteTabs: { width: "fit-content", margin: "0 auto 48px", display: "inline-flex", gap: 4, padding: 4, background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 12 },
  quoteTab: { border: "0.5px solid transparent", borderRadius: 10, background: "transparent", color: "#777", padding: "11px 22px", fontSize: 13, fontWeight: 600, fontFamily: "'Outfit', sans-serif", cursor: "pointer", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8 },
  quoteTabActive: { background: "#fff", color: "#000", borderColor: "#fff", boxShadow: "none" },
  quoteLayout: { display: "grid", gridTemplateColumns: "minmax(0, 1fr) 380px", gap: 28, alignItems: "start" },
  quoteSteps: { display: "flex", flexDirection: "column", gap: 24 },
  quoteStepCard: { background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 16, padding: 30, display: "flex", flexDirection: "column", gap: 20 },
  quoteStepTitleRow: { display: "flex", alignItems: "center", gap: 14 },
  quoteStepNumber: { width: 32, height: 32, borderRadius: "50%", background: "#fff", color: "#000", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, flexShrink: 0 },
  quoteStepTitle: { fontSize: 18, fontWeight: 600, color: "#fff", lineHeight: 1.3 },
  quoteSelect: { width: "100%", height: 50, background: "#070707", color: "#fff", border: "0.5px solid #222", borderRadius: 8, padding: "0 14px", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none" },
  quoteSelectWrap: { position: "relative", width: "100%" },
  quoteSelectButton: { width: "100%", minHeight: 54, background: "#070707", color: "#fff", border: "0.5px solid #222", borderRadius: 8, padding: "9px 12px", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, textAlign: "left" },
  quoteSelectButtonOpen: { background: "#0a0a0a", borderColor: "rgba(255,255,255,0.34)" },
  quoteSelectButtonMain: { display: "flex", alignItems: "center", gap: 12, minWidth: 0 },
  quoteSelectButtonIcon: { width: 32, height: 32, borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#aaa", background: "#050505", border: "0.5px solid #222", flexShrink: 0 },
  quoteSelectButtonCopy: { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 },
  quoteSelectCaret: { color: "#fff", lineHeight: 1, transition: "transform 0.2s ease", flexShrink: 0 },
  quoteSelectMenu: { position: "absolute", zIndex: 60, top: "calc(100% + 6px)", left: 0, right: 0, background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 10, padding: 7, display: "flex", flexDirection: "column", gap: 5, boxShadow: "0 18px 50px rgba(0,0,0,0.45)" },
  quoteSelectOption: { width: "100%", minHeight: 48, display: "grid", gridTemplateColumns: "32px 1fr", alignItems: "center", gap: 12, background: "transparent", color: "#aaa", border: "0.5px solid transparent", borderRadius: 8, padding: "8px 10px", textAlign: "left", cursor: "pointer", fontFamily: "'Outfit', sans-serif" },
  quoteSelectPlaceholderOption: { gridTemplateColumns: "1fr", color: "#fff" },
  quoteSelectOptionActive: { background: "#111", borderColor: "#fff", color: "#fff" },
  quoteSelectOptionIcon: { width: 30, height: 30, borderRadius: 8, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#aaa", background: "#0a0a0a", border: "0.5px solid #222", flexShrink: 0 },
  quoteSelectOptionCopy: { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 },
  quoteInfoBox: { background: "#070707", border: "0.5px solid #222", borderRadius: 12, padding: 22 },
  quoteInfoHeader: { display: "flex", alignItems: "center", gap: 12, marginBottom: 12 },
  quoteInfoIcon: { width: 42, height: 42, borderRadius: 12, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", background: "#111", border: "0.5px solid #222", flexShrink: 0 },
  quoteInfoTitle: { fontSize: 16, color: "#fff", fontWeight: 700, marginBottom: 8 },
  quoteInfoTagline: { fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.35, margin: 0 },
  quoteInfoText: { fontSize: 14, color: "#aaa", lineHeight: 1.7 },
  quoteBestFor: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 },
  quoteChip: { background: "#050505", border: "0.5px solid #222", borderRadius: 99, color: "#aaa", fontSize: 11, padding: "6px 10px", fontFamily: "'Space Mono', monospace" },
  quoteIncludes: { display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 8, marginTop: 16 },
  quoteInclude: { color: "#aaa", fontSize: 13, lineHeight: 1.4 },
  quoteAddonList: { display: "flex", flexDirection: "column", gap: 10 },
  quoteAddon: { display: "grid", gridTemplateColumns: "34px 1fr auto", gap: 14, alignItems: "center", background: "#070707", color: "#aaa", border: "0.5px solid #222", borderRadius: 10, padding: 16, textAlign: "left", cursor: "pointer", fontFamily: "'Outfit', sans-serif" },
  quoteAddonIcon: { width: 34, height: 34, borderRadius: 10, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#aaa", background: "#050505", border: "0.5px solid #222" },
  quoteAddonCopy: { minWidth: 0 },
  quoteAddonActive: { background: "#111", color: "#fff", borderColor: "#fff" },
  quoteSummary: { position: "sticky", top: 84, background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 18, padding: 28 },
  quoteSummaryTitle: { fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 4 },
  quoteSummarySub: { color: "#777", fontSize: 13, lineHeight: 1.6 },
  quoteSummaryRow: { display: "flex", justifyContent: "space-between", gap: 16, padding: "10px 0", color: "#aaa", fontSize: 14 },
  quoteDivider: { height: 0.5, background: "#222", margin: "14px 0" },
  quoteTotalBox: { background: "#070707", border: "0.5px solid #222", borderRadius: 12, padding: 18, display: "flex", flexDirection: "column", gap: 8 },
  quoteNote: { fontSize: 12, color: "#777", lineHeight: 1.65, margin: "16px 0" },
  quoteContactGrid: { display: "grid", gap: 10, marginTop: 18 },
  quoteInput: { width: "100%", minHeight: 46, background: "#070707", color: "#fff", border: "0.5px solid #222", borderRadius: 8, padding: "12px 14px", fontSize: 14, fontFamily: "'Outfit', sans-serif", outline: "none" },
  quoteTextarea: { minHeight: 130, resize: "vertical" },
  quotePrimaryBtn: { width: "100%", display: "inline-block", textAlign: "center", marginTop: 16, fontSize: 12, fontWeight: 600, color: "#000", background: "#fff", padding: "14px 20px", borderRadius: 10, textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" },
  quoteEmpty: { textAlign: "center", padding: "36px 8px", color: "#555", fontSize: 14, lineHeight: 1.65 },
  quoteEmptyIcon: { display: "inline-flex", marginBottom: 12, color: "#333" },
  customQuoteLayout: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, alignItems: "start" },
  customTitle: { fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.01em", textTransform: "uppercase", color: "#fff", fontFamily: "'Outfit', sans-serif" },
  customFeatureList: { display: "grid", gap: 12, marginTop: 8 },
  customFeature: { color: "#aaa", fontSize: 14, lineHeight: 1.5 },

  // TESTIMONIALS
  testimonials: { padding: "100px 24px", background: "transparent" },
  testimonialsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginTop: 60 },
  testimonialCard: { background: "#050505", border: "0.5px solid #1a1a1a", borderRadius: 12, padding: 28, display: "flex", flexDirection: "column", gap: 16 },
  testimonialQuote: { fontSize: 48, color: "#222", lineHeight: 1, fontFamily: "Georgia, serif" },
  testimonialText: { fontSize: 14, color: "#aaa", lineHeight: 1.8, flex: 1 },
  testimonialAuthor: { display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "0.5px solid #1a1a1a" },
  testimonialAvatar: { width: 36, height: 36, borderRadius: "50%", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 },
  testimonialName: { fontSize: 13, fontWeight: 500 },
  testimonialRole: { fontSize: 11, color: "#777", fontFamily: "'Space Mono', monospace", marginTop: 2 },

  // CTA
  ctaBanner: { padding: "100px 24px", position: "relative", overflow: "hidden", borderTop: "0.5px solid #111" },
  ctaBannerGlow: { position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)", pointerEvents: "none" },
  ctaContent: { maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 20, alignItems: "center" },
  ctaTitle: { fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.01em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" },
  ctaSub: { fontSize: 15, color: "#777", lineHeight: 1.7 },
  ctaActions: { display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" },

  // FOOTER
  footer: { background: "transparent", borderTop: "0.5px solid #111", padding: "60px 24px 24px" },
  footerTop: { maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, paddingBottom: 48, borderBottom: "0.5px solid #111", marginBottom: 24 },
  footerBrand: { display: "flex", alignItems: "center", gap: 12 },
  footerBrandName: { fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" },
  footerBrandSub: { fontSize: 10, color: "#666", letterSpacing: "0.2em", fontFamily: "'Space Mono', monospace" },
  footerLinks: { display: "grid", width: "100%", textAlign: "center", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 },
  footerCol: { display: "flex", flexDirection: "column", gap: 12, alignItems: "center" },
  footerColTitle: { fontSize: 11, color: "#fff", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 4, fontWeight: 500 },
  footerLink: { fontSize: 13, color: "#666", textDecoration: "none", display: "block", fontFamily: "'Outfit', sans-serif" },
  footerIconLink: { fontSize: 13, color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, border: "0.5px solid #222", borderRadius: 8, padding: "8px 12px", background: "#050505", fontFamily: "'Outfit', sans-serif" },
  footerBottom: { maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" },
  footerCopy: { fontSize: 11, color: "#555", fontFamily: "'Space Mono', monospace" },
  whatsappFloat: { position: "fixed", right: 24, bottom: 24, zIndex: 120, width: 56, height: 56, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#000", background: "#fff", border: "1px solid #fff", borderRadius: "50%", padding: 0, textDecoration: "none", boxShadow: "0 12px 34px rgba(255,255,255,0.12)" },
};
