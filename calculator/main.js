let first_number = "";
let second_number = "";
let operation = "";
let input = "";
const operationDisplay = document.querySelector("#operation")
const resultLabel = document.querySelector("#result")

function operate(first_number, second_number, operation){
    if (operation === "+"){
        return first_number + second_number;
    } else if (operation === "-"){
        return first_number - second_number;
    } else if (operation === "/" && second_number != 0){
        return first_number / second_number;
    } else if (operation === "*"){
        return first_number * second_number;
    } return 0
}

function buttonClicked(button){
    const char = button.textContent;
    
    if (!isNaN(char)){
        if (operation){
            second_number += String(char);
        } else {
            first_number += String(char);
        }
    } else if (char === "="){
        if (first_number && second_number && operation) {
            const result = operate(first_number, second_number, operation);
            resultLabel.textContent = result;
            first_number = result;
            second_number = "";
            operation = "";
        }

    } else {
        if (second_number && second_number && operation){
            first_number = parseFloat(first_number);
            second_number = parseFloat(second_number);
            console.log(first_number, second_number, operation);

            first_number = operate(first_number, second_number, operation);
            second_number = "";
            resultLabel.textContent = first_number;
        }
        operation = char;
    }
    operationDisplay.textContent = first_number + operation + second_number;
}
