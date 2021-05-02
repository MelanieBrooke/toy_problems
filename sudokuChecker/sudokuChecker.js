/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board.
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input:
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  var result = 'solved';

  var checkNine = (array) => {
    if (array.length !== 9) {
      result = 'invalid';
    }
    var checkSet = new Set();
    for (var i = 0; i < 9; i++) {
      if (array[i] > 0 && array[i] < 10 && Number.isInteger(array[i])) {
        checkSet.add(array[i]);
      } else {
        result = 'invalid';
      }
    }
    if (checkSet.size !== 9) {
      result = 'invalid';
    }
  };

  var rows = board.split('\n');

  for (var m = 0; m < 9; m++) {
    rows[m] = rows[m].split('');
    for (var n = 0; n < 9; n++) {
      rows[m][n] = Number(rows[m][n]);
    }
  }

  rows.forEach(row => checkNine(row));
  if (result === 'invalid') {
    return result;
  }

  var columns = [[],[],[],[],[],[],[],[],[]];
  for (var k = 0; k < 9; k++) {
    for (var l = 0; l < 9; l++) {
      columns[l].push(rows[k][l]);
    }
  }

  columns.forEach(column => checkNine(column));
  if (result === 'invalid') {
    return result;
  }

  var boxes = [[],[],[],[],[],[],[],[],[]];
  for (var a = 0; a < 9; a++) {
    for (var b = 0; b < 3; b++) {
      if (a === 0 || a === 3 || a === 6) {
        boxes[a].push(rows[a][b], rows[a+1][b], rows[a+2][b]);
      } else if (a === 1 || a === 4 || a === 7) {
        boxes[a].push(rows[a-1][b+3], rows[a][b+3], rows[a+1][b+3]);
      } else if (a === 2 || a === 5 || a === 8) {
        boxes[a].push(rows[a-2][b+6], rows[a-1][b+6], rows[a][b+6]);
      }
    }
  }

  boxes.forEach(box => checkNine(box));

  return result;
}


// var pass = '735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';
// var fail1 = '735844296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';
// var fail2 = '735814296\n796275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';
// var fail3 = '35814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429';

// console.log(sudokuChecker(pass));
// console.log(sudokuChecker(fail1));
// console.log(sudokuChecker(fail2));
// console.log(sudokuChecker(fail3));


// input: A string listing the nine rows of the sudoku board
// output: 'solved' or 'invalid' based on if the board is valid or not
// constraints: none
// edge cases: any input that isn't a valid board with nine rows of nine numbers separated with newline
// notes: none


// var result set to solved
// create a checker helper function that tests that numbers 1-9 exist and aren't duplicated
// if anything is caught, change the result variable to invalid and break
// run each row through the checker
// run each column through the checker (if result hasn't been changed)
// run each box through the chevker (if result hasn't been changed)
// return result

// helper //
// take in array
// for each character, check that it's in the 1-9 range, then add to set, set size should be 9
// return true or false

// to check a row, separate string by newline and create arrays from each group (create array of arrays)
// basically create a matrix
// to check a column, iterate 0-8 and create new arrays using the indices and run them through the checker
// or steal rotateMatrix code (only need to rotate clockwise) and create new set of arrays that way
// to check boxes, create some formula that grabs the matrix coordinates and creates a new set of arrays
