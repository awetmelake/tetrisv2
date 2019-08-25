//imports
const game = new Game();
const controller = new Controller();
const canvas = document.getElementById("display");
const c = canvas.getContext("2d");
c.scale(20, 20);

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

const images = [
  null,
  "./images/t.png",
  "./images/o.png",
  "./images/l.png",
  "./images/j.png",
  "./images/line.png",
  "./images/z.png",
  "./images/s.png"
];

//iterates over all the cells drawing the corresponding color for the value in that cell
drawMatrix = matrix => {
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
drawNextPeices = peices => {
  let i;
  let l = peices.length;
  for (i = 0; i < l; i++) {
    peiceDisplay[i].src = images[peices[i].id];
  }
};

//update score
updateScore = () => {
  document.querySelector("h1").innerHTML = game.score;
};
//Engine//
let dropCounter = 0;
let lastTime = 0;

update = (time = 0) => {

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

update();
