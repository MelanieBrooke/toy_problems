/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

// Before extra credit version:

// Array.prototype.isSubsetOf = function (arr) {
//   if (arguments.length === 0) {
//       return false;
//   }
//   for (i = 0; i < this.length; i++) {
//     if (arr.indexOf(this[i]) === -1) {
//       return false;
//     }
//   }
//   return true;
// };

Array.prototype.isSubsetOf = function (arr) {
  if (arguments.length === 0) {
    return false;
  }
  var context = this;
  var input = arr;
  for (j = 0; j < input.length; j++) {
    if ((typeof input[j] === 'object') && (!Array.isArray(input[j]))) {
      input[j] = JSON.stringify(input[j]);
    }
  }
  for (i = 0; i < context.length; i++) {
    if (typeof context[i] === 'object') {
      context[i] = JSON.stringify(context[i]);
    }
//       if (Array.isArray(this[i])) {
//           console.log('this is an array');
//           for (j = 0; j < arr.length; j++) {
//               if (Array.isArray(arr[j])) {
//                   if (this[i].isSubsetOf(arr[j])) {

//                   }
//               }
//           }
//       }
    if (input.indexOf(context[i]) === -1) {
          return false;
    }
  }
  return true;
};