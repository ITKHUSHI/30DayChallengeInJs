// Day 24 : project 1-Weather APP
// Tasks/Activities

// Activity 1: Setting Up the project
// Task 1: Initialize a new project directory and set up the basic HTML stucture for the weather app 
// Task 2: Add a basic Css file to style the weather app , including a container for displaying weather information 

// Activity 2: Fetching Weather Data
// Task 3: Use the fetch API to get current weather data from a public weather API(e.g, OpenWeatherMap).Log the response data to the console

const fecthingData=async()=>{
	const URI = "174f8b0dcd9967d064671311d711f063"
	try {
		const resposnse= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${URI}`);
		const data= await resposnse.json();
		// Task 4: Pasre the weather data and display the current temperature , weather condition , and city name on the web page
        	console.log(data);

		data.weather.map((data)=>{
			console.log(data.id)
			console.log(data.main)
			console.log(data.description)
			console.log(data.icon)
		})		
		console.log( "country",data.sys.country)
	} catch (error) {
		console.log("failed to fecth data from api",error);
	}
}
fecthingData()

// Activity 3: Adding Search Functionality
// Task 5:Add an input field and a seach button to the Html Structure style the input and button using css
// Task 6: Write a function to fetch and display weather data for a city entered in the search input field Log any errors to the console
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const weatherDataDiv = document.getElementById('weather-data');

searchButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const city = searchInput.value.trim();
  if (city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`);
      const data = await response.json();
      displayWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  } else {
    console.log('Please enter a city');
  }
});

const displayWeatherData = (data) => {
  const {
    name,
    main: { temp, humidity },
    weather: [{ description, icon }],
  } = data;

  const weatherHTML = `
    <h2>Weather in ${name}</h2>
    <p>Temperature: ${temp}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Conditions: ${description}</p>
    <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather Icon">
  `;

  weatherDataDiv.innerHTML = weatherHTML;
};

// Activity 4: Displaying a 5-Day Forecast
// Task 7: use the fetch API to get a 5-day weather forecast from public weather API log the response data to the console
// Task 9: Parse the forecast data and display the temperature and weather condition for each day in the forecast on the web page

// Activity 5: Enhancing UI
// Task 9: Add icon or image to represent diffrent weather conditions(e.g, sunny, rainy , cloudy) based on the weather data.
// Task 10: Add css animations or tranitions to make the weather app more interactive and visually
