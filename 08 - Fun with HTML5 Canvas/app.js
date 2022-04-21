const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#ffffff";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 20;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function Draw(ev) {
    if(!isDrawing) {
        return;
    }
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(ev.offsetX, ev.offsetY);
    ctx.stroke();
    [lastX, lastY] = [ev.offsetX, ev.offsetY];

    hue++;
    hue = hue>360 ? 0 : hue;
    
    direction = ctx.lineWidth >= 50 || ctx.lineWidth <= 10 ? !direction : direction;
    ctx.lineWidth = direction ? ctx.lineWidth + 1 : ctx.lineWidth - 1;
}

canvas.addEventListener("mousedown", (ev) => {
    isDrawing=true;
    [lastX, lastY] = [ev.offsetX, ev.offsetY];
});

canvas.addEventListener("mouseup", () => isDrawing=false);
canvas.addEventListener("mouseout", () => isDrawing=false);
canvas.addEventListener("mousemove", Draw);