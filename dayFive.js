// Functions

// Tasks/Activities:
// Activity 1: Function Declaration
// task 1: write a function to check if a number is even or odd and log the result
function checkOddEven(num){
	return num%2 === 0? `${console.log("number is even",num)}`:`${console.log("number is Odd",num)}`

}
checkOddEven(69)
// task 2: write a function to calculate the square of a number and return the result
function getSquare(num){
	const square=Math.pow(num,2);
	return square
}
console.log(getSquare(4));

// Activity 2: Function Expression
// task 3: write a funtion expression to find the maximum of two numbers and log the result to the console
function getMaxNumber(num1,num2){
	
	const max=Math.max(num1,num2);
	console.log("max number is :",max);
}
getMaxNumber(12,48);
// task 4: write a funtion expression to concate two stings and return  result 
function concateString(str1,str2){
	const concateStr=str1.concat(" ",str2);
	return concateStr;
}
console.log(concateString("khushi","Rathore"));


// Activity 3: Arrow Function 
// task 5: write an arrow function to calculate the sum of two numbers and return the result 
const sumOfTwo =(num1,num2)=>{
	const sum=num1+num2;
	return sum;
}
console.log(sumOfTwo(48,68));
// task 6: write an arrow function to check if a string contains a specific character and return boolean 
const stringContainsCharactersOrNot=(str , ch)=>{
	return str.includes(ch)
}
console.log(stringContainsCharactersOrNot("khsuhi",'k'))

// Activity 4: Function paramiters and Default Values
// task 7: write a function that take two parameters and return their products . provide a default value for the secod parameter
const products=(num1,num2=3)=>{
  const mul=num1*num2;
  return mul;
}
console.log(products(20,4))
// task 8: write a function that takes a person's name age and return a greeting message. provide a default for the age
function greetings(name,age=18){
	console.log(`hello ${name} and age is ${age}`);
}
greetings("khushi");

// Activity 5: Function Declaration
// task 9: write a higher-order funtion that takes a functions and a number and calls the function that many times
const fn=(num1, calls)=>{
	if(calls==0){
		return 0;
	}
       return num1+fn(num1 , calls-1);

}
const higherFunction =( fn ,num1  , calls)=>{
	console.log("sum is");
	 return  fn(num1, calls);
	
}
console.log(higherFunction(fn , 12 , 4))
// task 9: write a higher-order function that takes a two functions and a value , applies the first function to the value and then applies the second function to the result
const fn2=(num)=>{
	const total=1000-num
	return total;
}
const higherFunctionTwo =(fn ,fn2, num1,calls)=>{
	
	 const num2=  fn(num1,calls)
	 console.log("fn result" , num2);
	
	 const finalResult =  fn2(num2);
	 console.log("final result",finalResult)
	 

}
higherFunctionTwo(fn,fn2,50,2);