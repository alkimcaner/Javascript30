const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function Tick() {
    const time = new Date();
    const second = time.getSeconds();
    const minute = time.getMinutes();
    const hour = time.getHours();

    const secondDeg = (second * 6) - 90;
    const minuteDeg = (minute * 6) - 90;
    const hourDeg = (hour * 30) + (minute / 2) - 90;
    
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

Tick();
setInterval(Tick, 1000);