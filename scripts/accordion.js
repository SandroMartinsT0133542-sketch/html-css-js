const accordionTriggers = document.querySelectorAll(".accordion-trigger");

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    const isExpanded = this.getAttribute("aria-expanded") === "true";
    const controlsId = this.getAttribute("aria-controls");
    const content = document.getElementById(controlsId);

    this.setAttribute("aria-expanded", !isExpanded);

    if (!isExpanded) {
      content.removeAttribute("hidden");
      this.classList.add("expanded");
    } else {
      content.setAttribute("hidden", "");
      this.classList.remove("expanded");
    }
  });

  trigger.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      this.click();
    }
  });
});
