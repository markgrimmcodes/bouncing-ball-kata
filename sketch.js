let x = 0;
let y = 0;
let canvasBase = 200;
let velocityX = 3;
let velocityY = 5;

function setup() {
  createCanvas(canvasBase, canvasBase);
}

function draw() {
  background(220);

  circle(x, y, 30);
  x += velocityX;
  y += velocityY;

  if (x <= 0 || x >= 200) {
    velocityX = -velocityX;
  }
  if (y <= 0 || y >= 200) {
    velocityY = -velocityY;
  }
}
