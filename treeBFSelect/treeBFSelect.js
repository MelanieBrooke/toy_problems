/**
  *
  * Implement a `BFSelect` method on this Tree class.
  *
  * BFSelect accepts a filter function, calls that function on each of the nodes
  * in Breadth First order, and returns a flat array of node values of the tree
  * for which the filter returns true.
  *
  * Example:
  *   var root1 = new Tree(1);
  *   var branch2 = root1.addChild(2);
  *   var branch3 = root1.addChild(3);
  *   var leaf4 = branch2.addChild(4);
  *   var leaf5 = branch2.addChild(5);
  *   var leaf6 = branch3.addChild(6);
  *   var leaf7 = branch3.addChild(7);
  *   root1.BFSelect(function (value, depth) {
  *     return value % 2;
  *   })
  *   // [1, 3, 5, 7]
  *
  *   root1.BFSelect(function (value, depth) {
  *     return depth === 1;
  *   })
  *   // [2, 3]
  *
  */


  // input: filter function
  // output: flat array of values that pass the filter
  // keep track of depth
  // breadth first order

  // create result array
  // create depth variable and somehow tie it to the values as I go over them?
  // create helper function
  // iterate over values of tree, using filter
  // add passed nodes to result array
  // iterate again, but this time if they have children, run the helper function on each child across the board
  // figure out how to use this recursively

/*
 * Basic tree that stores a value.
 */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};



var Tree = function(value) {
  this.value = value;
  this.children = [];
};



Tree.prototype.BFSelect = function(filter) {
  var filteredArray = [];
  var depth = 0;
  if (filter(this.value, depth)) {
    filteredArray.push(this.value);
  }

  var bf = function(tree, depth) {
    var nursery = [];
    depth += 1;
    for (i = 0; i < tree.children.length; i++) {
      if (filter(tree.children[i].value, depth)) {
        filteredArray.push(tree.children[i].value);
      }
      if (tree.children[i].children.length > 0) {
        for (var j = 0; j < tree.children[i].children.length; j++) {
          nursery.push(tree.children[i].children[j]);
        }
      }
      var hold = new Tree(null);
      for (var k = 0; k < nursery.length; k++) {
        hold.addChild(nursery[k]);
      }
    }
    if (hold.children.length) {
      bf(hold, depth);
    }
  };

  if (this.children.length) {
    bf(this, depth);
  }
  return filteredArray;
};


/**
 * You shouldn't need to change anything below here, but feel free to look.
  */

/**
  * add an immediate child
  * (wrap values in Tree nodes if they're not already)
  */
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};
