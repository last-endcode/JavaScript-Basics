// local scope
// can't be acces from outside code blocks
// if - NOT VAR

const thisGlobal = 'Hello Global';
{
  const name = 'hello world';
}

// name is not defined cz name is local scope
// console.log(name);

function callingMe() {
  const name = 'john doe';
  const age = 25;
  globalWorld = 'Hello World this Global';
}
// age is not defined cz age is local scope
// console.log(age);

// access function for print global without keyword
callingMe();
// globalWorld is not defined if not access function
console.log(globalWorld);
console.log(thisGlobal);
