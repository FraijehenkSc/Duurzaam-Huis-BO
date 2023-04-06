const sunRise = document.getElementById("js--sunrise");
const sunSet = document.getElementById("js--sunset");
const timeZone = document.getElementById("js--timeZone");

let sun = fetch("https://api.sunrisesunset.io/json?lat=52.37403&lng=4.88969").then(
    function(response){
        return response.json();
    }).then(function(realData1){
        let sunrise = realData1.results.sunrise;
        let sunset = realData1.results.sunset;
        sunRise.innerText = "Zonsopgang: " + sunrise;
        sunSet.innerText = "Zonsondergang: " + sunset;
        timeZone.innerText = realData1.results.timezone;
    }
);


const date = new Date();


const timeElapsed = Date.now();
const today = new Date(timeElapsed);


let currentDate = new Date();
const time = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
});

const clock = document.getElementById("js--clock");


clock.innerHTML = time;
console.log(time);
today.toDateString() 

const dateT = new Date();

const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

console.log(dateT.toLocaleString('en-IN', options));

const dateSection = document.getElementById("js--date");

dateSection.innerHTML = dateT.toLocaleString('en-IN', options);
