# Pimpim Fotomatones

Sitio estático preparado para Cloudflare Pages. La web usa la información del dossier `Pimpim2026.pdf`: empresa madrileña, servicios reales, teléfono, redes y tarifas 2026.

## Estructura

- `index.html`: landing principal con propuesta de valor, servicios, tarifas, galería, extras, personalización y formulario.
- `fotomaton.html`: página de fotomatón.
- `videomaton.html`: página de videomatón.
- `fotomaton-espejo.html`: página de fotomatón espejo.
- `plataforma-360.html`: página de plataforma 360.
- `bodas.html`: página específica para bodas y personalización.
- `opiniones.html`: página de eventos/trabajos y enlaces sociales.
- `gracias.html`: destino de confirmación del formulario.
- `privacidad.html`: estructura legal provisional.
- `styles.css`: sistema visual responsive.
- `styles.min.css`: CSS minificado generado desde `styles.css`.
- `script.js`: animaciones progresivas y hooks de tracking.
- `robots.txt` y `sitemap.xml`: base SEO.
- `assets/img`: imágenes extraídas y optimizadas desde el dossier.
- `assets/fonts`: fuentes locales self-hosted para evitar dependencias bloqueantes de Google Fonts.
- `_headers`: cabeceras de Cloudflare Pages para caché y seguridad básica.

## Tooling local

Instala dependencias una vez:

```bash
npm install
```

Comandos disponibles:

- `npm run serve`: servidor local en `http://127.0.0.1:4173/`.
- `npm run build:css`: regenera `styles.min.css` desde `styles.css`.
- `npm run validate:site`: revisa metadatos, JSON-LD, enlaces locales, `robots.txt` y `sitemap.xml`.
- `npm run validate:html`: valida HTML.
- `npm run audit:lighthouse`: regenera CSS y ejecuta Lighthouse sobre la home local.
- `npm run audit`: regenera CSS y ejecuta las validaciones rápidas.

## Datos reales usados

- Teléfono y WhatsApp: `+34 684 768 462`
- Instagram: `@pimpimfotomatones`
- TikTok: `@pimpim.fotomatones`
- Web: `www.pimpimfotomatones.com`
- LinkedIn: `Pimpim Fotomatones`

## Servicios y tarifas 2026

Precios sin IVA. Las tarifas podrían modificarse en función de la distancia.

- Fotomatón: 2h `350€`, 3h `430€`
- Videomatón: 2h `400€`, 3h `475€`
- Fotomatón espejo: 2h `500€`, 3h `575€`
- Plataforma 360: 2h `400€`, 3h `475€`
- Fotomatón + 360: 2h `700€`, 3h `750€`, 3h con extra `800€`
- Fotomatón espejo + 360: 2h `800€`, 3h `850€`, 3h con extra `900€`

Extras destacados:

- Jardín vertical: `50€`
- Muro floral: `50€`
- Estructura floral: `100€`
- Sofá Chester: `60€`
- Neones clásicos: `30€`
- Neones premium XXL: `60€`
- Teléfono videomensajes: `60€`

## Pendiente antes de producción

1. Sustituir `REEMPLAZA_AQUI_TU_ACCESS_KEY_DE_WEB3FORMS` por la clave pública real de Web3Forms.
2. Confirmar si el dominio final será exactamente `https://www.pimpimfotomatones.com/`.
3. Completar `privacidad.html` con responsable legal, NIF/CIF, email legal, base jurídica, plazo de conservación y encargados de tratamiento.
4. Revisar si se añaden más trabajos reales, reseñas o vídeos desde redes antes de publicar.

## Tracking preparado

No se carga GA4, Google Ads ni Meta Pixel todavía. El sitio solo emite eventos internos:

- Clics de WhatsApp: `whatsapp_click`
- Clics hacia formulario: `form_anchor_click`
- Envío de formulario: `form_submit`
- Clics a páginas de servicio: `service_page_click`
- Clics a redes sociales: `social_click`

Cuando exista `window.dataLayer`, `script.js` enviará esos eventos ahí sin cambiar el marcado.

## Despliegue en Cloudflare Pages

1. Sube el contenido de esta carpeta a un repositorio Git o usa la opción de arrastrar y soltar en Cloudflare Pages.
2. En Cloudflare Pages configura:
   - `Framework preset`: `None`
   - `Build command`: `npm run build:css`
   - `Build output directory`: `/`
3. Apunta el dominio `www` al proyecto de Pages desde Cloudflare.

## Preview en GitHub Pages

El workflow `.github/workflows/pages.yml` publica una versión estática rápida para revisión interna cada vez que se sube `main`.

URL esperada:

```text
https://juanjoguerrero8.github.io/pimpim/
```
