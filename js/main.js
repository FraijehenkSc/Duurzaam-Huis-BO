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

const ctx = document.getElementById("js--chart--1")

const labels = [
    "Keuken",
    "Badkamer",
    "Tuin",
];

const data = {	 
     	labels: labels,
     	 
     	datasets:[
     	{
     	label: "Water verbruik",
     	data: [50,22,44],
     	backgroundColor: [
     	'#92C9BD',
     	'#0E8388',
     	'#2E4F4F',
     	 
     	 
     	],
     	}
     	]
     	}
     	 
     	const config = {
     	type:'doughnut',
     	data: data,
     	}
     	const config2 = {
     	type:'bar',
     	data: data,
     	}

const labels1 = [
    "Pc",
    "Tv",
    "Koelkast",
];

const data1 = {	 
     	labels: labels1,
     	 
     	datasets:[
     	{
     	label: "Elektra verbruik in kWh",
     	data: [8.708265,9.024655,7.592983],
     	backgroundColor: [
     	'#92C9BD',
     	'#0E8388',
     	'#2E4F4F',
     	 
     	 
     	],
     	}
     	]
     	}

        const config3 = {
     	type:'polarArea',
     	data: data1,
     	}

    
     	new Chart(document.getElementById("js--chart--1"),config);
     	new Chart(document.getElementById("js--chart--2"),config2);
        new Chart(document.getElementById("js--chart--3"),config3);
    











































        const labelsWater = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mei",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dec",
        ]
        const dataWater = {	 
             	labels: labelsWater,
             	 
             	datasets:[
             	{
             	label: "Water verbruik | Per maand in liters",
             	data: [32,23,44,32,23,44,32,23,44,32,23,44],
             	backgroundColor: [
             	'#92C9BD',
             	'#0E8388',
             	'#2E4F4F',
                '#92C9BD',
             	'#0E8388',
             	'#2E4F4F',
                '#92C9BD',
             	'#0E8388',
             	'#2E4F4F',
                '#92C9BD',
             	'#0E8388',
             	'#2E4F4F',
             	 
             	 
             	],
             	}
             	]
             	}
        
                const configWater = {
             	type:'bar',
             	data: dataWater,
             	}

            new Chart(document.getElementById("js--chart--4"),configWater);