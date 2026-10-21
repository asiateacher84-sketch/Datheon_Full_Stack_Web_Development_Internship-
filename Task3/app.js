const apiKey = "89697092f923bf3685196bc61ef49011";
const searchBtn = document.getElementById("search-btn");
const weatherInfo = document.getElementById("weather-info");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const errorMessage = document.getElementById("error-message");
const cityInput = document.getElementById("city-input");
async function checkWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=89697092f923bf3685196bc61ef49011`;
    try
    {
        searchBtn.innerText = "Loading...";
        weatherInfo.classList.add("hidden");
         errorMessage.classList.add("hidden");
         const response= await fetch(url);
         if(!response.ok){
            throw new Error("City not found");
            
         }
         const data = await response.json();
         cityName.innerText = `${data.name},${data.sys.country}`;
         temperature.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
         description.innerText = data.weather[0].description;
         humidity.innerText = `Humidity: ${data.main.humidity}%`;
         weatherInfo.classList.remove("hidden");

         
    }
    catch (error){
        errorMessage.classList.remove("hidden");
    }
    finally {
        searchBtn.innerText ="Search";
    }
    
}
searchBtn.addEventListener("click", ()=> {
    const city = cityInput.value.trim();
    if (city !== "") {
        checkWeather(city);
        
    }
});
cityInput.addEventListener("keypress", (event)=> {
    if (event.key == "Enter") {
        const city = cityInput.value.trim();
        if (city !== "") {
            checkWeather(city);
            
        }
        
    }
});