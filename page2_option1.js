// ============================================================
// page2_option1.js: Page Two Option 1 drawing
// ============================================================

function drawPageTwoOptionOne() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page Two — Option 1", width / 2, 120);

  fill(200);
  textSize(18);
  text("You step closer to the glowing water.", width / 2, 190);
  text("A soft light dances across the surface.", width / 2, 220);

  drawButton(
    BTN_POSITIONS[0],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Touch the Water",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Observe Ripples",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
