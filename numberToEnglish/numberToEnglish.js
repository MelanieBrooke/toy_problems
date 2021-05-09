/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

Number.prototype.toEnglish = function () {
  var integer = Number(this.toString());
  if (numbersToWords[integer]) {
    return numbersToWords[integer];
  } else if (numbersToPlace[integer]) {
      return 'one ' + numbersToPlace[integer];
  }
  var words = '';
  var string = this.toString();
  var strings = [];

  if (string.length %3 === 1) {
    string = '00' + string;
  } else if (string.length %3 === 2)  {
      string = '0' + string;
  }

  for (i = 0; i < string.length; i+=3) {
    place = string[i] + string[i+1] + string[i+2];
    strings.push(place);
  }

  var places = strings.length - 1;

  var wordIt = (num) => {
    englishNum = '';
    var digitHun = Number(num[0]);
    var digitTen = Number(num[1]);
    var digitOne = Number(num[2]);
    if (digitHun > 0) {
      englishNum += numbersToWords[digitHun] + ' hundred';
    }
    if (digitHun > 0 && digitTen > 0 || digitHun > 0 && digitTen === 0 && digitOne > 0) {
      englishNum += ' ';
    }
    if (digitTen === 1) {
      var digitTeen = digitTen * 10 + digitOne;
      englishNum += numbersToWords[digitTeen] + ' ';
      return englishNum;
    }
    if (digitTen > 0) {
      englishNum += numbersToWords[digitTen * 10];
    }
    if (digitTen > 0 && digitOne > 0) {
      englishNum += '-';
    }
    if (digitOne > 0) {
      englishNum += numbersToWords[digitOne];
    }
    englishNum += ' ';
    return englishNum;
  }

  var placeIt = (index) => {
    var toWord = places - index;
    if (toWord === 0) {
      return '';
    } else if (toWord === 1) {
      return 'thousand ';
    } else if (toWord === 2) {
      return 'million ';
    } else if (toWord === 3) {
      return 'billion ';
    } else if (toWord === 4) {
      return 'trillion ';
    } else if (toWord === 5) {
      return 'quadrillion ';
    } else if (toWord === 6) {
      return 'quintillion ';
    }
  }

  for (var j = 0; j < strings.length; j++) {
    if (strings[j] !== '000') {
      words += wordIt(strings[j]);
      words += placeIt(j);
    }
  }
  if (words[words.length-1] === ' ') {
    words = words.slice(0, words.length-1);
  };
  return words;
};


// input: integer (if doing extra credit, the input could also be a float)
// output: a string with the English written-out version of the number
// constraints: none
// edge cases: non-number input
// notes: need to remember to add dashes

// maybe break it up into sets of three numbers
// write a function that just handles three numbers at a time
// then add the correct 'million/quintillion/etc' based on how many sets
// before any calculating, see if the number is in the sets given
//

// console.log((7).toEnglish()); // > "seven"
// console.log((575).toEnglish()); // > "five hundred seventy-five"
console.log((78193512).toEnglish()); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
// console.log((3052750903).toEnglish());
// console.log((284842750392057375073).toEnglish())
// console.log((0).toEnglish());
// console.log((38420000235).toEnglish());
// console.log((500).toEnglish());
// console.log((1000).toEnglish());
console.log((12234857).toEnglish());