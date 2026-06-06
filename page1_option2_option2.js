// ============================================================
// page1_option2_option2.js: Page One Option 2 Option 2 drawing
// ============================================================

function drawPageOneOptionTwoOptionTwo() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page One — Option 2.2", width / 2, 120);

  fill(200);
  textSize(18);
  text("A cool breeze lifts the scent of pine.", width / 2, 190);
  text("You feel the forest around you breathe.", width / 2, 220);

  drawButton(
    width / 2,
    380,
    240,
    56,
    "Back to Start",
    isMouseOver(width / 2, 380, 240, 56),
  );
}
