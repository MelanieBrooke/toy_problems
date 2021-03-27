/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array) {
  if (array.length <= 1) {
    return array;
  }
  var pivot = array[0];
  var smaller = [];
  var larger = [];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      smaller.push(array[i]);
    } else {
      larger.push(array[i]);
    }
  }
  smaller.push(pivot);
  return quicksort(smaller).concat(quicksort(larger));
};


// OICE:

// Output: A sorted array
// Input: An array (unsorted, in theory)
// Constraints: Must split the array in two halves (higher and lower than a midpoint) and *recursively* sort each half, then combine them, as the method of sorting
// Edge cases: An empty array or array of length 1

// console.log(quicksort([3, 5, 2, 7, 3, 8, 9, 2, 1, 0, 2]));
// console.log(quicksort([]));
// console.log(quicksort([4]));