/*
Callback function 
passed to another function as an argument &
executed inside that function

Higher order function 
Accepts another function as an argument 
or return another function as a result

*/


// this is a callbackfunction
function morning(name){
    return `Good morning ${name}`;
}

// higherorder function
function greet(name, cb){
    const myName='Nakamura Ekuichi';
    // cb is argument and executed here 
    //and then will resulted by this function as higher older function
    console.log(`${cb(name)} my name is ${myName}`);
}

// remember callback function not invoke morning()
//cz already exist in higher older function
greet('Daisuke', morning);

// function greetMorning(name){
//     const myName = 'john';
//     console.log(`Good morning ${name}, my name is ${myName}`);
// }


// function greetAfternoon(name){
//     const myName = 'susan';
//     console.log(`Good afternoon ${name}, my name is ${myName}`);
// }

// // run function
// greetMorning('bobo');
// greetAfternoon('peter');

