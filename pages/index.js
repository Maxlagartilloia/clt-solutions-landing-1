// pages/index.js
import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Año en el footer
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    // Menú móvil
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");

    const toggleMenu = (event) => {
      event.stopPropagation();
      if (mobileNav) {
        mobileNav.classList.toggle("hidden");
      }
    };

    const closeOnClickOutside = (event) => {
      if (!mobileNav || !mobileBtn) return;
      const clickInsideMenu = mobileNav.contains(event.target);
      const clickOnToggle = mobileBtn.contains(event.target);
      if (!clickInsideMenu && !clickOnToggle && !mobileNav.classList.contains("hidden")) {
        mobileNav.classList.add("hidden");
      }
    };

    if (mobileBtn && mobileNav) {
      mobileBtn.addEventListener("click", toggleMenu);
      document.addEventListener("click", closeOnClickOutside);
    }

    // Cuenta regresiva 15 min
    let remaining = 15 * 60;
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");
    let timer;

    if (minsEl && secsEl) {
      const updateCountdown = () => {
        const m = Math.floor(remaining / 60);
        const s = remaining % 60;

        minsEl.textContent = String(m).padStart(2, "0");
        secsEl.textContent = String(s).padStart(2, "0");

        if (remaining > 0) {
          remaining -= 1;
        } else if (timer) {
          clearInterval(timer);
        }
      };

      updateCountdown();
      timer = setInterval(updateCountdown, 1000);
    }

    return () => {
      if (mobileBtn && toggleMenu) {
        mobileBtn.removeEventListener("click", toggleMenu);
      }
      document.removeEventListener("click", closeOnClickOutside);
      if (timer) clearInterval(timer);
    };
  }, []);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>
          Impulso Digital 360 | Página web de $480 gratis (solo pagas dominio)
        </title>
        <meta
          name="description"
          content="Te diseño una página web profesional de ventas valorada en $480 totalmente gratis. Solo pagas $97 por dominio y hosting 1 año. Oferta especial para emprendedores luchadores en Ecuador."
        />
        <meta
          name="keywords"
          content="página web gratis, página web para emprendedores, solo dominio y hosting, landing de ventas Ecuador, CL Tech Solutions, Impulso Digital 360"
        />
        <meta name="author" content="CL Tech Solutions" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Tu página de $480 gratis · Solo pagas dominio y hosting"
        />
        <meta
          property="og:description"
          content="Si eres emprendedor luchador, diseñamos tu página web de ventas (valor real $480) totalmente gratis. Solo pagas $97 por dominio y hosting 1 año."
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/s2YtHvzB/IMG_0156.png"
        />
        <meta
          property="og:url"
          content="https://www.crisslombeida.com/impulso-digital-360"
        />
        <meta property="og:site_name" content="CL Tech Solutions" />
      </Head>

      {/* Estilos globales para fondos / tarjetas */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: "Montserrat", system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          background: radial-gradient(circle at top, #11141b 0, #05060a 45%, #000 100%);
          color: #fff;
        }
        .bg-section-dark {
          background: radial-gradient(
            circle at top,
            #11141b 0,
            #05060a 50%,
            #000 100%
          );
        }
        .bg-section-gray {
          background: linear-gradient(to bottom, #11141b, #05060a);
        }
        .badge {
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .card-hotmart {
          border-radius: 1.25rem;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(5, 6, 10, 0.92);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.85);
        }
        .mockup-page {
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(135deg, #1f2937, #020617);
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.9);
          overflow: hidden;
        }
        .mockup-bar {
          height: 14px;
          background: linear-gradient(to right, #4b5563, #111827);
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 10px;
        }
        .mockup-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #4b5563;
        }
        .price-main {
          font-size: 2.3rem;
          font-weight: 700;
          line-height: 1.1;
        }
        .btn-primary-hotmart {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          border-radius: 999px;
          padding: 0.9rem 1.8rem;
          font-size: 0.9rem;
          font-weight: 600;
          background: linear-gradient(135deg, #f97316, #ea580c);
          color: #0b0b0b;
          box-shadow: 0 14px 40px rgba(249, 115, 22, 0.6);
          transition: transform 0.15s ease, box-shadow 0.15s ease,
            filter 0.15s ease;
        }
        .btn-primary-hotmart:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 55px rgba(249, 115, 22, 0.9);
          filter: brightness(1.05);
        }
        .btn-primary-hotmart:active {
          transform: translateY(0);
          box-shadow: none;
          filter: brightness(0.98);
        }
        .btn-ghost {
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.9rem 1.7rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.85);
          background: transparent;
          transition: all 0.15s ease;
        }
        .btn-ghost:hover {
          border-color: #11d7e3;
          color: #11d7e3;
          background: rgba(17, 215, 227, 0.08);
        }
        .count-pill {
          font-size: 1.1rem;
          font-weight: 600;
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          background: #020617;
          border: 1px solid rgba(248, 250, 252, 0.1);
          min-width: 56px;
          text-align: center;
        }
        details summary::-webkit-details-marker {
          display: none;
        }
        details summary::marker {
          display: none;
        }
      `}</style>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2" onClick={scrollToSection("inicio")}>
            <img
              src="https://i.postimg.cc/s2YtHvzB/IMG_0156.png"
              alt="CL Tech Solutions"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain"
            />
          </a>

          <a
            href="#formulario"
            className="hidden md:inline-flex btn-primary-hotmart"
            onClick={scrollToSection("formulario")}
          >
            Sí, quiero aplicar a mi página ahora
          </a>

          <button
            id="mobileMenuBtn"
            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/25"
          >
            <span className="sr-only">Abrir menú</span>
            <svg
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h12" />
            </svg>
          </button>
        </div>

        <nav
          id="mobileNav"
          className="md:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-4 hidden text-sm"
        >
          <div className="flex flex-col gap-2 text-white/85">
            <a href="#inicio" className="hover:text-[#11D7E3] transition" onClick={scrollToSection("inicio")}>
              Inicio
            </a>
            <a href="#para-quien" className="hover:text-[#11D7E3] transition" onClick={scrollToSection("para-quien")}>
              ¿Para quién es?
            </a>
            <a href="#lo-que-recibes" className="hover:text-[#11D7E3] transition" onClick={scrollToSection("lo-que-recibes")}>
              Lo que recibes
            </a>
            <a href="#modelos" className="hover:text-[#11D7E3] transition" onClick={scrollToSection("modelos")}>
              Modelos incluidos
            </a>
            <a href="#pasos" className="hover:text-[#11D7E3] transition" onClick={scrollToSection("pasos")}>
              Cómo funciona
            </a>
            <a href="#faq" className="hover:text-[#11D7E3] transition" onClick={scrollToSection("faq")}>
              Preguntas frecuentes
            </a>
            <a href="#formulario" className="hover:text-[#11D7E3] transition" onClick={scrollToSection("formulario")}>
              Formulario
            </a>
            <a href="#final" className="hover:text-[#11D7E3] transition" onClick={scrollToSection("final")}>
              Último paso
            </a>
            <a
              href="#formulario"
              className="mt-2 btn-primary-hotmart justify-center"
              onClick={scrollToSection("formulario")}
            >
              Quiero aplicar a mi página
            </a>
          </div>
        </nav>
      </header>

      <main id="inicio">
        {/* HERO */}
        <section className="bg-section-dark pt-10 pb-14 md:pt-16 md:pb-18">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.15fr,0.95fr] gap-10 items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="badge px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[#11D7E3]">
                  Impulso Digital 360 · CL Tech Solutions
                </span>
                <span className="badge px-3 py-1 rounded-full border border-[#F97316]/40 bg-[#F97316]/15 text-[#F97316] font-semibold">
                  Oferta especial para emprendedores luchadores
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                Te diseño una página web profesional de{" "}
                <span className="line-through text-red-400">$480</span>
                <br />
                <span className="text-[#11D7E3]">TOTALMENTE GRATIS.</span>
              </h1>

              <p className="text-sm sm:text-base text-white/75 mb-3">
                Solo por haber dado el primer paso y estar aquí, el diseño completo de tu{" "}
                <strong>página web de ventas</strong> va por cuenta de{" "}
                <strong>CL Tech Solutions</strong>.
              </p>
              <p className="text-sm sm:text-base text-white/75 mb-4">
                Tú solo cubres el{" "}
                <strong className="text-[#11D7E3] text-base">$97 USD</strong> del dominio y hosting por 1 año.
                Nada más. Sin mensualidades ocultas, sin letras pequeñas.
              </p>

              <div className="card-hotmart px-4 py-4 mb-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="text-xs text-white/75">
                    <p className="font-semibold text-[#11D7E3] mb-1">
                      Lo que normalmente pagarías:
                      <span className="line-through text-red-400 font-bold text-base ml-1">
                        $480
                      </span>
                    </p>
                    <p>
                      Hoy el diseño te sale <strong className="text-emerald-400">en $0</strong>. Solo pagas{" "}
                      <strong className="text-[#11D7E3]">$97</strong> por dominio y hosting 1 año.
                    </p>
                    <p className="mt-1 text-[11px] text-white/60">
                      Si cierras esta página y vuelves “después”, puede que la oferta ya no esté igual.
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-[11px]">
                    <span className="text-white/70 mb-1">Tiempo restante de esta pantalla:</span>
                    <div className="flex items-center gap-2">
                      <div className="count-pill">
                        <span id="cd-mins">15</span>
                        <span className="text-xs ml-1">min</span>
                      </div>
                      <div className="count-pill">
                        <span id="cd-secs">00</span>
                        <span className="text-xs ml-1">seg</span>
                      </div>
                    </div>
                    <span className="text-[#F97316] mt-1">
                      ⏳ Cuando llegue a 00:00 no prometo mantener lo mismo.
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-3">
                <a
                  href="#formulario"
                  className="btn-primary-hotmart"
                  onClick={scrollToSection("formulario")}
                >
                  Sí, quiero aplicar a mi página web ahora
                </a>
                <button
                  className="btn-ghost"
                  onClick={scrollToSection("para-quien")}
                >
                  Quiero entender si esto es para mí
                </button>
              </div>

              <p className="text-[11px] text-white/60">
                Ideal para restaurantes, heladerías, comida rápida, servicios profesionales, tiendas pequeñas y
                negocios que venden todos los días pero aún no tienen página de ventas.
              </p>
            </div>

            <div className="space-y-4">
              <div className="mockup-page">
                <div className="mockup-bar">
                  <span className="mockup-dot" />
                  <span className="mockup-dot" />
                  <span className="mockup-dot" />
                </div>
                <div className="p-4 sm:p-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#11D7E3] mb-1">
                    Ejemplo visual de tu página
                  </p>
                  <h2 className="text-base sm:text-lg font-semibold mb-2">
                    Así se ve una página de ventas real cuando la dejamos lista
                  </h2>
                  <p className="text-xs text-white/70 mb-3">
                    Título claro, oferta directa, secciones simples, botones visibles y un diseño que no distrae: hace
                    que la gente te escriba, no que se pierda.
                  </p>

                  <div className="grid grid-cols-3 gap-2 text-[10px] text-white/70">
                    <div className="rounded-lg bg-gradient-to-br from-sky-500/40 via-sky-700/60 to-slate-900 p-2 flex flex-col justify-between">
                      <span className="font-semibold text-[11px] mb-1">Servicios</span>
                      <p className="mb-2">Página para abogado, contador, técnico, etc.</p>
                      <span className="text-[10px] text-slate-100/80">
                        Botón: “Agenda por WhatsApp”
                      </span>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-amber-400/40 via-amber-600/60 to-slate-900 p-2 flex flex-col justify-between">
                      <span className="font-semibold text-[11px] mb-1">Restaurante</span>
                      <p className="mb-2">Menú, combos y ubicación en un solo lugar.</p>
                      <span className="text-[10px] text-slate-100/80">Botón: “Pedir ahora”</span>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-pink-400/40 via-pink-600/60 to-slate-900 p-2 flex flex-col justify-between">
                      <span className="font-semibold text-[11px] mb-1">Heladería</span>
                      <p className="mb-2">Sabores, fotos y pedidos rápidos.</p>
                      <span className="text-[10px] text-slate-100/80">
                        Botón: “Quiero mi helado”
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-white/60 text-center px-2">
                No te vamos a llenar de efectos raros. Te vamos a dejar una página{" "}
                <strong>sencilla, limpia y vendedora</strong>, como las que hacen que la gente saque la tarjeta en los
                embudos de Hotmart.
              </p>
            </div>
          </div>
        </section>

        {/* FORMULARIO PRINCIPAL */}
        <section id="formulario" className="bg-section-dark py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Cuéntame de tu emprendimiento y te respondo por WhatsApp
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-6">
              Este formulario llega directo al equipo de <strong>CL Tech Solutions</strong>. Llénalo solo si realmente
              quieres avanzar con tu página.
            </p>

            <form
              name="lead-impulso"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="card-hotmart px-5 py-6 grid gap-4 text-sm"
            >
              <input type="hidden" name="form-name" value="lead-impulso" />
              <p className="hidden">
                <label>
                  No llenar este campo: <input name="bot-field" />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs text-white/70">Nombre y apellido</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[#11D7E3]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-white/70">WhatsApp (con código de país)</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[#11D7E3]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/70">
                  ¿Cómo se llama tu emprendimiento o negocio?
                </label>
                <input
                  type="text"
                  name="negocio"
                  required
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[#11D7E3]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/70">
                  ¿Qué vendes actualmente y cómo estás consiguiendo clientes?
                </label>
                <textarea
                  name="que-vendes"
                  rows={3}
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[#11D7E3]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/70">¿Qué modelo te interesa más?</label>
                <select
                  name="modelo-interes"
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[#11D7E3]"
                >
                  <option value="servicios">Modelo 1 · Servicios profesionales</option>
                  <option value="restaurante">Modelo 2 · Restaurante / comida</option>
                  <option value="heladeria">Modelo 3 · Heladería / postres</option>
                  <option value="otro">Otro / No estoy seguro aún</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs text-white/70">
                  ¿Algo más que debamos saber antes de contactarte?
                </label>
                <textarea
                  name="mensaje"
                  rows={2}
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm outline-none focus:border-[#11D7E3]"
                />
              </div>

              <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <button type="submit" className="btn-primary-hotmart justify-center">
                  Enviar mis datos · Quiero que me contacten
                </button>
                <p className="text-[11px] text-white/60">
                  Al enviar, autorizas a CL Tech Solutions a escribirte por WhatsApp para seguir el proceso de tu
                  página web.
                </p>
              </div>
            </form>
          </div>
        </section>

        {/* PARA QUIÉN ES */}
        <section id="para-quien" className="bg-section-gray py-14 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              ¿Es realmente para ti esta oferta?
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-7 max-w-3xl">
              No es para “curiosos”. Es para quienes ya están en la calle, cocinando, atendiendo, vendiendo, pero
              todavía no tienen una página que trabaje por ellos 24/7.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="card-hotmart px-5 py-5">
                <h3 className="font-semibold text-emerald-400 mb-2 text-base">✅ Sí es para ti si...</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Ya vendes algo (comida, servicios, productos), aunque sea solo por WhatsApp o redes.</li>
                  <li>
                    • Te sientes emprendedor luchador: madrugas, trabajas, y no estás esperando que “alguien te
                    rescate”.
                  </li>
                  <li>
                    • Sabes que tu tiempo vale más que seguir posponiendo esto un año más.
                  </li>
                  <li>
                    • Estás dispuesto a enviar la información que te pida el equipo y responder mensajes.
                  </li>
                </ul>
              </div>
              <div className="card-hotmart px-5 py-5">
                <h3 className="font-semibold text-red-400 mb-2 text-base">⛔ No es para ti si...</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Quieres todo gratis, pero no estás dispuesto a moverte ni responder.</li>
                  <li>• Solo quieres “ver cómo es” sin intención real de usar la página.</li>
                  <li>• Piensas que una página sola va a hacer milagros sin que tú hagas nada.</li>
                  <li>• Te da pereza incluso escribir un mensaje.</li>
                </ul>
              </div>
            </div>

            <div className="mt-7 flex flex-col items-center gap-3">
              <a
                href="#formulario"
                className="btn-primary-hotmart"
                onClick={scrollToSection("formulario")}
              >
                Sí, soy de los que se mueven · Quiero aplicar
              </a>
              <p className="text-[11px] text-white/60">
                Si sigues leyendo, el contador sigue bajando. No digas luego que no tuviste oportunidad.
              </p>
            </div>
          </div>
        </section>

        {/* LO QUE RECIBES */}
        <section
          id="lo-que-recibes"
          className="bg-section-dark py-14 border-t border-white/10"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                ¿Qué vas a tener exactamente por esos $97?
              </h2>
              <p className="text-sm md:text-base text-white/75 mb-5 max-w-3xl">
                Nada de humo. Esto es lo que realmente vas a tener online cuando terminemos:
              </p>

              <ul className="space-y-2.5 text-sm text-white/85 mb-6">
                <li>
                  • <strong>Página web de ventas</strong> de una sola página, pensada para que la gente entienda rápido
                  y te escriba.
                </li>
                <li>
                  • <strong>Diseño completo valorado en $480</strong>, incluido sin costo para ti en esta oferta.
                </li>
                <li>• <strong>Dominio</strong> (.com u otro disponible) registrado por 1 año a tu nombre.</li>
                <li>• <strong>Hosting 1 año</strong>, para que la página esté en línea 24/7.</li>
                <li>
                  • <strong>Botón directo a contacto</strong> visible en la página.
                </li>
                <li>
                  • <strong>Integración con Google Maps</strong> si tienes local físico (para que te encuentren fácil).
                </li>
                <li>
                  • <strong>Estructura lista</strong> para conectar automatizaciones y bots cuando llegue el momento.
                </li>
              </ul>

              <div className="grid sm:grid-cols-3 gap-3 text-xs text-white/80 mb-6">
                <div className="card-hotmart px-3 py-3">
                  <p className="font-semibold text-[#11D7E3] mb-1">
                    No necesitas saber de webs
                  </p>
                  <p>
                    CL Tech Solutions se encarga de lo técnico. Tú solo dices qué vendes y con qué nombre.
                  </p>
                </div>
                <div className="card-hotmart px-3 py-3">
                  <p className="font-semibold text-[#11D7E3] mb-1">
                    En 48 horas ves tu página
                  </p>
                  <p>
                    Una vez que envíes la información, no te vas a quedar esperando semanas.
                  </p>
                </div>
                <div className="card-hotmart px-3 py-3">
                  <p className="font-semibold text-[#11D7E3] mb-1">
                    Pensada para vender
                  </p>
                  <p>
                    No es una tarjeta de presentación. Es un lugar al que la gente llega a pedirte.
                  </p>
                </div>
              </div>

              <a
                href="#formulario"
                className="btn-primary-hotmart"
                onClick={scrollToSection("formulario")}
              >
                Listo, quiero esto para mi negocio
              </a>
            </div>

            <div className="card-hotmart px-5 py-6">
              <p className="text-xs text-white/60 mb-1">Comparación honesta</p>
              <h3 className="text-lg font-semibold mb-4">
                Si fueras a pagar todo por separado...
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span>Diseño y desarrollo de página de ventas</span>
                  <span className="line-through text-red-400 font-semibold">
                    $480
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dominio 1 año</span>
                  <span className="text-white/80">$20 - $25</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Hosting 1 año</span>
                  <span className="text-white/80">$60 - $80</span>
                </div>
                <div className="border-t border-white/10 pt-3 mt-2 flex items-center justify-between">
                  <span className="font-semibold text-white/85">
                    Lo que te tocaría pagar normalmente:
                  </span>
                  <span className="line-through text-red-400 font-semibold">
                    $560+
                  </span>
                </div>
                <div className="border-t border-[#11D7E3]/50 pt-3 mt-2 flex items-center justify-between">
                  <span className="font-semibold text-[#11D7E3]">
                    Lo que pagas en esta oferta:
                  </span>
                  <span className="price-main text-[#11D7E3]">$97</span>
                </div>
              </div>

              <p className="mt-3 text-[11px] text-white/60">
                La única razón por la que CL Tech Solutions hace esto así es porque quiere que más emprendedores entren
                al juego digital, y a la vez posicionar la marca en todo el país con casos reales.
              </p>
            </div>
          </div>
        </section>

        {/* MODELOS */}
        <section id="modelos" className="bg-section-gray py-16 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              3 tipos de página incluidos en la misma inversión de{" "}
              <span className="text-[#11D7E3]">$97</span>
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-7 max-w-3xl">
              No pagas extra por el tipo de negocio. Con la misma inversión de{" "}
              <strong>$97</strong> eliges el modelo que más te sirve hoy.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <article className="card-hotmart px-5 py-5 flex flex-col h-full">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/55 mb-1">
                  Modelo 1
                </p>
                <h3 className="text-lg font-semibold text-[#11D7E3] mb-1">
                  Página para servicios profesionales
                </h3>
                <p className="text-xs text-white/70 mb-3">
                  Para abogados, contadores, cerrajeros, técnicos, consultorios, belleza, entrenadores, clases, etc.
                </p>
                <ul className="space-y-1.5 text-white/85 mb-4">
                  <li>• Sección “Quién soy / Quiénes somos”.</li>
                  <li>• Servicios claros, con beneficios y no solo títulos.</li>
                  <li>• Bloque de testimonios (si ya tienes).</li>
                  <li>• Botones visibles para que te contacten.</li>
                  <li>• Google Maps si atiendes en un lugar físico.</li>
                </ul>
                <a
                  href="#formulario"
                  className="btn-primary-hotmart mt-auto justify-center"
                  onClick={scrollToSection("formulario")}
                >
                  Quiero la página para servicios
                </a>
              </article>

              <article className="card-hotmart px-5 py-5 flex flex-col h-full border-[#11D7E3]/70 border">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-1">
                  Modelo 2 · Recomendado
                </p>
                <h3 className="text-lg font-semibold text-[#11D7E3] mb-1">
                  Página para restaurantes y comida
                </h3>
                <p className="text-xs text-white/70 mb-3">
                  Para hamburguesas, papas, pizzas, hot dogs, cafeterías, cevicherías, comida rápida y locales
                  pequeños.
                </p>
                <ul className="space-y-1.5 text-white/85 mb-4">
                  <li>• Menú digital con tus platos principales y combos.</li>
                  <li>• Sección de promos o “menú del día”.</li>
                  <li>• Ubicación en Google Maps y horarios claros.</li>
                  <li>• Botón listo para recibir pedidos.</li>
                  <li>• Estructura lista para poner QR en mesas y para delivery.</li>
                </ul>
                <a
                  href="#formulario"
                  className="btn-primary-hotmart mt-auto justify-center"
                  onClick={scrollToSection("formulario")}
                >
                  Quiero la página para mi restaurante
                </a>
              </article>

              <article className="card-hotmart px-5 py-5 flex flex-col h-full">
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/55 mb-1">
                  Modelo 3
                </p>
                <h3 className="text-lg font-semibold text-[#11D7E3] mb-1">
                  Página para heladerías y postres
                </h3>
                <p className="text-xs text-white/70 mb-3">
                  Ideal para heladerías, malteadas, postres fríos, cafeterías dulces y negocios de antojos.
                </p>
                <ul className="space-y-1.5 text-white/85 mb-4">
                  <li>• Catálogo de sabores o postres principales.</li>
                  <li>• Sección de combos, conos, vasos especiales.</li>
                  <li>• Google Maps para que te encuentren rápido.</li>
                  <li>• Botón listo para pedidos inmediatos.</li>
                  <li>• Preparada para mostrar fotos muy llamativas.</li>
                </ul>
                <a
                  href="#formulario"
                  className="btn-primary-hotmart mt-auto justify-center"
                  onClick={scrollToSection("formulario")}
                >
                  Quiero la página para mi heladería
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* PASOS */}
        <section id="pasos" className="bg-section-dark py-16 border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              ¿Cómo es el proceso práctico?
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-8 max-w-3xl mx-auto">
              No vas a programar nada. No vas a pelearte con plataformas. Si sabes usar WhatsApp, ya puedes con este
              proceso.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 text-sm text-left">
              <div className="card-hotmart px-4 py-4">
                <p className="text-[11px] text-white/60 mb-1">Paso 1</p>
                <p className="font-semibold text-[#11D7E3] mb-1">
                  Llenas el formulario
                </p>
                <p className="text-xs text-white/80">
                  Nos cuentas quién eres, qué vendes y qué modelo te interesa. Con eso ya podemos ayudarte mejor.
                </p>
              </div>
              <div className="card-hotmart px-4 py-4">
                <p className="text-[11px] text-white/60 mb-1">Paso 2</p>
                <p className="font-semibold text-[#11D7E3] mb-1">
                  Te escribimos por WhatsApp
                </p>
                <p className="text-xs text-white/80">
                  El equipo de CL Tech Solutions se comunica contigo, aclara dudas y te pide lo mínimo para arrancar.
                </p>
              </div>
              <div className="card-hotmart px-4 py-4">
                <p className="text-[11px] text-white/60 mb-1">Paso 3</p>
                <p className="font-semibold text-[#11D7E3] mb-1">
                  Ves tu página en 48h
                </p>
                <p className="text-xs text-white/80">
                  Revisamos contigo, ajustamos detalles y te explicamos cómo usarla para vender desde el primer día.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-col items-center gap-3">
              <a
                href="#formulario"
                className="btn-primary-hotmart"
                onClick={scrollToSection("formulario")}
              >
                Ya entendí · Quiero llenar el formulario
              </a>
              <p className="text-[11px] text-white/60">
                Si esto te parece complicado, el problema no es la página. Es que sigues pensando en pequeño.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-section-gray py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Preguntas que ya sé que vas a tener
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-6">
              Te las respondo antes de que las uses como excusa para seguir posponiendo.
            </p>

            <div className="space-y-3 text-sm">
              <details className="card-hotmart px-4 py-3" open>
                <summary className="flex items-center justify-between cursor-pointer">
                  <span>¿Qué pasa después del primer año?</span>
                  <span className="text-[#11D7E3] text-lg ml-3">+</span>
                </summary>
                <div className="mt-2 text-white/80 text-xs">
                  Después del primer año, si quieres seguir usando la página, solo renuevas el dominio/hosting. Si
                  decides no renovar, simplemente la página deja de estar en línea. No hay multa, no hay castigo.
                </div>
              </details>

              <details className="card-hotmart px-4 py-3">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span>¿Puedo pagar en partes los $97?</span>
                  <span className="text-[#11D7E3] text-lg ml-3">+</span>
                </summary>
                <div className="mt-2 text-white/80 text-xs">
                  No. Justamente el trato es: tú haces un esfuerzo una sola vez, pagas los $97, y CL Tech Solutions hace
                  el esfuerzo de regalarte el diseño completo de $480. Si esto ya te parece imposible, no estás listo
                  para dar el siguiente paso.
                </div>
              </details>

              <details className="card-hotmart px-4 py-3">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span>¿Y si todavía no tengo logo o fotos profesionales?</span>
                  <span className="text-[#11D7E3] text-lg ml-3">+</span>
                </summary>
                <div className="mt-2 text-white/80 text-xs">
                  No es excusa. Se puede arrancar con un diseño limpio, colores base y fotos sencillas. Luego, cuando
                  tengas logo/fotos, se cambian. Lo importante es que empieces.
                </div>
              </details>

              <details className="card-hotmart px-4 py-3">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span>¿Solo funciona para Shushufindi o Sucumbíos?</span>
                  <span className="text-[#11D7E3] text-lg ml-3">+</span>
                </summary>
                <div className="mt-2 text-white/80 text-xs">
                  No. CL Tech Solutions atiende a emprendedores de todo Ecuador. Todo se coordina por WhatsApp, y tu
                  página funciona desde cualquier ciudad.
                </div>
              </details>

              <details className="card-hotmart px-4 py-3">
                <summary className="flex items-center justify-between cursor-pointer">
                  <span>¿Qué pasa si no vendo nada con la página?</span>
                  <span className="text-[#11D7E3] text-lg ml-3">+</span>
                </summary>
                <div className="mt-2 text-white/80 text-xs">
                  Seré directo: una página sola no hace magia. Lo que sí hace es darte un lugar profesional donde mandar
                  a la gente que ya te está viendo en redes, en la calle o por recomendación. Si no publicas, no
                  compartes tu página, no respondes, no sigues, ningún embudo del mundo te va a salvar.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* FINAL */}
        <section id="final" className="bg-section-dark py-16 border-t border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Aquí decides si sigues jugando en pequeño o no
            </h2>
            <p className="text-sm md:text-base text-white/75 mb-6">
              Tienes dos opciones muy claras:
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-sm text-left mb-7">
              <div className="card-hotmart px-4 py-4">
                <p className="font-semibold text-white mb-1">
                  Opción 1 · Cerrar la página
                </p>
                <p className="text-xs text-white/80">
                  Seguir vendiendo solo por WhatsApp y redes, sin un lugar profesional donde mandar a la gente. Volver
                  en 6 meses, ver a otros con página, QR, pedidos más constantes... y decir “yo también quería”.
                </p>
              </div>
              <div className="card-hotmart px-4 py-4 border-[#F97316]/60 border">
                <p className="font-semibold text-[#11D7E3] mb-1">
                  Opción 2 · Llenar el formulario ahora
                </p>
                <p className="text-xs text-white/80">
                  Asegurar tu página web de{" "}
                  <span className="line-through text-red-400">$480</span> pagando solo los{" "}
                  <strong className="text-[#11D7E3]">$97 de dominio y hosting</strong>, y en 48 horas tener un lugar
                  serio donde cerrar ventas.
                </p>
              </div>
            </div>

            <a
              href="#formulario"
              className="btn-primary-hotmart"
              onClick={scrollToSection("formulario")}
            >
              No quiero seguir igual · Quiero llenar el formulario
            </a>

            <p className="mt-3 text-[11px] text-white/60">
              El contador no se va a detener porque tengas miedo. Tus clientes tampoco.
            </p>
          </div>
        </section>
      </main>

      {/* BOTÓN FLOTANTE → FORMULARIO */}
      <button
        onClick={scrollToSection("formulario")}
        className="fixed z-40 bottom-4 right-4 sm:bottom-5 sm:right-5 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_18px_70px_rgba(16,185,129,0.9)]"
      >
        <span className="sr-only">Ir al formulario</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-7 h-7 text-white">
          <path
            fill="currentColor"
            d="M16 2a2 2 0 0 1 1.41.59l8 8a2 2 0 1 1-2.82 2.82L18 8.83V26a2 2 0 1 1-4 0V8.83l-4.59 4.58a2 2 0 0 1-2.82-2.82l8-8A2 2 0 0 1 16 2Z"
          />
        </svg>
      </button>

      <footer className="border-t border-white/10 py-6 bg-black/95">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/55">
          <p>
            © <span id="year"></span> CL Tech Solutions · Impulso Digital 360
          </p>
          <p>Página web de $480 gratis · Solo pagas dominio y hosting.</p>
        </div>
      </footer>
    </>
  );
}
