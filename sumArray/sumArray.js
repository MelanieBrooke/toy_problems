/*
 * Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
 * A single array item will count as a contiguous sum.
 *
 * example 1: sumArray([1, 2, 3]); // => 6
 * example 2: sumArray([1, 2, 3, -4]); // 6
 * example 3: sumArray([1, 2, 3, -4, 5]); // 7
 * example 4: sumArray([4, -1, 5]); // => 8
 * example 5: sumArray([10, -11, 11]); // 11
 */

// Solved in O(n) time with O(1) memory
var sumArray = function(array) {
  if (!array.length) {
    return null;
  }
  if (array.length === 1) {
    return array[0];
  }

  var allNegs = true;

  // covering arrays of all negatives without obsessively checking them individually later
  // also covers if the last item is the largest number on its own and doesn't need to be accounted for later
  var result = array[0];
  for (j = 0; j < array.length; j++) {
    if (array[j] > result) {
      result = array[j];
      if (array[j] > 0) {
        allNegs = false;
      }
    }
  }
  if (allNegs === true) {
    return result;
  }

  var temp = array[0];
  var newStart = 1; // pausing at every negative number, not starting over
  var newIndex = 0; // to start over searching from the next negative number in the array
  var firstNeg = 0;
  var end = true;

  if (array[0] < 0 && array[1] >= 0 || array[0] < 0 && array[0] < array[1]) {
    result = array[1];
    temp = array[1];
    newStart += 1;
  }

  var checking = () => {
    for (var i = newStart; i < array.length; i++) {
      if (array[i] >= 0) {
        temp += array[i];
      } else {
        newStart = i;
        firstNeg += 1;
        if (firstNeg === 1) {
          newIndex = i;
          end = false;
        }
        break;
      }
    }
    if (temp > result) {
      result = temp;
    }
    if (i < array.length - 1) {
      temp += array[i];
      newStart += 1;
      checking();
    } else {
      if (end === false && newIndex < array.length - 1) {
        firstNeg = 0;
        while (array[newIndex + 1] < 0) {
          newIndex += 1;
        }
        temp = array[newIndex + 1];
        newStart = newIndex + 2;
        end = true;
        checking();
      }
    }
  }

  checking();
  return result;
};

// input: array of numbers
// output: single number representing the greatest possible sum of contiguous numbers
// constraints: O(n) time and O(1) memory

// create result number using first number in array
// add together array items until getting to a negative number, make that the new result number
// record a variable for the index of the negative number
// add until you get to the next negative number, see if it's more or less than the current result
// if more, update result
// if less, keep going
// when at the end of the array, repeat process from after the first negative number
// save index of the first negative number encountered
// if the array is done checking, go back to that point and start the process over
// reset firstNeg and temp
// make sure this isn't the last possible iteration?

// console.log(sumArray([1, 2, 3])); // => 6 ***
// console.log(sumArray([1, 2, 3, -4])); // 6 ***
// console.log(sumArray([1, 2, 3, -4, 5])); // 7 ***
// console.log(sumArray([4, -1, 5])); // => 8 ***
// console.log(sumArray([10, -11, 11])); // 11 ***
// console.log(sumArray([-7,-6,-9])); // -6 ***
// console.log(sumArray([-5,2,3])); // 5 ***
// console.log(sumArray([-5,-5,-5,2,3])); // 5 ***
// console.log(sumArray([-3,-2,-1,-2,-3])); // -1 ***
// console.log(sumArray([4, 2, -7, 6, -2, 5, -3, 2, -1])); // 9 ***
