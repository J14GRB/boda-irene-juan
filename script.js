document.documentElement.classList.add("js");

const header = document.querySelector(".topbar");
const hero = document.querySelector(".hero");

function updateHeader() {
  const y = window.scrollY;
  if (header) {
    header.style.background = y > window.innerHeight * 0.55
      ? "rgba(245,240,232,.94)"
      : "transparent";
    header.style.color = y > window.innerHeight * 0.55 ? "#25221f" : "#fffaf2";
    header.style.backdropFilter = y > window.innerHeight * 0.55 ? "blur(10px)" : "none";
  }
  if (hero) {
    const media = hero.querySelector(".hero-media img");
    if (media && y < window.innerHeight) {
      const amount = Math.min(y / window.innerHeight, 1);
      media.style.transform = `scale(${1.02 + amount * .06}) translateY(${amount * 5}%)`;
    }
  }
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealTargets = document.querySelectorAll(
  ".story-grid, .story-break, .editorial-grid, .quote, .duo, .living, .venue, .photo-strip, .party-card, .rsvp-inner"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
