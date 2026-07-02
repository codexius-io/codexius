//
// 🌌 STARFIELD (smarter + smoother)
//
function createStars() {
  const stars = document.getElementById("stars");

  const count = 140;

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 2;
    const duration = 6 + Math.random() * 10;

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animationDuration = duration + "s";
    star.style.opacity = Math.random();

    stars.appendChild(star);
  }
}

createStars();


//
// ⚡ SMOOTH SCROLL REVEAL (better than basic observer)
//
const revealElements = document.querySelectorAll(".card, h2, .glow-box");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "0.7s ease";

  observer.observe(el);
});


//
// ✨ ACTIVATION ON SCROLL
//
window.addEventListener("scroll", () => {
  document.querySelectorAll(".show").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});