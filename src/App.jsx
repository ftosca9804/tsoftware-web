import { useState, useEffect, useRef } from "react";
import tsoftwareLogo from "./assets/tsoftware-logo.jpeg";
import heroCarousel1 from "./assets/hero-carousel-1.jpeg";
import heroCarousel2 from "./assets/hero-carousel-2.jpg";
import heroCarousel3 from "./assets/hero-carousel-3.jpeg";

const Logo = ({ size = 32 }) => {
  return (
    <img
      src={tsoftwareLogo}
      alt="Logo TSoftware"
      width={size}
      height={size}
      style={{
        width: size,
        height: size,
        objectFit: "cover",
        objectPosition: "center 65%",
        borderRadius: "50%",
        display: "block",
      }}
    />
  );
};

const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const SERVICES = [
  {
    icon: "◈",
    title: "Desarrollo Web",
    desc: "Sitios y plataformas web a medida, rápidas, modernas y orientadas a resultados reales para tu negocio.",
  },
  {
    icon: "◉",
    title: "Apps Móviles",
    desc: "Aplicaciones nativas y multiplataforma para Android e iOS que escalan con tu negocio.",
  },
  {
    icon: "⬡",
    title: "Sistemas de Gestión",
    desc: "Software a medida para automatizar procesos, controlar stock, ventas y equipos desde un solo lugar.",
  },
  {
    icon: "◎",
    title: "IA para Negocios",
    desc: "Integramos inteligencia artificial en tu operación: chatbots, automatizaciones y análisis de datos.",
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

const HERO_SLIDES = [heroCarousel1, heroCarousel2, heroCarousel3];

export default function TSoftware() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const navBg = scrollY > 60;

  return (
    <div style={styles.root}>
      <style>{css}</style>
      <div style={styles.pageGrid} />
      <div style={styles.pageContent}>

      {/* NAV */}
      <nav style={{ ...styles.nav, background: navBg ? "rgba(0,0,0,0.92)" : "transparent", backdropFilter: navBg ? "blur(20px)" : "none", borderBottom: navBg ? "0.5px solid #1a1a1a" : "none" }}>
        <div style={styles.navInner} className="nav-inner">
          <div style={styles.navLogo}>
            <Logo size={36} />
            <span style={styles.navBrand} className="nav-brand">T-SOFTWARE</span>
          </div>
          <div style={styles.navLinks} className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} style={styles.navLink} className="nav-link">{l.label}</a>
            ))}
          </div>
          <a href="#contacto" style={styles.navCta} className="cta-btn nav-cta">Hablemos</a>
          <button style={styles.burger} className="burger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ ...styles.burgerLine, transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ ...styles.burgerLine, opacity: menuOpen ? 0 : 1 }} />
            <span style={{ ...styles.burgerLine, transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
        {menuOpen && (
          <div style={styles.mobileMenu}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} style={styles.mobileLink} onClick={() => setMenuOpen(false)}>{l.label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section ref={heroRef} id="inicio" style={styles.hero} className="hero-section">
        <div style={styles.heroBgCarousel}>
          {HERO_SLIDES.map((image, index) => (
            <div
              key={image}
              style={{
                ...styles.heroBgSlide,
                backgroundImage: `url(${image})`,
                opacity: activeHeroSlide === index ? 1 : 0,
              }}
            />
          ))}
        </div>
        <div style={styles.heroOverlay} />
        <div style={styles.heroGrid} />
        <div style={{ ...styles.heroGlow, transform: `translateY(${scrollY * 0.3}px)` }} />
        <div style={styles.heroContent} className="fade-in hero-content">
          <div style={styles.heroPill} className="slide-up hero-pill">
            <span style={styles.heroPillDot} />
            · Disponible para proyectos 
          </div>
          <h1 style={styles.heroTitle} className="slide-up-delay hero-title">
            T-SOFT<span style={styles.heroTitleAccentInline}>WARE</span>
          </h1>
          <p style={styles.heroSub} className="slide-up-delay-2 hero-sub">
            Apps, webs y sistemas a medida.<br />Con tecnología de punta.
          </p>
          <div style={styles.heroActions} className="slide-up-delay-3 hero-actions">
            <a href="#contacto" style={styles.btnPrimary} className="cta-btn">Empezar proyecto</a>
            <a href="#servicios" style={styles.btnGhost} className="ghost-btn">Ver servicios →</a>
          </div>
          <div style={styles.heroStats} className="hero-stats">
            {STATS.map((s) => (
              <div key={s.label} style={styles.heroStat}>
                <span style={styles.heroStatVal}>{s.value}</span>
                <span style={styles.heroStatLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.scrollHint} className="scroll-hint">
          <div style={styles.scrollLine} />
          <span style={styles.scrollText}>scroll</span>
        </div>
      </section>

      {/* INTRO POSTER */}
      <section style={styles.introPoster}>
        <div style={styles.introFrame} className="intro-frame">
          <div style={styles.introTopTitle} className="intro-title">
            Construimos el <span style={styles.introTopTitleAccent}>futuro digital</span> de tu negocio.
          </div>
          <div style={styles.introOrbWrap} className="intro-orb-wrap">
            <div style={styles.introOrbRingTechA} className="intro-orb-ring-tech-a" />
            <div style={styles.introOrbRingTechB} className="intro-orb-ring-tech-b" />
            <div style={styles.introOrbRingCore} className="intro-orb-ring-core" />
            <div style={styles.introOrbLogo} className="intro-orb-logo">
              <Logo size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS BAR */}
      <div style={styles.logosBar}>
        <div style={styles.logosInner} className="logos-inner">
          {["React", "Node.js", "Flutter", "Python", "OpenAI", "Firebase", "AWS", "PostgreSQL"].map((t) => (
            <span key={t} style={styles.logoTag} className="logo-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section style={styles.about} id="nosotros" className="about-section">
        <div style={styles.container}>
          <div style={styles.aboutGrid} className="about-grid">
            <div style={styles.aboutLeft}>
              <div style={styles.sectionLabel}>SOBRE NOSOTROS</div>
              <h2 style={styles.sectionTitle}>
                Una Familia<br />
                <span style={styles.accent}>Una visión.</span>
              </h2>
              <p style={styles.aboutText}>
                T-Software es una agencia formada por una familia apasionada por la tecnología.Tenemos la convicción de que cualquier negocio — sin importar su tamaño — merece acceso a soluciones digitales de primer nivel.
              </p>
              <p style={styles.aboutText}>
                No somos una fábrica de código. Somos un equipo que entiende tu negocio primero y construye la solución después. Esa es la diferencia.
              </p>
              <a href="#contacto" style={styles.btnPrimary} className="cta-btn">Conocé al equipo →</a>
            </div>
            <div style={styles.aboutRight}>
              <div style={styles.aboutCard} className="about-card">
                <div style={styles.aboutCardTop}>
                  <Logo size={48} />
                  <div>
                    <div style={styles.aboutCardTitle}>T-Software Agency</div>
                    <div style={styles.aboutCardSub}>Jujuy · Argentina · 2025</div>
                  </div>
                </div>
                <div style={styles.aboutDivider} />
                <div style={styles.aboutPoints}>
                  {["Desarrollo a medida 100%", "Comunicación directa con el equipo", "Sin intermediarios", "Precios transparentes", "Soporte post-entrega incluido"].map((p) => (
                    <div key={p} style={styles.aboutPoint}>
                      <span style={styles.aboutPointDot}>◆</span>
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
      <section style={styles.services} id="servicios" className="services-section">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLabel}>NUESTROS SERVICIOS</div>
            <h2 style={styles.sectionTitle}>Lo que construimos</h2>
            <p style={styles.sectionSub}>Soluciones digitales completas para negocios que quieren crecer.</p>
          </div>
          <div style={styles.servicesGrid} className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                style={{ ...styles.serviceCard, ...(activeService === i ? styles.serviceCardActive : {}) }}
                className="service-card"
                onMouseEnter={() => setActiveService(i)}
              >
                <div style={styles.serviceIcon}>{s.icon}</div>
                <h3 style={styles.serviceTitle}>{s.title}</h3>
                <p style={styles.serviceDesc}>{s.desc}</p>
                <div style={styles.serviceArrow} className="service-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={styles.process} className="process-section">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLabel}>CÓMO TRABAJAMOS</div>
            <h2 style={styles.sectionTitle}>Del concepto al producto<br /><span style={styles.accent}>en 4 pasos.</span></h2>
          </div>
          <div style={styles.processGrid} className="process-grid">
            {PROCESS.map((p, i) => (
              <div key={p.num} style={styles.processStep} className="process-step">
                <div style={styles.processNum}>{p.num}</div>
                {i < PROCESS.length - 1 && <div style={styles.processLine} className="process-line" />}
                <div style={styles.processBody}>
                  <h3 style={styles.processTitle}>{p.title}</h3>
                  <p style={styles.processDesc}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.testimonials} id="proyectos" className="testimonials-section">
        <div style={styles.container}>
          <div style={styles.sectionHeader}>
            <div style={styles.sectionLabel}>VOCES DE CLIENTES</div>
            <h2 style={styles.sectionTitle}>Lo que dicen<br />de nosotros.</h2>
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
                    <div style={styles.testimonialName}>{t.name}</div>
                    <div style={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={styles.ctaBanner} id="contacto" className="cta-section">
        <div style={styles.ctaBannerGlow} />
        <div style={styles.ctaContent} className="cta-content">
          <div style={styles.sectionLabel}>EMPEZÁ HOY</div>
          <h2 style={styles.ctaTitle}>¿Tu negocio listo<br />para el siguiente nivel?</h2>
          <p style={styles.ctaSub}>Primera consulta sin costo. Respondemos en menos de 24 horas.</p>
          <div style={styles.ctaActions} className="cta-actions">
            <a href="https://wa.me/5493884000000" style={styles.btnPrimary} className="cta-btn">
              Escribinos por WhatsApp
            </a>
            <a href="mailto:tsoftware@gmail.com" style={styles.btnGhost} className="ghost-btn">
              Enviar un email →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer} className="footer">
        <div style={styles.footerTop} className="footer-top">
          <div style={styles.footerBrand}>
            <Logo size={36} />
            <div>
              <div style={styles.footerBrandName}>T-SOFTWARE</div>
              <div style={styles.footerBrandSub}>AGENCY</div>
            </div>
          </div>
          <div style={styles.footerLinks} className="footer-links">
            <div style={styles.footerCol}>
              <div style={styles.footerColTitle}>Servicios</div>
              {["Desarrollo Web", "Apps Móviles", "Sistemas", "IA para Negocios"].map((l) => (
                <a key={l} href="#" style={styles.footerLink} className="footer-link">{l}</a>
              ))}
            </div>
            <div style={styles.footerCol}>
              <div style={styles.footerColTitle}>Empresa</div>
              {["Nosotros", "Proceso", "Testimonios", "Contacto"].map((l) => (
                <a key={l} href="#" style={styles.footerLink} className="footer-link">{l}</a>
              ))}
            </div>
            <div style={styles.footerCol}>
              <div style={styles.footerColTitle}>Contacto</div>
              <a href="https://instagram.com/t_software.agency" style={styles.footerLink} className="footer-link">@t_software.agency</a>
              <a href="https://wa.me/5493884000000" style={styles.footerLink} className="footer-link">WhatsApp</a>
              <span style={styles.footerLink}>Jujuy, Argentina</span>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom} className="footer-bottom">
          <span style={styles.footerCopy}>© 2025 T-Software Agency. Todos los derechos reservados.</span>
          <div style={styles.footerSocials}>
            {["IG", "WA", "GH"].map((s) => (
              <a key={s} href="#" style={styles.footerSocial} className="footer-social">{s}</a>
            ))}
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #000;
    color: #fff;
  }
  html { scroll-behavior: smooth; }

  .fade-in { animation: fadeIn 1s ease forwards; }
  .slide-up { animation: slideUp 0.8s ease forwards; }
  .slide-up-delay { animation: slideUp 0.8s 0.15s ease both; }
  .slide-up-delay-2 { animation: slideUp 0.8s 0.3s ease both; }
  .slide-up-delay-3 { animation: slideUp 0.8s 0.45s ease both; }

  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }

  .scroll-hint { animation: scrollHint 2s ease-in-out infinite; }
  @keyframes scrollHint { 0%,100% { opacity: 0.4; transform: translateY(0); } 50% { opacity: 1; transform: translateY(8px); } }

  .nav-link { transition: color 0.2s; }
  .nav-link:hover { color: #fff !important; }

  .cta-btn { transition: all 0.2s !important; }
  .cta-btn:hover { background: #e0e0e0 !important; transform: translateY(-2px); box-shadow: 0 8px 32px rgba(255,255,255,0.15) !important; }

  .ghost-btn { transition: all 0.2s !important; }
  .ghost-btn:hover { background: rgba(255,255,255,0.08) !important; transform: translateY(-2px); }

  .service-card { transition: all 0.3s cubic-bezier(0.4,0,0.2,1) !important; }
  .service-card:hover { transform: translateY(-8px) !important; border-color: rgba(255,255,255,0.3) !important; background: rgba(255,255,255,0.06) !important; }

  .service-arrow { transition: transform 0.2s !important; }
  .service-card:hover .service-arrow { transform: translate(4px,-4px) !important; }

  .about-card { transition: transform 0.3s !important; }
  .about-card:hover { transform: translateY(-4px) !important; }

  .testimonial-card { transition: all 0.3s !important; }
  .testimonial-card:hover { border-color: rgba(255,255,255,0.25) !important; transform: translateY(-4px) !important; }

  .logo-tag { transition: all 0.2s !important; }
  .logo-tag:hover { color: #fff !important; border-color: #fff !important; }

  .footer-link { transition: color 0.2s !important; }
  .footer-link:hover { color: #fff !important; }

  .footer-social { transition: all 0.2s !important; }
  .footer-social:hover { background: #fff !important; color: #000 !important; }

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

    .hero-section,
    .about-section,
    .services-section,
    .process-section,
    .testimonials-section,
    .cta-section,
    .footer {
      padding-left: 16px !important;
      padding-right: 16px !important;
    }

    .hero-section {
      min-height: 100svh !important;
      padding-top: 76px !important;
      padding-bottom: 20px !important;
      display: flex !important;
      align-items: center !important;
    }

    .hero-content {
      min-height: calc(100svh - 110px) !important;
      gap: 12px !important;
      align-items: center !important;
      justify-content: space-between !important;
      text-align: center !important;
      max-width: 640px !important;
      margin: 0 auto !important;
      padding: 8px 0 4px !important;
    }

    .hero-pill {
      margin-bottom: 0 !important;
    }

    .hero-content > * {
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .hero-title {
      font-size: clamp(32px, 9vw, 48px) !important;
      line-height: 1.08 !important;
      text-wrap: balance !important;
      text-align: center !important;
    }

    .hero-sub {
      font-size: 14px !important;
      max-width: 34ch !important;
      line-height: 1.65 !important;
      text-wrap: balance !important;
      padding-top: 8px !important;
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
    }

    .hero-stats {
      gap: 14px 22px !important;
      justify-content: center !important;
      text-align: center !important;
      margin-top: 0 !important;
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
    .testimonials-grid,
    .process-grid,
    .footer-links {
      grid-template-columns: 1fr !important;
    }

    .service-card,
    .testimonial-card,
    .process-step {
      padding: 22px !important;
    }

    .process-step {
      border: 0.5px solid #1a1a1a !important;
      border-radius: 10px !important;
      margin-bottom: 12px !important;
    }

    .process-line {
      display: none !important;
    }

    .footer-bottom {
      flex-direction: column !important;
      gap: 14px !important;
      align-items: flex-start !important;
    }

    .intro-frame {
      min-height: auto !important;
      padding: 20px !important;
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

  @media (max-width: 480px) {
    .hero-pill {
      margin-bottom: 0 !important;
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

    .intro-frame {
      min-height: auto !important;
      padding: 18px !important;
    }

    .intro-title {
      font-size: clamp(28px, 9.8vw, 42px) !important;
      max-width: 92% !important;
      margin-top: 10px !important;
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
      min-height: 100svh !important;
      padding-top: 76px !important;
      padding-bottom: 16px !important;
    }

    .hero-content {
      min-height: calc(100svh - 102px) !important;
      gap: 10px !important;
      max-width: 92vw !important;
      justify-content: space-between !important;
      padding: 6px 0 0 !important;
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
      margin-top: 0 !important;
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
  root: { fontFamily: "'Outfit', sans-serif", background: "transparent", color: "#fff", overflowX: "hidden", minHeight: "100vh", position: "relative" },
  pageGrid: { position: "fixed", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none", zIndex: 0 },
  pageContent: { position: "relative", zIndex: 1 },

  // NAV
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "all 0.3s" },
  navInner: { maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", gap: 32 },
  navLogo: { display: "flex", alignItems: "center", gap: 10, textDecoration: "none" },
  navBrand: { fontSize: 12, fontWeight: 500, letterSpacing: "0.24em", color: "#fff" },
  navLinks: { display: "flex", gap: 28, marginLeft: "auto" },
  navLink: { fontSize: 12, color: "#666", textDecoration: "none", letterSpacing: "0.08em", fontWeight: 400 },
  navCta: { fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", color: "#000", background: "#fff", padding: "8px 20px", borderRadius: 4, textDecoration: "none", textTransform: "uppercase" },
  burger: { display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 },
  burgerLine: { width: 22, height: 1.5, background: "#fff", transition: "all 0.3s", display: "block" },
  mobileMenu: { background: "#000", borderTop: "0.5px solid #1a1a1a", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 12 },
  mobileLink: { fontSize: 15, color: "#888", textDecoration: "none", padding: "8px 0" },

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
  heroOverlay: { position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)", zIndex: 1, pointerEvents: "none" },
  heroGrid: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)", backgroundSize: "40px 40px", zIndex: 2 },
  heroGlow: { position: "absolute", top: "20%", right: "10%", width: 600, height: 600, background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)", pointerEvents: "none", zIndex: 3 },
  heroContent: { maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: 28, position: "relative", zIndex: 5, flex: 1 },
  heroPill: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, color: "#666", border: "0.5px solid #2a2a2a", borderRadius: 99, padding: "6px 14px", letterSpacing: "0.06em", width: "fit-content" },
  heroPillDot: { width: 6, height: 6, borderRadius: "50%", background: "#fff", flexShrink: 0 },
  heroTitle: { fontSize: "clamp(42px, 6vw, 80px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "0", textTransform: "uppercase" },
  heroTitleAccent: { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.5)" },
  heroTitleAccentInline: { color: "transparent", WebkitTextStroke: "1.5px rgba(255,255,255,0.5)", marginLeft: "0.04em" },
  heroSub: { fontSize: 15, color: "#666", lineHeight: 1.8, maxWidth: 420, fontWeight: 300 },
  heroActions: { display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" },
  btnPrimary: { fontSize: 12, fontWeight: 500, color: "#000", background: "#fff", padding: "12px 28px", borderRadius: 4, textDecoration: "none", letterSpacing: "0.08em", display: "inline-block", textTransform: "uppercase" },
  btnGhost: { fontSize: 12, fontWeight: 400, color: "#888", background: "transparent", padding: "12px 20px", borderRadius: 4, textDecoration: "none", border: "0.5px solid #2a2a2a", letterSpacing: "0.06em" },
  heroStats: { display: "flex", gap: 32, flexWrap: "wrap", marginTop: 8 },
  heroStat: { display: "flex", flexDirection: "column", gap: 4 },
  heroStatVal: { fontSize: 26, fontWeight: 500, color: "#fff" },
  heroStatLabel: { fontSize: 11, color: "#555", letterSpacing: "0.08em", textTransform: "uppercase" },
  scrollHint: { position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, zIndex: 5 },
  scrollLine: { width: 0.5, height: 40, background: "linear-gradient(to bottom, transparent, #444)" },
  scrollText: { fontSize: 9, color: "#444", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Space Mono', monospace" },

  // LOGOS BAR
  logosBar: { borderTop: "0.5px solid #111", borderBottom: "0.5px solid #111", padding: "16px 0", overflow: "hidden" },
  logosInner: { maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" },
  logoTag: { fontSize: 11, color: "#444", border: "0.5px solid #222", borderRadius: 4, padding: "4px 12px", letterSpacing: "0.06em", fontFamily: "'Space Mono', monospace", cursor: "default" },

  // ABOUT
  about: { padding: "100px 24px" },
  container: { maxWidth: 1200, margin: "0 auto" },
  aboutGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" },
  aboutLeft: { display: "flex", flexDirection: "column", gap: 20 },
  aboutRight: {},
  sectionLabel: { fontSize: 10, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Space Mono', monospace", marginBottom: 12 },
  sectionTitle: { fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.01em", textTransform: "uppercase" },
  accent: { color: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.4)" },
  aboutText: { fontSize: 15, color: "#666", lineHeight: 1.85, fontWeight: 300 },
  aboutCard: { background: "#0a0a0a", border: "0.5px solid #1a1a1a", borderRadius: 12, padding: 28 },
  aboutCardTop: { display: "flex", alignItems: "center", gap: 16, marginBottom: 20 },
  aboutCardTitle: { fontSize: 14, fontWeight: 700, letterSpacing: "0.06em" },
  aboutCardSub: { fontSize: 11, color: "#555", fontFamily: "'Space Mono', monospace", marginTop: 4 },
  aboutDivider: { height: 0.5, background: "#1a1a1a", marginBottom: 20 },
  aboutPoints: { display: "flex", flexDirection: "column", gap: 12 },
  aboutPoint: { display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#888" },
  aboutPointDot: { fontSize: 8, color: "#fff" },

  // SERVICES
  services: { padding: "100px 24px", background: "transparent" },
  sectionHeader: { textAlign: "center", marginBottom: 60 },
  sectionSub: { fontSize: 15, color: "#555", marginTop: 12, maxWidth: 480, margin: "12px auto 0" },
  servicesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 },
  serviceCard: { background: "#0a0a0a", border: "0.5px solid #1a1a1a", borderRadius: 12, padding: 28, display: "flex", flexDirection: "column", gap: 14, cursor: "pointer" },
  serviceCardActive: { borderColor: "rgba(255,255,255,0.2)", background: "#121212" },
  serviceIcon: { fontSize: 24, color: "#fff" },
  serviceTitle: { fontSize: 17, fontWeight: 500 },
  serviceDesc: { fontSize: 13, color: "#666", lineHeight: 1.7, flex: 1 },
  serviceArrow: { fontSize: 18, color: "#444", marginTop: 8, display: "block" },

  // PROCESS
  process: { padding: "100px 24px" },
  processGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 0, marginTop: 60, position: "relative" },
  processStep: { padding: "0 24px 0 0", position: "relative" },
  processNum: { fontSize: 48, fontWeight: 800, color: "#111", lineHeight: 1, marginBottom: 16, fontFamily: "'Space Mono', monospace" },
  processLine: { position: "absolute", top: 28, left: "calc(100% - 12px)", width: "24px", height: 0.5, background: "#222" },
  processBody: {},
  processTitle: { fontSize: 16, fontWeight: 500, marginBottom: 8 },
  processDesc: { fontSize: 13, color: "#555", lineHeight: 1.7 },

  // TESTIMONIALS
  testimonials: { padding: "100px 24px", background: "transparent" },
  testimonialsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginTop: 60 },
  testimonialCard: { background: "#0a0a0a", border: "0.5px solid #1a1a1a", borderRadius: 12, padding: 28, display: "flex", flexDirection: "column", gap: 16 },
  testimonialQuote: { fontSize: 48, color: "#222", lineHeight: 1, fontFamily: "Georgia, serif" },
  testimonialText: { fontSize: 14, color: "#888", lineHeight: 1.8, flex: 1 },
  testimonialAuthor: { display: "flex", alignItems: "center", gap: 12, paddingTop: 16, borderTop: "0.5px solid #1a1a1a" },
  testimonialAvatar: { width: 36, height: 36, borderRadius: "50%", background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#fff", flexShrink: 0 },
  testimonialName: { fontSize: 13, fontWeight: 500 },
  testimonialRole: { fontSize: 11, color: "#555", fontFamily: "'Space Mono', monospace", marginTop: 2 },

  // CTA
  ctaBanner: { padding: "100px 24px", position: "relative", overflow: "hidden", borderTop: "0.5px solid #111" },
  ctaBannerGlow: { position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)", pointerEvents: "none" },
  ctaContent: { maxWidth: 640, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 20, alignItems: "center" },
  ctaTitle: { fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.01em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif" },
  ctaSub: { fontSize: 15, color: "#555", lineHeight: 1.7 },
  ctaActions: { display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" },

  // FOOTER
  footer: { background: "transparent", borderTop: "0.5px solid #111", padding: "60px 24px 24px" },
  footerTop: { maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60, paddingBottom: 48, borderBottom: "0.5px solid #111", marginBottom: 24 },
  footerBrand: { display: "flex", alignItems: "center", gap: 12 },
  footerBrandName: { fontSize: 13, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase" },
  footerBrandSub: { fontSize: 10, color: "#444", letterSpacing: "0.2em", fontFamily: "'Space Mono', monospace" },
  footerLinks: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 },
  footerCol: { display: "flex", flexDirection: "column", gap: 12 },
  footerColTitle: { fontSize: 11, color: "#fff", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 4, fontWeight: 500 },
  footerLink: { fontSize: 13, color: "#444", textDecoration: "none" },
  footerBottom: { maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" },
  footerCopy: { fontSize: 11, color: "#333", fontFamily: "'Space Mono', monospace" },
  footerSocials: { display: "flex", gap: 8 },
  footerSocial: { width: 32, height: 32, border: "0.5px solid #222", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#555", textDecoration: "none", fontFamily: "'Space Mono', monospace" },
};
