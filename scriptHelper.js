// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === "" || testInput === null ||testInput === 0){
        return "empty"
    } else if ((!isNaN(number(testInput)))) {
        return 'Is a Number'
    }else{
        return 'Not a Number'
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementByld('pilotStatus')
   let copilotStatus = document.getElementByld('copilottatus')
   let fuelStatus = document.getElementByld('fuelStatus')
   let cargoStatus = document.getElementByld('cargoStatus')
   let launchStatus = document.getElementByld('launchStatus')
   
   if (validateInput(pilot) === 'empty' || validateInput(copilot) === 'empty' 
    || validateInput(fuelLevel) === 'empty' || validateInput(cargoLevel) === 'empty')
    {
        alert('All Fields Required')
   } 
else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'){
    alert('Please Enter a Name')
} else if (validateInput(fuelLevel) === 'empty' || validateInput(cargoLevel) === 'empty'){
    alert('Please Enter a Number')
}
 
else{
    pilotStatus.innerHTML = `pilot $(pilot) is ready`
    copilotStatus.innerHTML = `copilot $(copilot) is ready`
    list.style.visibility = 'hidden';
}

if  (number(fuelLevel)<10000) {
    fuelLevel.innerHTML = "Not Enough Fuel For the Journey"
    list.style.visibility = 'visibile';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
    launchStatus.style.color = 'red'
 } 
    else if (number(cargoLevel)>10000) {
    cargoLevel.innerHTML = "too much mass for the shuttle to take off"
    list.style.visibility = 'visibile';
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch'
    launchStatus.style.color = 'red'
}
   else if (number(cargoLevel) < 10000 && (number(fuelLevel) > 10000)) {
    list.style.visibility = 'visibile';
    launchStatus.innerHTML = 'Shuttle is ready for launch'
    launchStatus.style.color = 'green'
   }
}

async function myFetch("https://handlers.education.launchcode.org/static/planets.json");then(function(response) {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
