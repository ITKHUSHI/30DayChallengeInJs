//Control Structures
// Task / Activities:

//Activity 1: If-Else Statements

//Task 1: write a program to check if a number is positive , navgative or zero , and log the result to the console
function numberIsPositiveOrNagativeOrZero(num){
	if(num<0){
		console.log("number is nagative",num);
	}
	else if(num==0){
		console.log("number is Zero",num);
	}
	else{
		console.log("number is positive",num);
	}
}
numberIsPositiveOrNagativeOrZero(49);
//Task 2: write a program to check if person is eligible to vote (agr>=18)  and log the result to the console
function checkVoterEligiblity(age){
	if(age>=18){
		console.log("Eligible for voting",age);
	}
	else{
		console.log("Not eligible for voting",age)
	}
}
checkVoterEligiblity(12);

// Activity 2:Nested If-Else statements
// Task 3: write a program to find the largest of three numbers using nasted if-else statements
function findLargestNumber(num1 , num2 , num3){
	if(num1>num2){
		if(num1>num3){
			console.log(" Largest number is",num1);
		}
		else{
			console.log("Largest number is",num3)
		}
	}
	else {
		if(num2>num3){
			console.log("Largest number is",num2);
		}
		else{
			console.log("Largest Number is",num3);
		}
	}

}
findLargestNumber(12,59,32);

// Activity 3: Switch Case
// Task 4:write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console
function findDay(dayNum){
	switch (dayNum) {
		case 1:
			console.log("Monday")
			break;
	    case 2: console.log("Tuesday")
			break;
		case 3:
			console.log("Wednesday")
			break;
	    case 4: console.log("Thursday")
			break;
		case 5:
			console.log("Friday")
			break;
	    case 6: console.log("Saturday")
			break;
		case 7:
			console.log("Sunday")
			break;
		default:
			console.log("you can choose day number only(1-7)")
			break;
	}
}
findDay(3);
// Task 5:write a program that uses a switch case  to assign a grade ('A', 'B','C','D','F') based on score and log the grade to the console.
function assignGrade(dayNum){
	switch (dayNum) {
		case 1:
			console.log("A")
			break;
	    case 2: console.log("B")
			break;
		case 3:
			console.log("C")
			break;
	    case 4: console.log("D")
			break;
		case 5:
			console.log("F")
			break;
		default:
			console.log("only choose number 1 to 5");
			break;
	}
}
assignGrade(9);
//Activity 4: Conditional (Ternary) Operator
// Task 6: write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
function checkNumberIsOddOrEven(num){
	num%2==0?`${console.log("number is even",num)}`:`${console.log("number is odd",num)}`

}
checkNumberIsOddOrEven(39);
// Activity 5: Combining Condition
// Task 7: write a program to check if a year is a leap year using condition (divisible by 4 , but not 100 unless also divisible by 400) and log the result to the console
function leapYearOrNot(year){
	if(year%4==0 && year!=100 && year!=400){
		console.log(" Leap year" , year);
	}
	else{
		console.log("Not leap year" , year)
	}
}
leapYearOrNot(100);