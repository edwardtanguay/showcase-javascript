const booksById = new Map();
booksById.set(1, { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' });
booksById.set(2, { title: 'To Kill a Mockingbird', author: 'Harper Lee' });

console.log("has id 1?", booksById.has(1)); // Output: true
console.log("has id 3?", booksById.has(3)); // Output: false

// Accessing a book by its ID
const book1 = booksById.get(1);
console.log(book1); // Output: { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }

console.log(booksById.get(2)); // Output: { title: 'To Kill a Mockingbird', author: 'Harper Lee' }
console.log(booksById.get(3)); // Output: undefined
