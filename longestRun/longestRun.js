/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  if (string.length === 0) {
    return null;
  }
  var longest = [0, 0];
  var indices = [0, 0];
  for (i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      indices.splice(0, 1, i);
      for (j = i + 1; j < string.length; j++) {
        if (string[j] !== string[i]) {
          indices.splice(1, 1, (j-1));
          if (indices[1] - indices [0] > longest[1] - longest[0]) {
            longest[0] = indices[0];
            longest[1] = indices[1];
            // longest = indices;
          }
          break;
        }
      }
    }
  }
  console.log(indices);
  return longest;
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};