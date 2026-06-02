# V3.0 Visual Direction Research Report
**Cliente:** Pimpim Fotomatones | **Fecha:** 2026-06-02 | **Rama:** v3.0

---

## Resumen ejecutivo

El mercado de empresas de fotomatón tiene webs mediocres en su mayoría (Squarespace genérico, fotos de stock). La brecha entre web media y web premium es enorme — quien la cruce se posiciona como la opción de referencia en su mercado. Para "una web a otro nivel" se necesita: (1) GSAP para animaciones de alto impacto, (2) migración a un SSG que solucione los 35 ficheros con nav/footer duplicado, y (3) una dirección visual con vídeo, tipografía cinética y transiciones de página. La opción recomendada es **Astro + GSAP** — la mejor relación esfuerzo/resultado a largo plazo.

---

## 1. Inspiración — Benchmarks visuales

### Webs del sector fotomatón

El sector fotomatón tiene el listón visual bajo. La mayoría de competidores usan Squarespace o Webflow con plantillas genéricas. Las que destacan comparten estos patrones:

| Empresa | URL | Lo que hace bien |
|---|---|---|
| SelfieBoothCo | selfieboothco.com | Hero con vídeo de invitados en acción; paleta oscura + acento dorado |
| Majestic Photobooth | majesticphotobooth.com | Profesional y limpio; fotos grandes; prueba social destacada |
| Pixilated | pixilated.com | Estética SaaS blanca/clean; muy fuerte en branding de producto |
| VotoBooth (NYC) | thevotobooth.com | Feel premium NYC; tipografía fuerte; contenido editorial |

**Patrones comunes en las mejores:**
- Hero de pantalla completa con vídeo (guests usando el fotomatón) o imagen grande
- Fondo oscuro (negro, gris profundo) con acento cálido (dorado, crema, coral)
- Sección de servicios con cards + efecto hover (lift + zoom de imagen)
- Galería de eventos con scroll horizontal o masonry
- Testimoniales con fotos reales de parejas (no sólo texto)
- Nav flotante que cambia de transparente a opaco al hacer scroll

### Benchmarks premium (fotógrafos/venues de boda)

Las mejores webs de fotógrafos de boda de 2025 comparten:

1. **Editorial / magazine** — grids asimétricos, whitespace generoso, imágenes a sangre completa
2. **Tipografía serif + sans** — Playfair Display / EB Garamond + Inter/DM Sans transmite elegancia
3. **Animaciones de carga con stagger** — texto que entra letra a letra o por palabras
4. **Hero split-screen o full-screen** — una gran imagen/vídeo con texto superpuesto
5. **Galería curada** — 6-12 imágenes seleccionadas, no 200 en un grid genérico
6. **Nav transparente → opaca** — transición onScroll: el nav cambia de fondo al bajar
7. **Testimoniales con foto + nombre + tipo de evento** — credibilidad inmediata

**Referencia top tier:** C2 Montréal (c2mtl.com) ganó el Site of the Day de Awwwards 2023. Usa tipografía bold, vídeo inmersivo y parallax storytelling. Benchmark para eventos premium.

### Tendencias web de lujo/eventos 2025-2026

Según Figma, Wix, y Bizzabo:
- **Scrollytelling 2.0** — parallax, reveals cinematográficos, contenido que se "desenvuelve" con el scroll
- **Micro-interactions** — botones con ripple, cards que reaccionan al hover con profundidad
- **Vídeo atmosférico** — vídeo de fondo lento, sin sonido, cámara que se mueve despacio (guests riendo, ambiente de boda)
- **Tipografía cinética** — headlines que entran con velocidad o split por letras
- **Módulos progresivos** — cada scroll presenta una nueva idea visual (como una revista)

---

## 2. Herramientas de animación gratuitas

### Tabla comparativa

