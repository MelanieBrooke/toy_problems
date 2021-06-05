/*
 * Assignment: Write a function that returns true if a linked list contains a cycle, or false if it terminates somewhere
 *
 * Explanation:
 *
 * Generally, we assume that a linked list will terminate in a null next pointer, as follows:
 *
 * A -> B -> C -> D -> E -> null
 *
 * A 'cycle' in a linked list is when traversing the list would result in visiting the same nodes over and over
 * This is caused by pointing a node in the list to another node that already appeared earlier in the list. Example:
 *
 * A -> B -> C
 *      ^    |
 *      |    v
 *      E <- D
 *
 * Example code:
 *
 * var nodeA = Node('A');
 * var nodeB = nodeA.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * var nodeD = nodeC.next = Node('D');
 * var nodeE = nodeD.next = Node('E');
 * hasCycle(nodeA); // => false
 * nodeE.next = nodeB;
 * hasCycle(nodeA); // => true
 *
 * Constraint 1: Do this in linear time
 * Constraint 2: Do this in constant space
 * Constraint 3: Do not mutate the original nodes in any way
 */

var Node = function(value) {
  return { value: value, next: null };
};

// changing input variable name for my own sake, change back if specbot disapproves
// var hasCycle = function(linkedList) {
var hasCycle = function(node) {
  // if there is nothing to move on to, just return false
  if (!node.next) {
    return false;
  }

  // declare result variable and pointers
  var result = false;
  var slow = node;
  var fast = node;
  // have the pointers iterate through the list
  // if they meet up, return true
  // if they hit a null for next, return false
  // I'm risking this while loop because I think all the bases are covered?? WE SHALL SEE
  while (true) {
    if (!fast.next || !slow.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
};

//input: a point in the linked list (does it have to be the first point? if the list cycles, any point will eventually result in the same answer)
//output: boolean, determining if the node is part of a cycle
// constraints: linear time, constant space, no mutating nodes
// edge cases: if the list has no next nodes from the start
// notes: I thought the problem was too easy, then I saw the constraints. This is good for me as constraints force me to think through things differently

// I need to use pointers somehow
// Fast and slow pointers - have played with this on a whiteboard and they always meet up while the slow pointer is going through the loop
// This should satisfy the time complexity (the slow pointer never goes through the loop more than once)
// And also the space complexity (I'm only using the two pointers and nothing else, no matter what)



var nodeA = Node('A');
var nodeB = nodeA.next = Node('B');
var nodeC = nodeB.next = Node('C');
var nodeD = nodeC.next = Node('D');
var nodeE = nodeD.next = Node('E');
console.log(hasCycle(nodeA)); // => false
nodeE.next = nodeB;
console.log(hasCycle(nodeA)); // => true