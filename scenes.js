// ============================================================
// scenes.js: Drawing Functions
// ============================================================
// This file contains drawing helper functions for the
// choose-your-own-adventure game. It does not contain any
// story state logic — that lives in game.js.
// ============================================================

// ------------------------------------------------------------
// drawBackground()
// A simple dark background drawn every frame.
// ------------------------------------------------------------
function drawBackground() {
  if (bgImage) {
    push();
    imageMode(CORNER);
    image(bgImage, 0, 0, width, height);
    pop();
  } else {
    background(10);
  }
}

// ------------------------------------------------------------
// drawButton(x, y, w, h, label, isHovered)
// Draws a rectangular button with a text label.
// isHovered changes the colour when the mouse is over it.
// ------------------------------------------------------------
function drawButton(x, y, w, h, label, isHovered) {
  push();
  rectMode(CENTER);

  fill(isHovered ? color(80, 80, 100) : color(40, 40, 60));
  stroke(isHovered ? color(180, 180, 220) : color(80, 80, 100));
  strokeWeight(2);
  rect(x, y, w, h, 8);

  fill(255);
  noStroke();
  textAlign(CENTER, CENTER);
  textSize(18);
  text(label, x, y);

  pop();
}

// ------------------------------------------------------------
// isMouseOver(x, y, w, h)
// Returns true if the mouse cursor is inside the rectangle.
// ------------------------------------------------------------
function isMouseOver(x, y, w, h) {
  return (
    mouseX > x - w / 2 &&
    mouseX < x + w / 2 &&
    mouseY > y - h / 2 &&
    mouseY < y + h / 2
  );
}
