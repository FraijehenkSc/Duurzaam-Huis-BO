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


function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
  
    if(hh === 0){
        hh = 24;
    }
    if(hh > 24){
        hh = hh - 24;
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm;
     let seconds = ss;
  
    document.getElementById("clock").innerText = time;
    document.getElementById("seconds").innerText = seconds;
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  currentTime();