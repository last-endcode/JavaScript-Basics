// return for values if not define use values
// will undefined

function sum(num1, num2) {
  let calculate = num1 * num2;
  return 'the values num1 and num2 is ' + calculate;
}

const number1 = sum(100, 200);
const number2 = sum(100, 50);

const calculate = [number1, number2];
console.log(calculate);
//if without return will undefined so use return

/*
function calculate(values) {
  console.log('values number is ' + values);
}

const width = calculate(100);
const height = calculate(100);

// here for add to array
const dimensions = [width, height];

console.log(dimensions);
 output

values number is 100
values number is 100
[ undefined, undefined ] 
*/
