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

  var concatFunction = function(first, second) {
    var common = '';
    for (i = 0; i < first.length; i++) {
      if (second.includes(first[i]) && !common.includes(first[i]) && first[i] !== ' ') {
        common += first[i];
      }
    }
    return common;
  };

  for (j = 1; j < arguments.length; j++) {
    commonChars = concatFunction(concatFunction(string1, string2), arguments[j]);
  }
  return commonChars;
};