/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  if (typeof string !== 'string' || string.length === 0 || arguments.length === 0) {
    return 'Please enter a valid string';
  }
  for (var i = 0; i < string.length; i++) {
    let char = string[i];
    if ((string.indexOf(char, i + 1) === -1) && (string.indexOf(char) === i)) {
      return char;
    }
  }
  return 'no non-repeating characters';
};