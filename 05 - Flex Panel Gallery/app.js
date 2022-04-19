const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("click", function() {
        this.classList.toggle("open");
    });
    panel.addEventListener("transitionend", function(ev) {
        if(ev.propertyName.includes("flex")) {
            this.classList.toggle("active");
        }
    });
});