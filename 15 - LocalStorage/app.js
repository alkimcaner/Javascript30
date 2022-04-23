const list = document.querySelector(".plates");
const form = document.querySelector(".add-items");
const checkButton = document.querySelector("#check");
const uncheckButton = document.querySelector("#uncheck");
const clearButton = document.querySelector("#clear");

const storage = window.localStorage.getItem("items");
const items = JSON.parse(storage) || [];

function updateStorage(data) {
  window.localStorage.setItem("items", JSON.stringify(data));
}

function displayItems() {
  //Clear list
  list.innerHTML = "";

  //Draw elements
  items.forEach((e, index) => {
    //Create li element
    const listItem = document.createElement("li");
    list.appendChild(listItem);

    //Create checkbox element
    const itemCheck = document.createElement("input");
    itemCheck.setAttribute("type", "checkbox");
    itemCheck.id = index;

    itemCheck.addEventListener("click", toggleCheck);

    //If the item is checked, add or remove attribute
    e.isChecked
      ? itemCheck.setAttribute("checked", "")
      : itemCheck.removeAttribute("checked");

    //Create label element
    const itemLabel = document.createElement("label");
    itemLabel.setAttribute("for", itemCheck.id);
    itemLabel.textContent = e.text;

    //Append checkbox and label to li element
    listItem.append(itemCheck, itemLabel);
  });
}

function addItem() {
  const inputField = document.querySelector(".add-items input[type='text']");
  const itemObject = {
    text: inputField.value,
    isChecked: false,
  };
  items.push(itemObject);
  updateStorage(items);
}

function toggleCheck() {
  const itemObject = items[this.id];
  itemObject.isChecked = !itemObject.isChecked;
  updateStorage(items);
}

function checkAll() {
  items.forEach((e) => {
    e.isChecked = true;
  });
  updateStorage(items);
  displayItems();
}

function uncheckAll() {
  items.forEach((e) => {
    e.isChecked = false;
  });
  updateStorage(items);
  displayItems();
}

function clearAll() {
  items.splice(0);
  updateStorage(items);
  displayItems();
}

checkButton.addEventListener("click", checkAll);
uncheckButton.addEventListener("click", uncheckAll);
clearButton.addEventListener("click", clearAll);

form.addEventListener("submit", addItem);
displayItems();
