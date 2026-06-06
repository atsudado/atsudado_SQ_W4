// ============================================================
// startscreen.js: Start screen drawing
// ============================================================

// ------------------------------------------------------------
// drawStartScreen()
// Draws the opening screen with two options.
// ------------------------------------------------------------
function drawStartScreen() {
  fill(255);
  textAlign(CENTER);
  textSize(48);
  text("Choose Your Own Adventure", width / 2, 130);

  fill(180);
  textSize(18);
  text("Pick a path below to begin your story.", width / 2, 175);

  drawButton(
    BTN_POSITIONS[0],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Enter the Forest",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Find the Lake",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
