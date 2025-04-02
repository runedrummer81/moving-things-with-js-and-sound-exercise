// Your code here
const dodger = document.getElementById("dodger");
dodger.style.bottom = "180px"; 
const object = document.getElementById("dodger");


document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  } else if (event.key === "ArrowUp") { 
    moveDodgerUp(); // New function for moving up
  } else if (event.key === "ArrowDown") { 
    moveDodgerDown();
  }
});


function checkCollision() {
    const dodgerRect = dodger.getBoundingClientRect();
    const objectRect = object.getBoundingClientRect();

    if (
        dodgerRect.left < objectRect.right &&
        dodgerRect.right > objectRect.left &&
        dodgerRect.top < objectRect.bottom &&
        dodgerRect.bottom > objectRect.top
    ) {
        object.style.display = "none";

    }
}

const movementSound = document.getElementById("gamesound");
function playSoundOnMovement() {
    movementSound.currentTime = 0; // Restart sound from beginning
    movementSound.play(); // Play the sound
  }

const gameoverSound = document.getElementById("gameoverSounding");
function playGameoverSound() {
    gameoverSound.currentTime = 0; // Restart sound from beginning
    gameoverSound.play(); // Play the sound
  }


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) { 
      dodger.style.left = `${left - 10}px`; 
      dodger.style.transform = "scaleX(-1)";
      playSoundOnMovement(); // Play sound on movement
    } else {playGameoverSound()}
  }
  
  
  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const gameWidth = 400; 
    const dodgerWidth = 40;
    
  
    if (left < gameWidth - dodgerWidth) { 
      dodger.style.left = `${left + 10}px`; 
      dodger.style.transform = "rotate(0deg)";
      playSoundOnMovement(); // Play sound on movement
    } else {playGameoverSound()}
  }
  
  function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom < 360) { 
      dodger.style.bottom = `${bottom + 10}px`;
      dodger.style.transform = "rotate(-90deg)";
      playSoundOnMovement(); // Play sound on movement
    } else {playGameoverSound()}
  }
  
  function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) { 
      dodger.style.bottom = `${bottom - 10}px`;
      dodger.style.transform = "rotate(90deg)";
      playSoundOnMovement(); // Play sound on movement
    } else {playGameoverSound()}
  } 

  
 
  


  

