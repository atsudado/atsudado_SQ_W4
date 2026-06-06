// ============================================================
// page2_option2.js: Page Two Option 2 drawing
// ============================================================

function drawPageTwoOptionTwo() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page Two — Option 2", width / 2, 120);

  fill(200);
  textSize(18);
  text("You sit by the lake and watch the stars reflect.", width / 2, 190);
  text("The night feels calm and full of possibility.", width / 2, 220);

  drawButton(
    BTN_POSITIONS[0],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Greet Fireflies",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Listen to Echo",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
