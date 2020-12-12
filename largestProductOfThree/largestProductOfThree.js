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

  var bubbleSort = function(array) {
    var swaps = 0;
    for (i = 0; i < array.length; i++) {
      if (array[i + 1] !== undefined) {
        var tempVal1 = array[i];
        var tempVal2 = array[i + 1];
        if (array[i] > array[i + 1]) {
          array[i] = tempVal2;
          array[i+1] = tempVal1;
          swaps += 1;
        }
      }
    }
    if (swaps === 0) {
      return array;
    } else {
      return bubbleSort(array);
    }
  };

  var sortedArray = bubbleSort(array);
  var largest = sortedArray[sortedArray.length - 1];
  var secondLargest = sortedArray[sortedArray.length - 2];
  var thirdLardest = sortedArray[sortedArray.length - 3];
  return largest * secondLargest * thirdLardest;
};

// var largestProductOfThree = function(array) {
//   if (array.length < 3) {
//     if (array.length === 2) {
//       return array[0] * array[1];
//     } else if (array.length === 1) {
//       return (array[0]);
//     } else {
//       return 0;
//     }
//   }
//   var sortedArray = array.sort();
//   var largest = sortedArray[sortedArray.length - 1];
//   var secondLargest = sortedArray[sortedArray.length - 2];
//   var thirdLardest = sortedArray[sortedArray.length - 3];
//   return largest * secondLargest * thirdLardest;
// };


// input: array of numbers
// output: number that is the product of the largest three numbers in the array
// edge cases: not numbers in array? Empty array? Fewer than 3 numbers?
// constraints: none

// handle edge cases:
// for array of 2, multiply them. Array of 1, return that number. Empty array, return 0

// sort the numbers, then take the biggest three
// Use your bubble sort if regular sort can't handle negatives
// create variables for largest, second largest, and third largest
// multiply those three numbers together
// return answer
