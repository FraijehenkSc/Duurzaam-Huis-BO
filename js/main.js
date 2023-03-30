const API_KEY = `9772b17f5282550ad2f9c9ea1e0db143`
const form = document.getElementById("js--searchForm")
const search = document.querySelector("#search")
const weather = document.getElementById("js--weather")
const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    return showWeather(data)
}


const weatherImage = document.getElementById("js--weatherImage")
const cloud = document.getElementById("js--cloudy")
const temperature = document.getElementById("js--temperature")
const showWeather = (data) => {
    console.log(data)
    temperature.innerText = data.main.temp + " ℃"
    cloud.innerText = data.weather[0].main; 
    weatherImage.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}




form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value);
        event.preventDefault();
    }

)



