function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);

    if(audio == null) {
        return;
    }

    key.classList.add("active");

    audio.currentTime = 0;
    audio.play();
}

window.addEventListener("keydown", playSound);

//Remove active class after transition
const keys = document.querySelectorAll(".key");

keys.forEach( element => {
    element.addEventListener("transitionend", () => {
        element.classList.remove("active");
    });
});