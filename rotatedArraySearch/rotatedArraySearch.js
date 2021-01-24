/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

var rotatedArraySearch = function (rotated, target) {
  var result = null;
  if (arguments.length < 2 || arguments.length > 2) {return result}
  var maxIndex = rotated.length - 1;
  var minIndex = 0;
  var midIndex = Math.floor((maxIndex + minIndex) / 2);
  var binarySearch = function(max, min, mid) {
    if (rotated[min] === target) {
      result = minIndex;
      return;
    } else if (rotated[max] === target) {
      result = maxIndex;
      return;
    } else if (rotated[mid] === target) {
      result = midIndex;
      return;
    } else {
      if (rotated[mid] > rotated[max] && rotated[mid] > rotated[min]) {
        if ((target > rotated[mid]) || (target < rotated[min] && target < rotated[mid])) {
          minIndex = midIndex;
          midIndex = Math.floor((maxIndex + minIndex) / 2);
        } else if (target < rotated[mid] && target > rotated[max]) {
          maxIndex = midIndex;
          midIndex = Math.floor((maxIndex + minIndex) / 2);
        }
      } else if (rotated[mid] < rotated[max] && rotated[mid] < rotated[min]) {
        if (target < rotated[mid] || target > rotated[min]) {
          maxIndex = midIndex;
          midIndex = Math.floor((maxIndex + minIndex) / 2);
        } else if (target > rotated[mid] && target < rotated[max]) {
          minIndex = midIndex;
          midIndex = Math.floor((maxIndex + minIndex) / 2);
        }
      } else if (rotated[mid] < rotated[max] && rotated[mid] > rotated[min]) {
        if (rotated[mid] > target) {
          maxIndex = midIndex;
          midIndex = Math.floor((maxIndex + minIndex) / 2);
        } else if (rotated[mid] < target) {
          minIndex = midIndex;
          midIndex = Math.floor((maxIndex + minIndex) / 2);
        }
      }
      if (midIndex !== maxIndex && minIndex !== midIndex) {
        binarySearch(maxIndex, minIndex, midIndex);
      }
    }
  }
  binarySearch(maxIndex, minIndex, midIndex);
  return result;
};

