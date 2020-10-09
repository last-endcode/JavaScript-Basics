// additional features
//  += -= *= /= %=
// i++ ++i

// examples
let number = 10;
number += 1;
number += 1;
number += 1;
number += 1;
number += 1;
number -= 1;
console.log(number); /* output: 14 cz += is 15 -= 1 : 1*/

// examples
let smallNumber = 5;
// number++ like add
smallNumber++;
smallNumber++;
smallNumber++;
smallNumber++;
smallNumber++;
smallNumber++;
smallNumber++; //output 12
smallNumber--; //11

console.log(smallNumber);

// example
const bread = 10;
const childern = 5;
// const amount = bread / childern;
const amount = bread % childern;

console.log(amount);

// example again here () is first precedent high
const values1 = (1 + 2 + 3) * 10;
const values2 = 1 + 2 + 3 * 10;

console.log(values1); //60
console.log(values2); //33
