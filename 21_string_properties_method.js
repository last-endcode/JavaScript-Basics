// String properties and methods
// wrapper string object

let text = 'John Doe';
let result = text;

console.log(result.length); //8
console.log(result[0]); //J
console.log(result[4]); //Blank space
// Lower & upper
console.log(result.toLowerCase()); //john doe
console.log(result.toUpperCase()); //JOHN DOE
// search target string
console.log(result.includes('ohn')); //true
console.log(result.includes('not')); //false

// startsWith, end with
console.log(result.startsWith('John')); //true
console.log(result.startsWith('john')); //false
console.log(result.endsWith('e')); //true

// change string
console.log(result.replace('John', 'Peter'));
console.log(result.indexOf('Doe')); // 5
console.log(result.indexOf('oe')); //6
console.log(result.charAt(0)); //J
console.log(result.charAt(result.length - 1)); //e
// trim for remove space
let name = '     dncode';
console.log(name);
console.log(name.trim());
console.log(name.trim().toUpperCase().startsWith('DNCODE')); //true
console.log('slice');
name = 'john jordan';
// slice if 0 is first index
console.log(name);
console.log(name.slice(-1)); //n
console.log(name.slice(-2)); //an
console.log(name.slice(1)); //ohn jordan
console.log(name.slice(0)); //john jordan
console.log(name.slice(0, 7)); //start 0 index, end 7 word..

name = 'Nakamura Ekuichi'; //totally word and space is calculate too
console.log(name.length);
console.log(name.slice(9, name.length));
console.log(name.slice(0, 10)); //0 is index, and 10 is stopping for last word and the lasts word is E.
// here start -12 mura Ekuichi, and stopp on E for -6
console.log(name.slice(-12, -6));
