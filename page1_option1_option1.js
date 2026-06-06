// ============================================================
// page1_option1_option1.js: Page One Option 1 Option 1 drawing
// ============================================================

function drawPageOneOptionOneOptionOne() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page One — Option 1.1", width / 2, 120);

  fill(200);
  textSize(18);
  text("You discover a hidden glade filled with light.", width / 2, 190);
  text("A strange song drifts through the trees.", width / 2, 220);

  drawButton(
    width / 2,
    380,
    240,
    56,
    "Back to Start",
    isMouseOver(width / 2, 380, 240, 56),
  );
}
