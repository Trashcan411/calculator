/*id = "equal" =
id = "add" +
id = "substract" -
id = "clear-all" AC
id = "backspace" ←
id = "radical" √
id = "power" ^
id = "multiply" x 
id = "divisive" /
id = "minus" +/-
id = "comma" .*/
function add (a, b){
    return a + b
    
}
function substract (a, b){
    return a-b
}

function multiply (a, b){
    return a * b
    
}

function divide (a, b){
    return a / b
    
}
const nmbA = 0
const nmbB = 0
const operator = ""

function operate (nmbA, nmbB, operator) {
    if (operator === "+"){
        add(nmbA, nmbB);
    } else if (operator === "-"){
        substract(nmbA, nmbB);
    } else if (operator === "x"){
        multiply(nmbA, nmbB);
    } else if (operator === "/"){
        divide(nmbA, nmbB);
    }
}

const divNumb = document.getElementById("number")

for (i = 0; i < 10; i++){
    const numb = document.createElement("button");
    numb.classList.add('button-number');
    numb.textContent = i
    divNumb.appendChild(numb)
}
const operatorSymbol = ['+', '-', '←','^', 'x','/', '+/-', '.']

for (i = 0;i < operatorSymbol.length; i++){

}


