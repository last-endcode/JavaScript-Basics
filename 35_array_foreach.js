// for each
// doesn't return new array
// method executes a provided function once for each array element

const people = [
  { name: 'bobo', born: 1987, position: 'developer' },
  { name: 'peter', born: 1989, position: 'designer' },
  { name: 'sussy', born: 1975, position: 'the boss' },
];

// remember this method not return 3 new array
// let coy = people.forEach(function () {});
// console.log(coy); //undefined

// the way 1
// let coy = function (person) {
//   console.log(person.name);
// };

// people.forEach(coy);

// the way 2
// u can callback function with directly use annonymous function
people.forEach(function (item) {
  let total = 2020;
  total -= item.born;
  console.log(
    `${item.name} with position ${item.position} now is ${total} years old`
  );
});
