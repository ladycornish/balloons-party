




const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav-list");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");

  setTimeout(function () {
    document.querySelector('.nav').style.display = 'none'
  }, 5000)
  setTimeout("location.reload(true);", 5000);

});