let x, y, operation;

function operate(x,y,operation){
    switch(operator){
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            return "No operator";
    }
}

function add(x,y){
    return parseInt(x)+parseInt(y);
}

function subtract(x,y){
    return x-y;
}

function multiply(x*y){
    return x*y;
}

function divide(x,y){
    return x/y;
}