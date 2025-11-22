import Head from "next/head";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Menú móvil
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileNav = document.getElementById("mobileNav");

    const handleToggle = (event) => {
      event.stopPropagation();
      mobileNav?.classList.toggle("hidden");
    };

    const handleDocumentClick = (event) => {
      if (!mobileNav) return;
      const clickInsideMenu = mobileNav.contains(event.target);
      const clickOnToggle = mobileBtn?.contains(event.target);
      if (!clickInsideMenu && !clickOnToggle && !mobileNav.classList.contains("hidden")) {
        mobileNav.classList.add("hidden");
      }
    };

    mobileBtn?.addEventListener("click", handleToggle);
    document.addEventListener("click", handleDocumentClick);

    // Countdown 15 minutos
    let remaining = 15 * 60;
    const minsEl = document.getElementById("cd-mins");
    const secsEl = document.getElementById("cd-secs");
    let timer;

    const updateCountdown = () => {
      if (!minsEl || !secsEl) return;
      const m = Math.floor(remaining / 60);
      const s = remaining % 60;
      minsEl.textContent = String(m).padStart(2, "0");
      secsEl.textContent = String(s).padStart(2, "0");
      if (remaining > 0) {
        remaining--;
      } else {
        clearInterval(timer);
      }
    };

    if (minsEl && secsEl) {
      updateCountdown();
      timer = setInterval(updateCountdown, 1000);
    }

    return () => {
      mobileBtn?.removeEventListener("click", handleToggle);
      document.removeEventListener("click", handleDocumentClick);
      if (timer) clearInterval(timer);
    };
  }, []);

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

        {/* OG / Redes */}
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

        {/* Fuente Montserrat */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="overflow-x-hidden">
        {/* NAVBAR */}
        <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
            {/* Logo grande */}
            <a href="#inicio" className="flex items-center gap-2">
              <img
                src="https://i.postimg.cc/s2YtHvzB/IMG_0156.png"
                alt="CL Tech Solutions"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </a>

            {/* CTA escritorio */}
            <a
              href="https://wa.me/593990945636?text=Hola%2C%20acabo%20de%20ver%20la%20oferta%20de%20la%20p%C3%A1gina%20de%20480%20gratis%20y%20quiero%20aprovechar%20pagando%20solo%20los%2097%20USD%20de%20dominio%20y%20hosting."
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex btn-primary-hotmart"
            >
              Sí, quiero aprovechar la oferta ahora
            </a>

            {/* Menu móvil */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h12"
                />
              </svg>
            </button>
          </div>

          {/* Menu móvil */}
          <nav
            id="mobileNav"
            className="md:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-4 hidden text-sm"
          >
            <div className="flex flex-col gap-2 text-white/85">
              <a href="#inicio" className="hover:text-clturq transition">
                Inicio
              </a>
              <a href="#para-quien" className="hover:text-clturq transition">
                ¿Para quién es?
              </a>
              <a
                href="#lo-que-recibes"
                className="hover:text-clturq transition"
              >
                Lo que recibes
              </a>
              <a href="#modelos" className="hover:text-clturq transition">
                Modelos incluidos
              </a>
              <a href="#pasos" className="hover:text-clturq transition">
                Cómo funciona
              </a>
              <a href="#faq" className="hover:text-clturq transition">
                Preguntas frecuentes
              </a>
              <a href="#final" className="hover:text-clturq transition">
                Último paso
              </a>
              <a
                href="https://wa.me/593990945636?text=Hola%2C%20quiero%20aprovechar%20la%20oferta%20de%20la%20p%C3%A1gina%20de%20480%20gratis.%20Estoy%20listo%20para%20pagar%20solo%20los%2097%20USD%20del%20dominio%20y%20hosting."
                target="_blank"
                rel="noreferrer"
                className="mt-2 btn-primary-hotmart justify-center"
              >
                Quiero mi página ahora
              </a>
            </div>
          </nav>
        </header>

        <main id="inicio">
          {/* HERO */}
          <section className="bg-section-dark pt-10 pb-14 md:pt-16 md:pb-18">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1.15fr,0.95fr] gap-10 items-center">
              {/* Columna texto */}
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="badge px-3 py-1 rounded-full border border-white/15 bg-white/5 text-clturq">
                    Impulso Digital 360 · CL Tech Solutions
                  </span>
                  <span className="badge px-3 py-1 rounded-full border border-claccent/40 bg-claccent/15 text-claccent font-semibold">
                    Oferta especial para emprendedores luchadores
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                  Te diseño una página web profesional de
                  <span className="line-through text-red-400"> $480</span>
                  <br />
                  <span className="text-clturq">TOTALMENTE GRATIS.</span>
                </h1>

                <p className="text-sm sm:text-base text-white/75 mb-3">
                  Solo por haber dado el primer paso y estar aquí, el diseño
                  completo de tu <strong>página web de ventas</strong> va por
                  cuenta de <strong>CL Tech Solutions</strong>.
                </p>
                <p className="text-sm sm:text-base text-white/75 mb-4">
                  Tú solo cubres el{" "}
                  <strong className="text-clturq text-base">$97 USD</strong> del
                  dominio y hosting por 1 año. Nada más. Sin mensualidades
                  ocultas, sin letras pequeñas.
                </p>

                {/* Barra tipo Hotmart */}
                <div className="card-hotmart px-4 py-4 mb-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-xs text-white/75">
                      <p className="font-semibold text-clturq mb-1">
                        Lo que normalmente pagarías:
                        <span className="line-through text-red-400 font-bold text-base ml-1">
                          $480
                        </span>
                      </p>
                      <p>
                        Hoy el diseño te sale{" "}
                        <strong className="text-emerald-400">en $0</strong>.
                        Solo pagas{" "}
                        <strong className="text-clturq">$97</strong> por dominio
                        y hosting 1 año.
                      </p>
                      <p className="mt-1 text-[11px] text-white/60">
                        Si cierras esta página y vuelves “después”, puede que la
                        oferta ya no esté igual.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-1 text-[11px]">
                      <span className="text-white/70 mb-1">
                        Tiempo restante de esta pantalla:
                      </span>
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
                      <span className="text-claccent mt-1">
                        ⏳ Cuando llegue a 00:00 no prometo mantener lo mismo.
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 mb-3">
                  <a
                    href="https://wa.me/593990945636?text=Hola%2C%20quiero%20aprovechar%20la%20oferta%20de%20la%20p%C3%A1gina%20de%20480%20gratis%20de%20CL%20Tech%20Solutions.%20Estoy%20listo%20para%20pagar%20solo%20los%2097%20USD%20del%20dominio%20y%20hosting."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-hotmart"
                  >
                    Sí, quiero mi página web ahora
                  </a>
                  <button
                    onClick={() =>
                      document
                        .getElementById("para-quien")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="btn-ghost"
                  >
                    Quiero entender si esto es para mí
                  </button>
                </div>

                <p className="text-[11px] text-white/60">
                  Ideal para restaurantes, heladerías, comida rápida, servicios
                  profesionales, tiendas pequeñas y negocios que venden todos
                  los días pero aún no tienen página de ventas.
                </p>
              </div>

              {/* Columna mockup */}
              <div className="space-y-4">
                <div className="mockup-page">
                  <div className="mockup-bar">
                    <span className="mockup-dot" />
                    <span className="mockup-dot" />
                    <span className="mockup-dot" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-clturq mb-1">
                      Ejemplo visual de tu página
                    </p>
                    <h2 className="text-base sm:text-lg font-semibold mb-2">
                      Así se ve una página de ventas real cuando la dejamos lista
                    </h2>
                    <p className="text-xs text-white/70 mb-3">
                      Título claro, oferta directa, secciones simples, botones a
                      WhatsApp visibles y un diseño que no distrae: hace que la
                      gente te escriba, no que se pierda.
                    </p>

                    <div className="grid grid-cols-3 gap-2 text-[10px] text-white/70">
                      <div className="rounded-lg bg-gradient-to-br from-sky-500/40 via-sky-700/60 to-slate-900 p-2 flex flex-col justify-between">
                        <span className="font-semibold text-[11px] mb-1">
                          Servicios
                        </span>
                        <p className="mb-2">
                          Página para abogado, contador, técnico, etc.
                        </p>
                        <span className="text-[10px] text-slate-100/80">
                          Botón: “Agenda por WhatsApp”
                        </span>
                      </div>
                      <div className="rounded-lg bg-gradient-to-br from-amber-400/40 via-amber-600/60 to-slate-900 p-2 flex flex-col justify-between">
                        <span className="font-semibold text-[11px] mb-1">
                          Restaurante
                        </span>
                        <p className="mb-2">
                          Menú, combos y ubicación en un solo lugar.
                        </p>
                        <span className="text-[10px] text-slate-100/80">
                          Botón: “Pedir ahora”
                        </span>
                      </div>
                      <div className="rounded-lg bg-gradient-to-br from-pink-400/40 via-pink-600/60 to-slate-900 p-2 flex flex-col justify-between">
                        <span className="font-semibold text-[11px] mb-1">
                          Heladería
                        </span>
                        <p className="mb-2">
                          Sabores, fotos y pedidos rápidos.
                        </p>
                        <span className="text-[10px] text-slate-100/80">
                          Botón: “Quiero mi helado”
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-white/60 text-center px-2">
                  No te vamos a llenar de efectos raros. Te vamos a dejar una
                  página <strong>sencilla, limpia y vendedora</strong>, como las
                  que hacen que la gente saque la tarjeta en los embudos de
                  Hotmart.
                </p>
              </div>
            </div>
          </section>

          {/* PARA QUIÉN ES */}
          <section
            id="para-quien"
            className="bg-section-gray py-14 border-t border-white/10"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                ¿Es realmente para ti esta oferta?
              </h2>
              <p className="text-sm md:text-base text-white/75 mb-7 max-w-3xl">
                No es para “curiosos”. Es para quienes ya están en la calle,
                cocinando, atendiendo, vendiendo, pero todavía no tienen una
                página que trabaje por ellos 24/7.
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="card-hotmart px-5 py-5">
                  <h3 className="font-semibold text-emerald-400 mb-2 text-base">
                    ✅ Sí es para ti si...
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>
                      • Ya vendes algo (comida, servicios, productos), aunque
                      sea solo por WhatsApp o redes.
                    </li>
                    <li>
                      • Te sientes emprendedor luchador: madrugas, trabajas, y
                      no estás esperando que “alguien te rescate”.
                    </li>
                    <li>
                      • Sabes que tu tiempo vale más que seguir posponiendo esto
                      un año más.
                    </li>
                    <li>
                      • Estás dispuesto a enviar la información que te pida el
                      equipo y responder mensajes.
                    </li>
                  </ul>
                </div>
                <div className="card-hotmart px-5 py-5">
                  <h3 className="font-semibold text-red-400 mb-2 text-base">
                    ⛔ No es para ti si...
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    <li>
                      • Quieres todo gratis, pero no estás dispuesto a moverte
                      ni responder.
                    </li>
                    <li>
                      • Solo quieres “ver cómo es” sin intención real de usar la
                      página.
                    </li>
                    <li>
                      • Piensas que una página sola va a hacer milagros sin que
                      tú hagas nada.
                    </li>
                    <li>
                      • Te da pereza incluso escribir un mensaje por WhatsApp.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-7 flex flex-col items-center gap-3">
                <a
                  href="https://wa.me/593990945636?text=Hola%2C%20me%20identifico%20con%20la%20parte%20de%20emprendedor%20luchador%20y%20s%C3%A9%20que%20esta%20oferta%20de%20CL%20Tech%20Solutions%20es%20para%20m%C3%AD.%20Quiero%20mi%20p%C3%A1gina%20de%20480%20gratis%2C%20pagando%20solo%20los%2097%20USD."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-hotmart"
                >
                  Sí, soy de los que se mueven · Quiero mi página
                </a>
                <p className="text-[11px] text-white/60">
                  Si sigues leyendo, el contador sigue bajando. No digas luego
                  que no tuviste oportunidad.
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
                  Nada de humo. Esto es lo que realmente vas a tener online
                  cuando terminemos:
                </p>

                <ul className="space-y-2.5 text-sm text-white/85 mb-6">
                  <li>
                    • <strong>Página web de ventas</strong> de una sola página,
                    pensada para que la gente entienda rápido y te escriba.
                  </li>
                  <li>
                    •{" "}
                    <strong>
                      Diseño completo valorado en $480
                    </strong>, incluido sin costo para ti en esta oferta.
                  </li>
                  <li>
                    • <strong>Dominio</strong> (.com u otro disponible)
                    registrado por 1 año a tu nombre.
                  </li>
                  <li>
                    • <strong>Hosting 1 año</strong>, para que la página esté en
                    línea 24/7.
                  </li>
                  <li>
                    • <strong>Botón directo a tu WhatsApp</strong> visible en la
                    página.
                  </li>
                  <li>
                    • <strong>Integración con Google Maps</strong> si tienes
                    local físico (para que te encuentren fácil).
                  </li>
                  <li>
                    • <strong>Estructura lista</strong> para conectar
                    automatizaciones y bots cuando llegue el momento.
                  </li>
                </ul>

                <div className="grid sm:grid-cols-3 gap-3 text-xs text-white/80 mb-6">
                  <div className="card-hotmart px-3 py-3">
                    <p className="font-semibold text-clturq mb-1">
                      No necesitas saber de webs
                    </p>
                    <p>
                      CL Tech Solutions se encarga de lo técnico. Tú solo dices
                      qué vendes y con qué nombre.
                    </p>
                  </div>
                  <div className="card-hotmart px-3 py-3">
                    <p className="font-semibold text-clturq mb-1">
                      En 48 horas ves tu página
                    </p>
                    <p>
                      Una vez que envíes la información, no te vas a quedar
                      esperando semanas.
                    </p>
                  </div>
                  <div className="card-hotmart px-3 py-3">
                    <p className="font-semibold text-clturq mb-1">
                      Pensada para vender
                    </p>
                    <p>
                      No es una tarjeta de presentación. Es un lugar al que la
                      gente llega a pedirte.
                    </p>
                  </div>
                </div>

                <a
                  href="https://wa.me/593990945636?text=Hola%2C%20ya%20entend%C3%AD%20lo%20que%20recibo%20por%20los%2097%20USD%20y%20quiero%20que%20CL%20Tech%20Solutions%20haga%20mi%20p%C3%A1gina%20de%20480%20gratis."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-hotmart"
                >
                  Listo, quiero esto para mi negocio
                </a>
              </div>

              {/* Comparación de precios */}
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
                  <div className="border-t border-clturq/50 pt-3 mt-2 flex items-center justify-between">
                    <span className="font-semibold text-clturq">
                      Lo que pagas en esta oferta:
                    </span>
                    <span className="price-main text-clturq">$97</span>
                  </div>
                </div>

                <p className="mt-3 text-[11px] text-white/60">
                  La única razón por la que CL Tech Solutions hace esto así es
                  porque quiere que más emprendedores entren al juego digital, y
                  a la vez posicionar la marca en todo el país con casos reales.
                </p>
              </div>
            </div>
          </section>

          {/* MODELOS */}
          <section
            id="modelos"
            className="bg-section-gray py-16 border-t border-white/10"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                3 tipos de página incluidos en la misma inversión de{" "}
                <span className="text-clturq">$97</span>
              </h2>
              <p className="text-sm md:text-base text-white/75 mb-7 max-w-3xl">
                No pagas extra por el tipo de negocio. Con la misma inversión de{" "}
                <strong>$97</strong> eliges el modelo que más te sirve hoy.
              </p>

              <div className="grid md:grid-cols-3 gap-6 text-sm">
                {/* Modelo 1 */}
                <article className="card-hotmart px-5 py-5 flex flex-col h-full">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/55 mb-1">
                    Modelo 1
                  </p>
                  <h3 className="text-lg font-semibold text-clturq mb-1">
                    Página para servicios profesionales
                  </h3>
                  <p className="text-xs text-white/70 mb-3">
                    Para abogados, contadores, cerrajeros, técnicos,
                    consultorios, belleza, entrenadores, clases, etc.
                  </p>
                  <ul className="space-y-1.5 text-white/85 mb-4">
                    <li>• Sección “Quién soy / Quiénes somos”.</li>
                    <li>
                      • Servicios claros, con beneficios y no solo títulos.
                    </li>
                    <li>• Bloque de testimonios (si ya tienes).</li>
                    <li>• Botones “Escríbeme por WhatsApp” en toda la página.</li>
                    <li>• Google Maps si atiendes en un lugar físico.</li>
                  </ul>
                  <a
                    href="https://wa.me/593990945636?text=Hola%2C%20quiero%20aprovechar%20la%20oferta%20con%20el%20MODELO%201%20para%20SERVICIOS%20PROFESIONALES.%20S%C3%A9%20que%20el%20dise%C3%B1o%20de%20CL%20Tech%20Solutions%20vale%20480%20pero%20est%C3%A1%20gratis%20y%20solo%20pago%20los%2097%20USD."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-hotmart mt-auto justify-center"
                  >
                    Quiero la página para servicios
                  </a>
                </article>

                {/* Modelo 2 */}
                <article className="card-hotmart px-5 py-5 flex flex-col h-full border-clturq/70 border">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 mb-1">
                    Modelo 2 · Recomendado
                  </p>
                  <h3 className="text-lg font-semibold text-clturq mb-1">
                    Página para restaurantes y comida
                  </h3>
                  <p className="text-xs text-white/70 mb-3">
                    Para hamburguesas, papas, pizzas, hot dogs, cafeterías,
                    cevicherías, comida rápida y locales pequeños.
                  </p>
                  <ul className="space-y-1.5 text-white/85 mb-4">
                    <li>• Menú digital con tus platos principales y combos.</li>
                    <li>• Sección de promos o “menú del día”.</li>
                    <li>
                      • Ubicación en Google Maps y horarios claros.
                    </li>
                    <li>
                      • Botón “Pedir por WhatsApp” listo para recibir pedidos.
                    </li>
                    <li>
                      • Estructura lista para poner QR en mesas y para delivery.
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/593990945636?text=Hola%2C%20quiero%20aprovechar%20la%20oferta%20con%20el%20MODELO%202%20para%20RESTAURANTE%20O%20COMIDA.%20S%C3%A9%20que%20el%20dise%C3%B1o%20de%20CL%20Tech%20Solutions%20vale%20480%20pero%20est%C3%A1%20gratis%20y%20solo%20pago%20los%2097%20USD."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-hotmart mt-auto justify-center"
                  >
                    Quiero la página para mi restaurante
                  </a>
                </article>

                {/* Modelo 3 */}
                <article className="card-hotmart px-5 py-5 flex flex-col h-full">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/55 mb-1">
                    Modelo 3
                  </p>
                  <h3 className="text-lg font-semibold text-clturq mb-1">
                    Página para heladerías y postres
                  </h3>
                  <p className="text-xs text-white/70 mb-3">
                    Ideal para heladerías, malteadas, postres fríos, cafeterías
                    dulces y negocios de antojos.
                  </p>
                  <ul className="space-y-1.5 text-white/85 mb-4">
                    <li>• Catálogo de sabores o postres principales.</li>
                    <li>• Sección de combos, conos, vasos especiales.</li>
                    <li>• Google Maps para que te encuentren rápido.</li>
                    <li>
                      • Botón “Pedir por WhatsApp” para pedidos inmediatos.
                    </li>
                    <li>
                      • Preparada para mostrar fotos muy llamativas.
                    </li>
                  </ul>
                  <a
                    href="https://wa.me/593990945636?text=Hola%2C%20quiero%20aprovechar%20la%20oferta%20con%20el%20MODELO%203%20para%20HELADER%C3%8DA%20O%20POSTRES.%20S%C3%A9%20que%20el%20dise%C3%B1o%20de%20CL%20Tech%20Solutions%20vale%20480%20pero%20est%C3%A1%20gratis%20y%20solo%20pago%20los%2097%20USD."
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary-hotmart mt-auto justify-center"
                  >
                    Quiero la página para mi heladería
                  </a>
                </article>
              </div>
            </div>
          </section>

          {/* PASOS */}
          <section
            id="pasos"
            className="bg-section-dark py-16 border-t border-white/10"
          >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold mb-3">
                ¿Cómo es el proceso práctico?
              </h2>
              <p className="text-sm md:text-base text-white/75 mb-8 max-w-3xl mx-auto">
                No vas a programar nada. No vas a pelearte con plataformas. Si
                sabes usar WhatsApp, ya puedes con este proceso.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 text-sm text-left">
                <div className="card-hotmart px-4 py-4">
                  <p className="text-[11px] text-white/60 mb-1">Paso 1</p>
                  <p className="font-semibold text-clturq mb-1">
                    Escribes por WhatsApp
                  </p>
                  <p className="text-xs text-white/80">
                    El equipo te pregunta qué vendes, qué modelo te sirve más y
                    aclara dudas. Ahí decides si avanzas.
                  </p>
                </div>
                <div className="card-hotmart px-4 py-4">
                  <p className="text-[11px] text-white/60 mb-1">Paso 2</p>
                  <p className="font-semibold text-clturq mb-1">
                    Envías lo básico
                  </p>
                  <p className="text-xs text-white/80">
                    Nombre del negocio, datos de contacto, logo y fotos (si
                    tienes). Si no tienes logo, igual se empieza.
                  </p>
                </div>
                <div className="card-hotmart px-4 py-4">
                  <p className="text-[11px] text-white/60 mb-1">Paso 3</p>
                  <p className="font-semibold text-clturq mb-1">
                    Ves tu página en 48h
                  </p>
                  <p className="text-xs text-white/80">
                    Revisan contigo, ajustan detalles y te explican cómo usarla
                    para vender desde el primer día.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col items-center gap-3">
                <a
                  href="https://wa.me/593990945636?text=Hola%2C%20ya%20entend%C3%AD%20los%203%20pasos%20y%20quiero%20que%20CL%20Tech%20Solutions%20empiece%20con%20mi%20p%C3%A1gina%20de%20480%20gratis%2C%20pagando%20solo%20los%2097%20USD."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-hotmart"
                >
                  Ya entendí · Quiero que mi página sea la siguiente
                </a>
                <p className="text-[11px] text-white/60">
                  Si esto te parece complicado, el problema no es la página. Es
                  que sigues pensando en pequeño.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="bg-section-gray py-16 border-t border-white/10"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Preguntas que ya sé que vas a tener
              </h2>
              <p className="text-sm md:text-base text-white/75 mb-6">
                Te las respondo antes de que las uses como excusa para seguir
                posponiendo.
              </p>

              <div className="space-y-3 text-sm">
                <details className="card-hotmart px-4 py-3" open>
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span>¿Qué pasa después del primer año?</span>
                    <span className="text-clturq text-lg ml-3">+</span>
                  </summary>
                  <div className="mt-2 text-white/80 text-xs">
                    Después del primer año, si quieres seguir usando la página,
                    solo renuevas el dominio/hosting. Si decides no renovar,
                    simplemente la página deja de estar en línea. No hay multa,
                    no hay castigo.
                  </div>
                </details>

                <details className="card-hotmart px-4 py-3">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span>¿Puedo pagar en partes los $97?</span>
                    <span className="text-clturq text-lg ml-3">+</span>
                  </summary>
                  <div className="mt-2 text-white/80 text-xs">
                    No. Justamente el trato es: tú haces un esfuerzo una sola
                    vez, pagas los $97, y CL Tech Solutions hace el esfuerzo de
                    regalarte el diseño completo de $480. Si esto ya te parece
                    imposible, no estás listo para dar el siguiente paso.
                  </div>
                </details>

                <details className="card-hotmart px-4 py-3">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span>¿Y si todavía no tengo logo o fotos profesionales?</span>
                    <span className="text-clturq text-lg ml-3">+</span>
                  </summary>
                  <div className="mt-2 text-white/80 text-xs">
                    No es excusa. Se puede arrancar con un diseño limpio,
                    colores base y fotos sencillas. Luego, cuando tengas
                    logo/fotos, se cambian. Lo importante es que empieces.
                  </div>
                </details>

                <details className="card-hotmart px-4 py-3">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span>¿Solo funciona para Shushufindi o Sucumbíos?</span>
                    <span className="text-clturq text-lg ml-3">+</span>
                  </summary>
                  <div className="mt-2 text-white/80 text-xs">
                    No. CL Tech Solutions atiende a emprendedores de todo
                    Ecuador. Todo se coordina por WhatsApp, y tu página funciona
                    desde cualquier ciudad.
                  </div>
                </details>

                <details className="card-hotmart px-4 py-3">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <span>¿Qué pasa si no vendo nada con la página?</span>
                    <span className="text-clturq text-lg ml-3">+</span>
                  </summary>
                  <div className="mt-2 text-white/80 text-xs">
                    Seré directo: una página sola no hace magia. Lo que sí hace
                    es darte un lugar profesional donde mandar a la gente que ya
                    te está viendo en redes, en la calle o por recomendación. Si
                    no publicas, no compartes tu página, no respondes, no
                    sigues, ningún embudo del mundo te va a salvar.
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* FINAL */}
          <section
            id="final"
            className="bg-section-dark py-16 border-t border-white/10"
          >
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
                    Seguir vendiendo solo por WhatsApp y redes, sin un lugar
                    profesional donde mandar a la gente. Volver en 6 meses, ver
                    a otros con página, QR, pedidos más constantes... y decir
                    “yo también quería”.
                  </p>
                </div>
                <div className="card-hotmart px-4 py-4 border-claccent/60 border">
                  <p className="font-semibold text-clturq mb-1">
                    Opción 2 · Escribir ahora
                  </p>
                  <p className="text-xs text-white/80">
                    Asegurar tu página web de{" "}
                    <span className="line-through text-red-400">$480</span>{" "}
                    pagando solo los{" "}
                    <strong className="text-clturq">
                      $97 de dominio y hosting
                    </strong>
                    , y en 48 horas tener un lugar serio donde cerrar ventas.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/593990945636?text=Hola%2C%20no%20quiero%20seguir%20en%20lo%20mismo.%20Quiero%20mi%20p%C3%A1gina%20web%20de%20480%20gratis%20con%20CL%20Tech%20Solutions%2C%20pagando%20solo%20los%2097%20USD%20de%20dominio%20y%20hosting.%20Ay%C3%BAdenme%20a%20empezar."
                target="_blank"
                rel="noreferrer"
                className="btn-primary-hotmart"
              >
                No quiero seguir igual · Quiero mi página ahora
              </a>

              <p className="mt-3 text-[11px] text-white/60">
                El contador no se va a detener porque tengas miedo. Tus clientes
                tampoco.
              </p>
            </div>
          </section>
        </main>

        {/* BOTÓN FLOTANTE WHATSAPP */}
        <a
          href="https://wa.me/593990945636?text=Hola%2C%20acabo%20de%20ver%20la%20p%C3%A1gina%20de%20Impulso%20Digital%20360%20de%20CL%20Tech%20Solutions%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n%20para%20aprovechar%20la%20oferta%20de%2097%20USD."
          target="_blank"
          rel="noreferrer"
          className="fixed z-40 bottom-4 right-4 sm:bottom-5 sm:right-5 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_18px_70px_rgba(16,185,129,0.9)]"
        >
          <span className="sr-only">Escríbenos por WhatsApp</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 text-white"
          >
            <path
              fill="currentColor"
              d="M16.04 2C9.4 2 4 7.16 4 13.7c0 2.16.64 4.16 1.75 5.87L4 30l6.7-1.74A12.2 12.2 0 0 0 16.04 25c6.64 0 12.04-5.16 12.04-11.6C28.08 7.16 22.68 2 16.04 2Zm0 20.8c-1.84 0-3.54-.5-5.02-1.4l-.36-.21-3.74.97.99-3.63-.24-.38a8.3 8.3 0 0 1-1.3-4.46C7.37 8.2 11.24 4.7 16.04 4.7s8.67 3.5 8.67 7.97c0 4.46-3.87 8.13-8.67 8.13Zm4.22-6.1c-.23-.12-1.36-.7-1.57-.78-.2-.07-.35-.12-.5.12-.15.23-.57.7-.69.85-.13.15-.25.16-.47.06-.23-.12-.96-.35-1.83-1.12-.68-.6-1.13-1.34-1.26-1.57-.13-.23-.01-.35.1-.47.1-.1.23-.27.35-.4.12-.13.16-.23.23-.38.08-.15.04-.29-.02-.41-.07-.12-.5-1.2-.69-1.65-.18-.44-.37-.38-.5-.39h-.43c-.15 0-.4.06-.61.29-.21.23-.8.78-.8 1.9 0 1.12.82 2.2.94 2.35.12.15 1.61 2.46 3.94 3.35 1.47.58 2.04.63 2.77.53.45-.06 1.36-.55 1.55-1.08.19-.53.19-.99.13-1.08-.06-.09-.21-.15-.44-.27Z"
            />
          </svg>
        </a>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-6 bg-black/95">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/55">
            <p>
              © {new Date().getFullYear()} CL Tech Solutions · Impulso Digital
              360
            </p>
            <p>Página web de $480 gratis · Solo pagas dominio y hosting.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
