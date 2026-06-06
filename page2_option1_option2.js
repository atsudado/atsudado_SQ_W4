// ============================================================
// page2_option1_option2.js: Page Two Option 1 Option 2 drawing
// ============================================================

function drawPageTwoOptionOneOptionTwo() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page Two — Option 1.2", width / 2, 120);

  fill(200);
  textSize(18);
  text("A ripple spreads across the glowing lake.", width / 2, 190);
  text("The surface reflects a thousand tiny stars.", width / 2, 220);

  drawButton(
    width / 2,
    380,
    240,
    56,
    "Back to Start",
    isMouseOver(width / 2, 380, 240, 56),
  );
}
