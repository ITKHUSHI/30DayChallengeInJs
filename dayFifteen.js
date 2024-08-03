// Day 15 :Closures

// Tasks/Activities:

// Activity 1:Understanding Clousers
// Taks 1: Write a function that return another function where the inner function accesses a variable from the outer function's scope. call the inner function and log the result
function addition (num1 ,num2){
	const result=num1+num2;
	 function clouser(){
		console.log(result)
	}
	clouser();
}
addition(5,7);
// Task 2: Create a clouser that maintains a private counter. Implement functions to increment and get the current value of the counter 
function counter(){
	let count=0;
	return {
		 increment:function(){
			count++;
		},
		getCount:function (){
			return count;
		}
	}
}
const myCounter= counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());

// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs . use a closure to keep track of the last generated ID and increment it with each Call
function generatesUniqueIDS(){
	let id=0;
	
	return function(){
		id++;
		return id;
	};		
}
const generateUniqueId = generatesUniqueIDS();

console.log(generateUniqueId()); // Output: 1
console.log(generateUniqueId()); // Output: 2
console.log(generateUniqueId()); // Output: 3

// Task 4: Create a closure that captures a user's name and return a dunction that greets the user by name
function greeting(name){
	return function(){
		console.log(`hello ${name} 👋🏼`);
	}

}
const greet=greeting("khushi");
greet();

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions . Each function should log its index when called Use closure to ensure each function log the correct index
function createFunctionArray(count) {
	let functionArray = [];
  
	for (let i = 0; i < count; i++) {
	  functionArray.push((function(index) {
		return function() {
		  console.log(index);
		};
	  })(i));
	}
  
	return functionArray;
  }
  
  const functions = createFunctionArray(2);
  functions.forEach(func => func());
  
// Activity 4: Module pattern
// Task 6: Use closures to create a simple module for managing a collection of items Implement methods to add, remove , and list items
function createItemManager() {
	let items = []; // Private variable to store items
  
	return {
	  addItem: function(item) {
		items.push(item);
		console.log(`${item} added to the collection.`);
	  },
	  removeItem: function(item) {
		const index = items.indexOf(item);
		if (index > -1) {
		  items.splice(index, 1);
		  console.log(`${item} removed from the collection.`);
		} else {
		  console.log(`${item} not found in the collection.`);
		}
	  },
	  listItems: function() {
		if (items.length > 0) {
		  console.log('Items in the collection:');
		  items.forEach((item, index) => {
			console.log(`${index + 1}: ${item}`);
		  });
		} else {
		  console.log('No items in the collection.');
		}
	  }
	};
  }
  
  // Example usage:
  const itemManager = createItemManager();
  
  itemManager.addItem('Apple');
  itemManager.addItem('Banana');
  itemManager.listItems(); // Outputs: 1: Apple, 2: Banana
  
  itemManager.removeItem('Apple');
  itemManager.listItems(); // Outputs: 1: Banana
  
  itemManager.removeItem('Orange'); // Outputs: Orange not found in the collection.
  
// Activity 5: Memoization
// Task 7: Write a function that memoizes the result of another function . Use a closure to store the results of previous computations
function memoize(fn) {
	const cache = {}; // Private variable to store cached results
  
	return function(...args) {
	  const key = JSON.stringify(args); // Create a unique key for the arguments
	  if (cache[key]) {
		console.log('Returning cached result for', key);
		return cache[key];
	  } else {
		const result = fn(...args); // Compute the result
		cache[key] = result; // Store the result in the cache
		console.log('Computing and storing result for', key);
		return result;
	  }
	};
  }
  
  // Example usage:
  function slowFunction(num) {
	// Simulate a slow computation
	for (let i = 0; i < 1e6; i++) {}
	return num * 2;
  }
  
  const memoizedSlowFunction = memoize(slowFunction);
  
  console.log(memoizedSlowFunction(5)); 
  console.log(memoizedSlowFunction(5)); 
  console.log(memoizedSlowFunction(10)); 
  console.log(memoizedSlowFunction(10)); 
  
// Task 8: create a memoized version of a function that calculates the factorial of a 

  
  function factorial(n) {
	if (n <= 1) {
	  return 1;
	}
	return n * factorial(n - 1);
  }
  
  const memoizedFactorial = memoize(factorial);
  
  console.log(memoizedFactorial(5)); 
  console.log(memoizedFactorial(5));
  console.log(memoizedFactorial(6)); 
  