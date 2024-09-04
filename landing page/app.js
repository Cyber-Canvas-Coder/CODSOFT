const menu = document.querySelector(".menu");
const navLink = document.querySelector(".nav-link");

menu.addEventListener("click", function () {
  navLink.classList.toggle("hamburger");
});
