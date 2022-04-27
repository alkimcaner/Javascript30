const timeLeft = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const presets = document.querySelectorAll("[data-time]");
let timeInterval;

function timer(seconds) {
  clearInterval(timeInterval);
  const then = Date.now() + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  timeInterval = setInterval(() => {
    const remainingSeconds = Math.round((then - Date.now()) / 1000);
    if (remainingSeconds < 0) {
      clearInterval(timeInterval);
      return;
    }
    displayTimeLeft(remainingSeconds);
    timeLeft.classList.toggle("active");
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const leftSecs = seconds % 60;
  const remainingTime = `${minutes.toString().padStart(2, 0)}:${leftSecs
    .toString()
    .padStart(2, 0)}`;

  document.title = remainingTime;
  timeLeft.textContent = remainingTime;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${minutes
    .toString()
    .padStart(2, 0)}`;
}

presets.forEach((e) => {
  e.addEventListener("click", function () {
    timer(parseInt(this.dataset.time));
  });
});

document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
