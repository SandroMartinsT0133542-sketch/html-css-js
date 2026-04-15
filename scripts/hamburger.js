const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");

if (hamburgerBtn) {
  hamburgerBtn.addEventListener("click", function () {
    const isOpen = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isOpen);
    navLinks.classList.toggle("open");
  });
}

const navItems = navLinks?.querySelectorAll("a");
if (navItems) {
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      hamburgerBtn.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("open");
    });
  });
}

document.addEventListener("click", function (e) {
  if (
    hamburgerBtn &&
    !hamburgerBtn.contains(e.target) &&
    !navLinks.contains(e.target)
  ) {
    hamburgerBtn.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("open");
  }
});
