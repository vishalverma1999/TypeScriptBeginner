// explicit types
let character: string = 'vishal';   
let age: number;
let isLoggedIn: boolean;

// age = 'luigi';    // type error
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;


// arrays
let strArray: string[];   // arroy of strings only
// strArray.push('vishal');  // error because at the time strArray is not declared, we tell that in future whenever it is declared must be of string type

let ninjas: string[] = [];   // Empty Array Initialized, here we can use push method since empty array is initialized

ninjas.push('ryu');
ninjas.push('chun-li');
console.log(ninjas);

// union types - one or more than one types
let mixed: (string|number|boolean)[] = [];    // empty array initialized with type string, number and boolean
mixed.push('hello');
mixed.push(false);
mixed.push(20);
console.log(mixed);

// We can use union types on normal variables as well
let uid: string|number;   //uid can be string or number
uid = '123';
uid = 123;
console.log(uid);

// object
let ninjaOne: object;   // ninjaone is object, array is also an object
ninjaOne = { name: 'yoshi', age: 30 };   // object using curly braces
ninjaOne = ['vkjdnvd', true, 3543];    // array is also an object
console.log(ninjaOne);

// Here ninnjaTwo is the object with curly braces only with explicitly definesd it's property types
let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};
ninjaTwo = { name: 'ken', age: 20, beltColour: 'black' };