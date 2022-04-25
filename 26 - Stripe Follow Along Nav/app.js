const dropdownbg = document.querySelector(".dropdownBackground");
const navmenu = document.querySelectorAll(".cool > li");

function hoverMenu() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    100
  );
  dropdownbg.classList.add("open");

  const anchor = this.querySelector("a");
  const dropdown = this.querySelector(".dropdown");
  const pos = anchor.getBoundingClientRect();
  const droppos = dropdown.getBoundingClientRect();

  dropdownbg.style.left = `${droppos.left}px`;
  dropdownbg.style.top = `${pos.top}px`;
  dropdownbg.style.width = `${droppos.width}px`;
  dropdownbg.style.height = `${droppos.height}px`;
}

function closeMenu() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  dropdownbg.classList.remove("open");
}

function toggleMenu() {
  this.classList.toggle("trigger-enter");
  this.classList.toggle("trigger-enter-active");
  dropdownbg.classList.toggle("open");
}

navmenu.forEach((e) => {
  e.addEventListener("mouseenter", hoverMenu);
  e.addEventListener("mouseleave", closeMenu);
  e.addEventListener("click", toggleMenu);
});
