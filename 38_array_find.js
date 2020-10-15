// find
// returns object
// returns first match, if not match undefined
// great for getting unique value

let people = [
  { id: 1, name: 'john doe', born: 1983, position: 'developer' },
  { id: 2, name: 'bobo', born: 1987, position: 'developer' },
  { id: 3, name: 'peter', born: 1989, position: 'designer' },
  { id: 1, name: 'sussy', born: 1975, position: 'the boss' },
  { id: 1, name: 'Jane', born: 1999, position: 'the boss' },
];

const iDs = people.find(function (iDs) {
  // here first match will print but if u use filter will print all obj with id:1
  return iDs.id === 5 || iDs.position === 'developer';
});

console.log(iDs);

// example again
const shpMember = ['lutfi', 'Zoro', 'Sanji'];

console.log(
  shpMember.filter(function (items) {
    return items === 'Zoro';
  })
);
/*
and output will result lutfi for the first match, cause use find.. but if use map, filter will result as array
[ 'lutfi', 'Zoro', 'Sanji' ]
*/
