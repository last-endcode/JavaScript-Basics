// values vs reference
// values is primitive and reference is object (array,function)

const name = 'john';
let name2 = name;

console.log(`${name}`);
console.log(`${name2}`);
/*
john
john
*/

// reassign name2 : 'peter doe'
name2 = 'peter doe';
console.log(`${name}`);
console.log(`${name2}`);

// object or reference can't like primitive
let value1 = {
  name: 'edward newgate',
};
let value2 = value1;

console.log(`${value1.name}`);
console.log(`${value2.name}`);
/*
edward newgate
edward newgate
*/

// reasign obj from value2 : 'shirohige'
value2.name = 'shirohige';
// and obj value1, and value2 will same cz one reference
console.log(`${value1.name}`);
console.log(`${value2.name}`);
/*
shirohige
shirohige
*/

// but u can use copy obj
console.log('copy obj');
value2 = { ...value1 };
value2.name = 'Edward NewGate Shirohige';

console.log(`${value1.name}`);
console.log(`${value2.name}`);
/*
shirohige
Edward NewGate Shirohige
*/
