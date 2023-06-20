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
decBtn.addEventListener(`click`, function(){
    storeNum(`.`);
});

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
clrBtn.addEventListener(`click`, function(){
    primaryScreen.textContent = ``;
    secondaryScreen.textContent = ``;
    numNum.length = 0;
    num1Arr.length = 0;
    num2Arr.length = 0;
    operatorArr.length = 0;
    
});

//Deletes one item from the screen, and from the array

const dltBtn =  document.querySelector(`#dltBtn`);
dltBtn.addEventListener(`click`, function(){

    if(numNum.length === 1){
        numNum.splice(0);
    }else{
        numNum.splice(-1,1);
    }
    strNum = numNum.join(``);
    primaryScreen.textContent = `${strNum}`
});

//Executes the operation after 2 numbers are entered and stores the result in the array
function checkOperator(opertoar){
    if (isNaN(separateArray())){
        storeNum(opertoar);
        console.log(numNum);
    }else{
        numNum.length = 0;
        numNum.push(separateArray());
        storeNum(opertoar);
        console.log(numNum);
    }
    
}



//stores the number or the operator

function storeNum(num){
    numNum.push(num);
    strNum = numNum.join(``);
    primaryScreen.textContent = `${strNum}`;
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
        primaryScreen.textContent = `You tried to do something naughty didn't you ?`
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
equBtn.addEventListener(`click`, function(){
    if(isNaN(separateArray()) && numNum.length === 0){
        primaryScreen.textContent = `Oopsie you did not enter any numbers!`;
    }else if(isNaN(separateArray()) && numNum.length > 1 ){
        primaryScreen.textContent = `Math error!`

    }else{
    let result = separateArray();
    secondaryScreen.textContent  = `${result}`;
    }
    
});
