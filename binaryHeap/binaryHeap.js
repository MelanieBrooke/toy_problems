/**
 * A heap is a special kind of tree in which a parent node is ordered only in
 * respect to its immediate children. Unlike the binary search tree you may have
 * implemented, where the entire tree is ordered, in a heap the only order
 * guaranteed is between a node and its parent.
 *
 * In a binary heap each node should have only zero, one, or two children. Each node
 * must have 2 children before the next oldest node can have any children. Therefore
 * the 0th node will be the parent of the 1st and 2nd nodes, the 1st node will be the
 * parent of the 3rd and 4th nodes, and the 2nd node will be the parent of the 5th and
 * 6th nodes. In a specific kind of binary heap, the binary min heap, every node is
 * less than its immediate children:
 *
 *          0
 *     1         2
 *   3   4     5   6
 *  7
 *
 * There is only one place at any given time in a binary heap where a node can be
 * added or removed. In the example above, the next node will be inserted as the second
 * child of 3. If we were to remove a node instead, we would remove the 7. This mimics
 * the behavior of a stack and allows us to manage the heap in a very memory efficient way,
 * using a list or array. For example, the heap pictured above can be described as:
 *
 * [0, 1, 2, 3, 4, 5, 6, 7]
 *
 * where we always add to or remove from the end of the array.
 *
 * A well known fact, utilized with binary heaps stored in arrays, is that
 * we can calculate the index of a node's parent or children using math:
 *
 * parentIndex = Math.floor( (index - 1) / 2 )
 * childrenIndices = [index * 2 + 1, index * 2 + 2]
 *
 * When adding a new node to a binary min heap, it could be that we violate the property of the
 * heap whereby every node is of lower value than its children. Thus whenever we insert into
 * a binary min heap, we must compare the inserted node to its parent, and swap their positions
 * if it is less than its parent. After a swap it must compare itself to its new parent, continuing
 * until it is no longer less than its parent.
 *
 * Something similar happens when we want to remove the root node. Because we can only remove from the
 * end of the array we swap the position of the last node and the root node and then remove the now-last
 * node from the heap. The new root node now must be compared to its children and if it is not less than
 * both of them, be swapped with whichever of the two of them is the smallest. It is then compared with its
 * new children and this swapping continues until it is less than both its children.
 *
 * You can see a great visualization of a binary min heap in action here, play around with it until you can
 * easily guess how the heap will behave with both insertion and removal:
 * https://www.cs.usfca.edu/~galles/visualization/Heap.html
 */


// Below is a binary heap whose nodes are integers. Its storage is an array and
// its `getRoot` method is already written. `BinaryHeap`'s `this._compare` method is hard-coded to return
// whether the fist element passed into it is less than the second. Use it when comparing nodes.
//
// Implement the `insert` and `removeRoot` methods, each operating in logarithmic time relative
// to the size of the heap, and each restoring the heap's property of parent to child sorting. Use
// the equations above to navigate parent / child relationships in the storage array, and write any
// helper functions needed to assist you.
//
// Extra credit: `BinaryHeap`'s `this._compare` is hard-coded to assist in making a min heap, modify `BinaryHeap`
// to accept an optional argument which is a function used as the sorting mechanism for the heap.
// That way you can use your `BinaryHeap` class to construct a max heap or min heap or whatever.
//
// Extra extra credit: Implement `heapSort`. `heapSort` takes an array, constructs it into a `BinaryHeap`
// and then iteratively returns the root of the `BinaryHeap` until its empty, thus returning a sorted array.


function BinaryHeap () {
  this._heap = [];
  // this compare function will result in a minHeap, use it to make comparisons between nodes in your solution
  this._compare = function (i, j) { return i < j };
}

// This function works just fine and shouldn't be modified
BinaryHeap.prototype.getRoot = function () {
  return this._heap[0];
}

BinaryHeap.prototype.insert = function (value) {
  this._heap.push(value);

  var checkNSwap = function(child, heap, childIndex) {
    var parentIndex = Math.floor( (childIndex - 1) / 2 );
    var parent = heap[parentIndex];
    if (child < parent) {
      [heap[parentIndex], heap[childIndex]] = [heap[childIndex], heap[parentIndex]];
      checkNSwap(child, heap, parentIndex);
    } else {
      return;
    }
  }

  checkNSwap(value, this._heap, this._heap.length-1)
  return;
}

BinaryHeap.prototype.removeRoot = function () {
  [this._heap[0], this._heap[this._heap.length-1]] = [this._heap[this._heap.length-1], this._heap[0]];
  var root = this._heap.pop();

  var checkNSwap = function(newRoot, index, heap) {
    childIndex1 = index * 2 + 1;
    child1 = heap[childIndex1];
    childIndex2 = index * 2 + 2;
    child2 = heap[childIndex2];
    if (newRoot <= child1 && newRoot <= child2) {
      return;
    } else if (child1 < child2) {
      [heap[index], heap[childIndex1]] = [heap[childIndex1], heap[index]];
      checkNSwap(newRoot, childIndex1, heap);
    } else if (child1 > child2) {
      [heap[index], heap[childIndex2]] = [heap[childIndex2], heap[index]];
      checkNSwap(newRoot, childIndex2, heap);
    }
  }

  while (this._heap[0] > this._heap[1] || this._heap[0] > this._heap[2]) {
    checkNSwap(this._heap[0], 0, this._heap);
  }

  return root;
}

// input: insert: an integer; removeRoot: none
// output: insert: none directly, but the integer needs to be placed into the heap at the next open spot. If it's smaller than its parent, the new node and the parent node will need to swap places. This new parent node would already be smaller than the other child node then, if there is one, since logic says that newnode < parent < otherchild. However, it must now be compared to its new parent, and if it is smaller than its new parent, you must swap again; removeRoot: I think you'd return the removed root? And then a new root is found by swapping the old root with the end of the array, and removing the old from the end, and then the new must be compared with its children and swapped if it's bigger than its children, down the line until everything is ordered again.
// constraints: insert: can only add to end and make swaps; remove: can only swap beginning and end and then remove end
// edge cases: adding an integer already in the heap

var newHeap = new BinaryHeap;
// console.log(newHeap._heap);
// console.log(newHeap.getRoot())
newHeap.insert(1);
// console.log(newHeap._heap);
// console.log(newHeap.getRoot())
newHeap.insert(2);
newHeap.insert(3);
newHeap.insert(4);
newHeap.insert(5);
newHeap.insert(6);
newHeap.insert(7);
newHeap.insert(8);
newHeap.insert(9);
newHeap.insert(5);
newHeap.insert(2);
console.log(newHeap._heap);
newHeap.removeRoot();
newHeap.removeRoot();
newHeap.removeRoot();

console.log(newHeap._heap);
