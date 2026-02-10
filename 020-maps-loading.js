// you can pass in key value pairs to the Map constructor
const booksById = ([
	[1, { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }],
	[2, { title: 'To Kill a Mockingbird', author: 'Harper Lee' }],
	[3, { title: '1984', author: 'George Orwell' }],
])

// iterate over the entries
for (const [id, book] of booksById) {
	console.log(`ID: ${id}, Title: ${book.title}, Author: ${book.author}`);
}

// notes that the keys are actually strings
console.log(booksById.get(1)); // Output: undefined
console.log(booksById.get('1')); // Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }