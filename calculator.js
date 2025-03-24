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
const nmbA = ''
const nmbB = ''
const operator = ""

const equal = document.getElementById("equal")

equal.addEventListener("click", operate(nmbA, nmbB, operator))
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
const storeValue = []
const operatorSymbol = ['+', '-', '←','^', 'x','/', '+/-', '.']

for (i = 1; i < 11 + operatorSymbol.length; i++){
    if (i > 10){
        const numb = document.createElement("button");
        numb.classList.add('button-number');
        numb.textContent = operatorSymbol.at(i-11)
    
        numb.addEventListener("click",()=>{
        storeValue.push(operatorSymbol.at(i-11))}
        )
    
        divNumb.appendChild(numb)

    }else {
        const numb = document.createElement("button");
        numb.classList.add('button-number');
        numb.textContent = i
    
        numb.addEventListener("click",()=>{
        storeValue.push(i)}
        )
    
        divNumb.appendChild(numb)
    }
    
}


