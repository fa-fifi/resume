var accordions = document.getElementsByClassName("accordion");

// Open and close selected accordion's panel
for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    while (panel) {
      panel.hidden = !panel.hidden;
      panel = panel.nextElementSibling;
    }
  });
}

document.getElementById("print").onclick = function () {
  window.print();
};

// Open all panels before printing
window.addEventListener("beforeprint", function () {
  for (var i = 0; i < accordions.length; i++) {
    var panel = accordions[i].nextElementSibling;
    while (panel) {
      panel.hidden = false;
      panel = panel.nextElementSibling;
    }
  }
});

// Close inactive panels after printing
window.addEventListener("afterprint", function () {
  for (var i = 0; i < accordions.length; i++) {
    var isActive = accordions[i].classList.contains("active");
    var panel = accordions[i].nextElementSibling;
    while (panel) {
      panel.hidden = !isActive;
      panel = panel.nextElementSibling;
    }
  }
});

var themeButton = document.getElementById("theme");
var themeIcon = themeButton.querySelector(".material-symbols-outlined");

// Toggle between light and dark mode
themeButton.addEventListener("click", function () {
  var isDark = document.body.classList.toggle("dark");
  themeIcon.textContent = isDark ? "dark_mode" : "light_mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Restore saved preference on load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeIcon.textContent = "dark_mode";
}
