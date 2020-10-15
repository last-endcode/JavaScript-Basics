// filter
// return new array
// can manipulate the size of new array
// return based on condition

let people = [
  { name: 'john doe', born: 1983, position: 'senior developer' },
  { name: 'bobo', born: 1987, position: 'developer' },
  { name: 'peter', born: 1989, position: 'designer' },
  { name: 'sussy', born: 1975, position: 'the boss' },
  { name: 'Jane', born: 1999, position: 'the boss' },
];

const developer = people.filter(function (items) {
  return (
    items.position === 'developer' || items.position === 'senior developer'
  );
});

console.log(developer);

const ages = people.filter(function (items) {
  // yg kurang dari 1989 ada 3
  return items.born < 1989;
});
console.log(ages);
