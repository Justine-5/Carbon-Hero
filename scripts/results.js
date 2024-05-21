const daily = localStorage.getItem('daily');
const monthly = localStorage.getItem('monthly');
const yearly = localStorage.getItem('yearly');

const storedElectricityFootprint = localStorage.getItem('electricityFootprint');
const storedWaterFootprint = localStorage.getItem('waterFootprint');
const storedMotorbikeFootprint = localStorage.getItem('motorbikeFootprint');
const storedPublicTransportFootprint = localStorage.getItem('publicTransportFootprint');
const storedCarFootprint = localStorage.getItem('carFootprint');
const storedWasteFootprint = localStorage.getItem('wasteFootprint');
const storedDietFootprint = localStorage.getItem('dietFootprint');
const storedGasFootprint = localStorage.getItem('gasFootprint');

const dailyTotal = document.getElementById("dailyTotal");
dailyTotal.textContent = daily + " kg CO2";

const monthlyTotal = document.getElementById("monthlyTotal");
monthlyTotal.textContent = monthly + " kg CO2";

const yearlyTotal = document.getElementById("yearlyTotal");
yearlyTotal.textContent = yearly + " kg CO2";

const progressBars = document.getElementsByClassName("progress-fill");
const progressBarsText = document.getElementsByClassName("progress-text");

// change progressbar's fill and text
function changeProgressBars(progressBarNo, percent) {
    progressBars[progressBarNo].style.width = `${percent}%`;
    progressBarsText[progressBarNo].textContent = `${percent}%`;
}

changeProgressBars(0, ((storedElectricityFootprint / daily) *100).toFixed(2));
changeProgressBars(1, ((storedWaterFootprint / daily)*100).toFixed(2));
changeProgressBars(2, ((storedMotorbikeFootprint / daily)*100).toFixed(2));
changeProgressBars(3, ((storedPublicTransportFootprint / daily)*100).toFixed(2));
changeProgressBars(4, ((storedCarFootprint / daily)*100).toFixed(2));
changeProgressBars(5, ((storedWasteFootprint / daily)*100).toFixed(2));
changeProgressBars(6, ((storedDietFootprint / daily)*100).toFixed(2));
changeProgressBars(7, ((storedGasFootprint / daily)*100).toFixed(2));

bg = document.querySelector(".bg");

if (daily <= 5){
    bg.classList.add("green")
}
else if (daily > 5 && daily < 15){
    bg.classList.add("yellow")

    const yelloww = document.getElementById("herodaw");
    yelloww.textContent = "You are Balanced & Carbon-Conscious";

    const yellowww = document.getElementById("texttt");
    yellowww.textContent = "You might engage in some environmentally conscious practices but also exhibit behaviors or make choices that contribute to carbon emissions.";
}
else {
    bg.classList.add("red")

    const redd = document.getElementById("herodaw");
    redd.innerHTML = "You are a<br>Carbon Villain:<br>The Dark Emitter";

    const reddd = document.getElementById("texttt");
    reddd.textContent = "While you may sporadically consider eco-friendly practices, your predominant actions tilt towards behaviors that substantially escalate carbon emissions, casting a shadow over environmental sustainability.";
}