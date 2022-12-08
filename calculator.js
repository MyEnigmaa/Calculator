const numbers = document.getElementById('numbers');
const outputWindow = document.getElementById('outputWindow');
const arithmeticButtons = document.querySelectorAll(".arithmetic")
let numberOne = "";
let numberTwo = 0;
let solution = 0;
let setNumberOne = false;
let setNumberTwo = false;
console.table(arithmeticButtons);

function Buttons (){ //create 10 Buttons
    for(i=0; i<10; i++){
        number = document.createElement("button");
        number.value = i;
        number.textContent = i;
        number.type = "button";
        number.addEventListener("click", inputNumber);
        numbers.appendChild(number);
    }
}

for(i=0 ; i< arithmeticButtons.length ; i++){
    arithmeticButtons[i].addEventListener("click", Calculate);
}

function Calculate(e){
    
    numberTwo = parseFloat(numberOne);
    numberOne = "";
    outputWindow.value = 0;
}

function inputNumber(e){ //Setting values for calculation
    numberOne += e.target.value;
    outputWindow.value = parseFloat(numberOne);
}




window.onload = () => {
    Buttons();
}