/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

var rockPaperScissors = function (rounds) {
  if (rounds > 10) {
    return 'There are ' + (Math.pow(3, rounds)) + ' different possible combinations for this many rounds. Please enter a number 10 or lower to see all possible combinations.'
  }
  var result = [];
  var total = Math.pow(3, rounds);
  for (i = 0; i < total; i++) {
    result.push('');
  }

  for (h = 0; h < rounds; h++) {
    var incrementer = Math.pow(3, h)

    var counter = 0;
    for (j = 0; j < total; j++) {
      if (counter %3 === 0 || counter === 0) {
        result[j] += 'R';
      } else if (counter %3 === 1 || counter === 1) {
        result[j] += 'P';
      } else if (counter %3 === 2 || counter === 2) {
        result[j] += 'S';
      }
      if (j %incrementer === incrementer - 1 || j === incrementer - 1) {
          counter += 1;
      }
    }
  }

  return result;
};

// var tester = rockPaperScissors(4);
// console.log(tester);
// var setTest = new Set();
// for (j = 0; j < tester.length; j++) {
//     setTest.add(tester[j]);
//   }
// console.log(setTest.size);