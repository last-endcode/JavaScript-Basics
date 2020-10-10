// function parameter
// parameter like local variable or placeholder
// argument -  when invoke/call/run

// u can declare argument use variable too
const name = 'john doe';
const lastname = 'Darwin';
function greet(name, lastname) {
  console.log('Hello there ' + name + ' ' + lastname);
}

// invoking
greet('Boby', 'Doe'); // hello there boby doe
greet(); // hello there undefined undefined
greet(name, lastname); // field argument use variable
