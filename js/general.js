const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#nav .nav-menu a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
    if (navItem.getAttribute("href") === `#${current}`) {
      navItem.classList.add("active");
    }
  });
};
