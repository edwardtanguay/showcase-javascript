const booksById = {
	1: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
	2: { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
	3: { title: '1984', author: 'George Orwell' },	
}

// note that the keys are actually strings
console.log(booksById[1]); // Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
console.log(booksById['1']); // Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }


// iterate over the entries with Object.entries
for (const [id, book] of Object.entries(booksById)) {
	console.log(typeof id); // Output: string
	console.log(`ID: ${id}, Title: ${book.title}, Author: ${book.author}`);
}

// maps are better for this use case because they preserve the type of the keys, and have built in methods for checking if a key exists and iterating over the entries.