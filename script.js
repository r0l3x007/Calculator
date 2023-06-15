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

//let firstNum ;
//let operAnd;
//let secondNum;


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

//create eventlisteners with on click
let numNum = [];
//let storeNum = [];
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

const plusBtn =  document.querySelector(`#plsuBtn`);
plusBtn.addEventListener(`click`, function(){
    storeNum(`+`);
});

const minusBtn =  document.querySelector(`#minusBtn`);
minusBtn.addEventListener(`click`, function(){
    storeNum(`-`);
});

const oriBtn = document.querySelector(`#orBtn`);
oriBtn.addEventListener(`click`, function(){
    storeNum(`*`);
});

const diviBtn = document.querySelector(`#divBtn`);
diviBtn.addEventListener(`click`, function(){
    storeNum(`/`);
});

const clrBtn = document.querySelector(`#clearBtn`);
clrBtn.addEventListener(`click`, function(){
    primaryScreen.textContent = ``;
    secondaryScreen.textContent = ``;
    numNum.length = 0;
});

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



function storeNum(num){
    numNum.push(num);
    strNum = numNum.join(``);
    primaryScreen.textContent = `${strNum}`;
};

let operatorArr = [];
let num1Arr = [];
let num2Arr = [];
let strNum ;

function separateArray(){
    for(let i = 0; i < numNum.length; i++){
        if(numNum[i] === `+` || numNum[i] === `-` || numNum[i] === `/` || numNum[i] === `*`){
            operatorArr = numNum.slice(i,i+1);
            num1Arr = numNum.slice(0,i);
            num2Arr = numNum.slice(i+1);

            console.log(operatorArr);
            console.log(num1Arr);
            console.log(num2Arr);
        }
    }

    let num1 = num1Arr.join(``);
    let num2 = num2Arr.join(``);
    let operatorNum =  operatorArr.join(``);
    return operate(operatorNum,Number(num1),Number(num2));
    
}
const secondaryScreen =  document.querySelector(`#newnumber`);

const equBtn =  document.querySelector(`#equBtn`);
equBtn.addEventListener(`click`, function(){
   let result = separateArray();
   secondaryScreen.textContent  = `${result}`;
});
//create an empty array that stores the numbers and symbols

//iterate over the array and separate them to two arrays one for the first num and one for the 2nd num

//convert the array to a string , then convert it to a number

//call the calculate function based on the operator 