const inputs = document.querySelectorAll(".controls input");

function controlUpdate() {
    const sizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}

inputs.forEach(e => {
    e.addEventListener("change", controlUpdate);
    e.addEventListener("mousemove", controlUpdate);
});