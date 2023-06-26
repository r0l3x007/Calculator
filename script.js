function addNums(a,b){
return a + b;
}

function subtractNums(a,b){
return a - b;
}

function multiplyNums(a,b){
return a * b;
}

function divideNums(a,b){
return a / b;
}



function operate (operator, a, b){
if(operator === `+`){
    return addNums(a,b);
} else if (operator ===`-`){
    return subtractNums(a,b);
} else if (operator ===`*`){
    return multiplyNums(a,b);
} else if (operator ===`/`){
    return divideNums(a,b);
}
}

let numNum = [];
let operatorArr = [];
let num1Arr = [];
let num2Arr = [];
let strNum ;
let resUlt;

//eventlistenners for the buttons of the calculator

const btn0 =  document.querySelector(`#num0`);
let primaryScreen =  document.querySelector(`#permnumber`);
btn0.addEventListener(`click`,  function(){
    storeNum(0);
});

const btn1 = document.querySelector(`#num1`);
btn1.addEventListener(`click`, function(){
    storeNum(1);
});

const btn2 = document.querySelector(`#num2`);
btn2.addEventListener(`click`, function(){
    storeNum(2);
});

const btn3 = document.querySelector(`#num3`);
btn3.addEventListener(`click`, function(){
    storeNum(3);
});

const btn4 =  document.querySelector(`#num4`);
btn4.addEventListener(`click`, function(){
storeNum(4);
});

const btn5 = document.querySelector(`#num5`);
btn5.addEventListener(`click`, function(){
    storeNum(5);
});

const btn6 = document.querySelector(`#num6`);
btn6.addEventListener(`click`, function(){
    storeNum(6);
});

const btn7 = document.querySelector(`#num7`);
btn7.addEventListener(`click`, function(){
    storeNum(7);
})

const btn8 = document.querySelector(`#num8`);
btn8.addEventListener(`click`, function(){
    storeNum(8);
});

const btn9 = document.querySelector(`#num9`);
btn9.addEventListener(`click`, function(){
    storeNum(9);
});


const decBtn =  document.querySelector(`#pointBtn`)
decBtn.addEventListener(`click`, checkDecimal);

//checks if decimal is present in the first and second number, if the criteria is met adds a decimal
function checkDecimal(){
    let firstPart = [];
    let secondPart = [];
    for(let i = 0; i < numNum.length; i++){
        if(numNum[i] === `+` || numNum[i] === `-` || numNum[i] === `/` || numNum[i] === `*` ){
            firstPart = numNum.slice(0,i);
            secondPart = numNum.slice(i+1);
        }
    }

   if(!(numNum.includes(`.`)) ){
    storeNum(`.`);
   }else if(firstPart.includes(`.`) && !(secondPart.includes(`.`)) ){
    storeNum(`.`);
   }
};

const plusBtn =  document.querySelector(`#plsuBtn`);
plusBtn.addEventListener(`click`, function(){
    checkOperator(`+`);
});

const minusBtn =  document.querySelector(`#minusBtn`);
minusBtn.addEventListener(`click`, function(){
    checkOperator(`-`);
});

const oriBtn = document.querySelector(`#orBtn`);
oriBtn.addEventListener(`click`, function(){
    checkOperator(`*`);
});

const diviBtn = document.querySelector(`#divBtn`);
diviBtn.addEventListener(`click`, function(){
    checkOperator(`/`);
});

//Clears everything on both of the calculator screens

const clrBtn = document.querySelector(`#clearBtn`);
clrBtn.addEventListener(`click`, clrEverything);

function clrEverything(){
    primaryScreen.textContent = ``;
    secondaryScreen.textContent = ``;
    numNum.length = 0;
    num1Arr.length = 0;
    num2Arr.length = 0;
    operatorArr.length = 0;
}

//Deletes one item from the screen, and from the array

const dltBtn =  document.querySelector(`#dltBtn`);
dltBtn.addEventListener(`click`, backSpace);

