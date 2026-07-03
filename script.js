document.addEventListener("DOMContentLoaded", () => {

    /* ------------------------------
       SMOOTH NAV SCROLL (ENHANCED)
    ------------------------------ */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });


    /* ------------------------------
       NAVBAR BLUR ON SCROLL
    ------------------------------ */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            navbar.style.background = "rgba(8,9,11,0.85)";
            navbar.style.backdropFilter = "blur(16px)";
            navbar.style.borderBottom = "1px solid #262A31";
        } else {
            navbar.style.background = "rgba(8,9,11,0.6)";
        }
    });


    /* ------------------------------
       FADE-IN ON SCROLL (INTERSECTION OBSERVER)
    ------------------------------ */

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                entry.target.style.transition = "all 0.6s ease-out";
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll(".section, .service-card, .project-card, .process-step, .testimonial-card, .pricing-card").forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        observer.observe(el);
    });


    /* ------------------------------
       CONTACT FORM HANDLING (FRONTEND ONLY)
    ------------------------------ */

    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const button = form.querySelector("button");

            button.innerText = "Sending...";

            setTimeout(() => {
                button.innerText = "Message Sent ✓";

                form.reset();

                setTimeout(() => {
                    button.innerText = "Send Message";
                }, 2000);

            }, 1200);
        });
    }


    /* ------------------------------
       HERO SUBTLE PARALLAX EFFECT
    ------------------------------ */

    const hero = document.querySelector(".hero");

    window.addEventListener("scroll", () => {
        if (!hero) return;

        const offset = window.scrollY * 0.3;

        hero.style.transform = `translateY(${offset}px)`;
    });


    /* ------------------------------
       ACTIVE NAV LINK HIGHLIGHT
    ------------------------------ */

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
            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });

});
