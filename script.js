/* Simple IntersectionObserver fade-in */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document
    .querySelectorAll("p, h1, h2, h3, h4, li")
    .forEach(el => {
      el.classList.add("fade-in");
      observer.observe(el);
    });
});
