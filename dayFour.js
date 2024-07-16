// Tasks/Activities
// Activity 1: For loop
// Task 1: write a program to ptint number 1 to 10 using for loop.
function printNumber(){
	for(let i=1;i<=10;i++){
		console.log(i);
	}
}
printNumber()
// Task 2: write a program to ptint multiplication table of 5  using for loop.
function multiplicationFiveTable(){
	for(let i=1;i<=10;i++){
		console.log(i*5);
	}
}
multiplicationFiveTable()

// Activity 2: whileLoop
// Task 3: write a program to calculate the sum of numbers from 1 to 10 using a while loop.
function sumUsingWhile(){
	let i=1;
	let sum=0;
	while(i<11){
     sum+=i;
	 i++;
	}
	console.log( "sum of number",sum);
}
sumUsingWhile()
// Task 3: write a program to print numbers from 10 to 1 using a while loop.
function reverseNumberPrintUsingWhile(){
	let i=10;
	console.log("reverse number")
	while(i>0){
		console.log( i);
		i--;
	}
}
reverseNumberPrintUsingWhile()
// Activity 3:Do.....WhileLoop
// Task 5: write a program to print number from 1 to 5 using a do...WhileLoop
function printNumberUsingDoWhile(){
	let i=1;
	do {
		console.log(i);
		i++;
	} while (i<6) 
}
printNumberUsingDoWhile()
// Task 6: write a program to calculate the factorial of a number using  a do...WhileLoop
function factorialUsingDoWhile(num){
	let fac=1;
	do {
		fac*=num;
		num--;

	} while (num>0);
   console.log(`factorial of ${num} is`,fac);
}
factorialUsingDoWhile(5);

// Activity 4: Nested loop
// Task 7: write a program to print a pattern using nasted for loop
    // pattern
            //  *
            //  *  *
			//  *  *  *
			//  *  *  *  *
			//  *  *  *  *  *

		function printPattern(){
			for(let i=0;i<=5;i++){
			  str=" * ";
			  console.log(str.repeat(i))
					
			}
			
		}	
printPattern()
// Activity 5: Loop Control Statement
// Task 8: write a program to print number from 1 to 20 , but skip the number 5 using continue statement
function printNumberUsingContinue(){
	console.log("Skip number 5")
	for(let i=1;i<=20;i++){
		if(i==5) continue;
		else{
			console.log(i);
		}
	}
}
printNumberUsingContinue()
// Task 8: write a program to print number from 1 to 20 , but skip the number 7 using break statement
function printNumberUsingBreak(){
	console.log("skip number 7");
	for(let i=1;i<=20;i++){
		let skip=false;
		skipcheck:{
			if(i==7){
				skip=true;
				break skipcheck;
			}
		}
		if(skip) continue;
		console.log(i);
	}
}
printNumberUsingBreak()


// currying method
function sum(num){
	const inner = (b) => sum(num + b);
	inner.valueOf = () => num;
	return inner;	
}
// other method 
// let sum=num;
	//   function inner(nextSum){
    //   if(nextSum === undefined) {
	// 	return sum;
	//   }
	//   else{
	// 	sum+=nextSum;
	// 	return inner;
	// 	 }
	// }
	// inner.valueOf=()=>sum
	// return inner;
	const sum1 = sum(1);
console.log(sum1(2) == 3); // true
console.log(sum1(3) == 4); // true
console.log(sum(1)(2)(3) == 6); // true
console.log(sum(5)(-1)(2) == 6); // true