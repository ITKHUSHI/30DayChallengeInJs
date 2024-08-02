// import sum from "./scriptOne.js";

const {sumTwo,Person ,PI, E, circumference, areaOfCircle, exponential, getUniqueElements,fetchData  } =require('./scriptOne.js');

console.log(sumTwo(3,7));
Person.greet();

console.log(`Value of PI: ${PI}`);   // Output: Value of PI: 3.14159
console.log(`Value of E: ${E}`);     // Output: Value of E: 2.71828

console.log(`Circumference of a circle with radius 5: ${circumference(5)}`);  // Output: Circumference of a circle with radius 5: 31.4159
console.log(`Area of a circle with radius 5: ${areaOfCircle(5)}`);            // Output: Area of a circle with radius 5: 78.53975
console.log(`Exponential of 2: ${exponential(2)}`);      

const array = [1, 2, 2, 3, 4, 4, 5];
console.log(`Unique elements in array: ${getUniqueElements(array)}`);


// Use the axios function to fetch data
(async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    const data = await fetchData(url);
    console.log(`Fetched data: ${JSON.stringify(data)}`);
})();