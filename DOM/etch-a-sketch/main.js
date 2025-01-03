const grid = document.querySelector(".grid");
const colorPicker = document.querySelector(".color-picker");
const colorCircle = document.querySelector(".color-circle");
const squaresInput = document.querySelector(".squares-input");
const squaresInputLabel = document.querySelector(".squares-input-label");
const toggleButton = document.querySelector(".toggle-button");
const rainbowButton = document.querySelector(".rainbow-button");
const eraserButton = document.querySelector(".eraser-button");
const pickColorButton = document.querySelector(".pick-color-button")
colorCircle.style.backgroundColor = "black";

let squaresBySide = 16;
const screenSize = 40*16;
let squareSide = screenSize/squaresBySide;

let isMouseDown = false;
let gridVisible = false;
let rainbow = false;
let eraser = false;
let pickColor = false;

function toggleGrid(){
    const squares = document.querySelectorAll(".square");
    if (gridVisible) {
        squares.forEach(square => square.style.outline = "none");
        gridVisible = false;
        toggleButton.classList.remove("toggled")
    } else {
        let outlineSize = squareSide/15;
        if (outlineSize > 5){
            outlineSize = 5
        }
        squares.forEach(square => square.style.outline = outlineSize + "px solid black");
        gridVisible = true;
        toggleButton.classList.add("toggled")

    }
}

function toggleRainbow(){
    rainbow = !rainbow;

    if (rainbow) {
        rainbowButton.classList.add("toggled")
        if (eraser) {
            eraser = false;
            eraserButton.classList.remove("toggled")
        } else if (pickColor) {
            pickColor = false;
            pickColorButton.classList.remove("toggled")
        }
    } else {
        rainbowButton.classList.remove("toggled")
    }
}

function toggleEraser(){
    eraser = !eraser;

    if (eraser) {
        eraserButton.classList.add("toggled")
        if (rainbow){
            rainbow = false;
            rainbowButton.classList.remove("toggled")
        } else if (pickColor) {
            pickColor = false;
            pickColorButton.classList.remove("toggled")
        }
    } else {
        eraserButton.classList.remove("toggled")
    }
}

function togglePickColor(){
    pickColor = !pickColor;

    if (pickColor) {
        pickColorButton.classList.add("toggled")
        if (rainbow){
            rainbow = false;
            rainbowButton.classList.remove("toggled")
        } else if (eraser) {
            eraser = false;
            eraserButton.classList.remove("toggled")
        }
    } else {
        pickColorButton.classList.remove("toggled")
    }
}

function getRandomRGB(){
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function paint(event){
    if (rainbow) {
        event.target.style.backgroundColor = getRandomRGB()
    } else if (eraser) {
        event.target.style.backgroundColor = "white";
    } else if (pickColor) {
        colorCircle.style.backgroundColor = event.target.style.backgroundColor;
    } else {
        event.target.style.backgroundColor = colorCircle.style.backgroundColor;
    }
}


function changeSquareColor(event){
    if (isMouseDown){
        event.preventDefault();
        paint(event)
    }
}

function clearGrid(){
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => square.style.backgroundColor = "white");
}

function createGrid(){
    const squares = document.querySelectorAll(".square")
    if (squares){
        squares.forEach(square => grid.removeChild(square));
    }
    squaresBySide = squaresInput.value;
    squareSide = screenSize/squaresBySide;

    squaresInputLabel.textContent = squaresBySide + " x " + squaresBySide


    for (let i = 0; i < squaresBySide; i++) {
        for (let j = 0; j < squaresBySide; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mousemove", changeSquareColor);
            
            if (gridVisible){
                let borderSize = squareSide/15;
                if (borderSize > 5){
                    borderSize = 5;
                }
                square.style.outline = borderSize + "px solid black";
            }

            square.style.width = squareSide+"px";
            square.style.height = squareSide+"px";

            grid.appendChild(square);
        }
    }
}

document.addEventListener("mouseup", () => (isMouseDown = false));
grid.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isMouseDown = true;
    })
grid.addEventListener("click", (e) => paint(e))

colorCircle.addEventListener("click", () => (colorPicker.click()));
colorPicker.addEventListener("input", () => colorCircle.style.backgroundColor = colorPicker.value);
squaresInput.addEventListener("input", createGrid)

createGrid()

