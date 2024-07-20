// Day 8: ES6+Features

// Tasks/Activities:

// Activity 1: Temple Literals
// Task 1: Use template literals to create a string that includes variables for a person's name and age and log the string to the console
function printNameAndAge(name , age){
	console.log(`hello ${name} and your age is ${age}`);
}
printNameAndAge("khushi","18");
// Task 2: Create a multi-time string using template literals and log it to the console
function repeatString(str,num){
	if(num==0){
		return str;
	}
	return str+" "+repeatString(str,num-1);
}
console.log(repeatString("khushi",2));
// Activity 2: Destucturing
// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console
function destructureArray(...arg){
	const [all]=arg
	console.log("all Element of array",arg)
	console.log("first Element of array",all[0]);
	console.log("Second Element of an array",all[1]);

}
destructureArray([5,7,9,8])
// Task 4: use Object destructuring to extract the title and author from a book object and log them to the console
function destructureObject(object){
	const {title , author}=object
	console.log("all Element of Object",object)
	console.log("first Element of Object :",title);
	console.log("Second Element of an Object :",author);

}
book={
	title:"life hack",
	author:"khushi",
}
destructureObject(book);
// Activity 3: Spread abd Rest Operators
// Task 5: Use the spread operator to create a new array that includes all elements of an exisiting array plus additional elements , and log the new array to the console
function createNewArray(...arg){
	const [a,b,c]=[12,45,22];
	const [...result]=[a,b,c, ...arg]
	console.log("new array",result)

}
createNewArray(5,7,9,8)
// Task 6: Use the spread operator in function to accept an  arbitary number of arguments , sum them and return the result 
function sumInSpreadOprator(...args){
	const sum=args.reduce((current,next ) => current+next,0);
	return sum;
}
  console.log(sumInSpreadOprator(3,4,6,3,8,9));

// Activity 4: Default parameters
// Task 7: Write a function that takes two parameters and return their product , with second paramiter having a default value of 1 .log the result of calling this function with or without second parameter
function multiplication(num1,num2=1){
	console.log("multiplication is", num1*num2);
}
multiplication(3);
multiplication(3,5)

// Activity 5: Enhanced Object Literals
// Task 8: Use enhanced object literals to create an object with methods and properties and log the object to the console
const objName = "Enhanced Object";
const type = "Example";

const enhancedObject = {
  objName,
  type,
  greet() {
    console.log(`Hello from the ${this.objName}`);
  },
  describe() {
    console.log(`This is an example of an object with enhanced object literals.`);
  }
};

console.log(enhancedObject);
enhancedObject.greet();
enhancedObject.describe();

// Task 9: create an object with computed property names based on variables and log the object to the console
const prop1 = "dynamicProp1";
const prop2 = "dynamicProp2";

const dynamicObject = {
  [prop1]: "This is the value for dynamicProp1",
  [prop2]: "This is the value for dynamicProp2",
  [`${prop1}_and_${prop2}`]: "This is a combined dynamic property"
};

console.log(dynamicObject);
