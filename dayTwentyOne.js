// Day 21:LeetCode Easy

// Tasks/Activities
// Activity 1: Two Sum
// Task 1: Solve the "Two Sum" problem on LeetCode
// . write a function that takes an array of numbers and a target number and returns the indices ot the two number that add up to the target
// . Log that indices for a few test cases
 function twoSum(arr,target){
	const sortArr=arr.sort();
	let i=0;
	let j=sortArr.length-1;
	for(let k=0;k<arr.length/2;k++){
		const sum=sortArr[i]+sortArr[j]
	if(target == sum){
		console.log(i,j)
		return ;
	}
	else if(target>sum){
		i++;
	}
	else{
		j--;	
	}
}
	console.log("not find some in array");
  return ;


 }
 twoSum([2,6,1,1,5,3,5,9],8);
 twoSum([2,5,3,7,5,9],6);
 twoSum([2,6,1,3],8);
// Activity 2: reverse Integer
// Task 2: Solve the "Reverse Integer" problem on leetcode
// . write a function that takes an integer and returns it with its digits reversed
// . Handle edge cases like nagative numbers and numbers ending in zero
// . Log the reversed integers for a few test cases
function reverseInteger(num){
	let rem=0;
	let rev=0;
	while(num>0){
		rem=num%10;
		rev=(rev*10)+rem;
		num= (num/10) |0;
	}
return rev;
}
console.log(reverseInteger(3895));
console.log(reverseInteger(5985986));
console.log(reverseInteger(385));
// Activity 3: palindrome Number
// Task 3: Solve the "Palindrome Number"Porblme on Leetcode
// . write a function that takes an integer and return treue if it is a palindrome , and false otherwise
// . Log the result for a few test cases , including edge cases like nagative numbers
function checkPalindrome(num){
	let reverNum=reverseInteger(num);
	if(num===reverNum){
		console.log("number is palindrome");
		return;
	}
	console.log("number is not palindrome")
}
checkPalindrome(134);
checkPalindrome(1221);
checkPalindrome(131);

// Activity 4: Merge Two Sorted Lists
// Task 4: Solve the "Merge Two Sorted Lists" problem on LeetCode
//  . write a function that takes two sorted linked lists and returns a new sorted list by merging them.
//  . Create a few test cases with linked List and log the merged list.
class ListNode {
	constructor(val = 0, next = null) {
	  this.val = val;
	  this.next = next;
	}
  }
  
  function mergeTwoLists(list1, list2) {
	let dummy = new ListNode();
	let current = dummy;
  
	while (list1 !== null && list2 !== null) {
	  if (list1.val <= list2.val) {
		current.next = list1;
		list1 = list1.next;
	  } else {
		current.next = list2;
		list2 = list2.next;
	  }
	  current = current.next;
	}
  
	current.next = list1 !== null ? list1 : list2;
  
	return dummy.next;
  }
  
  function createLinkedList(arr) {
	let dummy = new ListNode();
	let current = dummy;
	for (let val of arr) {
	  current.next = new ListNode(val);
	  current = current.next;
	}
	return dummy.next;
  }
  
  // Helper function to print a linked list
  function printLinkedList(head) {
	let current = head;
	let result = [];
	while (current !== null) {
	  result.push(current.val);
	  current = current.next;
	}
	console.log(result.join(" -> "));
  }
  
  // Test cases
  let list1 = createLinkedList([1, 2, 4]);
  let list2 = createLinkedList([1, 3, 4]);
  let mergedList = mergeTwoLists(list1, list2);
  printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4
  
  list1 = createLinkedList([5, 10, 15]);
  list2 = createLinkedList([2, 3, 20]);
  mergedList = mergeTwoLists(list1, list2);
  printLinkedList(mergedList); // Output: 2 -> 3 -> 5 -> 10 -> 15 -> 20
  
  list1 = createLinkedList([]);
  list2 = createLinkedList([0]);
  mergedList = mergeTwoLists(list1, list2);
  printLinkedList(mergedList); // Output: 0
  

// Activity 5: Valid Parentheses
// Task 5: Solve the "Valid Parantheses"problem on leetCode
// .write a function that takes a string conatining just the characters '(',')','{','}' '[',']' and determines if the input string is valid
// .A string is valid if open brackets are closed in the correct order
// .Log the result for a few test cases
function isValid(s) {
	// Use a stack to keep track of opening brackets
	const stack = [];
	// Map to store the matching pairs of brackets
	const matchingBrackets = {
	  ')': '(',
	  '}': '{',
	  ']': '['
	};
  
	for (let char of s) {
	  if (matchingBrackets[char]) {
		const topElement = stack.length > 0 ? stack.pop() : '#';
		if (topElement !== matchingBrackets[char]) {
		  return false;
		}
	  } else {
		stack.push(char);
	  }
	}
  
	return stack.length === 0;
  }
  
  // Test cases
  console.log(isValid("()"));           // Output: true
  console.log(isValid("()[]{}"));       // Output: true
  console.log(isValid("(]"));           // Output: false
  console.log(isValid("([)]"));         // Output: false
  console.log(isValid("{[]}"));         // Output: true
  console.log(isValid(""));             // Output: true
  console.log(isValid("({[()]})"));     // Output: true
  console.log(isValid("({[(])})"));     // Output: false
  