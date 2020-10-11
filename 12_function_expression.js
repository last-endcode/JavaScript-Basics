// function expressions use variable for declare
// and without name after write function or called
// anonymous function

// example here function basics
function add(num1, num2) {
  return num1 * num2;
}

// function expression
// remember name add already exist please dont same
const addExpressions = function (num1, num2) {
  return num1 * num2;
};

// function ES6
const addES6 = (num1, num2) => num1 * num2;

// print them
const num1 = add(10, 10);
const num2 = add(20, 10);
// access use array
const sum = [num1, num2, addExpressions(10, 30), addES6(20, 20)];
console.log(sum);
