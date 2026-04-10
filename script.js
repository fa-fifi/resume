var acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    while (panel) {
      panel.hidden = !panel.hidden;
      panel = panel.nextElementSibling;
    }
  });
}
