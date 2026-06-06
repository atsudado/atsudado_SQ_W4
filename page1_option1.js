// ============================================================
// page1_option1.js: Page One Option 1 drawing
// ============================================================

function drawPageOneOptionOne() {
  fill(255);
  textAlign(CENTER);
  textSize(44);
  text("Page One — Option 1", width / 2, 120);

  fill(200);
  textSize(18);
  text("You follow the winding path deeper into the forest.", width / 2, 190);
  text("The trees grow taller and the air feels cooler.", width / 2, 220);

  drawButton(
    BTN_POSITIONS[0],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Enter the Glade",
    isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H),
  );
  drawButton(
    BTN_POSITIONS[1],
    BTN_Y,
    BTN_W,
    BTN_H,
    "Cross the Bridge",
    isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H),
  );
}
