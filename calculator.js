const buttons = document.getElementById('buttons');
const outputWindow = document.getElementById('output');
let numberOne = 0;
let numberTwo = 0;
let solution = 0;
let set = false;


function Buttons (){ //create 10 Buttons
    for(i=0; i<10; i++){
        number = document.createElement("button");
        number.value = i;
        number.textContent = i;
        number.type = "button";
        number.addEventListener("click", inputNumber);
        buttons.appendChild(number);
    }
}

function inputNumber(e){ //Setting values for calculation
    (set) ? numberTwo = e.target.value: numberOne = e.target.value;
}



window.onload = () => {
    Buttons();
}