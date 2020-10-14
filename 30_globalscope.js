// Global scope vs Local variable
// any variable outside code block{}
// is said to be in GLOBAL scope
// can be access anywhere in the program

let name = 'john doe';

function localFunction() {
  console.log(`${name} in function`);
  name = 'peter function';
  //inner
  function inner() {
    console.log(`here inside ${name}`);
    name = 'use inner function';
  }
  //   invoking innner
  inner();
}

console.log(`${name} in outside function`); //john doe
localFunction(); //john doe

if (true) {
  console.log(name + 'in condition if');
  name = 'hello change again in if';
}

console.log(name);

/* ooutput
john doe
john doe in function
here inside  peter function
use inner function in condition if
hello change again in if
*/
