(function () {
    const GA4_MEASUREMENT_ID = 'G-8YWVZ3VPJ2';
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA4_MEASUREMENT_ID, { send_page_view: true });
    if (GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
        const gaScript = document.createElement('script');
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_MEASUREMENT_ID;
        gaScript.async = true;
        document.head.appendChild(gaScript);
    }

    const GA4_EVENT_MAP = {
        whatsapp_click:     ['contact',        { method: 'whatsapp' }],
        form_submit:        ['generate_lead',   { method: 'form' }],
        service_page_click: ['select_content',  { content_type: 'service' }],
        form_button_click:  ['form_start',      {}],
    };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealElements = document.querySelectorAll(".reveal");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("reveal-visible"));
    } else {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.16 }
        );

        revealElements.forEach((element) => observer.observe(element));
    }

    const navToggle = document.querySelector(".nav-toggle");
    const siteNav = document.querySelector(".site-nav");
    const desktopNavQuery = window.matchMedia("(min-width: 861px)");

    const closeOpenDropdowns = () => {
        document.querySelectorAll(".site-nav .nav-dropdown[open]").forEach((dropdown) => {
            dropdown.removeAttribute("open");
        });
    };

    const setMenuOpen = (isOpen) => {
        document.body.classList.toggle("is-nav-open", isOpen);

        if (!navToggle) {
            return;
        }

        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");

        if (!isOpen) {
            closeOpenDropdowns();
        }
    };

    if (navToggle && siteNav) {
        navToggle.addEventListener("click", () => {
            setMenuOpen(!document.body.classList.contains("is-nav-open"));
        });

        siteNav.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                setMenuOpen(false);
            }
        });

        document.addEventListener("click", (event) => {
            if (!document.body.classList.contains("is-nav-open") || event.target.closest(".site-header")) {
                return;
            }

            setMenuOpen(false);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key !== "Escape" || !document.body.classList.contains("is-nav-open")) {
                return;
            }

            setMenuOpen(false);
            navToggle.focus();
        });

        const closeMenuOnDesktop = () => {
            if (desktopNavQuery.matches) {
                setMenuOpen(false);
            }
        };

        if ("addEventListener" in desktopNavQuery) {
            desktopNavQuery.addEventListener("change", closeMenuOnDesktop);
        } else if ("addListener" in desktopNavQuery) {
            desktopNavQuery.addListener(closeMenuOnDesktop);
        }
    }

    document.querySelectorAll(".site-nav .nav-dropdown").forEach((dropdown) => {
        dropdown.addEventListener("toggle", () => {
            if (!dropdown.open) {
                return;
            }

            document.querySelectorAll(".site-nav .nav-dropdown[open]").forEach((openDropdown) => {
                if (openDropdown !== dropdown) {
                    openDropdown.removeAttribute("open");
                }
            });
        });
    });

    const attributionStorageKey = "pimpim_attribution_v1";
    const attributionParamNames = [
        "utm_source",
        "utm_medium",
        "utm_campaign",
        "utm_content",
        "utm_term",
        "gclid",
        "gbraid",
        "wbraid",
        "fbclid",
        "li_fat_id",
        "twclid",
        "rdt_cid"
    ];

    const readStoredAttribution = () => {
        try {
            return JSON.parse(window.sessionStorage.getItem(attributionStorageKey) || "{}");
        } catch (error) {
            return {};
        }
    };

    const writeStoredAttribution = (attribution) => {
        try {
            window.sessionStorage.setItem(attributionStorageKey, JSON.stringify(attribution));
        } catch (error) {
            // Attribution is useful for ads diagnostics, but never required for the page to work.
        }
    };

    const getAttributionFromUrl = () => {
        const params = new URLSearchParams(window.location.search);
        const values = {};

        attributionParamNames.forEach((name) => {
            const value = params.get(name);

            if (value) {
                values[name] = value;
            }
        });

        return values;
    };

    const summarizeAttribution = (attribution) => {
        if (attribution.utm_source) {
            return [attribution.utm_source, attribution.utm_campaign].filter(Boolean).join(" / ");
        }

        if (attribution.gclid || attribution.gbraid || attribution.wbraid) {
            return "google_ads_click";
        }

        if (attribution.fbclid) {
            return "meta_ads_click";
        }

        if (attribution.li_fat_id) {
            return "linkedin_ads_click";
        }

        if (attribution.twclid) {
            return "x_ads_click";
        }

        if (attribution.rdt_cid) {
            return "reddit_ads_click";
        }

        return attribution.referrer ? "referral" : "";
    };

    const hasCampaignAttribution = (attribution) => {
        return attributionParamNames.some((name) => Boolean(attribution[name]));
    };

    const currentUrl = window.location.href;
    const storedAttribution = readStoredAttribution();
    const urlAttribution = getAttributionFromUrl();
    const attribution = {
        ...storedAttribution,
        landing_page: storedAttribution.landing_page || currentUrl,
        referrer: storedAttribution.referrer || document.referrer || "",
        captured_at: storedAttribution.captured_at || new Date().toISOString(),
        ...urlAttribution,
        current_page: currentUrl
    };

    attribution.source_summary = summarizeAttribution(attribution);
    writeStoredAttribution(attribution);

    document.querySelectorAll("[data-attribution-field]").forEach((input) => {
        input.value = attribution[input.dataset.attributionField] || "";
    });

    const appendWhatsAppAttribution = (href) => {
        if (!attribution.source_summary || !hasCampaignAttribution(attribution)) {
            return href;
        }

        const url = new URL(href);
        const message = url.searchParams.get("text") || "";

        if (!message || message.includes("Origen web:")) {
            return href;
        }

        url.searchParams.set("text", `${message}\n\nOrigen web: ${attribution.source_summary}`);
        return url.toString();
    };

    document.querySelectorAll('a[href*="wa.me/34684768462"]').forEach((link) => {
        link.href = appendWhatsAppAttribution(link.href);
    });

    const emitTrackingEvent = (name, payload) => {
        const detail = {
            event: name,
            label: payload.label || "",
            href: payload.href || "",
            path: window.location.pathname,
            attribution_source: attribution.source_summary,
            utm_source: attribution.utm_source || "",
            utm_campaign: attribution.utm_campaign || "",
            timestamp: new Date().toISOString()
        };

        window.dispatchEvent(new CustomEvent("pimpim:track", { detail }));

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push(detail);
        }

        if (GA4_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
            const mapping = GA4_EVENT_MAP[name];
            const [ga4Name, ga4Extras] = mapping || [name, {}];
            gtag('event', ga4Name, {
                event_label: payload.label || '',
                attribution_source: attribution.source_summary || '',
                ...ga4Extras
            });
        }
    };

    document.querySelectorAll("[data-dynamic-redirect]").forEach((input) => {
        input.value = new URL("gracias.html", window.location.href).href;
    });

    document.addEventListener("click", (event) => {
        const trackedElement = event.target.closest("[data-track]");

        if (!trackedElement) {
            return;
        }

        emitTrackingEvent(trackedElement.dataset.track, {
            label: trackedElement.dataset.trackLabel,
            href: trackedElement.href
        });
    });

    const validateField = (input) => {
        const form = input.closest('form');
        if (!form) return true;

        const errorEl = form.querySelector(`[data-error-for="${input.name}"]`);
        let message = '';

        if (input.type === 'checkbox') {
            if (!input.checked) message = 'Debes aceptar la política de privacidad.';
        } else if (input.tagName === 'SELECT') {
            if (!input.value) message = 'Selecciona una opción.';
        } else if (!input.value.trim()) {
            message = 'Este campo es obligatorio.';
        } else if (input.type === 'email' && !input.validity.valid) {
            message = 'Introduce un correo electrónico válido.';
        } else if (input.type === 'tel' && !/^[+]?[\d\s\-(). ]{9,15}$/.test(input.value.trim())) {
            message = 'Introduce un número de teléfono válido (mínimo 9 dígitos).';
        }

        input.classList.toggle('field-invalid', Boolean(message));
        if (errorEl) {
            errorEl.textContent = message;
            errorEl.hidden = !message;
        }

        return !message;
    };

    document.querySelectorAll("[data-track-form]").forEach((form) => {
        form.querySelectorAll("input[required], select[required]").forEach((input) => {
            const eventType = (input.type === 'checkbox' || input.tagName === 'SELECT') ? 'change' : 'blur';
            input.addEventListener(eventType, () => validateField(input));
        });

        form.addEventListener("submit", (event) => {
            const requiredFields = Array.from(form.querySelectorAll("input[required], select[required]"));
            const firstInvalid = requiredFields.find((f) => !validateField(f));

            if (firstInvalid) {
                event.preventDefault();
                firstInvalid.focus();
                return;
            }

            emitTrackingEvent("form_submit", {
                label: form.dataset.trackForm,
                href: form.action
            });

            const submitButton = form.querySelector('button[type="submit"]');
            const status = form.querySelector(".form-status");

            form.setAttribute("aria-busy", "true");

            if (submitButton) {
                submitButton.dataset.originalText = submitButton.textContent;
                submitButton.textContent = "Enviando solicitud...";
                submitButton.classList.add("is-loading");
                submitButton.setAttribute("aria-disabled", "true");
            }

            if (status) {
                status.textContent = "Enviando tu solicitud. No cierres esta página hasta que aparezca la confirmación.";
            }
        });
    });
})();
