const items = [...document.querySelectorAll(".item input")];
let firstItem = 0;
let lastItem = 0;
let isShift = false;

function checkItem(ev) {
  if (ev.shiftKey) {
    lastItem = items.indexOf(this);

    if (firstItem > lastItem) {
      [firstItem, lastItem] = [lastItem, firstItem];
    }

    const checkList = items.slice(firstItem, lastItem);

    checkList.forEach((e) => {
      e.checked = true;
    });
  }

  firstItem = items.indexOf(this);
}

items.forEach((e) => {
  e.addEventListener("click", checkItem);
});
