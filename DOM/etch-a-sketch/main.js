const grid = document.querySelector("#grid")

const squaresBySide = 16

isMouseDown = false;

function changeSquareColor(event){
    if (isMouseDown){
        event.target.style.backgroundColor = "black";
    }
}

document.addEventListener("mousedown", () => (isMouseDown = true))
document.addEventListener("mouseup", () => (isMouseDown = false))

for (let i = 0; i < squaresBySide; i++) {
    for (let j = 0; j < squaresBySide; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mousemove", changeSquareColor);
        grid.appendChild(square);
    }
}

