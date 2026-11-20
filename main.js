// main.js — STEP 0
// Goal: prove the page loads this file and that we can paint pixels on the canvas.
// If you can read the text below in the browser, all three files are wired up.

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// The drawing surface is in pixels. Every position later (path waypoints,
// towers, enemies) will be expressed in this same coordinate space.
const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;

const GROUND = "#16231a";
const FRAME = "#2f4a37";
const TEXT = "#d7f2dd";
const MUTED = "#7fa88c";

function draw() {
  // 1. Clear the frame: fill the whole surface so last frame's pixels are gone.
  ctx.fillStyle = GROUND;
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // 2. A thin inner frame so we can see the exact edges of the game area.
  ctx.strokeStyle = FRAME;
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, GAME_WIDTH - 2, GAME_HEIGHT - 2);

  // 3. Something visible, so "nothing happens" can never be the result.
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillStyle = TEXT;
  ctx.font = "bold 34px ui-monospace, Menlo, Consolas, monospace";
  ctx.fillText("STEP 0 — CANVAS ONLINE", GAME_WIDTH / 2, GAME_HEIGHT / 2 - 16);

  ctx.fillStyle = MUTED;
  ctx.font = "16px ui-monospace, Menlo, Consolas, monospace";
  ctx.fillText(
    `drawing buffer: ${GAME_WIDTH} × ${GAME_HEIGHT} px`,
    GAME_WIDTH / 2,
    GAME_HEIGHT / 2 + 24
  );
}

// Step 0 draws exactly once. In step 2 this single call becomes a loop that
// runs ~60 times a second, which is the moment the game starts to move.
draw();