| Librería | Tamaño gzip | Licencia | Sin build step | Mejor para |
|---|---|---|---|---|
| **GSAP + ScrollTrigger** | ~50KB total | Gratuito comercial (desde abr 2025) | ✅ CDN | Animaciones complejas, timelines, scroll preciso |
| **Motion.dev** | 2–85KB (modular) | MIT | ✅ CDN | Reveals simples, spring animations, React |
| **AOS** | ~8KB | MIT | ✅ CDN (1 JS + 1 CSS) | Reveals básicos por data-attribute |
| **Lottie-web** | ~60KB gzip | MIT | ✅ CDN | Animaciones After Effects (logos, iconos) |
| **Anime.js** | ~6KB gzip | MIT | ✅ CDN | Timelines ligeros, SVG |
| **Barba.js** | ~4.4KB gzip | MIT | ✅ CDN | Transiciones entre páginas |
| **Three.js** | 150-600KB | MIT | ✅ CDN | 3D WebGL (overkill para Pimpim) |

### Detalle por librería

**GSAP + ScrollTrigger** (recomendado principal)
- En abril 2025, Webflow adquirió GreenSock y abrió TODOS los plugins: ScrollTrigger, SplitText, MorphSVG, DrawSVG — ahora 100% gratuitos
- La licencia estándar ("no charge") cubre uso comercial en webs y apps. La licencia "Business Green" sólo aplica si cobras a múltiples clientes por acceso a GSAP dentro de tu producto — no aplica a Pimpim
- API: `gsap.to()`, `gsap.from()`, `gsap.timeline()`, `ScrollTrigger.create()` — jQuery-like, intuitivo
- CDN: `<script src="https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js">` + plugin por separado
- Capacidades: stagger de texto, reveal por sección, parallax, line drawing SVG, morphing, sticky sections
- Curva de aprendizaje: Media (3-5 días para dominar lo básico)

**Motion.dev**
- MIT irrevocable — ventaja frente a la licencia GSAP si hubiera dudas futuras
- La función mini `animate()` es sólo 2.3KB (90% más pequeña que GSAP equivalente)
- Delega a la Web Animations API del navegador (nativa, más eficiente para animaciones simples)
- 2.5x más rápido que GSAP para "animate from unknown values"
- Ideal para: reveals de scroll, spring physics, animaciones simples
- Desventaja: sin ecosystem de plugins tan rico como GSAP; timelines complejos son más verbosos

**AOS (Animate On Scroll)**
- La opción más fácil — sólo HTML attributes: `data-aos="fade-up"`, `data-aos-delay="100"`
- Sólo 8KB gzip — impacto en Web Vitals mínimo
- Ideal para: un upgrade rápido de los `.reveal` actuales
- Limitación crítica: no sirve para animaciones de hero complejas, text splits, parallax o timelines — no consigue el feel "premium"

**Lottie-web**
- 60KB gzip — peso notable, sólo justificado si se usa
- Ideal para: logo animado en el header, loader screen, iconos de servicio animados
- Los JSON de animación se crean en After Effects (o se descargan de LottieFiles.com — muchos gratuitos)
- Formato dotLottie reduce el JSON hasta un 80%
- Para Pimpim: considerar para el logo y/o iconos de "qué incluye" — mejora perceived quality

**Barba.js**
- Sólo 4.4KB gzip — casi gratis
- Intercepta la navegación entre páginas y las mueve como transiciones de SPA
- Funciona con HTML estático (no necesita framework)
- Sin Barba.js: el browser hace flash blanco entre páginas
- Con Barba.js: fade/slide suave entre páginas — la web parece una app
- Empareja perfectamente con GSAP para las animaciones de transición

**Combinación óptima para Pimpim (sin build step):**
```
GSAP + ScrollTrigger + SplitText (CDN) ← animaciones principales
Barba.js (CDN) ← transiciones entre páginas
Lottie (opcional, CDN) ← logo animado o iconos
```
Peso total: ~55KB gzip — razonable.

---

## 3. Generadores de sitios estáticos (SSG)

### El problema actual

Los 35 ficheros HTML tienen nav y footer copiado-pegado. Cambiar un enlace del menú = editar 35 ficheros. Añadir una página nueva = copiar 200 líneas de boilerplate.

### Comparativa SSG

