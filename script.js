
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}

const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  if (!section.classList.contains("hero")) {
    observer.observe(section);
  }
});
