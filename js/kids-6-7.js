const ageRevealItems = document.querySelectorAll(".age-reveal");
const ageReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (ageReducedMotion || !("IntersectionObserver" in window)) {
  ageRevealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  ageRevealItems.forEach((item) => revealObserver.observe(item));
}
