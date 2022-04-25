const logo = document.querySelector(".logo");
const navbar = document.querySelector("#main");
const navTop = navbar.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= navTop) {
    logo.classList.add("active");
  } else {
    logo.classList.remove("active");
  }
});
