// Day 16:Recursion
// Tasks/Activities:

// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of a number . log the result for few test cases
function factorial(n) {
	if (n <= 1) {
	  return 1;
	}
	return n * factorial(n - 1);
  }
  console.log("factorial",factorial(5));
  console.log("factorial",factorial(8));
// Task 2: Write a recursive function to calculate the nth Fibonacci numver log the result for few test cases
function fabonacci(n) {
	if (n ===1) {
	  return n;
	}
	else if(n<=0) return 0;
	 return fabonacci(n - 1)+fabonacci(n-2);
  }
  console.log(`fabonacci ` ,fabonacci(5))
// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all elements in an arrat . log the result for a dew test cases
function sumArray(arr, index = 0) {
	// Base case: If the index is at the end of the array, return 0
	if (index >= arr.length) {
	  return 0;
	}
  
	// Recursive case: Add the current element to the sum of the rest of the array
	return arr[index] + sumArray(arr, index + 1);
  }
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([10, 20, 30])); 
// Task 4: Write a recursive function to find the maximun elements in an array . log the result for a few test cases
function findMax(arr) {
	// Base case: If the array has only one element, return that element
	if (arr.length === 1) {
	  return arr[0];
	}  
	// Recursive case: Compare the first element with the maximum of the rest of the array
	const maxOfRest = findMax(arr.slice(1));
	return arr[0] > maxOfRest ? arr[0] : maxOfRest;
  }
  console.log(findMax([1, 3, 5, 7, 9])); // Output: 9

// Activity 3: String Manipulation With Recusion
// Task 5: write a recursive function to reverse a string log the result for few test cases
function reverseString(str) {
	// Base case: If the string is empty or has one character, return it as is
	if (str.length <= 1) {
	  return str;
	}
  
	// Recursive case: Reverse the substring excluding the first character, and append the first character to the end
	return reverseString(str.slice(1)) + str[0];
  }
  console.log(reverseString('JavaScript')); // Output: 'tpircSavaJ'
// Task 6: write a recursive function to check  string is palindrome  log the result for few test cases
function isPalindrome(str) {
	// Remove non-alphanumeric characters and convert to lowercase for a case-insensitive check
	str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
	// Base cases
	if (str.length <= 1) {
	  return true; // A string with one or no characters is a palindrome
	}
	
	if (str[0] !== str[str.length - 1]) {
	  return false; // The first and last characters must be the same
	}
  
	// Recursive case: Check the substring excluding the first and last characters
	return isPalindrome(str.slice(1, -1));
  }
  console.log(isPalindrome('racecar')); // Output: true
// Activity 4: Recursive Search 
// Task 7: write a recursive function to perform a binary search on a srted array . log the index of the target element for the few test cases
function binarySearch(arr, target,st=0,ed=arr.length-1){
    if(st>ed) return -1;
	const mid= Math.floor((st+ed)/2);
	if(target==arr[mid]) {
		return mid;
	}
	else if(arr[mid]>target){
	   return binarySearch(arr,target,st,mid);
    }
	else{
		return binarySearch(arr,target,mid+1,ed);
	}
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

// Task 8: write a recursive function to count the occurrences of a target element in an array . log the index of the target element for the few test cases
function countOccurrences(arr, target, index = 0) {
	if (index >= arr.length) {
	  return 0;
	}
  	const countInRest = countOccurrences(arr, target, index + 1);
	return (arr[index] === target ? 1 : 0) + countInRest;
  }
  
   console.log(countOccurrences([1, 2, 3, 4, 5, 2, 2], 2));


// Activity 5: Tree Traversal (Optional)
// Task 9: write a recursive function to perform an in-order traversal of a binary tree log the nodes as they are visited
class TreeNode {
	constructor(value, left = null, right = null) {
	  this.value = value;
	  this.left = left;
	  this.right = right;
	}
  }
  function inOrderTraversal(node) {
	if (node === null) {
	  return; 
	}
  	inOrderTraversal(node.left);
  	console.log(node.value);  
	inOrderTraversal(node.right);
  }
  const root = new TreeNode(4,
	new TreeNode(2, new TreeNode(1), new TreeNode(3)),
	new TreeNode(6, new TreeNode(5), new TreeNode(7))
  );
  inOrderTraversal(root); // Output: 1 2 3 4 5 6 7
// Task 10: write a recursive function to calculate the depth of a binary tree log the result for few test cases 

function calculateDepth(node) {
	// Base case: If the node is null, the depth is 0
	if (node === null) {
	  return 0;
	}
  
	// Recursively calculate the depth of the left and right subtrees
	const leftDepth = calculateDepth(node.left);
	const rightDepth = calculateDepth(node.right);
  
	// The depth of the current node is the greater of the left or right depth plus 1
	return Math.max(leftDepth, rightDepth) + 1;
  }
  const root1 = new TreeNode(1,
	new TreeNode(2, new TreeNode(4), new TreeNode(5)),
	new TreeNode(3, null, new TreeNode(6))
  );
  
  console.log(calculateDepth(root1));