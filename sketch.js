function setup() {
  createCanvas(640, 480);
  noFill();
  stroke(255);
}
function draw() {
  background(128, 0, 64);

  ellipse(320, 240, mouseX, mouseY);
}
