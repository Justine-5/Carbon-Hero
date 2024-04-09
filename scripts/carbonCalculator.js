// Function to calculate carbon footprint from electricity
function calculateElectricityCarbonFootprint(numHouseholds, monthlyReading) {
    const kWhToCO2 = 0.5; // kg CO2 per kWh
    const dailyReading = monthlyReading / 30; // Assuming 30 days in a month
    return (dailyReading / numHouseholds) * kWhToCO2;
}

// Function to calculate carbon footprint from water usage
function calculateWaterCarbonFootprint(numHouseholds, monthlyReading) {
    const waterToCO2 = 3; // kg CO2 per cubic meter of water
    const dailyReading = monthlyReading / 30; // Assuming 30 days in a month
    return (dailyReading / numHouseholds) * waterToCO2;
}

// Function to calculate carbon footprint from motorbike
function calculateMotorbikeCarbonFootprint(distancePerDay) {
    const kmToCO2 = 1 / 3; // kg CO2 per km
    return distancePerDay * kmToCO2;
}

// Function to calculate carbon footprint from public transportation
function calculatePublicTransportCarbonFootprint(distancePerDay) {
    const kmToCO2 = 1 / 5; // kg CO2 per km
    return distancePerDay * kmToCO2;
}

// Function to calculate carbon footprint from car
function calculateCarCarbonFootprint(distancePerDay) {
    const kmToCO2 = 1; // kg CO2 per km
    return distancePerDay * kmToCO2;
}

// Function to calculate carbon footprint from waste
function calculateWasteCarbonFootprint(numHouseholds, trashAmountPerWeek) {
    const wasteToCO2 = 0.5; // kg CO2 per kg of waste
    const dailyWaste = trashAmountPerWeek / 7; //Converting weekly to daily
    return (dailyWaste / numHouseholds) * wasteToCO2;
}

// Function to calculate carbon footprint from diet
function calculateDietCarbonFootprint(meatConsumptionPerWeek) {
    const meatToCO2 = 15; // kg CO2 per kg of meat
    return (meatConsumptionPerWeek / 7) * meatToCO2; // Converting weekly to daily
}

function calculateGasCarbonFootprint(gasConsumptionPerWeek) {
    const gasToCO2 = 3; // kg CO2 per kg of gas
    return (gasConsumptionPerWeek / 7) * gasToCO2; // Converting weekly to daily
}

//Function to check if there is empty input
function isEmpty (numPerson, elecReading, h2oRead, motorDis, pubTransDis, carDis, basuraAmount, meatCons, gasgas) {
    var inputElements = document.getElementsByClassName('cards-input');
    for (var i = 0; i < inputElements.length; i++)
    {
        inputElements[i].classList.remove("error");
    }
    var result = true;
    if (isNaN(numPerson) || numPerson <= 0) {
        inputElements[0].classList.add("error");
        result =  false;
    }
    if (isNaN(elecReading)) {
        inputElements[1].classList.add("error");
        result = false;
    }
    if (isNaN(h2oRead)) {
        inputElements[2].classList.add("error");
        result = false;
    }
    if (isNaN(motorDis)) {
        inputElements[3].classList.add("error");
        result = false;
    }
    if (isNaN(pubTransDis)) {
        inputElements[4].classList.add("error");
        result = false;
    }
    if (isNaN(carDis)) {
        inputElements[5].classList.add("error");
        result = false;
    }
    if (isNaN(basuraAmount)) {
        inputElements[6].classList.add("error");
        result = false;
    }
    if (isNaN(meatCons)) {
        inputElements[7].classList.add("error");
        result = false;
    }
    if (isNaN(gasgas)) {
        inputElements[8].classList.add("error");
        result = false;
    }
    return result;
}

// Exporting functions to be used in other files if needed
// module.exports = {
//     calculateElectricityCarbonFootprint,
//     calculateWaterCarbonFootprint,
//     calculateMotorbikeCarbonFootprint,
//     calculatePublicTransportCarbonFootprint,
//     calculateCarCarbonFootprint,
//     calculateWasteCarbonFootprint,
//     calculateDietCarbonFootprint,
//     calculateGasCarbonFootprint,
//     isEmpty
// };
