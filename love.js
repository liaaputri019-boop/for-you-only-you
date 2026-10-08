const flowers = document.getElementById("flowers");

const flowerList = [
  "🌸",
  "🌷",
  "🌺",
  "🌹",
  "💐",
  "🩷",
  "💗",
  "💕",
  "✨"
];


function createFlower() {
  
  const flower = document.createElement("div");
  
  flower.classList.add("flower");
  
  flower.innerHTML =
    flowerList[
      Math.floor(
        Math.random() * flowerList.length
      )
    ];
  
  /*
     arah cipratan bunga
  */
  
  const x =
    (Math.random() - 0.5) * 650;
  
  const y =
    (Math.random() - 0.5) * 650;
  
  const rotate =
    (Math.random() - 0.5) * 720;
  
  flower.style.setProperty(
    "--x",
    x + "px"
  );
  
  flower.style.setProperty(
    "--y",
    y + "px"
  );
  
  flower.style.setProperty(
    "--rotate",
    rotate + "deg"
  );
  
  
  flower.style.fontSize =
    (18 + Math.random() * 25) + "px";
  
  
  flowers.appendChild(flower);
  
  
  setTimeout(() => {
    
    flower.remove();
    
  }, 3000);
}


/*
    🌸 CIPRATAN BUNGA
    langsung ketika halaman dibuka
*/

for (let i = 0; i < 45; i++) {
  
  setTimeout(
    createFlower,
    i * 45
  );
  
}


/*
    bunga tambahan
*/

setInterval(() => {
  
  createFlower();
  
}, 900);


/*
    tombol CLOSE
*/

function closePage() {
  
  window.location.href = "index.html";
  
}