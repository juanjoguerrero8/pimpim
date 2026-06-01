# Pimpim Fotomatones - Agent Context

## Project

This repository contains the public website for Pimpim Fotomatones, a Madrid-based photo booth business for weddings and events.

The current site is a static Cloudflare Pages-ready website:

- `index.html`: main landing page.
- `opiniones.html`: reviews page.
- `styles.css`: global visual system.
- `script.js`: light reveal animations.

Primary business goal: convert visitors into qualified budget requests through a clear landing page, real service/pricing information, WhatsApp/contact CTAs, and measurable paid traffic.

## Real Business Information

Use the dossier `C:\Users\jjguerrero\Downloads\Pimpim2026.pdf` as the source of truth for core content.

- Brand spelling: `Pimpim Fotomatones`.
- Positioning: "Lo fácil nunca fue lo divertido" and "Madrileños que crean momentos".
- Phone/WhatsApp: `+34 684 768 462`.
- Instagram: `@pimpimfotomatones`.
- TikTok: `@pimpim.fotomatones`.
- Website: `www.pimpimfotomatones.com`.
- LinkedIn: `Pimpim Fotomatones`.
- Main services: Fotomatón, Videomatón, Fotomatón Espejo, Plataforma 360.
- Key inclusions: animation for guests, varied atrezzo, physical album for photos and dedications, USB with all photos/videos, personalized event or wedding logo on each photo.
- Prices are 2026 prices, without VAT, and may change depending on distance.

### 2026 Pricing

- Fotomatón: 2h 350€, 3h 430€.
- Videomatón: 2h 400€, 3h 475€.
- Fotomatón Espejo: 2h 500€, 3h 575€.
- Plataforma 360: 2h 400€, 3h 475€.
- Fotomatón + 360: 2h 700€, 3h 750€, 3h with extra 800€.
- Fotomatón Espejo + 360: 2h 800€, 3h 850€, 3h with extra 900€.

### Extras

- Jardín vertical: 50€.
- Muro floral: 50€.
- Estructura floral: 100€.
- Sofá Chester: 60€.
- Neones clásicos: 30€.
- Neones premium XXL: 60€.
- Teléfono videomensajes: 60€ launch offer for 2026.
- Custom printed backgrounds are quoted by size and require at least 4 weeks' notice.

## Working Principles

- Keep the site fast, static, and easy to deploy unless a clear business requirement justifies more complexity.
- Prefer practical conversion improvements over novelty: clear offer, trust, photos, reviews, packages, FAQ, and frictionless contact.
- Treat WhatsApp as a primary sales channel for event leads.
- Design should feel polished, warm, event-focused, and trustworthy. Avoid generic AI-looking landing pages.
- For compliance-sensitive work such as ads, tracking, outreach, cookies, and personal data, account for GDPR/LOPD and Spanish market expectations.

## Reference Tools And How To Use Them

### Design and UI Quality

- https://detail.design/
  - Use for small interface details, motion, accessibility, loading states, confirmations, scroll behavior, and polished microinteractions.
  - Good fit for form feedback, review cards, FAQ accordions, galleries, and CTA states.

- https://www.aura.build/
  - Use for landing page inspiration and fast visual exploration.
  - Useful for variants such as wedding landing page, corporate events landing page, communion landing page, and 360 platform landing page.
  - Do not depend on generated output blindly; adapt ideas to this static site and brand.

- https://component.gallery/
  - Use as a reference for proven UI patterns.
  - High-value components for this project: rating, quote, carousel, accordion, tabs, cards, and forms.

- https://impeccable.style/
  - Use as a quality bar for avoiding generic AI frontend output.
  - Useful concepts: document design rules, detect weak visual defaults, improve typography, color, spacing, and motion.

- https://gsap.com/
  - Use as the reference for professional JavaScript animation when CSS transitions are not enough.
  - Relevant tools for this project: ScrollTrigger for scroll-based storytelling, SplitText for tasteful headline/text reveals, SVG tools for decorative camera/photo-strip motion, and UI tools for polished interactions.
  - Use sparingly: animations must support conversion, perceived quality, and event-brand personality. Avoid heavy effects that hurt Core Web Vitals, accessibility, or mobile usability.
  - Respect `prefers-reduced-motion` and provide simple CSS/JS fallbacks where practical.

