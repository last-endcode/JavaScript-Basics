// return new array
//not change size of original array
//uses values from original array when making new one

const people = [
  { name: 'bobo', born: 1987, position: 'developer' },
  { name: 'peter', born: 1989, position: 'designer' },
  { name: 'sussy', born: 1975, position: 'the boss' },
  { name: 'Jane', born: 1999, position: 'the boss' },
];

// const born = people.map(function () {});
// console.log(ages);
/*output: 
[ undefined, undefined, undefined ]
*/

const borns = people.map(function (item) {
  return `The member company is ${item.person} as ${item.position}`;
});
console.log(borns);

// example again use return as objects
const names = people.map(function (item) {
  //create obj firstName and age
  return {
    firstName: item.name,
    age: 2020 - item.born,
  };
});

console.log(names);
