// Array for Loop

let name = ['john', 'peter', 'kane'];
let lastName = 'Doe';
let emptyArray = [];

for (let i = 0; i < name.length; i++) {
  const fullName = `${name[i]} ${lastName}`;
  console.log(fullName.toUpperCase());
}
