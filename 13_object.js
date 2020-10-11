// objects - key/value pairs methods
// dot notation

const person = {
  name: 'dncode',
  age: 25,
  hobby: ['manga', 'programming', 'read book'],
  married: false,
  itsMe() {
    return 'hello its me ' + person.name;
  },
};

// access obj
console.log(person.name);
console.log(person.itsMe());
// for acces array on obj same use index
console.log(person.hobby[2]);

// u can reassign again on obj
person.name = 'john doe';
console.log(person.name);
console.log(person.itsMe());