function backSpace (){
    if(numNum.length === 1){
        numNum.splice(0);
        console.log(numNum);
    }else{
        numNum.splice(-1,1);
        console.log(numNum)
    }
    
    if (primaryScreen.textContent === ``){
        secondaryScreen.textContent = ``;
        numNum.lenght = 0;
        num1Arr.length = 0;
        num2Arr.length = 0;
        operatorArr.length = 0;
    }
    
    strNum = numNum.join(``);
    primaryScreen.textContent = `${strNum}`
}

//Executes the operation after 2 numbers are entered and stores the result in the array
function checkOperator(opertoar){
  
   let operTraitor = [];
   let firstPart = [];
   let secondPart = [];

    for(let i = 0;i < numNum.length; i++){
        if(numNum[i] === `+` || numNum[i] === `-` || numNum[i] === `/` || numNum[i] === `*` ){
            firstPart = numNum.slice(0,1)
            operTraitor = numNum.slice(i,i+1);
            secondPart = numNum.slice(i+1)
        }
    }


   if (operTraitor.length === 0){
        storeNum(opertoar);
        console.log(numNum);
    }else if(operTraitor.length === 1 && secondPart.length > 0 && !isNaN(separateArray())){
        numNum.length = 0;
        numNum.push(separateArray());
        storeNum(opertoar);
        console.log(numNum);
    }
    
} 
    



//stores the number or the operator

function storeNum(num){
    if(numNum.length < 20){
    numNum.push(num);
    strNum = numNum.join(``);
    primaryScreen.textContent = `${strNum}`;
    }
};

//separates the array into sub arrays and returns the operate function with the result of the inputted numbers and operator used

function separateArray(){
    for(let i = 0; i < numNum.length; i++){
        if(numNum[i] === `+` || numNum[i] === `-` || numNum[i] === `/` || numNum[i] === `*` ){
            
            num1Arr = numNum.slice(0,i);
            operatorArr = numNum.slice(i,i+1);
            num2Arr = numNum.slice(i+1);
        }
    }

    let num1 = num1Arr.join(``);
    let num2 = num2Arr.join(``);
    let operatorNum =  operatorArr.join(``);
    if(num2 === `0`){
        primaryScreen.textContent = `You tried to do something naughty didn't you?`
        return ``;
    }

    let result = operate(operatorNum,Number(num1),Number(num2));
   
    if(result%1 !== 0){
    return parseFloat(result).toFixed(5);
    } else return result;

    
}

const secondaryScreen =  document.querySelector(`#newnumber`);


//executes the operation based on the operand.

const equBtn =  document.querySelector(`#equBtn`);
equBtn.addEventListener(`click`, evalTheEquation);


function evalTheEquation(){

    if(isNaN(separateArray()) && numNum.length === 0){
        primaryScreen.textContent = `Oopsie you did not enter any numbers!`;
    }else if(isNaN(separateArray()) && numNum.length > 1 ){
        primaryScreen.textContent = `Math error!`

    }else{
    resUlt = separateArray();
    secondaryScreen.textContent  = `${resUlt}`;
    }
}

//added keyboard support for the calculator

document.addEventListener(`keydown`, function(event){ 
    console.log(event);
    switch(event.key){
        case `0`:
            storeNum(0);
            break;
        case `1`:
            storeNum(1);
            break;
        case `2`:
            storeNum(2);
            break;
        case `3`:
            storeNum(3);
            break;
        case `4`:
            storeNum(4);
            break;
        case `5`:
            storeNum(5);
            break;
        case `6`:
            storeNum(6);
            break;
        case `7`:
            storeNum(7);
            break;
        case `8`:
            storeNum(8);
            break;
        case `9`:
            storeNum(9);
            break;
        case `+`:
            checkOperator(`+`);
            break;
        case `-`:
            checkOperator(`-`);
            break;
        case `*`:
            checkOperator(`*`);
            break;
        case `/`:
            checkOperator(`/`);
            break;
        case `.`:
            checkDecimal();
            break;
        case `Backspace`:
            backSpace();
            break;
        case `Delete`:
            clrEverything();
            break;
        case `Enter`:
            evalTheEquation();
            break;
    }
})
