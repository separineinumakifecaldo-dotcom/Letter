
// ==========================
// FLOATING HEART ANIMATION
// ==========================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent =
        Math.random() > 0.5 ? "♡" : "♥";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 20 + 12) + "px";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);

}

// CREATE HEART EVERY 500MS

setInterval(createHeart, 500);
