// Task / Activities
// Activity 1:Arithmetic Operations
// Task 1: write a program to add two numbers and log the resu,t to the console.
 function toAdd(num1 , num2){
	const sum=num1+num2;
	console.log(sum);
 }
 toAdd(30,40)
// Task 2: write a program to subtract  two numbers and log the result to the console
function subtract(num1 , num2){
	const sub=num1-num2;
	console.log(sub);
 }
 subtract(30,40)
// Task 3: write a program to multiply two numbers and log the result to the console
function multiply(num1 , num2){
	const mul=num1*num2;
	console.log(mul);
 }
 multiply(30,40)
// Task 4: write a program to divide two numbers and log the result to the console
function divide(num1 , num2){
	const div=num1/num2;
	console.log(div);
 }
 divide(30,40)
// Task 5: write a program to find the remainder when one number is divided by anthore and log the result to the console
function remainder(num1 , num2){
	const rem=num1%num2;
	console.log(rem);
 }
 remainder(30,5)
// Activity 2 : Assignment Operators
// Task 6: use the += operator to add a number to a variable and log the result to the console
function addUsingIncOperatior(num1){
  let result=10;
  result+=num1;
  console.log(result);
}
addUsingIncOperatior(21)
// Task 6: use the -= operator to subtract a number to a variable and log the result to the console
function substractUsingIncOperatior(num1){
	let result=10;
	result-=num1;
	console.log(result);
  }
  substractUsingIncOperatior(2)
// Activity 3 : comparison Operators
// Task 8: write a program to campare two numbers using > and < and log the result to the console.
function numberInRange(num1){
	if(num1>0 && num1<100){
		console.log("number in range",num1);
		return;
	}
	console.log("nnumber is not in range");
  }
  numberInRange(48);
// Task 9: write a program to campare two numbers using >= and =< and log the result to the console.
function numberInRangeTwo(num1){
	if(num1>=0 && num1<=100){
		console.log("number in range",num1);
		return;
	}
	console.log("nnumber is not in range");
  }
  numberInRangeTwo(48);
// Task 10: write a program to campare two numbers using == and === and log the result to the console.
function isEqualOrNot(num1, num2){
	if(num1==num2){
		console.log("strings are equal",num1);
		return;
	
	}
	console.log("strings are not equal");
  }
  isEqualOrNot(1,"1");
function isEqualOrNotCheckStrick(num1, num2){
	if(num1===num2){
		console.log("strings are equal",num1);
		return;
	
	}
	console.log("strings are not equal");
  }
  isEqualOrNotCheckStrick(1,"1");

// Activity 4 : Logical Operators
// Task 11: write a program that uses the && operator to combine two conditions and log the result to the console
numberInRange(30) // function using && operator
// Task 12: write a program that uses the || operator to combine two conditions and log the result to the console
function numberBetweenRange(num1){
	if(num1>=40 || num1<=60){
		console.log("number is found",num1);
		return;
	}
	console.log("number is not found");
  }
  numberBetweenRange(48);
// Task 13: write a program that uses the ! operator to combine two conditions and log the result to the console
function numberIsNotEqual(num1){
	if(num1!=40 ){
		console.log("number is not equal");
		return;
	}
	console.log("number is equal");
  }
  numberIsNotEqual(48);
// Activity 5  : ternary Operator
// Task 14: write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console
function numberIsEqual(num1){
	num1==12?`${console.log("number is 12")}`:`${console.log("number is not 12")}`;
  }
  numberIsEqual(12);