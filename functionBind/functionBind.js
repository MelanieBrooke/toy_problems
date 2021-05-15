/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(functionInput) {
  var args = Array.from(arguments);
  args.splice(0, 1);
  return functionInput.call(...args);
};

var alert = function(input) {
  console.log(input);
}

// writing the bind function //
// input: function and input to run the function on rather than the default
// output: running the function on the input rather than the default
// constraints: none
// edge cases: null input?
// appears the first argument is the function to be run, and then everything else is the arguments
// fun fact, discovered nothing was running right with the Function.prototpye.bind stub sitting there
// alert not a function, so made it one for tests
// the example only works if I don't call the 'boundShout' variables as functions, but just run the variable? Maybe because the variable is written as a function call already? Unsure if I should just ignore this for now or refactor the bind function to accommodate
// Yeah, example two needs it called as a function to add in more arguments
// time is short, will have to push and figure out more later






/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

// Function.prototype.bind = function() {
//   var args = Array.from(arguments);
//   console.log(...args)
//   // TODO: Your code here
// };



var alice = {
   name: 'alice',
   shout: function(){
     alert(this.name);
   }
 }

// var alice = {
//      name: 'alice',
//      shout: function(){
//        console.log(this.name);
//      }
//    }

// bind(alice.shout, {name:'bob'});
 var boundShout = bind(alice.shout, alice);
 boundShout(); // alerts 'alice'
 boundShout = bind(alice.shout, {name: 'bob'});
 boundShout(); // alerts 'bob'

// example 2:

//  var func = function(a, b){ return a + b };
//  var boundFunc = bind(func, null, 'foo');
//  var result = boundFunc('bar');
//  result === 'foobar'; // true

// console.log('logging to terminal');