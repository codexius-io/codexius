document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            const isOpen = mobileMenu.classList.toggle("open");
            menuBtn.textContent = isOpen ? "✕" : "☰";
        });

        mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.remove("open");
                menuBtn.textContent = "☰";
            });
        });
    }

    const heroVisual = document.querySelector("#heroVisual");
const floatingBrowser = document.querySelector("#floatingBrowser");

if (heroVisual && floatingBrowser) {
    heroVisual.addEventListener("mousemove", event => {
        if (window.innerWidth <= 900) return;

        const bounds = heroVisual.getBoundingClientRect();

        const mouseX = event.clientX - bounds.left;
        const mouseY = event.clientY - bounds.top;

        const centerX = bounds.width / 2;
        const centerY = bounds.height / 2;

        const rotateY = ((mouseX - centerX) / centerX) * 5;
        const rotateX = ((centerY - mouseY) / centerY) * 4;

        floatingBrowser.style.animation = "none";

        floatingBrowser.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    heroVisual.addEventListener("mouseleave", () => {
        floatingBrowser.style.transform = "";
        floatingBrowser.style.animation =
            "browserFloat 5s ease-in-out infinite";
    });
}

    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.15
    });

    reveals.forEach(item => observer.observe(item));
});
