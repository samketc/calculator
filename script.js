let num1=null, num2=null, operation=null, total=0, whichNum = 1, lastEquals = false;
const display = document.querySelector('.display');
//add handler to buttons only
const buttons = document.querySelectorAll('.button, .opButton');
for (button of buttons){
    button.addEventListener("click", (e) =>{
    handleButton(e.target.textContent)
})
}

//add matching handler to keypresses
document.onkeydown = function(e){
    //make numPad enter same as equals
    e.key.charCodeAt(0)==69 ? handleButton('=') : handleButton(e.key);
}

function handleButton(button){
    if(isNaN(parseInt(button))){
        if(button=='='){
            pressedEquals();
        }else if(button === 'C'){
            pressedClear();
        }else if(button === '.'){
            pressedDec();
        }else if(button === '<'){
            pressedBack();
        }else if(button == '+' || button == '-' || button == '*' || button == '/') {
            pressedOperator(button);
        }
        
    }else{
            pressedNumber(button);
    }    
}

function pressedEquals(){
    //if pressed equals twice in a row, reset numbers to do the same function again
    if(lastEquals){
        num2=num1;
        num1=total;
    }
    total = operate(num1,num2,operation)
    updateDisplay(total);
    num1 = num2;
    num2 = null;
    whichNum=2;
    lastEquals = true;
}

function pressedClear(){
    operation = null;
    total = 0;
    updateDisplay(total);
    lastOp=false;
    num1 = null;
    num2 = null;
    whichNum = 1;
    lastEquals = false;

}

function pressedOperator(operator){
    whichNum = 2;
    if(lastEquals){num1=total};
    lastEquals = false;
    if(operation!=operator && num2 != null){
        pressedEquals();
    }
    operation = operator;
}

function pressedDec(){
    if (whichNum == 1){
        num1 += checkForDec(num1);
        updateDisplay(num1);
    }else{
        num2 += checkForDec(num2);
        updateDisplay(num2);
    }
}

function checkForDec(number){
    return number.includes('.') ? '' : number.slice(0,-1)+'.';
}

function pressedBack(){
    if (whichNum == 1){
        num1 = num1.slice(0,-1);
        updateDisplay(num1);
    }else{
        num2 = num2.slice(0,-1);
        updateDisplay(num2);
    }
}

function pressedNumber(number){
    lastEquals=false;
    whichNum == 1 ? num1 = addNumber(num1,number) : num2 = addNumber(num2,number);
    
}

function addNumber(num,number){
    num == null ? num=number : num=num+number ;
    updateDisplay(num);
    return num;
}

function updateDisplay(number){
        if(number[number.length-1]=="."){
            display.textContent = number;
        }else{
           display.textContent = Math.round(number*100000)/100000; 
        }
}

function operate(x,y,operation){
    if(x==null||y==null){
        return x;
    }
    switch(operation){
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case '*':
            return multiply(x,y);
        case '/':
            if(y==0){
                alert("...please don't do that");
                return 0;
            }
            else{
                return divide(x,y);
            }
        default:
            return x;   
    }
}

function add(x,y){
    return parseInt(x)+parseInt(y);
}

function subtract(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function divide(x,y){
    return x/y;
}