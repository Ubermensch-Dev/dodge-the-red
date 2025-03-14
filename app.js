const player = document.querySelector(".player");
const enem1 = document.querySelector(".enemysq1");
const enem2 = document.querySelector(".enemysq2");

let vilocityX = 3;
let vilocityY = 2;

document.addEventListener("mousemove", (e) => {
  player.style.left = `${e.clientX}px`;
  player.style.top = `${e.clientY}px`;
});

enem1.style.left = 0;
enem1.style.top = 0;




function update() {
  // Move enemies
  if(checkCollision()==1){
    console.log("gameover")
  return
 }  
  requestAnimationFrame(update); // Call itself infinitely

  movement(enem1);

//    checkCollision();

   
}
document.onkeydown = (e) => {
    
update();
}

function checkCollision() {
    let pRect = player.getBoundingClientRect();
    let eRect = enem1.getBoundingClientRect();
  
    if (
      pRect.left < eRect.right &&
      pRect.right > eRect.left &&
      pRect.top < eRect.bottom &&
      pRect.bottom > eRect.top
    ) {
      console.log("Collision Detected! 🚨");
      return 1;
    }

  }
  
  function movement(enem1){
    let boxWidth = enem1.offsetWidth;
    let boxHeight = enem1.offsetHeight;
    enem1.style.left = parseInt(enem1.style.left) + vilocityX+"px";
  enem1.style.top = parseInt(enem1.style.top) + vilocityY + "px";
  if (parseInt(enem1.style.left)+boxWidth >= window.innerWidth ) {
    vilocityX = -vilocityX;

  }
  if (parseInt(enem1.style.left) == 0 ) {
    vilocityX = -(vilocityX);

  }
  if (parseInt(enem1.style.top)+boxHeight >= window.innerHeight ) {
    vilocityY = -vilocityY;
  }
  if (parseInt(enem1.style.top) == 0 ) {
    vilocityY = -(vilocityY);
  }
  }