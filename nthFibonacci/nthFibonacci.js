/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

// Recursive version

var nthFibonacci = function (n) {
  if (n === 0) {
    return 0;
  }
  var addingMachine = function(x, y, counter) {
    if (counter === 0) {
      return y;
    } else {
      return addingMachine(y, (x + y), (counter - 1));
    }
  };
  return addingMachine(0, 1, n-1);
};

// Iterative version

var nthFibonacci = function (n) {
  if (n === 0) {
    return 0;
  }
  var x = 0;
  var y = 1;
  var z = 0;
  for (i = 1; i < n; i++) {
    z = x + y;
    x = y;
    y = z;
  }
  return y;
};

// console.log('should equal 1: ', nthFibonacci(1));
// console.log('should equal 1: ', nthFibonacci(2));
// console.log('should equal 2: ', nthFibonacci(3));
// console.log('should equal 3: ', nthFibonacci(4));
// console.log('should equal 5: ', nthFibonacci(5));
// console.log('should equal 8: ', nthFibonacci(6));

