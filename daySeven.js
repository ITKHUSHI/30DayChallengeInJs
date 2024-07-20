// Objects
// Task/Activities

// Activity 1:Objects Creation and Access
// Task 1: Create an object representing a book with properties like title , author and year and log the object to the console
 
	
	 book={
		title:"life hack",
		author:"khushi",
		year:2024,
		library:{
          name:"Art of life",
		  book:[
			{ 
				title:"Art life",
				author:"khushi"
			},
			{ 
				title:"psychology of money",
				author:"khushi"
			},
			{ 
				title:"Art",
				author:"khushi"
			},
		],
		},

	 printDetails(){
		console.log(book);
	 },
	getDetails(){
		return `${this.title} by ${this.author}`;
	   },
	   updateDetails(year){
		this.year=year;
		console.log(book)
	   },
	   logLibraryObj(){
		console.log(book.library)
	   },
	   getTitleDetails(){
		console.log( "title",book.library.book.map((el)=>el.title))
	   },
	  getBookTitleAndYear(){
		console.log(`${this.title} and ${this.year}`)
	  }
 }

 book.printDetails();
// Task 2: Access and log the title and author properties of the book object
function AccessSpecificProperties(book){
	
	console.log( "title :" ,book.title , "author :",book.author);
}
AccessSpecificProperties(book);

// Activity 2: Object Methods
// Task 3: Add a methodss to the book object that return a string with the book's title and author,and log the result of calling this method
  console.log(book.getDetails());

// Task 4: Add a methodss to the book object that takes parameter (year) and updates the book's year property , then log the update object
 book.updateDetails(2025);

// Activity 3:Nested Object
// Task 5: Create a nested object representing a library with properties like name , and books (an array of book object ), and log the library object to the console.
   book.logLibraryObj();

// Task 6: Access and log the name of the library and titles of all the books in the library
   book.getTitleDetails();

// Activity 4: The this Keyword
// Task 7: Add a method to book object that uses the this keyword to return a string with the book's title and year and log the result of calling this method
  book.getBookTitleAndYear();
// Activity 5: Object Iteration
// Task 8: Use a for....in loop to iterate over the properties of the book object and log each property and its value
for (let property in book) {
	if (book.hasOwnProperty(property)) {
	  console.log(`${property}: ${book[property]}`);
	}
}
// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object
const keys = Object.keys(book);
const values = Object.values(book);

console.log("Keys:", keys);
console.log("Values:", values);
