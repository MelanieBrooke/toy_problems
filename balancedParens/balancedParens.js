/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 balancedParens('(');  // false
balancedParens('()'); // true
balancedParens(')(');  // false
balancedParens('(())');  // true
*
 * Step 2:
 make your solution work for all types of brackets
*
 * Example:
balancedParens('[](){}'); // true
balancedParens('[({})]');   // true
balancedParens('[(]{)}'); // false
b la* Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  var register = {
     '(': 0,
     '[': 0,
     '{': 0,
     'last': []
    };
  for (var i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
      register[input[i]] += 1;
      register['last'].push(input[i]);
    } else if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
      if (input[i] === ')') {
        var match = '(';
      }
      if (input[i] === ']') {
        var match = '[';
      }
      if (input[i] === '}') {
        var match = '{';
      }
      var popped = register['last'].pop();
      if (popped !== match || register[popped] <= 0) {
        return false;
      } else {
        register[match] -= 1;
      }
    }
  }
  if (register['('] !== 0 || register['['] !== 0 || register['{'] !== 0) {
    return false;
  }
  return true;
};


// console.log(balancedParens('('));  // false
// console.log(balancedParens('()')); // true
// console.log(balancedParens(')('));  // false
// console.log(balancedParens('(())'));  // true
// console.log(balancedParens('[](){}')); // true
// console.log(balancedParens('[({})]'));   // true
// console.log(balancedParens('[(]{)}')); // false
// console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }')); // true
// console.log(balancedParens(' var hubble = function() { telescopes.awesome();')); // false