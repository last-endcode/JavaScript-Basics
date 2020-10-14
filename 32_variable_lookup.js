// Lookup variable
// js always lookup variable

const numGlobal = 100;

function total(num1, num2) {
  //120 cz use numGlobal 100, but if inside function
  //has nameGlobal with 50 result be 70
  const numGlobal = 50;
  const result = num1 + num2 + numGlobal;
  //inner function
  function multiply() {
    //if result * numGlobal use value in function total
    // sum be 3500, same with total function
    // if multiply has local nameGlobal 1000 sum be 70000
    const numGlobal = 1000;
    const sum = result * numGlobal;
    console.log(sum); //70000
  }
  multiply();
  return result;
}

const result = total(10, 10);
console.log(result);
