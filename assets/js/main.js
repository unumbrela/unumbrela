(() => {
    "use strict";

    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", () => {
            const open = navLinks.classList.toggle("open");
            menuButton.setAttribute("aria-expanded", String(open));
        });

        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("open");
                menuButton.setAttribute("aria-expanded", "false");
            });
        });
    }

    const carousel = document.querySelector(".hero-carousel");
    if (carousel) {
        const slides = [...carousel.querySelectorAll(".carousel-slide")];
        const dots = [...carousel.querySelectorAll(".carousel-dot")];
        const previous = carousel.querySelector(".carousel-control.prev");
        const next = carousel.querySelector(".carousel-control.next");
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let current = 0;
        let timer;

        const showSlide = (index) => {
            current = (index + slides.length) % slides.length;
            slides.forEach((slide, slideIndex) => {
                const active = slideIndex === current;
                slide.classList.toggle("active", active);
                slide.setAttribute("aria-hidden", String(!active));
            });
            dots.forEach((dot, dotIndex) => {
                const active = dotIndex === current;
                dot.classList.toggle("active", active);
                if (active) dot.setAttribute("aria-current", "true");
                else dot.removeAttribute("aria-current");
            });
        };

        const stop = () => window.clearInterval(timer);
        const start = () => {
            stop();
            if (!reduceMotion) timer = window.setInterval(() => showSlide(current + 1), 5200);
        };
        const restart = () => { stop(); start(); };

        previous?.addEventListener("click", () => { showSlide(current - 1); restart(); });
        next?.addEventListener("click", () => { showSlide(current + 1); restart(); });
        dots.forEach((dot, index) => dot.addEventListener("click", () => { showSlide(index); restart(); }));
        carousel.addEventListener("mouseenter", stop);
        carousel.addEventListener("mouseleave", start);
        carousel.addEventListener("focusin", stop);
        carousel.addEventListener("focusout", start);
        carousel.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") { showSlide(current - 1); restart(); }
            if (event.key === "ArrowRight") { showSlide(current + 1); restart(); }
        });
        start();
    }

    const backToTop = document.querySelector(".back-to-top");
    if (backToTop) {
        const updateBackToTop = () => backToTop.classList.toggle("visible", window.scrollY > 300);
        window.addEventListener("scroll", updateBackToTop, { passive: true });
        backToTop.addEventListener("click", (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
        updateBackToTop();
    }

    document.querySelectorAll("[data-current-year]").forEach((node) => {
        node.textContent = String(new Date().getFullYear());
    });
})();
