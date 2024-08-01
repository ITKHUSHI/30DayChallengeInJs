// Day 11 : Promises and Async/Await
// Tasks/Activities:

// Activity 1: Understanding Promises
// Task 1: Create a promise that resolve with a message after a 2-second timeout and log the message to the console
 const resolvePromise=new Promise((resolve,reject)=>{
	setTimeout(()=>resolve(console.log("Promise full field")),2000)
 })

// Task 2: Create a promise that reject with an error message after a 2-second timeout and handle the error using .catch()
const rejectPromise=new Promise((resolve, reject) => {
	setTimeout(()=>{
		reject(new Error('Somthing went wrong'))
	},2000);
  })
  .catch(error=>{
	console.log('Error:',error.message);
  })

// Activity 2: Chaining promises
// Task 3: Create a sequence of promises that simulate fatching data froma server . chain the promises to loog message in a specific order
const myPromises=new Promise(function(resolve,reject){
	setTimeout(() => resolve(1),1000);
}).then(function(result){
	console.log(result);
	return result*2;
})
.then(function(result){
	console.log(result);
	return result*2;
})
.then(function(result){
	console.log(result);
	return result*2;
})

// Actitvity 3: Using Async/Await
// Task 4: write an async function that wait for a promise to resolve and then logs the resolved value
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise resolved!');
    }, 2000);
});
async function logResolvedValue() {
	try {
		const result = await myPromise; // taking a refrence of another function 
		console.log('Resolved value:', result);
	} catch (error) {
		console.error('Error:', error.message);
	}
}
logResolvedValue();

// Task 5: write an async function that handles a rejected promise using try-catch and  logs error message
const myRejectedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Promise rejected with an error!'));
    }, 2000);
});
async function logRejectValue() {
	try {
		await myRejectedPromise; // taking a refrence of another function 
	
	} catch (error) {
		console.log('Error', error.message);
	}
}
logRejectValue();

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch Api to get data from a public API and log the respinse data to the console using promises
  const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// // Fetch data from the public API and log the response data
fetch(apiUrl)
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok ' + response.statusText);
		}
		return response.json(); // Parse JSON data from the response
	})
	.then(data => {
		console.log('Response data:', data); // Log the response data to the console
	})
	.catch(error => {
		console.error('Fetch error:', error); // Handle and log any errors
	});
// Task 7: use the fetch API to get data from a public API and log the response data to the console using async/await 
const getApiData=async function(){
	try {
		const response= await fetch("https://jsonplaceholder.typicode.com/posts/1")
		const res= await response.json()
		console.log("response:" ,res);
	} catch (error) {
		console.error('Fetch error:', error);
	}
}
getApiData()
// Activity 5: Concurrent Promises
// Task 8: Use promise.all to wait for multiple promises to resolve and then log all their values
const promiseTwo=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve("second promise fullfield");
	})
},2000)
Promise.all([myPromise,promiseTwo])
.then((values)=>{
	console.log('All promises resolved: ',values);
})
.catch((error)=>{
	console.error('one of the promises rejected',error)
});


// Task 9: Use promise.race to log the value of the first promise that resolves among multiple promises
Promise.race([myPromise,promiseTwo])
.then((values)=>{
	console.log('First resolved: ',values);
})
.catch((error)=>{
	console.error('First rejected',error)
});