const messages = [
    "Desde que llegaste a mi vida, todo cambió para bien 🌸",
    "Tu sonrisa es mi lugar favorito 😍",
    "Gracias por existir y amarme 💖",
    "Prometo cuidarte siempre ❤️",
    "Este amor es solo nuestro ✨"
];

let index = 0;
const messageEl = document.getElementById("message");
const counterEl = document.getElementById("counter");
const secretBtn = document.getElementById("secretBtn");

function nextMessage() {
    if (index < messages.length) {
        messageEl.textContent = messages[index];
        index++;
    } else {
        showCounter();
        secretBtn.classList.remove("hidden");
    }
}

function showCounter() {
    counterEl.classList.remove("hidden");

    // CAMBIA ESTA FECHA POR LA TUYA
    const startDate = new Date("2024-01-01");

    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        counterEl.textContent = `Llevamos ${days} días amándonos ❤️`;
    }, 1000);
}

function showSecret() {
    const pass = prompt("Contraseña del amor 💕");
    if (pass === "amor") {
        alert("Eres el amor de mi vida 😘");
    } else {
        alert("Ups… esa no es 😏");
    }
}

function toggleMusic() {
    const music = document.getElementById("music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}
