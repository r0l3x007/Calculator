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

let firstNum ;
let operAnd;
let secondNum;


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