### UI/UX Research Resources

- https://darkmodedesign.com/
  - Use for curated dark-mode website inspiration.
  - Good for premium evening-event moodboards, contrast ideas, and selective dark sections. Do not default the whole site to dark mode unless it improves the brand and conversion.

- https://codesandbox.io/
  - Use for isolated UI experiments, shared prototypes, Storybook/Sandpack-style demos, and testing interactive snippets outside the production repo.
  - Prefer local repo changes for actual implementation; use CodeSandbox when a disposable prototype or collaboration link is useful.

- https://neumorphism.io/
  - Use only as a CSS shadow/reference generator for soft tactile surfaces.
  - Apply sparingly. Heavy neumorphism often hurts contrast, accessibility, and clarity, especially on mobile.

- https://mobbin.com/
  - Use for real-world mobile and web UI inspiration, flows, copy, and component behavior.
  - High-value references for this project: booking flows, checkout/lead forms, galleries, reviews, onboarding-like service explanations, and mobile CTA placement.

- https://lookup.design/
  - Use for handpicked website UI examples and fast component inspiration.
  - Good for finding examples of hero sections, forms, cards, testimonials, navbars, and pricing/package sections.

- https://pageflows.com/
  - Use for researching complete product flows, screens, UI elements, and email flows.
  - Useful for budget-request journeys, booking flows, form design, follow-up emails, and confirmation/success states.

- https://patttterns.com/
  - Use as a catalog of UX flows and UI component patterns.
  - Relevant categories: landing pages, calls to action, form fields, galleries/carousels, success pages, user feedback, navigation, and accessibility.

- https://www.appshot.gallery/
  - Use for visual inspiration around app-store screenshots, marketing panels, tone of voice, style filters, and mobile-first visual storytelling.
  - Useful for social posts, story-style service explanations, event package visuals, and future mobile-first campaign creatives.

- https://chamjo.design/
  - Use for mobile UX research based on local/regional apps and competitors.
  - Useful when researching regional expectations, mobile lead flows, booking behavior, and localized UX patterns. Lower priority than Mobbin/Pageflows for this static website.

### Visual Content Generation

- ChatGPT Pro and Gemini Pro accounts are available for creating useful website content, images, and videos.
  - Use them to generate supporting visuals, moodboards, storyboard ideas, social creatives, seasonal campaign concepts, placeholder visuals, and copy/image variations.
- Prefer real Pimpim event photos and videos for trust-critical sections such as hero, gallery, reviews, and service proof.
  - Generated content is acceptable for decorative backgrounds, abstract event atmosphere, mockups, icons, illustrations, ad concepts, and early prototypes.
- When generating realistic people, venues, or event scenes, avoid implying they are real Pimpim clients/events unless they actually are.
- Keep generated assets aligned with the brand: energetic, fun, polished, celebratory, trustworthy, and consistent with the real Madrid-based brand.
  - Optimize generated images/videos before production use and avoid heavy media that hurts mobile performance.

### WhatsApp, Conversational Sales, and Lead Handling

- https://kapso.ai/
  - Use as the developer-oriented WhatsApp API option.
  - Potential business use: budget intake bot, event qualification, follow-up reminders, quote delivery, review requests, and media sharing.
  - Good when custom workflows or code-level control are needed.

- https://jelou.ai/es
  - Use as the more no-code/business conversational AI option.
  - Potential business use: WhatsApp assistant, web chat, Instagram/Messenger intake, workflow automation, and team inbox.
  - Evaluate cost and complexity before adopting.

### Website Reverse Engineering and Prompt Extraction

- https://www.gitreverse.com/
  - Use to turn public GitHub repositories into reconstruction prompts.
  - Useful for studying how a reference project is structured before adapting ideas.
  - Do not use it to copy proprietary branding, content, or protected assets. Use it for architecture and implementation patterns.

