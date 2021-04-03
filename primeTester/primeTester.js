/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  if (n === 2) {
    return true;
  } else if (n % 2 === 0) {
    return false;
  }
  for (var i = 3; i < n/2; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
};


// input: an integer (positive & whole)
// output: boolean (based on if the number is a prime or not)
// constraints: none
// edge cases: not a whole, positive integer: already handled
// notes: Back in college, a professor said no one had ever found a formula/pattern for prime numbers, so if anyone ever did, they'd be rich. (Naturally I half-heartedly tried and failed.) So I'm super intrigued by this prompt, as well as the wiki suggested searches. So thanks to whoever gave us this problem because I'm actually really excited to play with it. The initial prompt itself seems easy enough but I'm going to go research those things! :D


//// Initial prompt ////
// if n is even, return false to lessen the iteration that's about to happen (except for the number 2 which is prime)
// iterate through odd numbers up until hitting 1/2 of n. If n % i === 0, return false and break
// if nothing hits, return true

//// Extra credit ////


// console.log(primeTester(39));