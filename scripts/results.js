
const progressBars = document.getElementsByClassName("progress-fill");
const progressBarsText = document.getElementsByClassName("progress-text");

// change progressbar' fill and text
function changeProgressBars(progressBarNo, percent) {
    progressBars[progressBarNo].style.width = `${percent}%`;
    progressBarsText[progressBarNo].textContent = `${percent}%`;
}

//example use case
changeProgressBars(0, 100);

bg = document.querySelector(".bg");
//para mapalitan yung kulay ng background image:
//options: green, yellow, red
bg.classList.add("green")
bg.classList.add("yellow")
bg.classList.add("red")