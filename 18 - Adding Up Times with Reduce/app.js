const videos = Array.from(document.querySelectorAll("[data-time]"));

const totalTime = videos
  .map((e) => {
    const time = e.dataset.time.split(":").map(parseFloat);
    return time[0] * 60 + time[1];
  })
  .reduce((total, e) => total + e, 0);

let secondsLeft = totalTime;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log([hours, mins, secondsLeft].join(":"));
