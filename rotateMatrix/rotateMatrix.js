/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (widthN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

var rotateMatrix = function(matrix, direction = 1) {
  // console.log(direction)
  rotated = [];
  if (matrix.length === 0) {
    console.log(rotated)
    return rotated;
  }

  var width = matrix[0].length;
  var height = matrix.length;

  if (direction === 1) {
    for (var i = 0; i < width; i++) {
      var newRow = [matrix[height-1][i]];
      rotated.push(newRow);
    }
    for (var j = height - 2; j >=0; j --) {
      for (var k = 0; k < width; k++) {
        rotated[k].push(matrix[j][k]);
      }
    }
  } else if (direction === -1) {
    console.log('direction: ', direction)
    for (var i = 0; i < width; i++) {
      rotated.push([]);
    }
    var l = width - 1;
    for (var j = 0; j < rotated.length; j++) {
      for (var k = 0; k < height; k++) {
        rotated[j].push(matrix[k][l]);
      }
      l -= 1;
    }
  }
  return rotated;
};

// var matrix = [
//   [1,2,3,4],
//   [5,6,7,8],
//   [9,'A','B','C'],
//   ['D','E','F','G']
//   ,['H', 'I', 'J', 'K']
// ];
// [
//   [4, 8, 'C', 'G', 'K'],
//   [3, 7, 'B,' 'F', 'J'],
//   [2, 6, 'A', 'E', 'I'],
//   [1, 5, 9, 'D', 'H']
// ]

// console.log(rotateMatrix(matrix));
// console.log('rotated:', rotateMatrix(matrix, -1));
// rotateMatrix([]);


// input: a matrix, created by an array of arrays
// output: a similar matrix/array of arrays, rotated (as if you took the matrix and tipped it sideways)
// constraints: none
// edge cases: non-square matrices? Unsure if that counts as an edge case. Otherwise empty matrices or input that does not fit the array of arrays pattern.
// discussion/thoughts: I am actually being thrown by using coordinates "backwards" as I love math and have taught several math classes that involved stressing "left/right before up/down" to my students, but it makes perfect sense given how you'd locate an item in the matrix.

// for first or last array, use that to create the new set of arrays, then go through the others and add them to the new arrays

