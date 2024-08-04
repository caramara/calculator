//Initialize variables
const display = document.querySelector('#display');
const buttonsContainer = document.querySelector('#buttons-container');

createCalc();
buttonsContainer.addEventListener('click', (e) => {
    const target = e.target;

    if(target.innerText==='='){
        display.innerText = operate(display.innerText);
    }
    else if(target.innerText==='Clear'){
        display.innerText = '';
    }
    else{
        display.innerText += target.innerText;
    }
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

function operate(string){

    const operands = string.split(/[\+\-\*\/]/).map((e)=>parseFloat(e));
    const operators = string.match(/[\+\-\*\/]/g);
    let operator = operators[0];

    while(operands.length>2){
        let calculation = operands[0] + operators[0] + operands[1];
        operands.splice(0,2,operate(calculation));
        operators.shift();
        //operands.unshift(operate(calculation));
    }
    switch(operators[0]){
        case '+':
            return add(operands[0], operands[1]);
            
        case '-':
            return subtract(operands[0], operands[1]);
            
        case '*':
            return multiply(operands[0], operands[1]);
            
        case '/':
            return divide(operands[0], operands[1]);
            
    }

}

function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    if(b===0){
        throw new Error('Division by zero');
    }
    return a/b;
}