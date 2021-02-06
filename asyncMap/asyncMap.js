'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

// input: array of functions with their own callbacks, then a final callback
// each function runs and the results must display in the order the functions were listed in
// then the final callback is called on the results

// ATTEMPT TO USE PROMISES

// var asyncMap = function(tasks, callback) {
//   var taskResults = [];

//   Promise.all(tasks)
//   .then((values) => {taskResults.push(values)});
//   // .then((values) => {console.log(values)})

//   var results = callback(taskResults);
//   return results;
// };

var asyncMap = function(tasks, callback) {
  var taskResults = [];
  var taskNum = tasks.length;

  tasks.map((task, idNum) => {
    task((result) => {
      taskResults[idNum] = result;
      taskNum -= 1;
      if (taskNum === 0) {
        var finalResult = callback(taskResults);
        return finalResult;
      }
    })
  })
};


// asyncMap([
//     function(cb){
//     setTimeout(function(){
//       cb('one');
//     }, 200);
//   },
//   function(cb){
//     setTimeout(function(){
//       cb('two');
//     }, 100);
//   }
//  ],
//   function(results){
//     // the results array will equal ['one','two'] even though
//     // the second function had a shorter timeout.
//     console.log(results); // ['one', 'two']
//  });