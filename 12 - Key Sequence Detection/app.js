const text = document.querySelector(".text");
let keyArray = [];

window.addEventListener("keyup", (ev) => {
  const secret = "flip";
  keyArray.push(ev.key);
  keyArray.splice(-secret.length - 1, keyArray.length - secret.length);
  console.log(keyArray.join(""));

  if (keyArray.join("") == secret) {
    text.classList.toggle("active");
    console.log("%cFLIP!", "background-color: red; font-size: 18px;");
  }
});
