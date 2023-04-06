const API_KEY = `9772b17f5282550ad2f9c9ea1e0db143`
const form = document.getElementById("js--searchForm")
const search = document.querySelector("#search")
const weather = document.getElementById("js--weather")
const getWeather = async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json();
    console.log(url);
    return showWeather(data)

     
}