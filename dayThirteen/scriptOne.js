// Day 13:Modules
// Task/Activities :

// Activity 1: Creating and exporting modules
// Task 1: Create a module that export a function to add numbers. import and use this module in another script
 function sumTwo(num1,num2){
	const result =num1+num2;
	return result;
};
// Task 2: Create a module that export an object represnting a person with properties and methods import and use this module in anthore script
	const Person={
		name:"khushi",
		age:23,
		favoirateColor:"White",

		 greet:function(){
			console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
		 }
	};

// Activity 2: Named and Default Exports
// Task 4: Create module that exports a single function using default export Import and use this function in another script

// Activity 3: Importing Entire Modules
// Task 3: Create a module that exports multiple functions using names export . import and use these function in another Script
// Task 5: Create a module that export multiple constants and functions import the entire module as an object in another script and use its properties
const PI = 3.14159;
const E = 2.71828;

// Create functions
function circumference(radius) {
    return 2 * PI * radius;
};

function areaOfCircle(radius) {
    return PI * radius * radius;
};

function exponential(value) {
    return Math.pow(E, value);
};

// Export constants and functions
module.exports = {sumTwo, Person, PI, E, circumference, areaOfCircle, exponential , getUniqueElements,fetchData };

// Activity 4: Using Third-Party Module
// Task 6: install a third-party module (e.g. , lodash) using npm import and use a funtion from this module in a script
const _ = require('lodash');

function getUniqueElements(array) {
    return _.uniq(array);
}
// Task 7: install a third-party module (e.g. , axios) using npm import and use this module to make a network request in a script
const axios = require('axios');

async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(`Error fetching data: ${error}`);
    }
}
// Activity 5 : Modul Bundling (Optional)
// Task 8: Use a module bundler like webpack or parcel to bundle multiple javaScript fiels into a single file write a script to demonstate the bundling process

// npm run start
 
//  run script to see excucation of code
// You will see the output 


