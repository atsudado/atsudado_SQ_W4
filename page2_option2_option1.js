// ============================================================
// page2_option2_option1.js: Page Two Option 2 Option 1 drawing
// ============================================================

function drawPageTwoOptionTwoOptionOne() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page Two — Option 2.1", width / 2, 120);

  fill(200);
  textSize(18);
  text("A family of fireflies appears over the water.", width / 2, 190);
  text("Their glow pulses in time with your heartbeat.", width / 2, 220);

  drawButton(
    width / 2,
    380,
    240,
    56,
    "Back to Start",
    isMouseOver(width / 2, 380, 240, 56),
  );
}
