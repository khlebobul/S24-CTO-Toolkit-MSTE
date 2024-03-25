## Step-by-Step Guide to Creating a Weather Display Website with OpenWeatherMap API

### Step 1: Obtain API Key from OpenWeatherMap

1. Go to the official OpenWeatherMap website (https://openweathermap.org/) and create an account if you haven't already.
2. Upon logging in, navigate to the "API Keys" page and obtain your unique API key.

### Step 2: Project Setup

1. Create a new folder for your project on your computer.
2. Within this folder, create files named index.html, style.css, and script.js.

### Step 3: Writing HTML Markup

1. Open the index.html file in your text editor.
2. Add the basic HTML markup, including elements for displaying weather information such as blocks for temperature, weather conditions, etc.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="weather-container">
        <h1>Weather in City:</h1>
        <div class="weather-info">
            <p>Temperature: <span id="temperature"></span></p>
            <p>Weather Conditions: <span id="conditions"></span></p>
            <!-- Other weather information -->
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Step 4: Writing CSS Styles

1. Open the style.css file.
2. Write styles for elements to make the page visually appealing and user-friendly.

```
body {
    font-family: Arial, sans-serif;
}

.weather-container {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
}

.weather-info {
    margin-top: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 10px;
}

/* Additional styles */
```

### Step 5: Writing JavaScript Code
1. Open the script.js file.
2. Use JavaScript to fetch data from the OpenWeatherMap API with your API key and retrieve weather data.

```
const apiKey = 'YOUR_API_KEY';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=' + apiKey;

// Function to fetch weather data
async function getWeather(city) {
    const response = await fetch(apiUrl.replace('CityName', city), { mode: 'cors' });
    const data = await response.json();
    return data;
}

// Function to update weather display on the page
function updateWeatherDisplay(weatherData) {
    document.getElementById('temperature').textContent = weatherData.main.temp + '°C';
    document.getElementById('conditions').textContent = weatherData.weather[0].description;
    // Other weather data
}

// Event handler for page load
window.onload = function() {
    const city = 'CityName'; // Replace 'CityName' with the city for which you want to get weather
    getWeather(city)
        .then(data => {
            updateWeatherDisplay(data);
        })
        .catch(error => {
            console.error('Failed to fetch weather data:', error);
        });
};
```

Replace 'YOUR_API_KEY' with your OpenWeatherMap API key and 'CityName' with the name of the city for which you want to get weather data.

### Step 6: Running the Project
1. Open the index.html file in your browser.
2. You should see weather information for the specified city.


This is a basic guide. You can extend the project by adding other features such as toggling temperature units, images, etc.