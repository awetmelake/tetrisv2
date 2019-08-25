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
var Controller = function() {
  //user control settings
  this.controls = {
    down: 40,
    hardDrop: 32,
    right: 39,
    left: 37,
    rotate: 90,
    unrotate: 88,
    pause: 80,
  }
  //change above code for control personalization
  var c = this.controls
  this.keyListener = function(e) {
    if (game.isRunning) {
      switch (e.keyCode) {
        case c.down:
          game.move('down');
          break;
        case c.hardDrop:
          game.hardDrop();
          break;
        case c.right:
          game.move('right');
          break;
        case c.left:
          game.move('left');
          break;
        case c.rotate:
          game.rotate(1);
          break;
        case c.unrotate:
          game.rotate(-1);
          break;
        case c.pause:
          game.pause();
          break;
      }
    }else if(e.keyCode === c.pause){
      game.pause();
    }
  }
  window.addEventListener("keydown", this.keyListener)
}
