/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(3.0) === '3/1'
 *
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {
  var result = '';
  if (number === 0) {
    return '0/1';
  }
  var positive = true;
  if (number < 0) {
    positive = false;
    number = Math.abs(number);
    result += '-';
  }

  var whole;
  var numerator;
  var stringNums = number.toString().split('.');
  // account for numbers with a '0' as either the fraction or the whole number, since it will not show up when the number is split
  if (stringNums.length === 1) {
    if (number >= 1) {
      result += stringNums[0] + '/1';
      return result;
    } else if (number < 1) {
      whole = '0';
      numerator = stringNums[0];
    }
  } else {
      var whole = stringNums[0];
      var numerator = stringNums[1];
  }
  // Create manipulatable numbers
  var denominator = Math.pow(10, numerator.length);
  numerator = Number(numerator);
  // Shortcut calculation on large numbers by checking if fraction can be reduced by the numerator
  if (denominator % numerator === 0) {
    denominator = denominator / numerator;
    numerator = 1;
    if (whole !== 0) {
      numerator = Number(whole) * denominator + numerator;
    }
    result += numerator.toString() + '/' + denominator.toString();
    return result;
  }
  // Extra step will cut time down on large numbers by not looking higher than necessary for common factors
  var stop = 0;
  if (numerator % 2 === 0) {
    stop = numerator/2;
  } else {
    stop = Math.ceil(numerator/3) + 1;
  }
  // Find greatest common factor and divide numerator and denominator by it to reduce to simplest form
  for (var i = stop; i > 1; i -= 1) {
    if (numerator%i === 0 && denominator%i === 0) {
      numerator = numerator/i;
      denominator = denominator/i;
      break;
    }
  }
  // factor in the whole number
  if (whole !== 0) {
    numerator = Number(whole) * denominator + numerator;
  }
  // convert back to a string and return
  result += numerator.toString() + '/' + denominator.toString();
  return result;
};