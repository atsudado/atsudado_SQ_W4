// ============================================================
// page2_option2_option2.js: Page Two Option 2 Option 2 drawing
// ============================================================

function drawPageTwoOptionTwoOptionTwo() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page Two — Option 2.2", width / 2, 120);

  fill(200);
  textSize(18);
  text("The lake fog begins to glow softly.", width / 2, 190);
  text("Footsteps echo faintly from the shore.", width / 2, 220);

  drawButton(
    width / 2,
    380,
    240,
    56,
    "Back to Start",
    isMouseOver(width / 2, 380, 240, 56),
  );
}
