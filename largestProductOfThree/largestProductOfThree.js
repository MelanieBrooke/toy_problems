/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  if (array.length < 3) {
    if (array.length === 2) {
      return array[0] * array[1];
    } else if (array.length === 1) {
      return (array[0]);
    } else {
      return 0;
    }
  }

  var biggest = array[0] * array[1] * array[2];
  for (i = 0; i < array.length; i++) {
    for (j =  i + 1; j < array.length; j++) {
      for (k = j + 1; k < array.length; k++) {
        var multiplied = (array[i] * array[j] * array[k]);
        if (multiplied > biggest) {
          biggest = multiplied;
        }
      }
    }
  }
  return biggest;
};

// input: array of numbers
// output: number that is the product of the largest three numbers in the array
// edge cases: not numbers in array? Empty array? Fewer than 3 numbers?
// constraints: none

// handle edge cases:
// for array of 2, multiply them. Array of 1, return that number. Empty array, return 0

// create result variable max
// iterate through the numbers, multiplying them by combos of the other numbers
// if the answer is bigger than max, change max
