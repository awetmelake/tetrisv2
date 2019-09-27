/*
User Controls
Charcodes:
90 z
88 x
80 p
32 space
38 up
40 down
39 right
37 left
16 shift
*/
class Controller {
  constructor(game) {
    this.game = game;
    //user control settings
    this.controls = {
      down: 40,
      hardDrop: 32,
      right: 39,
      left: 37,
      rotate: 90,
      unrotate: 88,
      pause: 80
    };
    //change above code for control customization
  }

  keyListener = e => {
    const {
      down,
      hardDrop,
      right,
      left,
      rotate,
      unrotate,
      pause
    } = this.controls;

    if (this.game.isRunning) {
      switch (e.keyCode) {
        case down:
          this.game.move("down");
          break;
        case hardDrop:
          this.game.hardDrop();
          break;
        case right:
          this.game.move("right");
          break;
        case left:
          this.game.move("left");
          break;
        case rotate:
          this.game.rotate(1);
          break;
        case unrotate:
          this.game.rotate(-1);
          break;
      }
    }
    if (e.keyCode === pause) {
      this.game.pause();
    }
  };
}

export default Controller;
