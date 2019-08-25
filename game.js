// Game logic
function Game() {
  //10 x 22
  this.board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  const pieces = [
    //t
    {
      id: 1,
      orientation: 0,
      y: 0,
      x: 3,
      matrices: [
        [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
        [[0, 1, 0], [1, 1, 0], [0, 1, 0]],
        [[0, 1, 0], [1, 1, 1], [0, 0, 0]],
        [[0, 1, 0], [0, 1, 1], [0, 1, 0]]
      ]
    },
    //o
    {
      id: 2,
      orientation: 0,
      y: 0,
      x: 4,
      matrices: [
        [[2, 2], [2, 2]],
        [[2, 2], [2, 2]],
        [[2, 2], [2, 2]],
        [[2, 2], [2, 2]],
        [[2, 2], [2, 2]]
      ]
    },
    //l
    {
      id: 3,
      orientation: 0,
      y: 0,
      x: 3,
      matrices: [
        [[0, 0, 3], [3, 3, 3], [0, 0, 0]],
        [[0, 3, 0], [0, 3, 0], [0, 3, 3]],
        [[0, 0, 0], [3, 3, 3], [3, 0, 0]],
        [[3, 3, 0], [0, 3, 0], [0, 3, 0]]
      ]
    },
    //j
    {
      id: 4,
      orientation: 0,
      y: 0,
      x: 3,
      matrices: [
        [[0, 0, 0], [4, 4, 4], [0, 0, 4]],
        [[0, 4, 0], [0, 4, 0], [4, 4, 0]],
        [[4, 0, 0], [4, 4, 4], [0, 0, 0]],
        [[0, 4, 4], [0, 4, 0], [0, 4, 0]]
      ]
    },
    //line
    {
      id: 5,
      orientation: 0,
      y: 0,
      x: 3,
      matrices: [
        [[0, 0, 0, 0], [5, 5, 5, 5], [0, 0, 0, 0], [0, 0, 0, 0]],
        [[0, 0, 5, 0], [0, 0, 5, 0], [0, 0, 5, 0], [0, 0, 5, 0]],
        [[0, 0, 0, 0], [0, 0, 0, 0], [5, 5, 5, 5], [0, 0, 0, 0]],
        [[0, 5, 0, 0], [0, 5, 0, 0], [0, 5, 0, 0], [0, 5, 0, 0]]
      ]
    },
    //z
    {
      id: 6,
      orientation: 0,
      y: 0,
      x: 3,
      matrices: [
        [[0, 0, 0], [6, 6, 0], [0, 6, 6]],
        [[0, 0, 6], [0, 6, 6], [0, 6, 0]],
        [[0, 0, 0], [6, 6, 0], [0, 6, 6]],
        [[0, 6, 0], [6, 6, 0], [6, 0, 0]]
      ]
    },
    //s
    {
      id: 7,
      orientation: 0,
      y: 0,
      x: 3,
      matrices: [
        [[0, 7, 7], [7, 7, 0], [0, 0, 0]],
        [[0, 7, 0], [0, 7, 7], [0, 0, 7]],
        [[0, 0, 0], [0, 7, 7], [7, 7, 0]],
        [[7, 0, 0], [7, 7, 0], [0, 7, 0]]
      ]
    }
  ];
  //'State'
  this.score = 0;
  this.isRunning = false;
  this.currentTet = {};
  this.heldTet = {};
  this.comingTets = [];
  this.dropInterval = 1000;
  // Methods //
  this.start = () => {
    this.isRunning = true;
    let alert = document.getElementById("alert");
    alert.hidden = true;
    let startBtn = document.getElementById("start-button");
    startBtn.disabled = true;
    startBtn.style.color = "gray";
    this.spawnTet();
  };
  this.pause = () => {
    let alert = document.getElementById("alert");
    //if comingTets is empty user never started game and therefore cannot pause
    if (this.isRunning && Object.entries(this.comingTets).length !== 0) {
      alert.innerHTML = "Press p to unpause";
      this.isRunning = false;
      alert.hidden = false;
    } else if (Object.entries(this.comingTets).length !== 0) {
      this.isRunning = true;
      alert.hidden = true;
    }
  };
  //alert user score, end game, clear board and reset values
  this.gameOver = () => {
    let b = this.board;
    let alert = document.getElementById("alert");
    this.isRunning = false;
    alert.innerHTML = "Gameover! Score: " + this.score;
    alert.hidden = false;
    document.getElementById("start-button").disabled = false;
    for (var i = 0; i < b.length; i++) {
      b.splice(i, 1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    }
    this.score = 0;
    this.heldTet = {};
    this.comingTets = [];
    this.currentTet = {};
  };
  //spawns new tetrimino, keep comingTets filled, calls gameover() if tet spawns on top of stack
  this.spawnTet = () => {
    while (this.comingTets.length < 5) {
      this.comingTets.push(pieces[Math.floor(Math.random() * 7)]);
    }
    let ct = this.currentTet;
    let nt = this.comingTets.shift();
    ct.id = nt.id;
    ct.y = nt.y;
    ct.x = nt.x;
    ct.matrices = nt.matrices;
    ct.orientation = nt.orientation;
    checkCollision() !== false ? this.gameOver() : place();
  };
  //moves currentTet 1 block in given direction, checks if movement causes collision before placing on board matrix
  this.move = dir => {
    let ct = this.currentTet;
    remove();
    if (dir === "left") {
      this.currentTet.x--;
      if (checkCollision() !== false) {
        this.currentTet.x++;
      }
    } else if (dir === "right") {
      this.currentTet.x++;
      if (checkCollision() !== false) {
        this.currentTet.x--;
      }
    } else if (dir === "down") {
      this.currentTet.y++;
      if (checkCollision() !== false) {
        this.currentTet.y--;
        place();
        this.spawnTet();
        clearLines();
      }
    }
    place();
  };
  //rotates currentTet, check if rotation causes collision, if so move and check again until rotation doesnt cause collision
  this.rotate = dir => {
    remove();
    let ct = this.currentTet;
    let reset = ct.orientation;
    let pushX = 1;
    let pushY = 1;
    if (dir === 1) {
      // +- 1 % 4 in order to get from orientation 3 back to 0
      ct.orientation = (ct.orientation + 1) % 4;
    } else if (dir === -1) {
      ct.orientation = (ct.orientation + 3) % 4;
    }
    target: while (checkCollision() !== false) {
      if (checkCollision() === "wall") {
        ct.x < 6 ? (ct.x += pushX) : (ct.x -= pushX);
      }
      pushX++;
      //catch infinite looping
      if (pushX > 4) {
        ct.orientation = reset;
        break target;
      }
    }
    place();
  };
  //moves the currentTet max number of cells downwards before it hits stack
  this.hardDrop = () => {
    remove();
    if (checkCollision() !== "stack") {
      while (checkCollision() !== "stack") {
        this.currentTet.y++;
      }
      this.currentTet.y--;
      place();
      this.spawnTet();
      clearLines();
    }
  };
  //places the matrix of the currentTet onto the board matrix factoring in position offset
  let place = () => {
    if (this.isRunning) {
      let ct = this.currentTet;
      let matrix = ct.matrices[ct.orientation];
      let b = this.board;
      let l = matrix.length;
      for (let i = 0; i < l; i++) {
        for (let j = 0; j < l; j++) {
          if (matrix[i][j] !== 0) {
            b[i + ct.y][j + ct.x] = matrix[i][j];
          }
        }
      }
    }
  };
  //removes currentTet from the game matrix in order to be re-placed
  let remove = () => {
    let ct = this.currentTet;
    let matrix = ct.matrices[ct.orientation];
    let b = this.board;
    let l = matrix.length;
    for (var i = 0; i < l; i++) {
      for (var j = 0; j < l; j++) {
        if (matrix[i][j] !== 0) {
          b[i + ct.y][j + ct.x] = 0;
        }
      }
    }
  };
  //checks for collision of currentTet, returns the type of collision detected or false if no collision
  let checkCollision = () => {
    let b = this.board;
    let ct = this.currentTet;
    let matrix = ct.matrices[ct.orientation];
    let l = matrix.length;
    for (var i = 0; i < l; i++) {
      for (var j = 0; j < l; j++) {
        if (matrix[i][j] !== 0) {
          if (ct.x + j > 9 || ct.x + j < 0) {
            return "wall";
          } else if (ct.y + j < -1) {
            return "ceiling";
          } else if (ct.y + i > 21 || b[i + ct.y][j + ct.x] !== 0) {
            return "stack";
          }
        }
      }
    }
    return false;
  };
  //clear lines and add to score for number of lines cleared
  let clearLines = () => {
    let b = this.board;
    let i, j;
    let lines = 0;
    target: for (i = b.length - 1; i > 0; i--) {
      for (j = 0; j < b[i].length; j++) {
        if (b[i][j] === 0) {
          continue target; //skip any row with anys 0
        }
      }
      lines++;
      remove();
      let clearedLine = b.splice(i, 1)[0].fill(0);
      b.unshift(clearedLine);
      place();
      i++;
    }
    this.score += lines * (lines * 10);
  };
}
