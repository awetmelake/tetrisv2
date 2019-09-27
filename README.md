# TETRIS JS
Tetris is one of my favorite games. This is a tetris clone made with vanilla JS using the MVC design pattern

## How to run the app
1. Fork/Clone repo
2. run `npm start` to open in localhost with webpack-dev-server

## How it works
* Model - game.js
    * contains Game class that dictates the logic of the game
    * defines board matrix, a 10x22 2D array where 0's indicate empty cell and non 0 values indicate the cell is occupied
    * defines tetriminoes, objects with orientation, current xy position, matricies and id values
    * matrices contains array of all orientations of that piece
    * current tetrimino is translated to the board matrix through the place method
    * moving the peice requires calling the remove method, changing the orientation or position, and then using the place method to replace the piece
    * checks for collision before determining if a piece can move or if it needs to be repositioned first
    * checks for full rows and clears them, adding to the score based on amount of lines cleared

* View - display.js
  * contains code relevant to the display of the game
  * uses HTML5 canvas to draw visual representation of game matrix
  * sets the engine, invokes game method to move current piece down on an interval

* Controller - controller.js
  * contains code relevant to user key inputs
  * sets listeners for window object and start game button
  * processes key events from the player and invokes corresponding method within the game

## Dependencies
  * Bootstrap / Jquery / Popper.js
  * Webpack / Babel
