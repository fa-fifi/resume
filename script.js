var accordions = document.getElementsByClassName("accordion");

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

window.addEventListener("beforeprint", function () {
  for (var i = 0; i < accordions.length; i++) {
    var panel = accordions[i].nextElementSibling;
    while (panel) {
      panel.hidden = false;
      panel = panel.nextElementSibling;
    }
  }
});

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
