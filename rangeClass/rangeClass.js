/**
 * Build a class to represent a range of numbers that takes:
 *   - a beginning index,
 *   - an end index (optional)
 *     If there is no end index, the range should include only the passed-in start value.
 *   - a 'step' (optional)
 *     The step is the interval at which elements are included.
 *     For instance, a step of 1 includes every element in the range,
 *     while a step of 2 includes every other element.
 *
 * The range should have a constructor that accepts these arguments in that order.
 *
 * It should also support the following utility functions:
 *   - size(): return the number of items represented by the range
 *   - each(callback(index)): iterate over the range, passing each value to a callback function
 *   - includes(index): return whether or not the range includes the passed value
 *
 * You should also be aware of the following caveats:
 *   - You should allow a negative value for 'step' to count backwards.
 *   - If no step is provided, it should default to 1.
 *   - If the start value is greater than the end value, assume we're counting backwards.
 *   - Should return null if we are given no 'start' value.
 *
 * Range should use constant space, even during the `each` method. i.e. you should *not*
 * use an Array as backing storage. Any given range could potentially be thousands of numbers long,
 * so find a way to represent the range without actually storing each element.
 *
 * USAGE EXAMPLES:
 * var myRange = new Range(0,10); // a new range representing the numbers between 0 and 10 (inclusively)
 *
 * var evenNumbers = new Range(2,8,2); // A range with the even numbers 2, 4, 6, and 8.
 * evenNumbers.each(function(val){
 *   console.log(val+"!");
 * });
 * console.log("Who do we appreciate!?");
 *
 * evenNumbers.size() should be 4
 * evenNumbers.includes(2) should be true, evenNumbers.includes(3) should be false
 */


var Range = function(start, end, step) {
  this.start = start || null,
  this.end = end,
  this.step = step || 1
  this.backwards = this.start > this.end;
  if (this.end === undefined) {
    this.end = this.start;
  }
};

Range.prototype.size = function () {
  if (this.start === null) {
    return null;
  }
  if (this.backwards === false) {
    var size = (this.end - this.start) / this.step + 1;
  } else {
    var size = (this.start - this.end) / Math.abs(this.step) + 1;
  }
  return Math.floor(size);
};

Range.prototype.each = function (callback) {
  if (this.start === null) {
    return null;
  }
  if (this.backwards === false) {
    for (var i = this.start; i <= this.end; i += Math.abs(this.step)) {
      callback(i);
    }
  } else {
    for (var j = this.start; j >= this.end; j -= Math.abs(this.step)) {
      callback(j);
    }
  }
};

Range.prototype.includes = function (val) {
  if (this.start === null) {
    return null;
  }
  if (this.start === val || this.end === val) {
    return true;
  }
  if (this.backwards === false) {
    if (val > this.end || val < this.start) {
      return false;
    }
    var num = (val - this.start) / this.step;
    var wholeNum = Math.floor(num);
    if (num === wholeNum) {
      return true;
    }
  } else {
    if (val < this.end || val > this.start) {
      return false;
    }
    var num = (val + this.end) / Math.abs(this.step);
    var wholeNum = Math.floor(num);
    if (num === wholeNum) {
      return true;
    }
  }
  return false;
};


//testing files

// var range = new Range(4, 82, 3);
// console.log(range.includes(2));
// console.log(range.includes(9));
// console.log(range.includes(3));
// console.log(range.includes(10));
// var range2 = new Range(3, 82, 3);
// console.log(range2.includes(2));
// console.log(range2.includes(9));
// console.log(range2.includes(3));
// console.log(range2.includes(10));
// console.log(range2.each(function(val) {
//   console.log(val);
// }))

// var backwardsRange = new Range(81, 4, -5);
// console.log('size: ', backwardsRange.size());
// backwardsRange.each(function(val) {
//   console.log(val);
// });
// console.log(backwardsRange.includes(81));
// console.log(backwardsRange.includes(76));
// console.log(backwardsRange.includes(75));

// var countdown = new Range(10);
// countdown.each(function(val) {
//   console.log(val);
// })
// console.log(countdown.size());
// console.log(countdown.end)