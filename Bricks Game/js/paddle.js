class Paddle {
  constructor(game) {
    this.gameWidth = game.gameWidth;
    this.width = 100;
    this.height = 10;
    this.maxspeed = 7;
    this.speed = 0;
    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10,
    };
  }

  moveLeft() {
    this.speed = -this.maxspeed;
  }

  moveRight() {
    this.speed = this.maxspeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    ctx.fillStyle = "#ff0";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    this.position.x += this.speed;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.width > this.gameWidth)
      this.position.x = this.gameWidth - this.width;
  }
}
