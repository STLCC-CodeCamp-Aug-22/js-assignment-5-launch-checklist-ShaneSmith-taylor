// Write your JavaScript code here!

const { myFetch, pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

let selectedPlanet = pickPlanet(listedPlanets);
 addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.imageUrl);
   })
   let list = doctument.getElementByld('faultyItems');
   list.style.visibility = 'hidden';
let form = doctument.querySelector("form")

form.addEventListener('submit', function(event){
event.preventDefault();

let pilotInput = doctument.querySelector("input[name=pilotName]");
let pilot = pilotInput.value;

let copilotInput = doctument.querySelector("input[name=copilotName]");
let copilot = copilotInput.value;

let fuelInput = doctument.querySelector("input[name=fuelLevel]");
let fuelLevel = Number(fuelInput.value);

let cargoInput = doctument.querySelector("input[name=cargoMass]");
let cargoLevel = Number(cargoInput.value);

formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);






});
});