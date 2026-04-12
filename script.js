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
