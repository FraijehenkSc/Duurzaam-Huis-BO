const API_KEY = `9772b17f5282550ad2f9c9ea1e0db143`
const form = document.getElementById("js--searchForm")
const search = document.querySelector("#search")
const weather = document.getElementById("js--weather")
const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=$amsterdam&appid=${API_KEY}&units=metric`
    console.log(url2);
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    return showWeather(data)
}


const getWeatherA = async() => {
    const url2 = `https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=${API_KEY}&units=metric`
    console.log(url2);
    const responseA = await fetch(url2);
    const dataA = await responseA.json();
    console.log(url2);
    return showWeatherA(dataA);
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
        getWeatherA(search.value);
        event.preventDefault();
    }

)

const weatherA = document.getElementById("js--temperatureA")
const showWeatherA = (dataA) => {
    console.log(dataA);
    weatherA.innerText = dataA.main.temp + " ℃"
}

const test = function(){
    getWeatherA(search.value);
}   

test();
