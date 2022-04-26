const items = document.querySelector(".items");
let isClick = false;
let startX;
let initialScroll;

items.addEventListener("mousedown", (ev) => {
  isClick = true;
  items.classList.add("active");
  startX = ev.screenX;
  initialScroll = items.scrollLeft;
});
items.addEventListener("mouseup", (ev) => {
  isClick = false;
  items.classList.remove("active");
});
items.addEventListener("mouseleave", (ev) => {
  isClick = false;
  items.classList.remove("active");
});

function drag(ev) {
  if (!isClick) return;
  this.scrollLeft = initialScroll + (startX - ev.screenX);
}

items.addEventListener("mousemove", drag);
