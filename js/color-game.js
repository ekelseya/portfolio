let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let hexColor = hexString();
let colorSpan = document.getElementById("color-span");
let messageDisplay = document.querySelector("#game-message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode")

init();

function init() {
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
            reset()
        });
    }

    resetButton.addEventListener("click", function () {
        reset();
    })

    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function () {
            let clickedColor = this.style.backgroundColor;

            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#16161D";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }

    colorSpan.textContent = hexColor;
}

function colorToHex(rgbColor) {
    let hex = rgbColor.toString(16);
    if(hex.length < 2) {
        hex = "0" + hex;
    }
    return hex;
}

function hexString() {
    let color = pickedColor.replace("rgb(", "");
    color = color.replace(")", "");
    let rgbArray = color.split(", ");
    return "#" + colorToHex(parseInt(rgbArray[0])) +
                 colorToHex(parseInt(rgbArray[1])) +
                 colorToHex(parseInt(rgbArray[2]));
}

function reset() {
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    hexColor = hexString();
    colorSpan.textContent = hexColor;
    resetButton.textContent = "Reset Colors";
    messageDisplay.textContent = "";
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    let arr = [];
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}