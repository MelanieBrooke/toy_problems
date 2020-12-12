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
  var sortedArray = array.sort();
  var largest = sortedArray[sortedArray.length - 1];
  var secondLargest = sortedArray[sortedArray.length - 2];
  var thirdLardest = sortedArray[sortedArray.length - 3];
  return largest * secondLargest * thirdLardest;
};


// input: array of numbers
// output: number that is the product of the largest three numbers in the array
// edge cases: not numbers in array? Empty array? Fewer than 3 numbers?
// constraints: none

// create variables for largest, second largest, and third largest
// find the largest number, make largest variable, remove it from array
// repeat twice
// no!! Sort the numbers! Then take the biggest three! Use your bubble sort
// multiply those three numbers together
// return answer
