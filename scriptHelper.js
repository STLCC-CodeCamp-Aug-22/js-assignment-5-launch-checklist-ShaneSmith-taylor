// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
  let missionTarget = document.getElementByld('missionTarget');
missionTarget.innerHTML = `
   
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
   
}

function validateInput(testInput) {
    let numInput = Number(testInput);
    if(testInput === "" ){
        return "Empty";
    } else if (isNaN(numInput)) {
        return 'Not a Number';
    }else{
        return 'Is a Number';
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementByld('pilotStatus');
   let copilotStatus = document.getElementByld('copilottatus');
   let fuelStatus = document.getElementByld('fuelStatus');
   let cargoStatus = document.getElementByld('cargoStatus');
   let launchStatus = document.getElementByld('launchStatus');
   
   if (validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' 
    || validateInput(fuelLevel) === 'Empty' || validateInput(cargoLevel) === 'Empty')
    {
        alert('All Fields Required')
   } 
else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number'){
    alert('Please Enter a Name')
} else if (validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoLevel) === 'Not a Number'){
    alert('Please Enter a Number')
}
 
else{
    pilotStatus.innerHTML = `pilot $(pilot) is ready`;
    copilotStatus.innerHTML = `copilot $(copilot) is ready`;
    list.style.visibility = 'visible';
}

if  (fuelLevel < 10000 && cargoLevel <= 10000){
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = '#C7254E';
 } 
    else if (fuelLevel >= 10000 && cargoLevel > 10000){
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = '#C7254E';
}
else if(fuelLevel < 10000 && cargoLevel > 10000){
    fuelStatus.innerHTML = "Fuel level too low for launch";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch";
    launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
    launchStatus.style.color = '#C7254E';
}   
else{
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";
    launchStatus.innerHTML = 'Shuttle is ready for launch';
    launchStatus.style.color = '#419F6A';
   }
}

async function myFetch(){
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        if (response.status >= 400) {
            throw new Error ("Bad response");
        }
        else {
            return response.json();
        }
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
