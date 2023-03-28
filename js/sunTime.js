const sunRise = document.getElementById("js--sunrise")
const sunSet = document.getElementById("js--sunset")

let sun = fetch("https://api.sunrisesunset.io/json?lat=52.37403&lng=4.88969").then(
    function(response){
        return response.json();
    }).then(function(realData1){
        sunRise.innerText = "Zonsopgang: " + realData1.results.sunrise;
        sunSet.innerText = "Zonsondergang: " + realData1.results.sunset;
    }
);