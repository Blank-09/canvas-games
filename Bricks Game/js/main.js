let canvas = document.getElementById("mycanvas");
let ctx = canvas.getContext("2d");
const lives = document.querySelector(".lives-count");
const HEARTS = lives.querySelectorAll(".heart");

const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const BRICK_WIDTH = GAME_WIDTH / 10;
const BRICK_HEIGHT = BRICK_WIDTH / 3.33;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  game.draw(ctx);
  game.update(deltaTime);
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

const LIVES = game.lives;

function updateLives(lives) {
  switch (lives) {
    case 0:
      HEARTS[0].src = "img/No.Heart.png";
    case 1:
      HEARTS[1].src = "img/No.Heart.png";
    case 2:
      HEARTS[2].src = "img/No.Heart.png";
      break;
    case 3:
      for (var i = 0; i <= HEARTS.length; i++) HEARTS[i].src = "img/Heart.png";
  }
}
