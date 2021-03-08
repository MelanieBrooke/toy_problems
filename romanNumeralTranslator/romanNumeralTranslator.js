
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * console.log(translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * console.log(translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  if (typeof romanNumeral !== 'string') {
    return null;
  }
  var arabic = 0;
  for (var i = 0; i < romanNumeral.length; i++) {
    var a = DIGIT_VALUES[romanNumeral[i]];
    var b = DIGIT_VALUES[romanNumeral[i + 1]];
    if (!b || a > b || a === b) {
      arabic += a;
    } else {
      arabic += (b - a);
      i += 1;
    }
  }
  return arabic;
};


// input: A string representing a roman numeral number
// output: integer - arabic version of the roman numeral (or null if input is not string)
// constraints: none
// edge cases: empty string
// thoughts: I'm assuming there will be no more than 3 of a character in a row (per convention), not sure if that will be helpful when coding, but nice

// possibly because input is correctly formatted, can do a for / while loop to read numbers? "While i === 'M' add 1000 to number" and then perhaps 4s/9s will be easier to catch?

// console.log(translateRomanNumeral('XIV')); // Should be 14
// console.log(translateRomanNumeral('MMDCLXVII')); // 2667
// console.log(translateRomanNumeral('CDLIV')); // 454
// console.log(translateRomanNumeral('')); // 0
// console.log(translateRomanNumeral('MMMCXC')); // 3190