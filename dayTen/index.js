// Day 10 EVENT Handling
// Tasks/Activities:

// Activity 1: Basic Event Handling
// Task 1: Add a click event listener to a button that changes the text content of a paragraph
const paragraph=document.getElementById("change-text-paragraph");
const btn=document.getElementById("btn")
btn.addEventListener('click',function(){
	paragraph.innerHTML="text changed successfully.....!";
})
// Task 2: Add a double-click event listener to an image that toggles its visiblity
const imageElement = document.getElementById('image');
   imageElement.addEventListener('dblclick', function() {
	// Toggle the visibility of the image
	if (imageElement.style.display === 'none') {
		imageElement.style.display = 'block';
	} else {
		imageElement.style.display = 'none';
	}
});
// Activity 2 : Mouse Events
// Task 3: Add a mouseover event listner to an element that changes its background color
const bgDiv=document.getElementById('bg')
bgDiv.addEventListener('mouseover',function(){
bgDiv.style.backgroundColor="red"
})
// Task 4: Add a mouseout event listner to an element that resets its background color
bgDiv.addEventListener('mouseleave',function(){
bgDiv.style.backgroundColor="aqua"
})
// Activity 3 : Keyboard Events
// Task 3: Add a Keydown event listner to an input field that logs the key pressed to the console 
const logContent=document.getElementById("log-content")
const inputField=document.getElementById("input-field")
 function inputShow(){
	inputField.addEventListener('keydown',function(e){
		if(e.key==="Backspace") return;
		else{
			inputField+=e.key
			console.log(e.key);
		}
	   })
 }
// Task 4: Add a mouseout event listner to an input field that displays the current value in a paragraph
inputField.addEventListener('mouseout',function(e){
	
		logContent.innerHTML+=`Current value: ${inputField.value}`
		inputField.value="";
   })
// Activity 4: Form Events
// Task 7: Add a submit event listner to a form that prevent the default submission and logs the form data
const submitBtn=document.getElementById("submitBtn")
submitBtn.addEventListener("click",(e)=>{
	console.log("button clicked");
	e.preventDefault();
})
// Task 8:Add a change event listner to a select dropdown that displays the selected value in a paragraph
const selectElement = document.getElementById('options');
const paragraphElement = document.getElementById('selected-value');

// Add change event listener to the select element
selectElement.addEventListener('change', function(event) {
	// Get the selected option value
	const selectedValue = event.target.value;

	// Display the selected value in the paragraph
	paragraphElement.textContent = `Selected value: ${selectedValue}`;
});
// Activity 5: Event Delegation
// Task 9: Add click event listner to a list that logs the text content of the clicked list item using event delegation
const listElement = document.getElementById('list');

// Add click event listener to the list element
listElement.addEventListener('click', function(event) {
	// Check if the clicked element is a list item
	if (event.target && event.target.nodeName === 'LI') {
		// Log the text content of the clicked list item
		console.log('Clicked item:', event.target.textContent);
	}
});
// Task 10:Add an event listener to a parent element that listener for events from dynamically added child elements
const dynaminList = document.getElementById('dynamic-list');
const addButton = document.getElementById('add-item-button');

// Function to add a new list item
function addItem() {
	const newItem = document.createElement('li');
	newItem.textContent = `Item ${dynaminList.children.length + 1}`;
	dynaminList.appendChild(newItem);
}

// Add click event listener to the button to add new items
addButton.addEventListener('click', addItem);

// Add click event listener to the parent element (ul) using event delegation
dynaminList.addEventListener('click', function(event) {
	// Check if the clicked element is a list item
	if (event.target && event.target.nodeName === 'LI') {
		// Log the text content of the clicked list item
		console.log('Clicked item:', event.target.textContent);
	}
});