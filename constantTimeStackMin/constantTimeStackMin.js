/**
 * Write a stack using your preferred instantiation pattern. Implement a min function
 * that returns the minimum value of all the elements in the stack in constant time.stack.

 * All of the functions in the Stack should run in constant time!
 *
 * var example = new Stack()
 *  example.push(4)
 *  example.push(3)
 *  example.min() === 3
 *  example.push(3)
 *  example.push(2)
 *  example.push(2)
 *  example.min() === 2
 */

/**
  * Stack Class
  */
  var Stack = function() {

    var stack = [];
    var stackerTracker = [];

  // add an item to the top of the stack
    this.push = function(value) {
      stack.splice(stack.length, 0, value);
      if (stackerTracker.length === 0 || value <= stackerTracker[stackerTracker.length - 1]) {
        stackerTracker.splice(stack.length, 0, value);
      }
    };

  // remove an item from the top of the stack
    this.pop = function() {
      var popped = stack[stack.length - 1];
      stack.splice(stack[stack.length - 1], 1);
      if (popped === stackerTracker[stackerTracker.length - 1]) {
        stackerTracker.splice(stackerTracker[stackerTracker.length - 1]);
      }
      return popped;
    };

  // return the number of items in the stack
    this.size = function() {
      return stack.length;
    };

  // return the minimum value in the stack
    this.min = function() {
      return stackerTracker[stackerTracker.length - 1];
    };

  };


// var example = new Stack();
// example.push(4);
// example.push(3);
// console.log('min:', example.min()); // === 3
// example.push(3);
// example.push(2);
// example.push(2);
// console.log('min2:', example.min()); // === 2
// console.log('size before pop', example.size());
// console.log('popped', example.pop());
// console.log('size after pop', example.size());
// example.pop();
// console.log('min after pop', example.min());
