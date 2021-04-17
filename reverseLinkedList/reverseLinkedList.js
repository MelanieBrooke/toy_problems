/**
 * Write a function that reverses the order of a singly-linked list in place.
 *
 * So a list like this:
 *   A -> B -> C -> null
 * Should be transformed into a list like this:
 *   C -> B -> A -> null
 *
 * Example:
 *
 * var root = Node('A');
 * var nodeB = root.next = Node('B');
 * var nodeC = nodeB.next = Node('C');
 * // The list looks like this: A -> B -> C -> null
 *
 * var newRoot = reverseLinkedList(root);
 * // The list now looks like this: C -> B -> A -> null
 * newRoot.value // => 'C'
 * newRoot.next // => nodeB
 * root.next // => null (the old root is now the terminal node)
 *
 * (You can assume that the list ends without a cycle.)
 */

var Node = function(value) {
  return { value: value, next: null };
};

var reverseLinkedList = function(node) {
  var lastNode = null;
  while (node !== null) {
    var copy = node.next;
    node.next = lastNode;
    lastNode = node;
    node = copy;
  }
  return lastNode;
};

// // create test list
// var root = Node('A');
// var nodeB = root.next = Node('B');
// var nodeC = nodeB.next = Node('C');

// // to see what I'm doing
// var showList = function(node) {
//   if (node.next === null) {
//     console.log(node.value);
//   } else {
//     console.log(node.value);
//     showList(node.next);
//   }
// }

// // showList(root);
// var reversedRoot = reverseLinkedList(root);
// console.log('run function:', reversedRoot);
// // showList(reversedRoot);
// // console.log(root.next);