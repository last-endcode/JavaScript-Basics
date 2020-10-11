// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// Step 0: i = 0;
// Step 1: i < 10 true,
// Step 2:executing the block
// Step 3: i++ = 1
// Step 4: i < 10 true,
// Step 5: executing the block
// ...
// ...
// ...
// ...
// Step X - i++ = 9;
// i < 10 true,
// executing the block
// i++ = 10
//  10 < 10 is false
//  get out of the loop

console.log('example again');
console.log();
for (let number = 20; number >= 10; number--) {
  console.log('and number is ' + number);
} // 20 ...10
