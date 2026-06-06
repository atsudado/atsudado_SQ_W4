// ============================================================
// page2_option1_option1.js: Page Two Option 1 Option 1 drawing
// ============================================================

function drawPageTwoOptionOneOptionOne() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page Two — Option 1.1", width / 2, 120);

  fill(200);
  textSize(18);
  text("You touch the water and feel a warm pulse.", width / 2, 190);
  text("The lake seems to hum with energy.", width / 2, 220);

  drawButton(
    width / 2,
    380,
    240,
    56,
    "Back to Start",
    isMouseOver(width / 2, 380, 240, 56),
  );
}
