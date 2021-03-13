/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4';
// list.tail.value;   //yields '5';
// list.removeHead(); //yields '5';
// list.removeHead(); //yields 'null';


var LinkedList = function() {
  this.head = {value:null};
  this.tail = {value:null};
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  var newNode = this.makeNode(value);
  if (this.head.value === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
  this.tail.next = newNode;
  this.tail = newNode;
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head === null || this.head.value === null) {
    return null;
  }
  var oldHead = this.head.value;
  this.head = this.head.next;
  if (this.head === null) {
    this.tail = null;
  }
  return oldHead;
};

LinkedList.prototype.contains = function(value) {
  var contains = false;
  var check = function(node) {
    if (node.value === value) {
      contains = true;
    } else if (node.next !== null) {
      check(node.next);
    }
  }
  if (this.head.value !== null) {
    check(this.head);
  }
  return contains;
};

LinkedList.prototype.makeNode = function(value) {
  var node = {
    value: value,
    next: null
  }
  return node;
};

// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// console.log(list.head.value);   //yields '4';
// console.log(list.contains(5));  //yields 'true';
// console.log(list.contains(6));  //yields 'false';
// console.log(list.removeHead()); //yields '4';
// console.log('tail is', list.tail.value);   //yields '5';
// console.log(list.removeHead()); //yields '5';
// console.log(list.removeHead()); //yields 'null';
// console.log('tail now', list.tail.value)

// inputs: addToTail: a user-inputted value (type not specified); removeHead (none); contains (value to search for, type not specified)
// outputs: addToTail: none; removeHead: the value that was at the head and is being removed (type not specified); contains: boolean declaring whether the supplied value is in the linked list or not
// constraints: pseudoclassical structure
// edge cases: calling removeHead when there is nothing in the list should return 'null,' asking for the tail or head when the list is empty should return 'null'
