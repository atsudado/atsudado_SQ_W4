// ============================================================
// page1_option2.js: Page One Option 2 drawing
// ============================================================

function drawPageOneOptionTwo() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page One — Option 2", width / 2, 120);

  fill(200);
  textSize(18);
  text("You decide to rest beneath an old oak tree.", width / 2, 190);
  text("A gentle breeze rustles through the leaves.", width / 2, 220);

  drawButton(
    BTN_POSITIONS[0],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Follow the Fox",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Embrace Solitude",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
