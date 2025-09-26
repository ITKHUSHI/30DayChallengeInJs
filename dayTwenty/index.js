// Day 20 : LocalStorage and SessionStorage 

// Tasks/Activities :
// Activity 1: Understanding LocalStorage
// Task 1: write a script to save a string value to localStorage and retrieve it.Log the retrieved value.
  localStorage.setItem("myname","khushi");
 const getName=localStorage.getItem("myname");
 console.log(getName);
// Task 2: Write a script to save an object to localStorage by converting it to a json string . Retrieve and parse the object , then log it.
const person = {
   name: "John Doe",
   age: 30,
   occupation: "Software Engineer"
 };
 localStorage.setItem("person", JSON.stringify(person));
  const storedPerson = JSON.parse(localStorage.getItem("person"));
 
 // Log the retrieved object
 console.log(storedPerson);

// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g, name and email ) to lacalStorage when submitted . Retrieve and display the saved data on page load
const saveBtn=document.getElementById('save-btn');
saveBtn.addEventListener('click',(e)=>{
   const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;

   e.preventDefault();
   const user={
      userName:name,
      userEmail:email
   }
   const saveUser=localStorage.setItem("User",JSON.stringify(user));
   const getUser=JSON.parse(localStorage.getItem("User"));
   console.log(getUser);
   const showDetails=document.getElementById('show-details');
   const p=document.createElement('p');
   p.textContent=`User name is ${getUser.userName} & email id is ${getUser.userEmail}` 
   showDetails.appendChild(p);
// Task 4: write a script to remove an item from localStorage. Log the localStorage content before and after removal.
  console.log("bafore removal",localStorage)
   localStorage.removeItem("User");
   console.log( "after removal ",localStorage); // user deleted successfully 
})

// Activity 3: understanding SessionStorage
// Task 5: write a script to save a string value to sessionStorage and retrieve it .Log the retrieved value

sessionStorage.setItem("message", "Hello, World!");
const retrievedMessage = sessionStorage.getItem("message");
console.log("Retrieved message from sessionStorage:");
console.log(retrievedMessage);

// Task 6: Write a script to save an object to sessionStorage by converting it to JSON string . Retrieve and parse the object then log it.
//  Taking a refrence of Peson object 
  sessionStorage.setItem("person", JSON.stringify(person));
  const jsonString = sessionStorage.getItem("person");
  const retrievedPerson = JSON.parse(jsonString);
  console.log("Retrieved person object from sessionStorage:");
 console.log(retrievedPerson);


// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input(e.g, name and email) to sessionStroage when submitted retrieve and display the saved data on page load.
const sessionStorageBtn=document.getElementById('session-sotrage')
sessionStorageBtn.addEventListener('click',(e)=>{
   const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;

   e.preventDefault();
   const user={
      userName:name,
      userEmail:email
   }
   sessionStorage.setItem("User",JSON.stringify(user));
   const getUser=JSON.parse(sessionStorage.getItem("User"));
   console.log(getUser);
   const showDetails=document.getElementById('show-details');
   const p=document.createElement('p');
   p.textContent=`User name is ${getUser.userName} & email id is ${getUser.userEmail}` 
   showDetails.appendChild(p);
// Task 8: write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal

   console.log("bafore removal",sessionStorage)
   sessionStorage.removeItem("User");
   console.log( "after removal ",sessionStorage); // user deleted successfully 
})

// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: write a function that accepts a key and saves the value to both localStorage and sessionStorage . Retrieve and log the values from both storage mechanisms.
function saveToBothStorage(key, value) {
   // Save the value to localStorage
   localStorage.setItem(key, value);
 
   // Save the value to sessionStorage
   sessionStorage.setItem(key, value);
 }
 
 function retrieveFromBothStorage(key) {
   // Retrieve the value from localStorage
   const localStorageValue = localStorage.getItem(key);
 
   // Retrieve the value from sessionStorage
   const sessionStorageValue = sessionStorage.getItem(key);
 
   // Log the retrieved values
   console.log(`Retrieved value from localStorage: ${localStorageValue}`);
   console.log(`Retrieved value from sessionStorage: ${sessionStorageValue}`);
 }
 
 // Test the functions
 const key = "message";
 const value = "Hello, World!";
 saveToBothStorage(key, value);
 retrieveFromBothStorage(key);
// Task 10 : write a function that clears all data from both localStorage and sessionStorage . Verify that both storages are empty

function clearBothStorage() {
   // Clear all data from localStorage
   localStorage.clear();
 
   // Clear all data from sessionStorage
   sessionStorage.clear();
 
   // Verify that localStorage is empty
   const localStorageLength = localStorage.length;
   console.log(`LocalStorage length after clearing: ${localStorageLength}`);
 
   // Verify that sessionStorage is empty
   const sessionStorageLength = sessionStorage.length;
   console.log(`SessionStorage length after clearing: ${sessionStorageLength}`);
 }
 
 // Test the function
 clearBothStorage();