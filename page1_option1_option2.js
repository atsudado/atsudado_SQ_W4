// ============================================================
// page1_option1_option2.js: Page One Option 1 Option 2 drawing
// ============================================================

function drawPageOneOptionOneOptionTwo() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page One — Option 1.2", width / 2, 120);

  fill(200);
  textSize(18);
  text("You find a small wooden bridge over a stream.", width / 2, 190);
  text("The water sparkles like liquid glass.", width / 2, 220);

  drawButton(
    width / 2,
    380,
    240,
    56,
    "Back to Start",
    isMouseOver(width / 2, 380, 240, 56),
  );
}
