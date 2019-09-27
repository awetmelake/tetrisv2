//imports
import Game from "./game.js";
import Controller from "./controller.js";

// instantiate game and controller
const game = new Game();
const controller = new Controller(game);

// controls keyListener
window.addEventListener("keydown", event => {
  controller.keyListener(event);
});

// create canvas
const canvas = document.getElementById("display");
const c = canvas.getContext("2d");
c.scale(20, 20);

// attach listener to start button element
document.getElementById("start-button").addEventListener("click", () => {
  game.start();
});

// import peiceDisplay images
import j from "./images/j.png";
import l from "./images/l.png";
import line from "./images/line.png";
import o from "./images/o.png";
import s from "./images/s.png";
import t from "./images/t.png";
import z from "./images/z.png";
const images = [null, j, l, line, o, s, t, z];

// colors corresponding to peices
const colors = [
  "black",
  "purple",
  "yellow",
  "#3077FF",
  "orange",
  "aqua",
  "red",
  "green"
];

//iterates over all the cells drawing the corresponding color for the value in that cell
const drawMatrix = matrix => {
  let i, j;
  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (i > 0) {
        c.fillStyle = colors[matrix[i][j]];
        c.fillRect(j, i, 1, 1);
        if (matrix[i][j] !== 0) {
          c.strokeRect(j, i, 0.95, 0.95);
          c.lineWidth = 0.1;
        }
      } else {
        c.fillStyle = "white";
        c.fillRect(j, i, 1, 1);
      }
    }
  }
};

//draw coming peices
const peiceDisplay = document.querySelectorAll(".p");
const drawNextPeices = peices => {
  let i;
  let l = peices.length;
  for (i = 0; i < l; i++) {
    peiceDisplay[i].src = images[peices[i].id];
  }
};

//update score
const updateScore = () => {
  document.querySelector("h1").innerHTML = game.score;
};

//Engine//
let dropCounter = 0;
let lastTime = 0;

export const update = (time = 0) => {
  if (game.isRunning === true) {
    let deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;

    if (dropCounter > game.dropInterval) {
      game.move("down");
      dropCounter = 0;
    }
  }

  drawMatrix(game.board);
  drawNextPeices(game.comingTets);
  updateScore();
  requestAnimationFrame(update);
};

// alert functions
const alert = document.getElementById("alert");
export const setAlert = input => {
  alert.innerHTML = input;
};
export const toggleAlert = () => {
  alert.hidden = !alert.hidden;
  console.log(alert.hidden)
};
