// Logical operator
//  || OR, && AND, !

// example:
const name = 'peter';
const age = 25;

// here bob is false but age is true so will true
if (name === 'bob' || age === 25) {
  console.log('Hello there user');
} else {
  console.log('wrong values');
}

// here true (originally) !== bob,
// age === 25
if (name === 'peter' && age !== 24) {
  console.log('Hello there user');
} else {
  console.log('wrong values');
}
