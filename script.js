//Initialize variables
const display = document.querySelector('#display');
const buttonsContainer = document.querySelector('#buttons-container');
let operator = '';
let op1 = '';
let op2 = '';

createCalc();
buttonsContainer.addEventListener('click', (e) => {
    const target = e.target;
    display.innerText += target.innerText;
})

function createCalc(){
    display.innerText = '';
    //Add numbers buttons
    for(let i = 0; i<10 ; i++){
        const button = document.createElement('button');
        button.innerText = `${i}`;
        button.classList.add('number-btn');
        buttonsContainer.appendChild(button);
    }
    //Add operator buttons
    const operators = {
        add:'+',
        subtract: '-',
        multiply: '*',
        divide: '/',
        clear: 'Clear',
        equals: '=',
    }
    for(let key in operators){
        const button = document.createElement('button');
        button.innerText = `${operators[key]}`;
        button.classList.add('operator-btn');
        button.setAttribute('id', `${key}-btn`)
        buttonsContainer.appendChild(button);
    }

}

function operate(operator, op1, op2){
    switch(operator){
        case '+':
            return add(op1, op2);
            
        case '-':
            return subtract(op1, op2);
            
        case '*':
            return multiply(op1, op2);
            
        case '/':
            return divide(op1, op2);
            
    }

}

function add(a, b){
    return a+b;
}
function subtract(a, b ){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    return a/b;
}