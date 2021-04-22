/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  var array = arr.slice();
  for (var i = 0; i < array.length; i++) {
    var counter = 1;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] !== 'removed' && array[j] === array[i]) {
        counter += 1;
        array.splice(j, 1, 'removed');
      }
    }
    if (counter % 2 === 0) {
      return arr[i];
    }
  }
  return null;
};


// input: array; output: an array item (the first to appear an even number of times in the array)
// constraints: none
// edge cases: if no even amounts of any item, return null

// console.time('evenOccurrence');
// console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4])) //should be 4
// console.log(evenOccurrence([2, 4, 6, 8, 2, 4, 6, 8, 2])) // should be 4
// console.log(evenOccurrence([2, 4, 6, 8, 2, 3, 2, 5])) // should be null
// console.log(evenOccurrence(['a', 'b', 'c', 'a', 'b', 'c', 'a'])) // should be 'b'
// console.timeEnd('evenOccurrence');