const container = document.querySelector("#container");
const text = "Button clicked!";

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!"
container.appendChild(redParagraph)

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3!"
container.appendChild(blueH3)

const div = document.createElement("div")

const h1 = document.createElement("h1")
h1.textContent = "I'm in a div"

const p = document.createElement("p")
p.textContent = "ME TOO"

div.appendChild(h1)
div.appendChild(p)
container.appendChild(div)