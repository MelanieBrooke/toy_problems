/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  board.paths = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  };
  board.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  board.getMoves = function(i, j, robotBoard) {
    var movements = [];
      var up = [i - 1, j];
      if (robotBoard[up[0]] !== undefined && robotBoard[up[0]][up[1]] !== undefined && robotBoard[up[0]][up[1]] === false) {
        movements.push(up);
      }
      var right = [i, j + 1];
      if (robotBoard[right[0]] !== undefined && robotBoard[right[0]][right[1]] !== undefined && robotBoard[right[0]][right[1]] === false) {
        movements.push(right);
      }
      var down = [i + 1, j];
      if (robotBoard[down[0]] !== undefined && robotBoard[down[0]][down[1]] !== undefined && robotBoard[down[0]][down[1]] === false) {
        movements.push(down);
      }
      var left = [i, j - 1];
      if (robotBoard[left[0]] !== undefined && robotBoard[left[0]][left[1]] !== undefined && robotBoard[left[0]][left[1]] === false) {
        movements.push(left)
      }
    if (movements.length === 0) {
      return false;
    } else {
      return movements;
    }
  };
  return board;
};



var robotPaths = function(n, board = null, i = 0, j = 0) {
  if (board === null) {
    board = makeBoard(n);
  }
  var paths = 0

  var botPosition = [i, j];
  board.togglePiece(i, j);

  var moveBot = function(position) {
    var moves = board.getMoves(position[0], position[1], board);
    var step = function() {
      for (var k = 0; k < moves.length; k++) {
        if (k === n) {
          paths += 1;
          return;
        }
        board.togglePiece(moves[k][0], moves[k][1]);
        moveBot([moves[k][0], moves[k][1]]);
      }
    }
    step();
    // assess moves
    // for each move, check
    // just taking a single step
    // position changes
    // step marked
  }



  // var testPath = function(i, j) {
  //   var path = [];
  //   var end = [robotBoard.length, robotBoard[0].length]
  //   var movements = getMoves(i, j, robotBoard);
  //   var move = function(l, m) {
  //     robotBoard.togglePiece(l, m);
  //     path.push([l, m]);
  //     console.log('path',path);

  //   }
  //   console.log('movements', movements);
  //   if (movements === false) {
  //     return false;
  //   } else {
  //     for (var k = 0; k < movements.length; k++) {
  //       console.log('movement #k', k);
  //       console.log('movement coordinates', movements[k][0], movements[k][1]);
  //       console.log('true or false?', robotBoard[0][0])
  //       if (robotBoard.hasBeenVisited(movements[k][0], movements[k][1]) === false) {
  //         move(movements[k][0], movements[k][1])
  //       }
  //     }
  //   }
  // }

    // if no valid movements (from here, only will happen if grid is 1x1 so take care of that in advance? Edge case?)
  // create helper function to test a path
    // create path coordinate array
    // robot checks movement, tests if space has been visited
    // if not visited, toggle to visited and add coordinates to coordinate array
    // then test the path from there
    // if visited, keep trying every space from movement array
    // if no available moves and robot has not gotten to the end of grid, back up a step and keep trying
  // when no more paths to test, return the size of the object
  moveBot(botPosition);
  console.log('paths',paths);
};

console.log(robotPaths(3));


//////////////////// Notes ////////////////////

// Input: Size of grid (one integer, it appears board is always square? Can I change it to allow rectangle boards? If so, two integers)
// Other inputs: Board (unsure how this is different than n, which I assumed was the board size?), i and j (is this a starting place for the robot?) I'm actually confused about what all this input represents. Maybe board is where you input the whole class so it can be used in this function?
// Output: Integer (number of ways robot can get from top left to bottom right without crossing the same path twice)
// Constraints: None
// Edge cases: No input (should I have a default board size? Maybe the 5x5?)
// Also, if board is 1x1, return answer immediately so helper functions don't all need to accommodate

// Create a board based on the input size (use makeboard function)
// Create a function that calculates up, down, left, and right spaces
// Create a function where the robot tests each of these spaces to see if it can move there
// Utilize .togglepiece and .hasbeenvisited to mark/check spaces the robot can no longer use
// Create a function to reset board so all are false after finding a valid path
// Within robotPaths, create an array of paths with the coordinates (flatten/stringify to test?)
// Add valid paths to the array
// If a path proves invalid, back up and keep trying