const buttons = document.getElementById('buttons');




function Buttons (){
    for(i=0; i<10; i++){
        number = document.createElement("button");
        number.value = i;
        number.id = i;
        number.textContent = i;
        number.type = "button";
        buttons.appendChild(number);
    }
}

window.onload = () => {
    Buttons();
}