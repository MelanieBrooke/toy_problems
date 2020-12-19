/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  if (typeof number !== 'number' || number < 1) {
    return undefined;
  }
  TBRnumber = Math.floor(number);
  var reverseNum = 0;
  while (TBRnumber > 0) {
    var lastDigit = TBRnumber % 10;
    reverseNum = reverseNum * 10 + lastDigit;
    TBRnumber = Math.floor(TBRnumber / 10);
  }
  return reverseNum;
}





// Input: positive integer (number)
// Output: positive integer (number), reversed from input
// Constraints: Must only use math/integers, no converting input into strings or arrays
// Maybe don't mutate original input number
// Edge cases: Do I need to worry about negative numbers, non integers, etc? They should all return null or undefined? Am I even tested on those?