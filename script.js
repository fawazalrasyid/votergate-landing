// VoterGate landing: mobile nav toggle, FAQ accordion, dynamic footer year.
// Placeholder CTAs (Unduh) anchor to #unduh until real download links exist.

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll(".accordion-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });
});


document.getElementById("year").textContent = new Date().getFullYear();
