document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       MOBILE MENU TOGGLE
    ========================= */

    const toggle = document.querySelector(".mobile-toggle");
    const nav = document.querySelector("nav");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.style.display = nav.style.display === "flex" ? "none" : "flex";
            nav.style.flexDirection = "column";
            nav.style.position = "absolute";
            nav.style.top = "70px";
            nav.style.right = "20px";
            nav.style.background = "#12141a";
            nav.style.padding = "16px";
            nav.style.border = "1px solid #232733";
            nav.style.borderRadius = "12px";
        });
    }

    /* =========================
       SMOOTH SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();

            const target = document.querySelector(link.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    /* =========================
       SCROLL REVEAL ANIMATION
    ========================= */

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "0.6s ease-out";
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(".section, .service-card, .project-card, .pricing-card, .why-item").forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        observer.observe(el);
    });

    /* =========================
       ACTIVE NAV LINK
    ========================= */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.style.color = "#a7b0be";

            if (link.getAttribute("href") === "#" + current) {
                link.style.color = "#4fd8ff";
            }
        });
    });

    /* =========================
       CONTACT FORM UX
    ========================= */

    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const button = form.querySelector("button");

            button.textContent = "Sending...";

            setTimeout(() => {
                button.textContent = "Message Sent ✓";

                form.reset();

                setTimeout(() => {
                    button.textContent = "Send Message";
                }, 2000);

            }, 1200);
        });
    }

});
