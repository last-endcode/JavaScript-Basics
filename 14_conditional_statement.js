// > , < , >=, <=, ==, ===, !=, !===
// > >= bigger , bigger-than
// < <= smaller, smaller-than

// here basic if statement

if (true) {
  // will execute cz true
  console.log('hello there');
}

if (false) {
  // not execute but false and not else here
  console.log('hello there');
}

let myName = 'dncode';
myName = 'something else';

// here is same with dncode and will execture first condition
if (myName == 'dncode') {
  console.log('Hello my name is dncode');
} else {
  // but after reasign will execute here
  console.log('Already changed be something else');
}

// example
let value = 5 > 2;
value = 5 < 2;

if (value) {
  console.log('true');
} else {
  console.log('five is bigger than 2');
}
