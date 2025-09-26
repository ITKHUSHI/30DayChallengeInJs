// Day 25 : Project 2-Movie Search App
// Task/activities:


// Activity 1: Setting Up the Project
// Task 1: Initializing a new project directory and set up the basic HTML structure for the movie search app
// Task 2: Add a basic CSS file to style the movie search app, including a container for displaying movie search results

// Activity 2: Fetching Movie Data
// Task 3: Use the fetch API to get movie data from a public move API(e.g, OMDB API or the Movie Database API) Log the response data to the console
async function  fetchMovieData(InputValue=""){
	const URI=`http://www.omdbapi.com/?apikey=178de2c2&s=${InputValue}&page=1`;
	// http://www.omdbapi.com/?t=bataman&page=2&apikey=178de2c2
	// http://www.omdbapi.com/?t=Game =1&Episode=1&apikey=178de2c2

	await fetch(`${URI}`)
	.then((response)=>response.json())
	.then((data)=>{
		const movies=data.Search;
		console.log(movies)
	// Task 4: Parse the movie data and display the movie title , poster ,and release year on the web page
	movies.map((data)=>{
		console.log(data.Title);
	})
		})
	.catch((error)=>console.log("error while fething data",error));
	
 }
fetchMovieData("batman")
// Activity 3: Adding Search Functionality
// Task 5: Add an input field and a search button to the HTML structure style the input and button using CSS
const searchInput=document.getElementById('searchInput');
// console.log(searchInput.value)
const searchButton=document.getElementById('searchButton')
// Task 6: Write a function to fetch and display movie data based on a search query entered in the input field. Log any errors to the console
function displayMovieData(){
	const InputValue=(searchInput.value).trim();
		searchButton.addEventListener('click',function(e){
			e.preventDefault();
		const response = fetchMovieData(InputValue);
		console.log("response",response);

		})
	    
}
displayMovieData()
// Activity 4: Displaying Detailed Movie Information
// Task 7: Modify the search result to include a "More Info " button for each movie when clicked, fetch and display additoinal details about the movie , such as the plot director and actors
// Task 8: Create a modal or a new section on the page to display the detailed movie information

// Activity 5: Enhancing The UI
// Task 9: Add CSS style to improve the layout and design of the search results and detailed movie information
// Task 10: Add CSS animations or tranitions to make to Movie search app movie search app more interactive and visually appealing