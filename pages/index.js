export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* NAVBAR */}
      <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Aquí luego cambias por tu logo real */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-fuchsia-500 flex items-center justify-center font-black text-xl">
              CL
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                CL Tech Solutions
              </p>
              <p className="text-xs text-slate-400">
                Impulso Digital 360 para emprendedores
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm text-slate-200">
            <a href="#servicios" className="hover:text-cyan-400 transition">Servicios</a>
            <a href="#proceso" className="hover:text-cyan-400 transition">Cómo funciona</a>
            <a href="#testimonios" className="hover:text-cyan-400 transition">Resultados</a>
            <a
              href="#formulario"
              className="px-4 py-1.5 rounded-full bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition"
            >
              Quiero mi web
            </a>
          </nav>
        </div>
      </header>

      {/* CONTENIDO */}
      <main className="max-w-6xl mx-auto px-4 py-12 space-y-24">
        {/* HERO */}
        <section id="hero" className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Estamos regalando el diseño de tu página web
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Tu página web de ventas en{" "}
              <span className="text-cyan-400">modo guerrero</span>,
              hecha por CL Tech Solutions.
            </h1>

            <p className="text-slate-300 text-sm md:text-base">
              Las webs de venta cuestan normalmente{" "}
              <span className="line-through">$480</span>.{" "}
              Pero si eres un emprendedor que no se rinde, te regalamos el diseño
              y solo pagas dominio + hosting por un año. Sin trucos, sin letra pequeña.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#formulario"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold px-5 py-3 text-sm hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30"
              >
                Quiero aplicar a mi web gratuita
                <span className="text-lg">🚀</span>
              </a>
              <a
                href="#servicios"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-sm text-slate-200 hover:border-cyan-500 hover:text-cyan-300 transition"
              >
                Ver qué incluye
              </a>
            </div>

            <p className="text-xs text-slate-400">
              *Solo se seleccionan algunos emprendedores cada mes.{" "}
              Si quieres saltarte la fila, puedes pagar solo{" "}
              <span className="font-semibold text-cyan-300">$97</span> y dejamos tu diseño listo más rápido.
            </p>
          </div>

          {/* BLOQUE LATERAL */}
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/5 to-transparent blur-3xl -z-10" />
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4 shadow-xl">
              <h2 className="text-lg font-semibold">
                ¿Qué hace diferente a una web de CL Tech Solutions?
              </h2>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>✅ Diseñada para vender, no solo para “verse bonita”.</li>
                <li>✅ Botones directos a WhatsApp y llamadas.</li>
                <li>✅ Optimizada para celular (la gente te ve desde el teléfono).</li>
                <li>✅ Integración con redes sociales y mapas.</li>
                <li>✅ Lista para escalar con embudos y automatizaciones.</li>
              </ul>
              <p className="text-xs text-slate-500">
                Tu web se convierte en tu vendedor 24/7.{" "}
                Tú descansas, tu página sigue cerrando clientes.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN SERVICIOS */}
        <section id="servicios" className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            Lo que tu página incluye desde el día uno
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
              <h3 className="font-semibold text-cyan-300 text-sm">Página de ventas profesional</h3>
              <p className="text-xs text-slate-300">
                Hero poderoso, propuesta clara, sección de beneficios, prueba social
                y llamada a la acción directa hacia WhatsApp o formulario.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
              <h3 className="font-semibold text-cyan-300 text-sm">Optimización móvil</h3>
              <p className="text-xs text-slate-300">
                Tu página se ve perfecta en celulares. Nada de botones microscópicos
                ni textos ilegibles. Pensada para el pulgar.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
              <h3 className="font-semibold text-cyan-300 text-sm">Dominio + hosting 1 año</h3>
              <p className="text-xs text-slate-300">
                Te acompañamos a elegir tu dominio y lo conectamos
                a un hosting veloz para que tu web cargue rápido.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN PROCESO */}
        <section id="proceso" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            ¿Cómo funciona el proceso con CL Tech Solutions?
          </h2>
          <ol className="grid md:grid-cols-3 gap-6 text-sm text-slate-200">
            <li className="space-y-2">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-cyan-500 text-slate-950 font-bold">1</span>
              <p className="font-semibold">Llenas el formulario</p>
              <p className="text-xs text-slate-400">
                Nos cuentas de qué va tu negocio, qué vendes y cómo atiendes a tus clientes hoy.
              </p>
            </li>
            <li className="space-y-2">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-cyan-500 text-slate-950 font-bold">2</span>
              <p className="font-semibold">Analizamos tu caso</p>
              <p className="text-xs text-slate-400">
                Vemos si aplicas para el diseño gratuito o si prefieres ir directo
                al plan de prioridad pagando los $97.
              </p>
            </li>
            <li className="space-y-2">
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-cyan-500 text-slate-950 font-bold">3</span>
              <p className="font-semibold">Diseñamos y lanzamos</p>
              <p className="text-xs text-slate-400">
                Te mostramos el diseño, lo afinamos juntos y lo dejamos en línea
                con tu dominio listo para vender.
              </p>
            </li>
          </ol>
        </section>

        {/* SECCIÓN TESTIMONIOS */}
        <section id="testimonios" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Emprendedores que ya se están moviendo con su web
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
              <p className="text-xs text-slate-300">
                “Antes vendíamos solo por recomendación.  
                Con la página de CL Tech Solutions ahora nos encuentran por Google
                y WhatsApp no para.”
              </p>
              <p className="text-xs text-slate-400">– Cliente 1</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
              <p className="text-xs text-slate-300">
                “El diseño que nos hicieron se ve mejor que muchas webs de agencias
                grandes. Y encima nos automatizaron parte de la atención.”
              </p>
              <p className="text-xs text-slate-400">– Cliente 2</p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
              <p className="text-xs text-slate-300">
                “Yo solo mandé mi logo y mis fotos por WhatsApp, ellos hicieron magia.
                Ahora mi negocio se ve serio en Internet.”
              </p>
              <p className="text-xs text-slate-400">– Cliente 3</p>
            </div>
          </div>
        </section>

        {/* FORMULARIO CON NETLIFY FORMS */}
        <section id="formulario" className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">
            Aplica para tu página web con diseño gratuito
          </h2>
          <p className="text-sm text-slate-300">
            Llena este formulario con calma. Entre más claro seas, mejor podemos analizar tu caso.  
            ⚠️ Este formulario se conecta directo a CL Tech Solutions.
          </p>

          <form
            name="solicitud-web-clt"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="grid md:grid-cols-2 gap-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-6"
          >
            {/* Campo oculto requerido por Netlify */}
            <input type="hidden" name="form-name" value="solicitud-web-clt" />
            {/* Honeypot para bots */}
            <p className="hidden">
              <label>
                No llenar este campo: <input name="bot-field" />
              </label>
            </p>

            <div className="space-y-1">
              <label className="text-xs text-slate-300">Nombre completo</label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300">WhatsApp</label>
              <input
                type="tel"
                name="whatsapp"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1 md:col-span-2">
              <label className="text-xs text-slate-300">Nombre de tu emprendimiento</label>
              <input
                type="text"
                name="emprendimiento"
                required
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1 md:col-span-2">
              <label className="text-xs text-slate-300">
                Cuéntanos qué vendes y cómo atiendes hoy a tus clientes
              </label>
              <textarea
                name="descripcion"
                rows={3}
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-cyan-500"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300">
                ¿Tienes logo y fotos para la web?
              </label>
              <select
                name="logo_fotos"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-cyan-500"
              >
                <option value="si">Sí, ya los tengo</option>
                <option value="no">No, necesito ayuda con eso</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs text-slate-300">
                ¿Te gustaría ir directo al plan de prioridad pagando los $97?
              </label>
              <select
                name="plan_prioridad"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm outline-none focus:border-cyan-500"
              >
                <option value="analizar">Primero analicen mi caso</option>
                <option value="pagar-97">Sí, quiero pagar los $97 y adelantarme</option>
              </select>
            </div>

            <div className="md:col-span-2 flex flex-col gap-3 mt-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 text-slate-950 font-semibold px-5 py-3 text-sm hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/30"
              >
                Enviar mi solicitud ahora
                <span>⚡</span>
              </button>
              <p className="text-[11px] text-slate-500">
                Al enviar este formulario aceptas que CL Tech Solutions se contacte contigo
                por WhatsApp para seguir el proceso.
              </p>
            </div>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        Página de ventas elaborada por{" "}
        <span className="text-cyan-300 font-semibold">CL Tech Solutions</span> – www.cltechsolutions.com
      </footer>
    </div>
  );
}
