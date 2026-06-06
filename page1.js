// ============================================================
// page1.js: Page One drawing
// ============================================================

function drawPageOne() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page One", width / 2, 120);

  fill(200);
  textSize(18);
  text("You find yourself in a quiet forest clearing.", width / 2, 190);
  text("A narrow path winds into the trees.", width / 2, 220);

  drawButton(
    BTN_POSITIONS[0],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Follow the Path",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Rest Under Tree",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
 
