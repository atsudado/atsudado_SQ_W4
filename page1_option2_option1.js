// ============================================================
// page1_option2_option1.js: Page One Option 2 Option 1 drawing
// ============================================================

function drawPageOneOptionTwoOptionOne() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page One — Option 2.1", width / 2, 120);

  fill(200);
  textSize(18);
  text("A fox appears and watches from the underbrush.", width / 2, 190);
  text("Its eyes glow softly in the twilight.", width / 2, 220);

  drawButton(
    width / 2,
    380,
    240,
    56,
    "Back to Start",
    isMouseOver(width / 2, 380, 240, 56),
  );
}
