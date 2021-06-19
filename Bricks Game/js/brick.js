class Brick {
  constructor(game, position) {
    this.game = game;
    this.position = position;
    this.width = BRICK_WIDTH;
    this.height = BRICK_HEIGHT;
    this.markedForDetection = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.markedForDetection = true;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
