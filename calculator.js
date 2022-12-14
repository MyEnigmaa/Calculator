
//Variables
const numbers = Array.from(document.getElementsByClassName("numbers"));
const input = document.getElementById('inputWindow');
const arithmeticButtons = Array.from(document.getElementsByClassName("arithmetic"));
const solutionDisplay = document.getElementById("solution");
const clearButton = document.getElementById("clear");
const commaButton = document.getElementById("comma");
const equalButton = document.getElementById("equalButton");
const operatorDisplayed = document.getElementById("operator");
let commaSet = false;
let inputString = "";
let numberOne = 0;
let operator = "";
let solution = 0;
let operatorClicked = false;
let equal = false;

//Event handlers

document.addEventListener("keydown", (e) =>{ //Keyboard input
    if(e.code.includes("Digit" ) && !e.shiftKey){
        inputString += e.key;
        input.textContent = inputString;
    }
    if(e.key == "." || e.key == ",") writingComma();

    if(e.key == "*" || e.key == "-" || e.key == "+" || e.key == "/" && e.shiftKey) arithClicked(e.key);
    
    if(e.key == "Enter")termComplete();
    }

);

numbers.forEach(number => {
    number.addEventListener("click", addingToNumber);
})

arithmeticButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        arithClicked(e.target.id);
    });
})

clearButton.addEventListener("click", () => {
    numberOne = 0;
    inputString = "";
    input.textContent = 0;
    solutionDisplay.textContent = "";
    operatorDisplayed.textContent = "";
    operatorClicked = false;
    commaSet = false;
})

commaButton.addEventListener("click", () => {
    writingComma();
});

equalButton.addEventListener("click", ()=>{ //Event for handling "=" Button
    termComplete();
})


//Functions

function termComplete(){ //If both numbers and the operator are set
    if(!operatorClicked || inputString.length==0) return; //Cancel Arguments

    solution = operate(numberOne, parseFloat(inputString), operator);
    solution = Math.round(solution*100) / 100;
    setDisplay(0, solution);
    inputString = "";
    equal = true;
    commaSet = false;
    numberOne = solution;
    operatorDisplayed.textContent = "";
    operatorClicked = false;
}

function writingComma(){
    if(!commaSet) inputString += ".";
    commaSet = true;
    input.textContent = inputString;
}

function setDisplay(mainOutput, secondOutput){ //set display
    input.textContent = mainOutput;
    solutionDisplay.textContent = secondOutput;
}



function arithClicked(e){
    operator = e;
    operatorDisplayed.textContent = operator;
    operatorClicked = true;

    if(equal || inputString.length==0) return; //Cancel Argument
    commaSet = false;
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
        case '*': return multiply(numberOne, numberTwo);
        case '/': return divide(numberOne, numberTwo);
    }
}





window.onload = () => {
}