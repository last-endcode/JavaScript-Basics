// Array Loops

let memberShp = ['lutfi', 'Zoro', 'Nami'];
let lastName = ['SHP Pirates'];
let emptyString = [];

for (let i = 0; i < memberShp.length; i++) {
  // //make sure index 0 1 2 same with array memberShp
  // console.log(i);
  // // for acces items array
  // console.log(memberShp[i]);
  // for add array
  const callingName = `${memberShp[i]} ${lastName}`;
  emptyString.push(`${callingName}`);
}

console.log(emptyString);
