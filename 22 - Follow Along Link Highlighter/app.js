const links = document.querySelectorAll("a");

const hl = document.createElement("span");
hl.className = "highlight";
document.body.appendChild(hl);

function linkHover() {
  const pos = this.getBoundingClientRect();
  hl.style.width = `${pos.width}px`;
  hl.style.height = `${pos.height}px`;
  hl.style.top = `${pos.top + window.scrollY}px`;
  hl.style.left = `${pos.left + window.scrollX}px`;
}

links.forEach((e) => {
  e.addEventListener("mouseenter", linkHover);
});
