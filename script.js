const btnRandom = document.getElementById("random-btn");

function moverAleatoriamente(btn) {
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    const maxX = window.innerWidth - btnWidth - 20;
    const maxY = window.innerHeight - btnHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.position = "fixed";
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    btn.style.fontWeight = "bold";
    btn.style.transition = "all 0.25s ease";
}

/* PC */
btnRandom.addEventListener("mouseenter", () => {
    moverAleatoriamente(btnRandom);
});

/* MÓVIL */
btnRandom.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moverAleatoriamente(btnRandom);
});



