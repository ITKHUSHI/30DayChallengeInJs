// Day 20 : LocalStorage and SessionStorage 

// Tasks/Activities :
// Activity 1: Understanding LocalStorage
// Task 1: write a script to save a string value to localStorage and retrieve it.Log the retrieved value.
  localStorage.setItem("myname","khushi");
 const getName=localStorage.getItem("myname");
 console.log(getName);
// Task 2: Write a script to save an object to localStorage by converting it to a json string . Retrieve and parse the object , then log it.
   sessionStorage.setItem('kiska','mera or kay');
// Activity 2: Using LocalStorage
// Task 3: Create a simple form that saves user input (e.g, name and email ) to lacalStorage when submitted . Retrieve and display the saved data on page load
// Task 4: write a script to remove an item from localStorage. Log the localStorage content before and after removal.

// Activity 3: understanding SessionStorage
// Task 5: write a script to save a string value to sessionStorage and retrieve it .Log the retrieved value
// Task 6: Write a script to save an object to sessionStorage by converting it to JSON string . Retrieve and parse the object then log it.

// Activity 4: Using SessionStorage
// Task 7: Create a simple form that saves user input(e.g, name and email) to sessionStroage when submitted retrieve and display the saved data on page load.
// Task 8: write a script to remove an item from sessionStorage. Log the sessionStorage content before and after removal

// Activity 5: Comparing LocalStorage and SessionStorage
// Task 9: write a function that accepts a key and saves the value to both localStorage and sessionStorage . Retrieve and log the values from both storage mechanisms.
// Task 10 : write a function that clears all data from both localStorage and sessionStorage . Verify that both storages are empty