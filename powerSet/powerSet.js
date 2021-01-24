/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
  var result = [''];
  var string = new Set();
  for (var i = 0; i < str.length; i++) {
    string.add(str[i]);
  }
  string = Array.from(string);

    for (var j = 0; j < result.length; j++) {
      for (var k = 0; k < string.length; k++) {
        if (result[j].indexOf(string[k]) === -1) {
          var newSubset = string[k] + result[j];
          newSubset = newSubset.split('').sort().join('');
          if (!result.includes(newSubset)) {
            result.push(newSubset);
          }
        }
      }
    }

  return result;
};
