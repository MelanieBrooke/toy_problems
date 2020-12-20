/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

 var deepEquals = function(apple, orange) {
  if (Object.keys(apple).length !== Object.keys(orange).length) {
    return false;
  }
  for (var key in apple) {
    if (orange[key] === undefined) {
      return false;
    }
    if (typeof apple[key] !== typeof orange[key]) {
      return false;
    }
    if (typeof apple[key] === 'number' || typeof apple[key] === 'string') {
      console.log('apple',apple[key], 'is a',typeof apple[key]);
      console.log('orange',orange[key],'is a', typeof orange[key]);
      if (apple[key] !== orange[key]) {
        console.log('they do not match');
        return false;
      }
    }
    if (Array.isArray(apple[key]) && Array.isArray(orange[key])) {
      console.log('add handle arrays functionality later');
    }
    if (typeof apple[key] === 'object' && typeof orange[key] === 'object') {
      console.log('objects!')
      deepEquals(apple[key], orange[key]);
    }
  }
  return true;
};



// console.log(deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}})); // true
console.log(deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}})); // false
// console.log(deepEquals({a:1}, {b:1})) // false
// console.log(deepEquals({a:1}, {a:2})) // false

///////////////////////////////////////////////////////////////////////
// recursive function
// first check length
// then for each property key, see if matching value exists
// if value is an object, repeat
// Add functionality for array?

// code still in snippets