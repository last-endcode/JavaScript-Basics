// example again callback-function




let add = function(a , b){
    return a + b;
}

let multiply = function(a , b){
    return a * b;
}

let calculation = function(num1, num2, callback){
    return `The result from ${num1} and ${num2} is ${callback(num1, num2)}`;
}

console.log(calculation(10,10,add)); //20
console.log(calculation(20,20,multiply)); //400

/*original

let calc = function(num1, num2, calcType){
    // conditional
    if(calcType === 'add'){
        return num1 + num2;
    }else if(calcType === 'multiply'){
        return num1 * num2;
    }
}

//access function
console.log(calc(20,20,'add')); //40

*/