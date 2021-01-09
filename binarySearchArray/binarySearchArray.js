/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  var minIndex = 0;
  var maxIndex = array.length - 1;
  var midIndex = Math.floor((maxIndex + minIndex) / 2);
  var targetIndex = null;

  var checkMidpoint = function(min, max, mid) {
    if (array[mid] === target) {
      targetIndex = midIndex;
      return;
    } else if (array[min] === target) {
      targetIndex = minIndex;
      return;
    } else if (array[max] === target) {
      targetIndex = maxIndex;
      return;
    } else if (max - min === 1) {
      return;
    } else {
      if (array[mid] > target) {
        maxIndex = mid;
        midIndex =Math.floor((maxIndex + minIndex) / 2);
        if (maxIndex !== minIndex) {
          checkMidpoint(minIndex, maxIndex, midIndex);
        }
      } else if (array[mid] < target) {
        minIndex = mid;
        midIndex = Math.floor((maxIndex + minIndex) / 2);
        if (minIndex !== maxIndex) {
          checkMidpoint(minIndex, maxIndex, midIndex);
        }
      }
    }
  };

  checkMidpoint(minIndex, maxIndex, midIndex);
  return targetIndex;
};