// Day 6: Arrays
// Task/Activities
 
// Activity 1: Array Creation and Access
// Task 1: create an array of numbers from 1 to 5 and log the array to the console
function crateArray(row){
	let arr=[]
	let val=0;
	for(let i =0;i<row;i++){
		arr[i]=val++
	}
	console.log(arr);

}
crateArray( 4);
// Task 2: Access first and last element of and log the array to the console
function AccessFirstAndLastIdx(arr){
	console.log("First element of array",arr[0]);
	console.log("Last element of array",arr[arr.length-1])

}

AccessFirstAndLastIdx([1,2,3,4,5])

// Activity 2: Array Methods (Basic)
// Task 3:use the push method to add new number to the end of the array and log the update array
function addInArray(arr , newVal){
	arr.push(newVal);
	for(let i in arr){
		console.log(arr[i]);
	}
	console.log("\n")


}
addInArray([1,2,4,5,7,8], 9)
// Task 4: use the pop method to remove the last element from the array and log the update array
function removeLastElementInArray(arr){
	arr.pop();
	for(let i in arr){
		console.log(arr[i]);
	}
   console.log("\n")
}
removeLastElementInArray([1,2,3,4,5])
// Task 5: use the shift method to remove the first element from the array and log the update array
function removeFirtElementInArray(arr){
	arr.shift();
	for(let i in arr){
		console.log(arr[i]);
	}
	console.log("\n")

}
removeFirtElementInArray([1,2,3,4])
// Task 6: use the unshift method to add a new number to the beginning of the array and log the update array
function addFirtElementInArray(arr,val){
	arr.unshift(val);
	for(let i in arr){
		console.log(arr[i]);
	}
	console.log("\n")

}
addFirtElementInArray([1,3,5,6,7],0)
// Activity 3: Array Methods (Intermediate)
// Task 7:use the map method to create a new array where each number is double and log the new array
function createDoubleValArray(arr){
 return arr.map((el)=>el*2)
	
}
console.log(createDoubleValArray([1,3,4,5,7]));
// Task 8:use the filter method to create a new array with only even numbers and log the new array
function createEvenValArray(arr){
	return arr.filter((el)=> el%2==0)
}
console.log(createEvenValArray([1,2,3,4,6,7,12]))
// Task 9:use the reduce method to calculate the sum of all numbers and log the result
function sumUsingReduce(arr){
	return arr.reduce( (curr,next)=>curr+next,0)
}
console.log(sumUsingReduce([1,2,4,6,8]));

// Activity 4: Array Iteration
// Task 10: use a for loop to iterate over the array and log each element to the console
function printArrayUsingForloop(arr){
	for(let i=0;i<arr.length-1;i++){
		console.log(arr[i]);
	}
}
printArrayUsingForloop([1,2,4,5,7]);
// Task 11: use the forEach method to iterate over the array and log each element to the console
function printArrayUsingForEach(arr){
	arr.forEach(element =>console.log(element))
}
printArrayUsingForEach([12,4,5,67]);

// Activity 5:multi-dimensional Arrays 
// Task 11: create a two-dimensional array (matrix) and log the entire array to the console
function createTowDArray(row,col){
	let arr=[];
	let val= 0;
	for(let i=0;i<row;i++){
		arr[i]=[];
		for(let j=0;j<col;j++){
			arr[i][j]=val++;
		}
	}
    console.log(arr)
}
createTowDArray(3,3);

// Task 12: Access and log a specific element from the two dimensional array
function getElementFormArray(arr,row,col){
	console.log(arr[row][col]);
}
getElementFormArray([[1,4,6,8,3],[3,6,8,3,1]],1,3);