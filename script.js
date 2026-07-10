// Encode phone number into a base64 string
const phone = document.getElementById("phone");

phone.textContent = atob("KzYwMTEtMTAxMCA5NzQ5");
phone.href = `https://wa.me/${atob("NjAxMTEwMTA5NzQ5")}`;

// Modify anchor tag attributes globally
document.querySelectorAll("a").forEach((a) => {
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});

// Open and close selected accordion's panel
const accordions = document.querySelectorAll(".accordion");

const toggleAccordion = (accordion, shouldExpand) => {
  var panel = accordion.nextElementSibling;
  while (panel) {
    panel.hidden = !shouldExpand;
    panel = panel.nextElementSibling;
  }
};

accordions.forEach((accordion) => {
  const handleToggle = (e) => {
    if (e.type === "click" || e.key === "Enter" || e.key === " ") {
      if (e.key === " ") e.preventDefault(); // Stop page jumping down
      const isExpanded = accordion.getAttribute("aria-expanded") === "true";
      accordion.setAttribute("aria-expanded", !isExpanded);
      toggleAccordion(accordion, !isExpanded);
    }
  };

  accordion.addEventListener("click", handleToggle);
  accordion.addEventListener("keydown", handleToggle);
});

document.getElementById("print").onclick = () => window.print();

// Open all panels before printing
window.addEventListener("beforeprint", () =>
  accordions.forEach((accordion) => toggleAccordion(accordion, true)),
);

// Close inactive panels after printing
window.addEventListener("afterprint", function () {
  accordions.forEach((accordion) => {
    const isExpanded = accordion.getAttribute("aria-expanded") === "true";
    accordion.setAttribute("aria-expanded", isExpanded);
    toggleAccordion(accordion, isExpanded);
  });
});

// Toggle between light and dark mode
const themeButton = document.getElementById("theme");
const themeIcon = themeButton?.querySelector(".material-symbols-outlined");

themeButton?.addEventListener("click", function () {
  const isDark = document.body.classList.toggle("dark");
  themeIcon.textContent = isDark ? "dark_mode" : "light_mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Restore saved preference on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeIcon.textContent = "dark_mode";
}
