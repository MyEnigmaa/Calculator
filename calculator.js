
//Variables
const numbers = Array.from(document.getElementsByClassName("numbers"));
const input = document.getElementById('inputWindow');
const arithmeticButtons = Array.from(document.getElementsByClassName("arithmetic"));
const solutionDisplay = document.getElementById("solution");
const clearButton = document.getElementById("clear");
const comma = document.getElementById("comma");
const equalButton = document.getElementById("equalButton");
let commaSet = false;
let inputString = "";
let numberOne = 0;
let operator = "";
let solution = 0;
let operatorClicked = false;
let equal = false;

//Event handlers

// document.addEventListener("keydown", (e) =>{
//     if(e.keyCode < 48 || e.keyCode > 57) return; //Not a number

//     addingToNumber(e.keyCode-48);
// })

numbers.forEach(number => {
    number.addEventListener("click", addingToNumber);
})

arithmeticButtons.forEach(button => {
    button.addEventListener("click", arithClicked)
})

clearButton.addEventListener("click", () => {
    numberOne = 0;
    inputString = "";
    input.textContent = 0;
    solutionDisplay.textContent = "";
    operatorClicked = false;
    commaSet = false;
})

comma.addEventListener("click", ()=>{
    if(!commaSet) inputString += ".";
    commaSet = true;
    input.textContent = inputString;
})


//Functions

function setDisplay(mainOutput, secondOutput){ //set display
    input.textContent = mainOutput;
    solutionDisplay.textContent = secondOutput;
}

equalButton.addEventListener("click", ()=>{ //Event for handling "=" Button
    if(!operatorClicked || inputString.length==0) return; //Cancel Arguments

    solution = operate(numberOne, parseFloat(inputString), operator);
    solution = Math.round(solution*100) / 100;
    setDisplay(0, solution);
    inputString = "";
    equal = true;
    commaSet = false;
    numberOne = solution;
})

function arithClicked(e){
    operator = e.target.id;

    if(operatorClicked || equal) return; //Cancel Arguments
    commaSet = false;
    operatorClicked = true;
    numberOne = parseFloat(inputString);
    inputString = "";
    setDisplay("0", numberOne);
}



function addingToNumber(e){ //Adding Input to String
    inputString += e.target.value;
    input.textContent = inputString;
}

// Arithmetic
function add(numberOne, numberTwo){ return numberOne + numberTwo;}
function subtract(numberOne, numberTwo){ return numberOne - numberTwo;}
function divide(numberOne, numberTwo){ return numberOne / numberTwo;}
function multiply(numberOne, numberTwo){ return numberOne * numberTwo;}


function operate (numberOne, numberTwo, operate){
    switch(operate){
        case '+': return add(numberOne, numberTwo);
        case '-': return subtract(numberOne, numberTwo); 
        case 'x': return multiply(numberOne, numberTwo);
        case '/': return divide(numberOne, numberTwo);
    }
}





window.onload = () => {
}