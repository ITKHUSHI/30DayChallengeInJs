// Day -9
// Task / Activities

// Actitvity 1: Selecting and Manipulating Elements
//  Task 1: Select an HTML element by its ID and change its text content
    const firstDiv=document.getElementById('first_div');
	firstDiv.textContent="change the text using js"
//  Task 2: Select an HTML element by its class and change its background color
 const divBg=document.querySelector('.bg');
   divBg.style.backgroundColor='yellow'

//  Activity 2: Creating and Appending Elements
//  Task 3: Create a new div element with some text content and append it to the body
  const createADiv= document.createElement('div');
	 createADiv.textContent="creating a div using js";
	 document.body.appendChild(createADiv);
//  Task 4: Create a new  li element and add it to an existing ul list
   const ul=document.getElementById('ul-list');
   const li=document.createElement('li');
   li.textContent="list added"
   ul.appendChild(li);

// Activity 3: Removing Elements
// Task 5: Select HTML element and remove it from the DOM.
const removeDiv=document.getElementById('remove')
removeDiv.remove();
// Task 6: Remove the last child of a specific HTML element
 const parent=document.getElementById('parent');
 const lastChild=document.getElementById('last-child')
 parent.removeChild(lastChild);
// Activity 4: Modifying Attribuites and classes
// Task 7: Select an HTML element and change one of iys attributes(e.g. , src of an img tag).
const image=document.getElementById('image1');
image.setAttribute( 'alt',"alt text change");

// Task 8: Add and remove a CSS class to from an HTML element
         // Get the paragraph element and the button element
         const textElement = document.getElementById('text');
         const toggleClassButton = document.getElementById('toggle-class-button');
         // Function to toggle the highlight class on the paragraph element
         function toggleClass() {
             textElement.classList.toggle('highlight');
         }
         // Add click event listener to the button to toggle the class
         toggleClassButton.addEventListener('click', toggleClass);
// Activity 5: Event Handling
//  Task 9: Add click event listner to a button that change the text content of a paragraph
const btn = document.getElementById('change-text');
const secondChild=document.getElementById('second-child');
   btn.addEventListener('click',function(){
      console.log("text changed")
      secondChild.innerHTML="change the text successfully ...!"

   })
//  Task 10: Add a mouseover event listner to an element that change its border color.
        // Get the box element
        const boxElement = document.getElementById('box');

        // Add mouseover event listener to the box element
        boxElement.addEventListener('mouseover', function() {
            boxElement.style.borderColor = 'blue';
        });

        // Add mouseout event listener to revert the border color when not hovering
        boxElement.addEventListener('mouseout', function() {
            boxElement.style.borderColor = 'black';
        });