- https://github.com/JCodesMore/ai-website-cloner-template
  - Use as a lab/reference for studying public website layouts with AI coding agents.
  - Suitable for inspiration and prototyping, not for direct cloning of brand/content.

### Paid Ads and Measurement

- https://github.com/Baker-Agency/paid-ads-skills-spain
  - Use as the primary reference for Spanish paid ads strategy.
  - High relevance for Google Ads Search, Meta Ads, targeting by Spanish regions/CCAA, Spanish copy, GDPR/LOPD, and seasonal campaigns.
- Priority use cases must match the real business context, such as "fotomatón bodas Madrid", "fotomatón espejo", "videomatón boda", "plataforma 360 Madrid", and event/wedding searches.

- https://github.com/kLOsk/adloop
  - Use once Google Ads and GA4 are active.
  - Good for joining Ads data with GA4, checking landing page conversion, validating tracking events, search terms, negative keywords, and paid traffic quality.
  - Keep write actions paused or confirmation-gated if ever used operationally.

### SEO and Organic Growth

- https://github.com/mascanho/RustySEO
  - Use for technical SEO, crawl diagnostics, PageSpeed, schema checks, on-page analysis, keyword clustering, topic generation, and reporting.
- Priority pages to optimize: homepage, fotomatón, videomatón, fotomatón espejo, plataforma 360, bodas, eventos/trabajos, and local landing pages if created.

### Marketing Agents, Content, and CRO

- https://github.com/msitarzewski/agency-agents
  - Use selectively as a reference library of specialist roles.
  - Relevant roles: UI Designer, Brand Guardian, Visual Storyteller, Paid Social Strategist, PPC Campaign Strategist, Tracking & Measurement Specialist, SEO Specialist, Content Creator, Instagram Curator, Sales Outreach.
  - Do not import the whole system unless needed.

- https://github.com/zubair-trabzada/ai-marketing-claude
  - Use as a marketing checklist for website audits, copy, email sequences, ad campaigns, content calendars, competitive intelligence, and reports.
  - Good for periodic landing page/CRO reviews.

- https://github.com/aitytech/agentkits-marketing
  - Use as a broader marketing playbook for campaign planning, CRO, SEO, copywriting, landing pages, email, pricing, and analytics.
  - Treat as a reference library; avoid overcomplicating this static website.

- https://github.com/thearnavrustagi/marketmenow
  - Use as inspiration for repurposing event content across Instagram, TikTok, YouTube Shorts, LinkedIn, email, and other channels.
  - Useful pattern: create reusable "content capsules" from real events, testimonials, behind-the-scenes, and seasonal offers.
  - Be cautious with automated posting and credentials.

### Outbound and Partnerships

- https://github.com/eracle/OpenOutreach
  - Use only as a conceptual reference for structured outbound.
  - Potential targets: wedding planners, venues, hotels, fincas, event agencies, corporate HR/marketing teams, photographers, DJs, and caterers.
  - Be cautious with LinkedIn automation, scraping, platform terms, and data protection rules.

## Suggested Roadmap

1. Improve the static landing page with real visuals, services, tariffs, extras, gallery, WhatsApp CTA, and trust proof.
2. Add SEO foundations: metadata, local business schema, service-specific sections/pages, image alt text, sitemap, and robots.
3. Add conversion tracking plan for form submit, WhatsApp click, phone click, and review CTA.
4. Build campaign-ready landing pages for fotomatón, videomatón, fotomatón espejo, plataforma 360, bodas, and event-specific use cases.
5. Use Spanish paid ads references to launch small controlled Google/Meta campaigns.
6. Use RustySEO and AdLoop after launch to audit organic/paid performance.

## Current Implementation Notes

- The form currently uses Web3Forms and needs a real public access key before production.
- Preserve static deploy compatibility with Cloudflare Pages unless requirements change.
- If adding JavaScript, keep it lightweight and progressive.
- If adding tracking or cookies, include privacy/legal implications before implementation.
