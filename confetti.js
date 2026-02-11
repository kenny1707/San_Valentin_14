document.addEventListener("DOMContentLoaded", () => {
  const emojis = ["🎉", "💖", "❤️", "✨", "😍"];
  const durationTotal = 240000; // 4 minutos
  const intervalTime = 100;    // cada 300 ms caen emojis

  const endTime = Date.now() + durationTotal;

  const interval = setInterval(() => {
    if (Date.now() > endTime) {
      clearInterval(interval);
      return;
    }

    for (let i = 0; i < 5; i++) {
      crearConfetti();
    }
  }, intervalTime);

  function crearConfetti() {
    const confetti = document.createElement("div");

    confetti.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = Math.random() * 16 + 18 + "px";
    confetti.style.opacity = Math.random();
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";

    const fallTime = Math.random() * 2000 + 3000; // 3–5 s
    confetti.style.transition = `transform ${fallTime}ms linear, opacity ${fallTime}ms ease`;

    document.body.appendChild(confetti);

    requestAnimationFrame(() => {
      confetti.style.transform = `
        translateY(${window.innerHeight + 100}px)
        rotate(${Math.random() * 360}deg)
      `;
      confetti.style.opacity = "0";
    });

    setTimeout(() => confetti.remove(), fallTime);
  }
});
