const hearts = document.getElementById("hearts");
const button = document.getElementById("loveBtn");
const message = document.getElementById("message");

const emojis = [
  "❤️",
  "🩷",
  "🧡",
  "💛",
  "💚",
  "💙",
  "💜",
  "🤍",
  "💕",
  "💗",
  "💖",
  "💘",
  "💝"
];

function createHeart() {
  
  const heart = document.createElement("div");
  
  heart.classList.add("love");
  
  heart.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];
  
  heart.style.left =
    Math.random() * 100 + "vw";
  
  heart.style.fontSize =
    (15 + Math.random() * 30) + "px";
  
  heart.style.animationDuration =
    (4 + Math.random() * 6) + "s";
  
  hearts.appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

/* bikin love terus-terusan */

setInterval(createHeart, 250);


/* tombol love */

button.addEventListener("click", () => {
  
  message.innerHTML =
    "you mean the world to me ♡";
  
  button.innerHTML =
    "💖 I LOVE YOU TOO 💖";
  
  /* ledakan love */
  
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 60);
  }
  
});