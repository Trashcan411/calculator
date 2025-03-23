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
function add (...args){
    const ad = args.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;}
    , arr[0])
    return ad
    
}
function substract (...args){
    const subs = args.reduce((accumulator, currentValue) => {
        return accumulator - currentValue;}
    , arr[0])
    return subs
}

function multiply (...args){
    const add = args.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;}
    , arr[0])
    
}

function multiply (...args){
    const add = args.reduce((accumulator, currentValue) => {
        return accumulator / currentValue;}
    , arr[0])
    
}
const nmbA = 0
const nmbB = 0
const variable = ""

function operate (nmbA, nmbB, variable) {

}