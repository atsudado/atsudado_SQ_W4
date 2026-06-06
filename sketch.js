// ============================================================
// Week 4 Example: Choose Your Own Adventure
// ============================================================

// ------------------------------------------------------------
// ABOUT THIS FILE
// This project is split across three JavaScript files:
//
//   sketch.js — p5.js entry point: setup(), draw(), mousePressed()
//   game.js   — story state: current page
//   scenes.js — drawing helpers: buttons and screens
//
// All files are loaded in index.html in that order, so
// shared variables are available across files.
// ------------------------------------------------------------

// ------------------------------------------------------------
// BUTTON LAYOUT
// Shared constants for button positions and size.
// Button positions are calculated dynamically in setup().
// ------------------------------------------------------------
let BTN_POSITIONS = [0, 0];
const BTN_W = 220;
const BTN_H = 60;
let BTN_Y = 0;

let bgImage = null;

function preload() {
  bgImage = loadImage("assets/images/background.jpg");
}

// ============================================================
// setup()
// Runs once at the very start of the sketch.
// Sets up the canvas and font.
// ============================================================
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
  
  // Calculate button positions to center them
  BTN_POSITIONS[0] = windowWidth / 4;
  BTN_POSITIONS[1] = (windowWidth * 3) / 4;
  BTN_Y = windowHeight / 2;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
  // Recalculate button positions on resize
  BTN_POSITIONS[0] = windowWidth / 4;
  BTN_POSITIONS[1] = (windowWidth * 3) / 4;
  BTN_Y = windowHeight / 2;
}

// ============================================================
// draw()
// Runs repeatedly in a loop after setup() finishes.
// Decides which screen to draw based on the current state.
// ============================================================
function draw() {
  drawBackground();

  if (gameState === STATE_START) {
    drawStartScreen();
  } else if (gameState === STATE_PAGE_ONE) {
    drawPageOne();
  } else if (gameState === STATE_PAGE_ONE_OPTION_ONE) {
    drawPageOneOptionOne();
  } else if (gameState === STATE_PAGE_ONE_OPTION_TWO) {
    drawPageOneOptionTwo();
  } else if (gameState === STATE_PAGE_ONE_OPTION_ONE_OPTION_ONE) {
    drawPageOneOptionOneOptionOne();
  } else if (gameState === STATE_PAGE_ONE_OPTION_ONE_OPTION_TWO) {
    drawPageOneOptionOneOptionTwo();
  } else if (gameState === STATE_PAGE_ONE_OPTION_TWO_OPTION_ONE) {
    drawPageOneOptionTwoOptionOne();
  } else if (gameState === STATE_PAGE_ONE_OPTION_TWO_OPTION_TWO) {
    drawPageOneOptionTwoOptionTwo();
  } else if (gameState === STATE_PAGE_TWO) {
    drawPageTwo();
  } else if (gameState === STATE_PAGE_TWO_OPTION_ONE) {
    drawPageTwoOptionOne();
  } else if (gameState === STATE_PAGE_TWO_OPTION_TWO) {
    drawPageTwoOptionTwo();
  } else if (gameState === STATE_PAGE_TWO_OPTION_ONE_OPTION_ONE) {
    drawPageTwoOptionOneOptionOne();
  } else if (gameState === STATE_PAGE_TWO_OPTION_ONE_OPTION_TWO) {
    drawPageTwoOptionOneOptionTwo();
  } else if (gameState === STATE_PAGE_TWO_OPTION_TWO_OPTION_ONE) {
    drawPageTwoOptionTwoOptionOne();
  } else if (gameState === STATE_PAGE_TWO_OPTION_TWO_OPTION_TWO) {
    drawPageTwoOptionTwoOptionTwo();
  }
}

// ============================================================
// mousePressed()
// Handles button clicks for the title screen and story pages.
// ============================================================
function mousePressed() {
  if (gameState === STATE_START) {
    if (isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_ONE;
    }
    if (isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_TWO;
    }
  } else if (gameState === STATE_PAGE_ONE) {
    if (isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_ONE_OPTION_ONE;
    }
    if (isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_ONE_OPTION_TWO;
    }
  } else if (gameState === STATE_PAGE_ONE_OPTION_ONE) {
    if (isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_ONE_OPTION_ONE_OPTION_ONE;
    }
    if (isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_ONE_OPTION_ONE_OPTION_TWO;
    }
  } else if (gameState === STATE_PAGE_ONE_OPTION_TWO) {
    if (isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_ONE_OPTION_TWO_OPTION_ONE;
    }
    if (isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_ONE_OPTION_TWO_OPTION_TWO;
    }
  } else if (gameState === STATE_PAGE_TWO) {
    if (isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_TWO_OPTION_ONE;
    }
    if (isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_TWO_OPTION_TWO;
    }
  } else if (gameState === STATE_PAGE_TWO_OPTION_ONE) {
    if (isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_TWO_OPTION_ONE_OPTION_ONE;
    }
    if (isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_TWO_OPTION_ONE_OPTION_TWO;
    }
  } else if (gameState === STATE_PAGE_TWO_OPTION_TWO) {
    if (isMouseOver(BTN_POSITIONS[0], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_TWO_OPTION_TWO_OPTION_ONE;
    }
    if (isMouseOver(BTN_POSITIONS[1], BTN_Y, BTN_W, BTN_H)) {
      gameState = STATE_PAGE_TWO_OPTION_TWO_OPTION_TWO;
    }
  } else if (
    gameState === STATE_PAGE_ONE_OPTION_ONE_OPTION_ONE ||
    gameState === STATE_PAGE_ONE_OPTION_ONE_OPTION_TWO
  ) {
    if (isMouseOver(width / 2, 380, 240, 56)) {
      gameState = STATE_START;
    }
  } else if (
    gameState === STATE_PAGE_ONE_OPTION_TWO_OPTION_ONE ||
    gameState === STATE_PAGE_ONE_OPTION_TWO_OPTION_TWO
  ) {
    if (isMouseOver(width / 2, 380, 240, 56)) {
      gameState = STATE_START;
    }
  } else if (
    gameState === STATE_PAGE_TWO_OPTION_ONE_OPTION_ONE ||
    gameState === STATE_PAGE_TWO_OPTION_ONE_OPTION_TWO
  ) {
    if (isMouseOver(width / 2, 380, 240, 56)) {
      gameState = STATE_START;
    }
  } else if (
    gameState === STATE_PAGE_TWO_OPTION_TWO_OPTION_ONE ||
    gameState === STATE_PAGE_TWO_OPTION_TWO_OPTION_TWO
  ) {
    if (isMouseOver(width / 2, 380, 240, 56)) {
      gameState = STATE_START;
    }
  }
}
