// reduce
// iterates,callback function
// reduces to a single value - number, array, obj
// 1 parameter('acc') - total of all calculations
// 2 parameter ('curr) - current iteration/value

const produk = [
  { name: 'samsung', model: 'android', price: 10000 },
  { name: 'xiaomi', model: 'android', price: 20000 },
  { name: 'iphone', model: 'iphone', price: 30000 },
  { name: 'sony', model: 'android', price: 40000 },
];

let result = produk.reduce(function (acc, current) {
  console.log(acc + current.price);
  return acc;
});

console.log(result);

// // example method channing
// let result = produk
//   .filter(items => items.price > 10000)
//   .map(items => items.price * 2)
//   .reduce((acc, current) => acc + current);

// console.log(result);