| Criterio | Plain HTML (actual) | **11ty** | **Astro** | Hugo |
|---|---|---|---|---|
| Templating (nav/footer) | ❌ Copy-paste | ✅ `{% include "_nav.html" %}` | ✅ Componentes `.astro` | ✅ `{{ partial "nav.html" . }}` |
| Migración desde HTML | — | ⭐⭐⭐ Más fácil | ⭐⭐ Media | ⭐ Difícil (Go templates) |
| Cloudflare Pages | ✅ | ✅ `npx @11ty/eleventy` | ✅ Soporte nativo | ✅ |
| SEO (HTML limpio) | ✅ | ✅ Igual | ✅ 0 JS por defecto | ✅ |
| Curva de aprendizaje | — | Baja (HTML + Nunjucks) | Media (componentes) | Alta (Go templates) |
| Build speed (35 pág.) | N/A | <1s | ~5-10s | <1s |
| Transiciones de página | ❌ | Con Barba.js | ✅ **Nativo** (View Transitions API) | Con Barba.js |
| Futuro (componentes React/Svelte) | ❌ | Limitado | ✅ Islands Architecture | ❌ |
| Ecosistema / comunidad | — | Bueno | **Excelente** (creciendo rápido) | Bueno |

### Detalles clave

**11ty (Eleventy)**
- HTML casi sin cambios + frontmatter YAML `---` al inicio de cada fichero
- El nav se extrae a `_includes/_nav.html`, el footer a `_includes/_footer.html`
- Cualquier fichero usa `{% include "_nav.html" %}` — un cambio propaga a todas las páginas
- Build: `npx @11ty/eleventy` — salida en carpeta `_site/`
- Curva real de migración para 35 páginas: **3-4 días**
- Downside: Nunjucks templating es antiguo y menos potente que Astro components

**Astro**
- Los componentes `.astro` son ficheros con una sección de lógica (`---` frontmatter) y plantilla HTML
- El nav y footer se definen una vez como `<Nav />` y `<Footer />` — reusables en todos los layouts
- **View Transitions API integrada**: `import { ViewTransitions } from 'astro:transitions'` — da transiciones de página sin Barba.js, usando la API nativa del navegador (GPU-accelerated, 0 JS overhead extra)
- Astro importa ficheros `.html` planos como componentes — facilita migración progresiva
- Islands Architecture: puede añadir un carrusel React, un formulario Vue, o cualquier componente interactivo sin romper el HTML estático del resto
- Cloudflare Pages: integración nativa con adaptador oficial (`@astrojs/cloudflare`)
- Curva real de migración para 35 páginas: **5-7 días**
- Bonus: TypeScript out of the box, integración con Tailwind si se quiere

**Hugo**
- El más rápido en builds (Go, subsegunos para miles de páginas)
- Templating en Go (`{{- partial "nav.html" . -}}`) — sintaxis diferente, curva alta
- No recomendado para este proyecto: la complejidad de Go templates supera el beneficio para 35 páginas

### Recomendación SSG para Pimpim

**Astro es la elección óptima a medio plazo:**
- Las View Transitions integradas reemplazan a Barba.js con mejor rendimiento
- La arquitectura de componentes es más potente que los includes de 11ty
- La migración tarda sólo 2-3 días más que 11ty y el retorno es mayor
- Si en el futuro se quiere añadir una calculadora de precio, un calendly embebido, o un carrusel con React — Astro lo soporta sin cambiar la arquitectura

**11ty es válido si se quiere la migración más rápida posible y no se planea añadir componentes interactivos.**

---

## 4. Propuestas de dirección visual V3.0

---

### Opción A — "Evolución segura" (HTML + GSAP)

Mantener la arquitectura actual pero añadir animaciones de alto impacto.

**Stack:** HTML/CSS/JS (sin cambio) + GSAP + ScrollTrigger + Barba.js via CDN

