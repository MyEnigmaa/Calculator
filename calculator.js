const numbers = Array.from(document.getElementsByClassName("numbers"));
const input = document.getElementById('outputWindow');
const arithmeticButtons = Array.from(document.getElementsByClassName("arithmetic"));
const solutionDisplay = document.getElementById("solution");
const clearButton = document.getElementById("clear");
let numberOne = "";
let numberTwo = 0;
let operator = "";
let solution = 0;
let operatorClicked = false;

numbers.forEach(number => {
    number.addEventListener("click", addingToNumber);
})

arithmeticButtons.forEach(button => {
    button.addEventListener("click", arithClicked)
})

clearButton.addEventListener("click", () => {
    numberOne = "";
    numberTwo = 0;
    input.value = 0;
    solutionDisplay.textContent = "";
    operatorClicked = false;
})


function setDisplay(mainOutput, secondOutput){
    input.value = mainOutput;
    solutionDisplay.textContent = secondOutput;
}

function arithClicked(e){
    if(e.target.id != "=")operator = e.target.id;
    
    if(e.target.id == "="){
        console.log(numberTwo, parseFloat(numberOne), operator);
        solution = operate(numberTwo, parseFloat(numberOne), operator);
        numberTwo = solution;
        numberOne = "";
        setDisplay(0, solution);
        return;
    }
    if(!operatorClicked){
    numberTwo = parseFloat(numberOne);
    numberOne = "";
    setDisplay(0, numberTwo);
    operatorClicked = true;
    }
}




function addingToNumber(e){
    numberOne += e.target.value;
    input.value = numberOne;
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