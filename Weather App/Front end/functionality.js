const WEATHER_API_KEY = "400be3410cfc465789f60313250801";
const IMG_API_KEY = "QLI0KQmpsRwdlpc_1lWnxL2MlkmSk5yOU4EMAoa1RB4";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

function returnCityImage(query) {
    const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=QLI0KQmpsRwdlpc_1lWnxL2MlkmSk5yOU4EMAoa1RB4`;
  
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results && data.results.length > 0) {
          const img = document.createElement('img');
          img.src = data.results[0].urls.regular; // Display the most relevant image
          img.alt = data.results[0].alt_description || 'City image';
          img.className = 'thumbnail'; // Applying the CSS class
          img.style.width = '100%';
          return img; // Now this `img` is returned as part of the `Promise`
        } else {
          console.warn('No images found.');
          return null;
        }
      })
      .catch((err) => {
        console.error('Error fetching image:', err);
        return null; // Return null in case of an error
      });
  }

  

  function returnCityData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data || !data.location) {
          main.innerHTML = '<p>City not found. Please try again.</p>';
          return;
        }
  

        const cityNameText = data.location.name;

        const city_name = document.createElement('h3');
        city_name.textContent = `City: ${data.location.name}`;
  
        const temperature = document.createElement('h3');
        temperature.textContent = `Temperature: ${data.current.temp_c}°C`;
  
        const rain_info = document.createElement('h3');
        rain_info.textContent = `Condition: ${data.current.condition.text}`;
  
        const humidity = document.createElement('h3');
        humidity.textContent = `Humidity: ${data.current.humidity}%`;
  
        const windspeed = document.createElement('h3');
        windspeed.textContent = `Wind Speed: ${data.current.wind_kph} km/h`;
  
         // Create a link to the weather reviews page
        const reviews = document.createElement('a');
        reviews.href = `weather.html?cityName=${encodeURIComponent(cityNameText)}`;
        reviews.textContent = 'Reviews';
        reviews.style.color = '#FC6600'; // Optional: style the link as desired
        
        const div_card = document.createElement('div');
        div_card.className = 'card'; // Add styling class
        
        div_card.appendChild(city_name);
        div_card.appendChild(temperature);
        div_card.appendChild(rain_info);
        div_card.appendChild(humidity);
        div_card.appendChild(windspeed);
        div_card.append(reviews);
        // Fetch and append the image
        returnCityImage(data.location.name).then((img) => {
          if (img) {
            div_card.appendChild(img); // Add the styled image
          }
  
          const div_column = document.createElement('div');
          div_column.className = 'column'; // Add column styling
          div_column.appendChild(div_card);
  
          main.appendChild(div_column);
        });
      })
      .catch((err) => {
        console.error("Error fetching weather data:", err);
        main.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
      });
  }
  

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = ''; // Clear previous results
  
    const searchItem = search.value.trim();
  
    if (searchItem) {
      const encodedCity = encodeURIComponent(searchItem);
      const url = `https://api.weatherapi.com/v1/current.json?key=400be3410cfc465789f60313250801&q=${encodedCity}`;
      console.log("API URL:", url); // Log the full URL
      returnCityData(url);
    } else {
      main.innerHTML = '<p>Please enter a city name.</p>';
    }
  });
  