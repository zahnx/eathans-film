/*Navbar hamburger*/
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".nav-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click", () => {
  navbarToggle.classList.remove("active");
  navbarMenu.classList.remove("active");
}))

/* Nav-item Active Script*/
const navItemActive = document.querySelectorAll('.nav-item');

navItemActive.forEach(navItemActive2 => {
  navItemActive2.addEventListener('click', () => {
    document.querySelector('.active')?.classList.remove('active');
    navItemActive2.classList.add('active');
  })
})

/*When scrolling */
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
      const navbar = document.getElementById("nav");

      if (window.scrollY > 100) {
          navbar.style.padding = "0px"; // Change the background color or any style you prefer
      } else {
          navbar.style.padding = "24px 8px"; // Default background color
      }
      });
  });