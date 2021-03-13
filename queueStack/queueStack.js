/**
 * Write a stack using your preferred instantiation pattern.
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {

  this.storage = [];
  this.newIndex = 0;

  // add an item to the top of the stack
  this.push = function(element) {
    this.storage[this.newIndex] = element;
    this.newIndex += 1;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    // Trying to avoid all .nativeArrayMethod() usage because I'm unsure if we're avoiding all, or just the three mentioned
    if (this.newIndex > 0) {
      temp = [];
      poppedElement = this.storage[this.newIndex-1];
      for (var i = 0; i < this.newIndex - 1; i++) {
        temp[i] = this.storage[i];
      }
      this.storage = temp;
      this.newIndex -= 1;
      return poppedElement;
    }
  };

  // return the number of items in the stack
  this.size = function() {
    return this.newIndex;
  };
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function(element) {
    inbox.push(element);
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    var popped;
    var size = inbox.size();
    for (var j = 0; j < size; j++) {
      outbox.push(inbox.pop())
    }
    popped = outbox.pop();
    size = outbox.size();
    for (var k = 0; k < size; k++) {
      inbox.push(outbox.pop());
    }
    return popped;
  };

  // should return the number of items in the queue
  this.size = function() {
    return inbox.size();
  };
};


// var testStack = new Stack();
// testStack.push(3);
// testStack.push('hey');
// // console.log(testStack.storage);
// // console.log(testStack.size());
// console.log(testStack.pop());
// // console.log(testStack.storage, testStack.size())
// console.log(testStack.pop());
// console.log(testStack.pop());

// var testQueue = new Queue();
// testQueue.enqueue(1);
// testQueue.enqueue(2);
// testQueue.enqueue(3);
// console.log(testQueue.dequeue());
// console.log(testQueue.dequeue());
// testQueue.enqueue(4);
// console.log(testQueue.dequeue());
// console.log(testQueue.dequeue());