**Feature visual diferenciador:**
- Hero: vídeo de fondo en loop (autoplay muted) de invitados usando el fotomatón en una boda real. Encima, headline con entrada de texto en stagger por letras (GSAP SplitText)
- Servicios: cards con reveal escalonado al entrar en viewport + efecto de imagen zoom-in on hover
- Transiciones de página: Barba.js fade/slide (0.4s) — la web parece una app
- Testimoniales: slide horizontal con scroll snap
- CTA flotante: botón WhatsApp con efecto pulse en GSAP

**Esfuerzo estimado:** 3-5 días
- Día 1-2: Añadir GSAP al script.js; hero text animation + scroll reveals en index
- Día 3: Service pages animations + card hovers
- Día 4: Barba.js page transitions
- Día 5: Pulido, QA en móvil

**Pros:**
- Sin riesgo de migración — el sitio no se rompe
- Impacto visual inmediato y significativo
- Curva de aprendizaje más baja

**Contras:**
- El problema de los 35 ficheros con nav duplicado persiste
- Añadir nuevas páginas (municipios, combos) sigue siendo manual
- No es la arquitectura óptima a largo plazo

---

### Opción B — "Structured Premium" (11ty + GSAP + Barba.js)

Migrar a 11ty para resolver la duplicación, luego añadir animaciones.

**Stack:** 11ty SSG + GSAP + ScrollTrigger + Barba.js + Lottie (logo animado opcional)

**Feature visual diferenciador:**
- Todo lo de la Opción A
- Además: `_nav.html` y `_footer.html` como partials únicos — cualquier cambio propaga a toda la web
- Plantilla base en `_includes/layout.html` — nueva página en 2 minutos (solo contenido)
- Posibilidad de logo animado con Lottie en el header

**Esfuerzo estimado:** 7-10 días
- Días 1-3: Migrar 35 páginas a 11ty (layouts + partials)
- Días 4-5: GSAP animations
- Días 6-7: Barba.js transitions + QA

**Pros:**
- Nav/footer duplicación resuelta permanentemente
- Stack más mantenible que plain HTML
- Animaciones de alto impacto con GSAP

**Contras:**
- Migración tiene riesgo de errores (35 páginas a convertir)
- Nunjucks templating es menos moderno que Astro
- Las transiciones de página dependen de Barba.js (más JS)

---

### Opción C — "Full Premium" ⭐ RECOMENDADA (Astro + GSAP)

Migrar a Astro para la mejor arquitectura posible + animaciones premium.

**Stack:** Astro (static output) + GSAP + ScrollTrigger + SplitText + Astro View Transitions

**Feature visual diferenciador:**
- **Hero cinematográfico**: vídeo en loop de una boda real (muted, autoplay) + headline con GSAP SplitText (entrada por palabras con stagger) + subtítulo fade-up
- **Scroll narrative**: cada sección tiene su propia "escena" — la plataforma 360 entra con un giro, el espejo con un reflejo SVG, los testimoniales con slide horizontal snap
- **View Transitions nativas**: al navegar entre páginas, el hero morphs suavemente (la imagen de la página de fotomatón "viaja" a la imagen de la página de espejo). Sin JS extra, sin Barba.js — la API del navegador hace el trabajo
- **Componentes reutilizables**: `<ServiceCard />`, `<FAQSection />`, `<TestimonialGrid />`, `<CoverageMap />` — definidos una vez, usados en todas las páginas
- **Microinteracciones**: botones con efecto magnetic (siguen ligeramente el cursor), cards que se elevan con sombra en hover, estrellas de testimoniales que animan al entrar en viewport

**Esfuerzo estimado:** 10-15 días
- Días 1-2: Setup Astro + migrar layout/nav/footer a componentes
- Días 3-6: Migrar 35 páginas a `.astro` (con script de ayuda, ~45 min/página en las primeras, acelerando)
- Días 7-9: GSAP animations (hero, scrolltrigger reveals, SplitText)
- Días 10-11: View Transitions entre service pages
- Días 12-13: Microinteracciones + pulido móvil
- Días 14-15: QA, performance (Lighthouse), deploy en Cloudflare Pages

