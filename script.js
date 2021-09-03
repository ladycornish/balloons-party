




const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});