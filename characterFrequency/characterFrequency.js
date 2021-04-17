/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var result = [];
  var sorter = {};
  for (var i = 0; i < string.length; i++) {
    if (sorter[string[i]]) {
      sorter[string[i]] += 1;
    } else {
      sorter[string[i]] = 1;
    }
  }

  for (var characterCount in sorter) {
    result.push([characterCount, sorter[characterCount]]);
  }

  var compareChar = (a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  result.sort(([a, b], [c, d]) => d - b || compareChar(a, c));

  return result;

};

// console.log(characterFrequency('mississippi'));
// console.log(characterFrequency('miaaiaaippi'));
// console.log(characterFrequency('mmmaaaiiibbb'));

// input: string; output; array of arrays with each internal array having the character, then the count, as its two values, sorted first by count, then by character
// edge cases: string count of 1 or empty string
// count the characters in the string (create an object to hold data)
// turn object into array
// sort arrays first by count, then by character


////// if I have to create my own sorting function (we'll see what specbot says but the instructions don't say so) //////
// numbers are smaller than letters
// bigger letters are later in alphabet
// capital letters are smaller than lower
// so it goes numbers, uppercase, lowercase (for sorting)