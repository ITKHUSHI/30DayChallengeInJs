// Day 12:Error Handling
// Task/Activities

// Activity 1: Basic Error Handling With Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console
// Function that intentionally throws an error
function throwError() {
    throw new Error('This is an intentional error.');
}

// Function that handles the error using try-catch
function handleError() {
    try {
        throwError(); // Call the function that throws an error
    } catch (error) {
        console.error('An error occurred:', error.message); // Log the error message
    }
}

// Call the function that handles the error
handleError();
// const randomNum= Math.floor(Math.random()*num);

// Task 2: Create a function that divided two numbers abd throw an error if the denominator is Zero . use a try-catch block to handle this error.
function checkDenominator(num,denominator){
	try {
		if(denominator=== 0){
			console.error("denominator is zero")
		}
		else{
			const result = num / denominator;
			console.log("denominator is",result)
		}
		
	} catch (error) {
		console.error("error",error.message);
	}
}
checkDenominator(8,0);

// Activity 2: Finally Block
// Task 3: Write a script that includes try-catch block and a finally block . log messages in the try , catch , and finally blocks to observe the execution flow
function testTryCatchFinally() {
    try {
        console.log('Inside try block'); // Log message inside try block
        // Simulate an error
        throw new Error('An error occurred');
    } catch (error) {
        console.log('Inside catch block'); // Log message inside catch block
        console.error('Caught an error:', error.message); // Log the error message
    } finally {
        console.log('Inside finally block'); // Log message inside finally block
    }
}

// Call the function to see the execution flow
testTryCatchFinally();


// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class Throw an instance of this custom error in a function and handle it using a try-catch block
   class ApiError extends Error{
	constructor(
	statusCode,
	message="Somthing went wrong",
	errors=[],
	stack=""
   ){
       super(message)
	   this.statusCode=statusCode
	   this.data=null,
	   this.message=message,
	//    this.success=success,
	   this.errors=errors
	   if(stack){
		this.stack=stack
	   }
	   else{
		Error.captureStackTrace(this,this.constructor)
	   }
   }
   }

   function handleApiError() {
	
    try {
		
		throw new ApiError(400, "Bad Request", ["Invalid input data"],error); 

    } catch (error) {
		console.log("error in catch block",error.message)
 
    }
}
handleApiError();

// Task 5: Write a function that validates user input(e.g. , checking if a string is not empty) and throws a custom error if the vvalidation fails . Handle the custom error using try-catch block.
   function validateInput(input){
	try {
		if(!input || input.trim()===''){

			throw new ApiError(400,"Wirte a vaid input input field is empty")
		}
		console.log("vailid input",input);
	} catch (error) {
		console.log(error.message)
	}
   }
   validateInput("khushi");
   validateInput();
// Activity 4: Error Handling in promises
// Task 6: Create a promise that randomly resolves or rejecct use .catch() to handle the rejection and log an appropriate message to the console
function createRandomPromise() {
      new Promise((resolve, reject) => {
        const randomValue = Math.random(); // Generate a random number between 0 and 1
        if (randomValue < 0.5) {
            resolve('Promise resolved successfully!');
        } else {
            reject(new Error('Promise rejected.'));
        }
    })
	.then(result => {
		console.log(result); // Log the resolved value
	})
	.catch(error => {
		console.error('Error:', error.message); // Log the error message
	});
}
createRandomPromise()

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects , and log the error message
function randomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random(); // Generate a random number between 0 and 1
        if (randomValue < 0.5) {
            resolve('Promise resolved successfully!');
        } else {
            reject(new Error('Promise rejected.'));
        }
    });
}
async function handleRandomPromise() {
    try {
        const result = await randomPromise(); // Wait for the promise to resolve or reject
        console.log(result); // Log the resolved value if successful
    } catch (error) {
        console.error('Error:', error.message); // Handle and log the error message if rejected
    }
}
handleRandomPromise();
// Activty 5: Graceful Error Handling Fetch
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch() Log an appopriate error message to the console
function fetchDataWithCatch() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Data:', data);
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}

// Call the function to demonstrate error handling with .catch()
fetchDataWithCatch();
// Task 9: Use the fetch API to request data from an invailid URL within an async function and handle the error using try-catch log an appropriate error message
// Async function to fetch data from an invalid URL using fetch and handle error with try-catch
async function fetchDataWithTryCatch() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchDataWithTryCatch();
