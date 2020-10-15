// for each
// doesn't return new array
// method executes a provided function once for each array element

const people = [
  { name: 'bobo', born: 1987, position: 'developer' },
  { name: 'peter', born: 1989, position: 'designer' },
  { name: 'sussy', born: 1975, position: 'the boss' },
];

// let person = function (item) {
//   console.log(item);
// };

// people.forEach(person);

/* u can callback function with directly use annonymous function */
people.forEach(function (item) {
  let total = 2020;
  total -= item.born;
  console.log(
    `${item.name} with position ${item.position} now is ${total} years old`
  );
});
