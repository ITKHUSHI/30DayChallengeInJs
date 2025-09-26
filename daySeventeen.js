// Day 17: Data Structures

// Tasks/Activites

// Activity 1:Linked List
// Task 1: Implement a Node class to represent an element in a linked list with properties value and next
  class Node{
	
	constructor(value){
		this.value=value;
		this.next=null;
	}
  }
// Task 2: Implement a LinkedList class with methods to add a node to the end , remove a node from the end and display all nodes
class LinkedList{
	 
	constructor(){
		this.head=null;
		this.size=0;
		
	}
	

	add(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.size++;
	}

	remove(){
		if(!this.head){
			console.log("List is empty");
			return;
			
		}	
		if (!this.head.next) {
			this.head = null;
		}
		else{
			let current = this.head;
			while (current.next && current.next.next) {
				current = current.next;
			}
			// Remove the last node
			console.log("removed node",current.next.value);
			current.next = null;
		}

			this.size--;
		}	
	

	display(){
		let current=this.head;
		while(current){
			console.log(current.value);
			current=current.next;
		}
	}
}
const link=new LinkedList();
link.add(4);
link.add(5);
link.add(6);
link.add(8);
link.add(7);
link.display();
link.remove();
link.display();

// Activity 2: Stack
// Task 3: Implement a stack class with methods push (add element),pop(remove element),and peek(view the top element).
class Stack{
	constructor(){
		this.items=[];
		this.size=0;
	}
	push(element){
		this.items.push(element);
		this.size++;
	}
	pop(){
		if(this.size===0){
			console.log("stack is empty");
			return null;
		}
		this.size--;
		return this.items.pop();
	}
	peek() {
		if (this.size===0) {
			console.log("Stack is empty");
			return null;
		}
		// console.log(this.items[this.items.length - 1])
		return this.items[this.items.length - 1];
	}
	printStack() {
		console.log(this.items.toString());
	}
	getSize(){
		console.log(this.size);
	}
	isEmpty(){
		if(this.size<=0){
			return true;
	    }
	      return false;
     }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.printStack();
stack.pop();
stack.peek();
stack.printStack();
stack.getSize();

// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off
function reversString(str){
	
	let ch=''
	const chStack=new Stack();
	for(let i=0;i<str.length;i++){
		chStack.push(str[i]);
		// chStack.printStack()
	}
	while(!chStack.isEmpty()){
		ch+=chStack.pop();
		
	}
	return ch;

}
console.log(reversString("khushi"));

// Activity 3: Queue
// Task 5: Impleme a Queue class with methods enqueue(add element),dequeue(remove element),and fron(view the first element)
   class Queue{
	constructor(){
		this.item=[];
		this.size=0;
	}
	isEmpty() {
		return this.item.length === 0;
	}
	size() {
		return this.item.length;
	}
	enqueue(element){
		this.item.push(element)
	}
	dequeue(){
		if(this.isEmpty()){
			console.log('queue is empty');
			return;
		}
			return this.item.shift();
	}
	front() {
		if (this.isEmpty()) {
			console.log("Queue is empty");
			return null;
		}
		return this.item[0];
	}
	printQueue() {
		console.log(this.item.toString());
	}
   }
   const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20); 
queue.dequeue()
queue.enqueue(30);
queue.printQueue()
// Task 6: Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order
class PrinterQueue {
	constructor() {
		this.queue = new Queue();
	}

	// Method to add a print job to the queue
	addPrintJob(job) {
		this.queue.enqueue(job);
		console.log(`Added print job: ${job}`);
	}

	// Method to process the next print job in the queue
	processPrintJob() {
		if (this.queue.isEmpty()) {
			console.log("No print jobs in the queue");
			return;
		}
		const job = this.queue.dequeue();
		console.log(`Processing print job: ${job}`);
	}

	// Method to view the next print job in the queue
	viewNextPrintJob() {
		if (this.queue.isEmpty()) {
			console.log("No print jobs in the queue");
			return;
		}
		const job = this.queue.front();
		console.log(`Next print job: ${job}`);
	}

	// Method to display all print jobs in the queue
	displayAllPrintJobs() {
		if (this.queue.isEmpty()) {
			console.log("No print jobs in the queue");
			return;
		}
		console.log("All print jobs in the queue:");
		this.queue.printQueue();
	}
}

// Example usage:
const printerQueue = new PrinterQueue();

printerQueue.addPrintJob("Job 1");
printerQueue.addPrintJob("Job 2");
printerQueue.addPrintJob("Job 3");
// Activity 4: Binary Tree
// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value , left and right.
class TreeNode{
	constructor(value){
		this.value=value;
		this.left=null;
		this.right=null;
	}
}
// Task 8: Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes
class BinaryTree{
	constructor(){
		this.root=null;
	}
	insert(value) {
		const newNode = new TreeNode(value);
		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}
	insertNode(node, newNode) {
		if (newNode.value < node.value) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.right, newNode);
			}
		}
	}
	inOrderTraversal(node) {
		if (node !== null) {
			this.inOrderTraversal(node.left);
			console.log(node.value);
			this.inOrderTraversal(node.right);
		}
	}

	// Method to start in-order traversal from the root
	inOrder() {
		this.inOrderTraversal(this.root);
	}
	
}
const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(20);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(15);
binaryTree.insert(30);

console.log("In-order traversal:");
binaryTree.inOrder();
// Activity 5:Graph(optional)
// Task 9: Implement a graph class with methods to add edges and perform a breath first Search (BFS)
class Graph {
	constructor() {
		this.adjacencyList = new Map();
	}

	// Method to add a vertex to the graph
	addVertex(vertex) {
		if (!this.adjacencyList.has(vertex)) {
			this.adjacencyList.set(vertex, []);
		}
	}

	// Method to add an edge between two vertices
	addEdge(vertex1, vertex2) {
		if (!this.adjacencyList.has(vertex1)) {
			this.addVertex(vertex1);
		}
		if (!this.adjacencyList.has(vertex2)) {
			this.addVertex(vertex2);
		}
		this.adjacencyList.get(vertex1).push(vertex2);
		this.adjacencyList.get(vertex2).push(vertex1); // For undirected graph
	}

	// Method to perform Breadth-First Search
	bfs(startVertex) {
		const visited = new Set();
		const queue = [startVertex];

		while (queue.length > 0) {
			const vertex = queue.shift();

			if (!visited.has(vertex)) {
				console.log(vertex);
				visited.add(vertex);

				const neighbors = this.adjacencyList.get(vertex);
				for (const neighbor of neighbors) {
					if (!visited.has(neighbor)) {
						queue.push(neighbor);
					}
				}
			}
		}
	}
}

// Example usage:
const graph = new Graph();
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("E", "F");

console.log("Breadth-First Search starting from vertex A:");
graph.bfs("A"); // Output should be: A, B, C, D, E, F

// Task 10: Use the Graph class to represent a simple network and performe BFS to find the shortest path between two nodes