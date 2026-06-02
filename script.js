(function () {
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

    const emitTrackingEvent = (name, payload) => {
        const detail = {
            event: name,
            label: payload.label || "",
            href: payload.href || "",
            path: window.location.pathname,
            timestamp: new Date().toISOString()
        };

        window.dispatchEvent(new CustomEvent("pimpim:track", { detail }));

        if (Array.isArray(window.dataLayer)) {
            window.dataLayer.push(detail);
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

    document.querySelectorAll("[data-track-form]").forEach((form) => {
        form.addEventListener("submit", () => {
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
