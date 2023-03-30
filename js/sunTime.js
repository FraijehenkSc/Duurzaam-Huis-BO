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
