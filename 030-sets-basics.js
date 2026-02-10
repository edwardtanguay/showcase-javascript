// the unique feature of a set is that it can only contain unique values
// otherwise, it is a collection of values, just like an array

// when you search in an array, it has to check each value one by one until it finds the value you are looking for
// in a set, it uses a hash table to store the values, so it can find the value you are looking for in constant time

const booksIds = new Set([21, 234, 33, 25, 21]);

//display
console.log(booksIds); // Set(4) { 21, 234, 33, 25 }

booksIds.add(100);
console.log(booksIds); // Set(5) { 21, 234, 33, 25, 100 }
booksIds.delete(21);
console.log(booksIds); // Set(4) { 234, 33, 25, 100 }