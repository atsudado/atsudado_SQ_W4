// ============================================================
// page2.js: Page Two drawing
// ============================================================

function drawPageTwo() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page Two", width / 2, 120);

  fill(200);
  textSize(18);
  text("You arrive at the edge of a glowing lake.", width / 2, 190);
  text("The water shimmers with an inviting light.", width / 2, 220);

  drawButton(
    BTN_POSITIONS[0],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Step Into Water",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Watch the Stars",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
