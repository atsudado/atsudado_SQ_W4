// ============================================================
// game.js: Story State
// ============================================================
// This file stores the current page state for the
// choose-your-own-adventure game. The sketch and scenes
// files use this shared state to decide what to draw.
// ============================================================

const STATE_START                         = "start";
const STATE_PAGE_ONE                      = "pageOne";
const STATE_PAGE_ONE_OPTION_ONE           = "pageOneOptionOne";
const STATE_PAGE_ONE_OPTION_TWO           = "pageOneOptionTwo";
const STATE_PAGE_ONE_OPTION_ONE_OPTION_ONE = "pageOneOptionOneOptionOne";
const STATE_PAGE_ONE_OPTION_ONE_OPTION_TWO = "pageOneOptionOneOptionTwo";
const STATE_PAGE_ONE_OPTION_TWO_OPTION_ONE = "pageOneOptionTwoOptionOne";
const STATE_PAGE_ONE_OPTION_TWO_OPTION_TWO = "pageOneOptionTwoOptionTwo";
const STATE_PAGE_TWO                      = "pageTwo";
const STATE_PAGE_TWO_OPTION_ONE           = "pageTwoOptionOne";
const STATE_PAGE_TWO_OPTION_TWO           = "pageTwoOptionTwo";
const STATE_PAGE_TWO_OPTION_ONE_OPTION_ONE = "pageTwoOptionOneOptionOne";
const STATE_PAGE_TWO_OPTION_ONE_OPTION_TWO = "pageTwoOptionOneOptionTwo";
const STATE_PAGE_TWO_OPTION_TWO_OPTION_ONE = "pageTwoOptionTwoOptionOne";
const STATE_PAGE_TWO_OPTION_TWO_OPTION_TWO = "pageTwoOptionTwoOptionTwo";

let gameState = STATE_START;
