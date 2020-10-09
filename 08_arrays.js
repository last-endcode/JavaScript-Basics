// Arrays , Functions and objects
// Arrays - [] , 0 index based

// here is not efisien if declare multiple variable
const friend1 = 'anna';
const friend2 = 'anna';
const friend3 = 'anna';
const friend4 = 'anna';
// ........100 friend
// so for effective use array

// remember for string should be '' if not , not defined
const friend = ['anna', 'john', 'peter', 'kelly', 50, 'jane'];

// for print all obj on array friend
console.log(friend);
// for knowing total array
console.log(friend.length);
// for access john
console.log(friend[1]);

// or for best u can declare variable
const bestFriend = friend[0];
console.log(bestFriend);

// for re-assign 50 be string
friend[4] = 'dncode';
console.log(friend[4]);
