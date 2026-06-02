# SEO Audit — pimpimfotomatones.com
**Fecha:** 2026-06-02 | **Scope:** Recommended | **Prioridad:** Impact/Effort

---

## Resumen ejecutivo

El sitio tiene buena estructura técnica base (robots.txt, sitemap, canonicals, OG tags en todas las páginas) pero las **páginas de servicio son críticamente thin** (100-150 palabras) y **carecen de schema JSON-LD**, lo que bloquea el posicionamiento en los términos de mayor valor ("fotomatón Madrid", "fotomatón boda"). Los municipios están bien cubiertos en cantidad pero tienen contenido idéntico entre sí.

**Health Score estimado: 58/100** (sin datos de GSC/Semrush — sólo análisis estático)

---

## Hallazgos por severidad

### 🔴 Críticos (implementados en esta sesión)

| Problema | Páginas afectadas | Impacto |
|---|---|---|
| Sin JSON-LD schema en páginas de servicio | fotomaton, videomaton, espejo, 360, bodas | No aparecen rich snippets; Google no entiende el tipo de servicio |
| Sin FAQPage schema | fotomaton, espejo, 360, bodas | Pierde oportunidad de featured snippets en preguntas de coste/incluye |
| Páginas de servicio thin (~130 palabras) | fotomaton, videomaton, espejo, 360 | Señal débil de relevancia temática; difícil rankear keywords de alta competencia |
| Título sin localización geográfica | fotomaton, espejo, 360, videomaton | Pierden keyword "Madrid" en el elemento de mayor peso SEO |
| eventos.html title genérico (28 chars) | eventos.html | Zero keywords útiles |

### 🟡 Altos

| Problema | Páginas afectadas | Recomendación |
|---|---|---|
| Meta descriptions > 155 chars (truncadas por Google) | madrid (166), san-fernando (163), fotomaton (163), paracuellos (162), villanueva (162), cabanillas (160), azuqueca (159) | Recortar a ≤155 chars |
| Homepage title sin "Madrid" | index.html | "Fotomatón Madrid y Guadalajara para bodas" |
| Páginas de municipio con contenido idéntico | 11 páginas | Añadir párrafo único con info local (fincas, zonas de bodas, distancia) |
| Sin enlaces internos de servicio a municipios | fotomaton, espejo, 360 | Añadido en esta sesión con `.location-tags` |

### 🟢 Medios

| Problema | Páginas afectadas | Recomendación |
|---|---|---|
| bodas.html thin (151 palabras) | bodas.html | Ampliar con secciones: tipos de boda, extras, preguntas |
| videomaton.html sin FAQs | videomaton.html | Añadir 3-4 preguntas frecuentes |
| Sin enlace a bodas.html desde fotomaton.html | fotomaton.html | Cross-link entre páginas de mayor intención |
| quienes-somos.html: 158 chars meta | quienes-somos.html | Recortar |

---

## Quick wins implementados en esta sesión

| Cambio | Archivos | Impacto esperado |
|---|---|---|
| ✅ Schema `Service` + `FAQPage` | fotomaton, espejo, 360, bodas | Rich snippets FAQs en SERPs; +CTR potencial 15-30% |
| ✅ Schema `Service` | videomaton | Google entiende tipo de servicio y precio base |
| ✅ FAQ sections HTML | fotomaton, espejo, 360, bodas | +200 palabras por página; señal temática |
| ✅ Sección "Cobertura" con links a municipios | fotomaton, espejo, 360 | Internal linking; PageRank hacia páginas locales |
| ✅ Titles con "Madrid" | fotomaton, espejo, 360, videomaton, bodas | Keyword principal en title tag |
| ✅ eventos.html title útil | eventos.html | Básico pero correcto |
| ✅ CSS `.location-tags` | styles.css | Estilo para chips de localización |
| ✅ Script version actualizado | 9 páginas | Cache invalidation correcta |

---

## Pendiente (requieren decisión o contenido)

### Alta prioridad

1. **Recortar meta descriptions largas** — 7 páginas >155 chars. Operación de 10 minutos.
2. **Homepage title con "Madrid"** — Cambiar "Pimpim Fotomatones | Fotomatón, videomatón y plataforma 360" por algo con localización.
3. **Contenido único en municipios** — Cada página necesita un párrafo específico (ej. Alcalá: "Cubrimos eventos en el Casco Histórico, La Garena y alrededores. A 35 km de Madrid capital"). Sin esto Google puede devaluar las 11 páginas por thin content.

### Media prioridad

4. **FAQs en videomaton.html** — Sólo tiene texto, no HTML `<details>` accesible. Añadir 3 preguntas.
5. **bodas.html ampliar** — Añadir sección "Qué servicio elegir para tu boda" con links a fotomaton/espejo/360.
6. **Google Search Console** — Conectar GSC con GA4 para tener datos reales de impresiones, posiciones y CTR. Sin esto es imposible medir el impacto de los cambios.

### Baja prioridad

7. **Añadir bodas.html a sitemap** ✅ (ya está, prioridad 0.8)
8. **Páginas extras sin schema** (photocall, fondos, neones, sofa-chester) — menor impacto, pueden esperar.
9. **Construir backlinks** — El sitio tiene buena estructura on-page. La siguiente barrera de posicionamiento será la autoridad de dominio. Directorios locales: Google Business Profile (¿está configurado?), Páginas Amarillas, Bodas.net listing con enlace.

---

## Datos no disponibles (requieren MCP externo)

| Dato | Herramienta necesaria | Por qué importa |
|---|---|---|
| Posiciones actuales en Google | Google Search Console | Medir baseline antes de los cambios |
| Volumen de búsqueda por keyword | Semrush / Ahrefs | Priorizar keywords con más demanda real |
| Perfil de backlinks | Ahrefs / Moz | Identificar oportunidades de link building |
| Core Web Vitals reales | GSC / PageSpeed | Sitio estático debería ir bien, pero confirmar |

---

## Próximos pasos recomendados

1. **Conectar Google Search Console** → verificar dominio → enviar sitemap → esperar 2 semanas para datos
2. **Recortar 7 meta descriptions largas** (15 min)
3. **Actualizar homepage title** con "Madrid" (5 min)
4. **Añadir párrafo único a cada municipio** — puede hacerse con el skill `market-seo` generando contenido local
5. **Lanzar primera campaña Google Ads** — GA4 ya tiene conversiones configuradas, señal lista para Smart Bidding

---

*⚠️ Métricas de posicionamiento no disponibles — audit basado en análisis estático de archivos HTML.*
*Conectar Google Search Console para tener datos reales de rendimiento.*
