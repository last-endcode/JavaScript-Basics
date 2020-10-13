// function , array, condition

const gas = [10, 10, 10, 10];
const food = [10, 100];

function calculateTotal(arr) {
  // loop
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    //   for totally
    total += arr[i];
  }
  if (total > 100) {
    console.log('Total bigger than 40');
  } else {
    console.log('Total smaller then 40');
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
console.log({
  gas: gasTotal,
  food: foodTotal,
});
