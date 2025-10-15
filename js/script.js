const mobileBtn = document.querySelector(".mobile-menu");
const mobileNav = document.querySelector(".mobile-nav");
const bdy = document.querySelector("body");
const navLinks = document.querySelectorAll(".mobile-nav a");

// Klik na meni ikonu
mobileBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("active");

  if (mobileNav.classList.contains("active")) {
    bdy.style.overflow = "hidden";
  } else {
    bdy.style.overflow = "auto";
  }
});

// Klik na link u meniju
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
    bdy.style.overflow = "auto";
  });
});
