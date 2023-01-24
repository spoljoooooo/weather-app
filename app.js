const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.searchBtn');
const cityName = document.querySelector('.cityName');

const tempData = document.querySelector('.tempData');
const feelsData = document.querySelector('.feelsData');
const humidityData = document.querySelector('.humidityData');
const pressureData = document.querySelector('.pressureData');
const weatherData = document.querySelector('.weatherData');

async function getData(city) {
    try {
        let getDataWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=18e5d2774319869befa41da03c468899`, {mode: 'cors'})
        let toJSONWeather = await getDataWeather.json();
    
        cityName.textContent = toJSONWeather.name + ", " + toJSONWeather.sys.country;
    
        tempData.textContent = toJSONWeather.main.temp + ' °C';
        feelsData.textContent = toJSONWeather.main.feels_like + ' °C';
        humidityData.textContent = toJSONWeather.main.humidity +  '%';
        pressureData.textContent = toJSONWeather.main.pressure + ' Pa';
        weatherData.textContent = toJSONWeather.weather[0].description;
    
        return [toJSONWeather];
    } catch {
        alert('There is no date for this city. TRY AGAIN!');
    }
}

searchBtn.addEventListener('click', () => {
    let city = searchInput.value;
    getData(city);
})

getData('Osijek');