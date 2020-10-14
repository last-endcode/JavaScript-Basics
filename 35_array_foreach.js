// for each
// doesn't return new array
// method executes a provided function once for each array element

const memberSHP = [
  { name: 'lutfi', age: 20, position: 'raja bajak laut' },
  { name: 'zoro', age: 25, position: 'wakil raja bajak laut' },
  { name: 'sanji', age: 24, position: 'chef SHP' },
];

//disini kita bisa memanggil dgn 2 cara..

function showMember(memberBajakLaut) {
  console.log(memberBajakLaut.position.toUpperCase());
}

// memberSHP.forEach(showMember);

// cara ke-2 mnggunakan annonymous function
memberSHP.forEach(function (items) {
  console.log(items.position.toLowerCase());
});
