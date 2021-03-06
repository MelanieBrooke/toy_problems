/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(string, value) {
    var newEntry = [string, value];
    // console.log(storageLimit);
    var newIndex = getIndexBelowMaxForKey(string, storageLimit);
    // console.log(newIndex);
    if (!storage[newIndex]) {
      var bucket = [];
      bucket.push(newEntry);
      storage[newIndex] = bucket;
      return string + ' and ' + value + ' added to hash table in new bucket';
    }
    else {
      for (var i = 0; i < storage[newIndex].length; i++) {
        if (storage[newIndex][i][0] === string) {
          return 'Value already exists in hash table';
        }
      }
      storage[newIndex].push([string, value]);
      return string + ' and ' + value + ' added to hash table in existing bucket';
    }
  };

  result.retrieve = function(string) {
    var stringIndex = getIndexBelowMaxForKey(string, storageLimit);
    if (!storage[stringIndex]) {
      return string + ' does not exist in hash table';
    } else {
      for (var i = 0; i < storage[stringIndex].length; i++) {
        if (string === storage[stringIndex][i][0]) {
          return storage[stringIndex][i][1];
        }
      }
      return string + ' does not exist in hash table';
    }
  };

  result.remove = function(string) {
    var stringIndex = getIndexBelowMaxForKey(string, storageLimit);
    if (!storage[stringIndex]) {
      return string + ' does not exist in hash table';
    } else {
      for (var i = 0; i < storage[stringIndex].length; i++) {
        if (string === storage[stringIndex][i][0]) {
          console.log('before: ', storage);
          storage[stringIndex].splice(i, 1);
          console.log('after: ', storage);
          return;
          // return storage[stringIndex][i][1];
        }
      }
      return string + ' does not exist in hash table';
    }
  };

  return result;
};

var nicknames = makeHashTable();
console.log(nicknames.insert('Melanie DeWitt', 'Mel, Mel-Mel, Mels, Lemonie, Felony Melanie'));
// console.log(nicknames.insert('Melanie DeWitt', 'Mels'));
// console.log(nicknames.retrieve('Melanie DeWitt'));
// console.log(nicknames.retrieve('Victoria DeWitt'));
console.log(nicknames.insert('Ky Goeken', 'Kyuphus, Jelly Donut, Sassy Lady, Sassypants Jellyboy, Love Bunny, Kentucky'));
console.log(nicknames.insert('Lucas DeWitt', 'Luke, Lukie Pookie'));
nicknames.remove('Ky Goeken');



// Insert:
// need to create 'buckets' to handle collisions
// Run hashing function to get index, see if a bucket exists at that location
// If not, create the bucket and add the new string/value to the bucket
// If so, see if that entry exists
// If not, add it

// Retrieve:
// Run the string through the hashing function to get the index
// if nothing exists at that index, error
// Otherwise, check the bucket for that particular entry
// if it exists, return the resulting value. If not, error

// Remove:
// Same as the retrieve, but if it exists, delete it