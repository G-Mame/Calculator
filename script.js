let runningTotal = 0;
let buffer = "0";
let Operator;
// ← ÷ × - = +   
const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
            handleNumber(value);
    }
    screen.innerText = buffer;   
}

function handleSymbol(symbol){
    switch(symbol){
        case  "ac":
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(Operator === null){
                return
            }
            flushOperation(parseInt(buffer))
            Operator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;  
        case '←':
            if (buffer.length === 1){
                    buffer = "0";
            }else{
                buffer = buffer.substring(0, -buffer.length);                                                                           
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handleMath(symbol)           
    }
}

function handleMath(symbol){
    if (buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer);
    if ( runningTotal === 0){
            runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    Operator = symbol;
    buffer = '0';    
}

function flushOperation(intBuffer){
        if (Operator === '+'){
            runningTotal += intBuffer;
        }else if(Operator === '-'){
            runningTotal -= intBuffer;
        }else if (Operator === '×'){
            runningTotal *= intBuffer;
        }else if (Operator === '÷'){
            runningTotal /= intBuffer;
        }
}

function handleNumber(numberString){
    if (buffer === '0'){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function Hello(){
    console.log('Hello');
}

function init(){
    document.querySelector('.clac-buttons').addEventListener('click',(event) => { buttonClick(event.target.innerText); })
}
init();