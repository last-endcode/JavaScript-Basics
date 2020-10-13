// Array method properties

let name = ['edward', 'newgate', 'shirohige'];

// length
console.log(name.length); //3
console.log(name[name.length - 1]); //shirohige

console.log();

// concat for combine
console.log('Concat');
let newMember = ['ace', 'marco', 'kurohige'];
const mergeMember = name.concat(newMember);
console.log(mergeMember);

console.log();

// reverse
console.log('Reverse');
console.log(mergeMember.reverse());

// unshift - add array shanks on the beginning
console.log('unshift');
console.log(mergeMember.unshift('shanks'), mergeMember);

// shift - remove array shanks on the beginning
console.log('shift');
console.log(mergeMember.shift(), mergeMember);

// push - add array lutfi on the end
console.log();
console.log('push');
console.log(name.push('lutfi', 'zoro', 'sanji'), name);

// pop - remove array on the end
console.log('pop');
console.log(name.pop(), name); //remove sanji
console.log(name.pop(), name); //remove Zoro

// splice
console.log();
console.log('splice');
console.log(name);
console.log(name.splice(0, 3), name); //start index 0: edward and will stop on 3 :shirohige will remove, resulut lutfi
console.log(name);
