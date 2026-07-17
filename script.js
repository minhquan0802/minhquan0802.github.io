const navLinks = document.querySelectorAll(".nav-link");
const sections = Array.from(navLinks)
  .map((link) => document.getElementById(link.dataset.section))
  .filter(Boolean);

const setActive = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.dataset.section === id;
    link.classList.toggle("text-secondary", isActive);
    link.classList.toggle("dark:text-dark-accent", isActive);
    link.classList.toggle("font-bold", isActive);
    link.classList.toggle("border-secondary", isActive);
    link.classList.toggle("dark:border-dark-accent", isActive);
    link.classList.toggle("border-transparent", !isActive);
    link.classList.toggle("text-on-surface-variant", !isActive);
    link.classList.toggle("dark:text-dark-text-muted", !isActive);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  },
  { rootMargin: "-64px 0px -60% 0px", threshold: 0 },
);

sections.forEach((section) => observer.observe(section));
setActive("home");

const THEME_KEY = "theme";
const html = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-toggle-icon");

const syncThemeIcon = () => {
  themeIcon.textContent = html.classList.contains("dark") ? "light_mode" : "dark_mode";
};

syncThemeIcon();

themeToggle.addEventListener("click", () => {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  syncThemeIcon();
});

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
  if (localStorage.getItem(THEME_KEY)) return;
  html.classList.toggle("dark", event.matches);
  syncThemeIcon();
});

const ACTIVE_TAB_CLASSES = [
  "bg-secondary",
  "dark:bg-dark-accent",
  "border-secondary",
  "dark:border-dark-accent",
  "text-white",
  "dark:text-dark-bg",
];
const INACTIVE_TAB_CLASSES = [
  "bg-transparent",
  "border-outline-variant",
  "dark:border-dark-border",
  "text-on-surface-variant",
  "dark:text-dark-text-muted",
];

document.querySelectorAll("[data-view-group]").forEach((group) => {
  const tabs = group.querySelectorAll(".view-tab");
  const panels = group.querySelectorAll(".view-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.viewTarget;
      tabs.forEach((t) => {
        const isActive = t === tab;
        t.classList.remove(...ACTIVE_TAB_CLASSES, ...INACTIVE_TAB_CLASSES);
        t.classList.add(...(isActive ? ACTIVE_TAB_CLASSES : INACTIVE_TAB_CLASSES));
      });
      panels.forEach((panel) => panel.classList.toggle("hidden", panel.dataset.view !== target));
    });
  });
});

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  const slides = gallery.querySelectorAll(".gallery-slide");
  if (slides.length <= 1) {
    gallery.querySelector(".gallery-prev")?.remove();
    gallery.querySelector(".gallery-next")?.remove();
    gallery.querySelectorAll(".gallery-dot").forEach((dot) => dot.remove());
    return;
  }

  const dots = gallery.querySelectorAll(".gallery-dot");
  let index = 0;

  const show = (nextIndex) => {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle("hidden", i !== index));
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-secondary", i === index);
      dot.classList.toggle("dark:bg-dark-accent", i === index);
      dot.classList.toggle("bg-outline-variant", i !== index);
      dot.classList.toggle("dark:bg-dark-border", i !== index);
    });
  };

  gallery.querySelector(".gallery-prev")?.addEventListener("click", () => show(index - 1));
  gallery.querySelector(".gallery-next")?.addEventListener("click", () => show(index + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => show(i)));
});
