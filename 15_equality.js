// == checks only value
// === checks only value and type

let value = 6;
let value2 = '6';

let result1 = value != value2;
let result2 = value !== value2;

// if number same with number use == , === will true for value
// but if value2 is '6' for != will false cz its string
// if number value1 6 and value2 '6' will false for != cz its not number
// but for !== is true cz not same remember !== read value and type
console.log(result1); //false
console.log(result2); //true

// example again
value = '10';
value2 = 10;

result1 = value == value2; //will true
result2 = value === value2; //will false cz value and type differnt;
console.log(result1);
console.log(result2);