**Pros:**
- Mejor arquitectura para el largo plazo
- View Transitions nativas = el mejor page transition disponible
- Cada nueva página (municipio, combo) se crea en 5 minutos con el template
- Zero JS por defecto = mejores Core Web Vitals
- Futuro: puede añadir React/Svelte components específicos sin cambiar arquitectura
- Cloudflare Pages despliega Astro automáticamente

**Contras:**
- Mayor esfuerzo de migración inicial
- Curva de aprendizaje de Astro (~1-2 días para dominar el modelo de componentes)
- Requiere Node.js para el build (ya disponible con npm en el proyecto)

---

## Decisión recomendada

```
Opción C — Astro + GSAP + View Transitions
```

**Por qué Astro sobre 11ty:**
Las View Transitions nativas de Astro son una ventaja real y diferencial. En lugar de cargar Barba.js (4.4KB extra + lógica JS) para simular transiciones de SPA, Astro usa la View Transitions API del navegador — acelera por GPU, sin coste, y se declara con una sola línea de HTML. El resultado visual es indistinguible de una app nativa.

**Por qué GSAP:**
AOS sólo da reveals básicos. GSAP con SplitText + ScrollTrigger es lo que hacen los sitios que ganan en Awwwards. La diferencia visual es enorme: un reveal de fade-in genérico vs. texto que entra por palabras con timing preciso y easing personalizado.

**Por qué no Three.js:**
Overkill para este caso. 3D WebGL añade 150-600KB y complejidad sin ROI claro para una empresa de servicios locales. El impacto visual deseado se consigue con vídeo + GSAP sin necesitar WebGL.

---

## Próximos pasos concretos

1. **Setup Astro**: `npm create astro@latest` → static output → instalar en rama `v3.0`
2. **Crear componentes base**: `<Layout>`, `<Nav>`, `<Footer>`, `<FloatingWhatsApp>`
3. **Migrar index.html** completo como prueba de concepto visual
4. **Añadir GSAP** al hero de index con SplitText + ScrollTrigger
5. **Activar View Transitions** y verificar en Chrome que funcionan
6. **Si el resultado es el esperado**: migrar el resto de páginas (35 ficheros)

---

## Fuentes

- [GSAP Pricing & License](https://gsap.com/pricing/) — licencia gratuita comercial
- [GSAP en cdnjs](https://cdnjs.com/libraries/gsap) — bundle CDN
- [Barba.js oficial](https://barba.js.org/) — 4.4KB, page transitions
- [Trig.js vs AOS.js vs ScrollTrigger comparison](https://dev.to/idevgames/trigjs-vs-aosjs-vs-scrolltrigger-which-scroll-animation-library-wins-4i36) — bundle sizes
- [GSAP vs Motion comparison](https://motion.dev/docs/gsap-vs-motion) — performance benchmarks
- [Astro vs Hugo vs 11ty — SharpPages](https://sharppages.com/blog/astro-vs-hugo-vs-11ty-comparison/) — SSG comparison
- [CloudCannon SSG guide 2025](https://cloudcannon.com/blog/the-top-five-static-site-generators-for-2025-and-when-to-use-them/)
- [11ty partials y layouts](https://www.11ty.dev/docs/layouts/) — documentación oficial
- [Astro components docs](https://docs.astro.build/en/basics/astro-components/)
- [Bizzabo beautiful event websites](https://www.bizzabo.com/blog/beautiful-event-websites-design) — ejemplos de eventos
- [Figma Web Design Trends 2026](https://www.figma.com/resource-library/web-design-trends/)
- [Lottie bundle size — GitHub issue](https://github.com/airbnb/lottie-web/issues/1184)
- [Creating page transitions with Astro + Barba.js + GSAP — Codrops](https://tympanus.net/codrops/2026/04/08/creating-custom-page-transitions-in-astro-with-barba-js-and-gsap/)
- [Webflow photo booth examples](https://webflow.com/made-in-webflow/photobooth)
- [17 best wedding photographer websites 2025](https://photowebdesigns.com/wedding-photographer-websites/)

*Revisitar en el Día 5 de implementación (post-prueba de concepto en Astro) para ajustar si la migración presenta blockers inesperados.*
