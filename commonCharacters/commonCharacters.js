/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {
  if (arguments.length < 2) {
    return undefined;
  }
  var commonChars = '';
  for (i = 0; i < string1.length; i++) {
    if (string2.includes(string1[i]) && !commonChars.includes(string1[i]) && string1[i] !== ' ') {
      commonChars += string1[i];
    }
  }
  if (arguments.length > 2) {
    for (i = 2; i < arguments.length; i++) {
      return commonCharacters(commonChars, arguments[i]);
    }
  }
  return commonChars;
};