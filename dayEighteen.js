// Day 18: Algorithms

// Task/Activities:
// Activity 1: Strong Algorithms
// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order log the sorted array
function bubbleSort(arr){
	for(let i=0;i<arr.length;i++){
	for(let j=0;j<arr.length-1;j++){
		if(arr[j]>arr[j+1]){
			let temp=arr[j];
			arr[j]=arr[j+1];
			arr[j+1]=temp;
		}
	}
	}
	return arr;
}
console.log(bubbleSort([2,8,9,3,4]))
// Task 2: Implement the  selection algorithm to sort an array og numbers in ascending order log the sorted array
function selectionSort(arr){
	for(let i=0;i<arr.length;i++){
		let smallest=i;
		for(let j=0;j<arr.length-1;j++){
			if(smallest[i]>arr[j+1]){
				smallest=j;
				
			}
			let temp=smallest[j];
	    	smallest[j]=arr[j+1];
	    	arr[j+1]=temp;
		}
		
	}
	return arr;
}
console.log(selectionSort([8,4,11,7,1,5]));
// Task 3: Implement the quicksort  algorithm to sort an array og numbers in ascending order log the sorted array

// Activity 2: Searching Algorithm
// Task 4: Implement the liner search algorithm to find a target value in an array . log the index of the target value
function linearSearch(arr , target){
	for(let i=0;i<arr.length;i++){
		if(arr[i]==target){
			console.log("target value at index",i);
			return ;
		}
	}
	console.log("not find at any index");

}
linearSearch([4,2,6,1,7],6);
linearSearch([3,8,4,7,1],0);
// Task 5: Implement the binary search algorithm to find a target value in an array . log the index of the target value
function binarySearch(arr,target){
	let i=0,j=arr.length;
	arr.sort(); 
  while(i<=j){
	let mid= Math.floor((i+j)/2);
	if(arr[mid]==target){
		console.log("target value at index",mid);
		return;
	}
	else if(arr[mid]>target){
		  j=mid-1;
	}
	else{
          i=mid+1;
	}
  }
  console.log("not find at any index");
  

}
binarySearch([3,6,8,2,5,1],8);
binarySearch([8,1,7,3,9,2,4],12);
binarySearch([34,21,76,11,35],21);

// Activity 3: String Algorithms
// Task 6: write a function to count the occurrences of each character in a string Log the character counts
function occurrencesCount(str){
	    
	let charCount = {};
	let lowerCaseStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
	for (let char of lowerCaseStr) {
	  if (charCount[char]) {
		charCount[char]++;
	  } else {
		charCount[char] = 1;
	  }
	}
	console.log(charCount);
  }

occurrencesCount("khushi")
// Task 7: write a function to find the longest substring without repeating characters in a string  Log the length of the substring

// Activity 4: Array Algorithm
// Task 8: write a function to rotate an array by k position . log the rotated array
function rotatedArray(arr, k){
	k=k%arr.length;
	const rotatedArr=arr.slice(-k).concat(arr.slice(0,arr.length-k));
	return rotatedArr
	
}
console.log(rotatedArray([1,2,3,4,5,6,7,8,9],3));
// Task 9: write a function to merge two sorted arrays into one sorted array log the merged array
function mergeArray(arr1,arr2){
	const n=arr1.length;
	const m=arr2.length;
	const totalLength=m+n;
	let j=0,k=0;
	const newArray=[totalLength]
	for(let i=0;i<totalLength;i++){
		while(j<arr1.length && k<arr2.length){
			if(arr1[j]<arr2[k]){
				newArray[i++]=arr1[j++];
			   }
			   else{
				newArray[i++]=arr2[k++];
			   }
		}
		while(j<arr1.length){
			newArray[i++]=arr1[j++];
		}
		while(k<arr2.length){
			newArray[i++]=arr2[k++];
		}
	}
	return newArray;
}
console.log(mergeArray([1,5,6,10],[3,4,7,9,8]));
// Activity 5: Dynamic Programming (optional)
// Task 10: Write a function to solve the fibonacci sequence using Dynamic programing log the fibonacci numbers
// Task 11: Write a function to solve the knapsack problem using dynamic programing log the maximum value that can be obtained