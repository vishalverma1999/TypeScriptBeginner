// fundamental difference between typescript and JavaScript is that typescript uses strict types, that means if we define a variable as a string then in typescript it will always be a string and it's type cannot be changed later and the same would be true of any other type like numbers, booleans, objects, arrays
// we don't have to specifically say the character is going to be a string typescript uses what's known as inference or it infers the type based on the value we assign it, although we can explicitly provide the type of variable

let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20;    // Error- Type 'number' is not assignable to type 'string'
character = 'vishal';

// age = 'yoshi';       // Error- Type 'string' is not assignable to type 'number'
age = 20;

// isBlackBelt = 'yes';    // Error
isBlackBelt =true;

const circ = (diameter: number)=>{              // diameter: number, passing paameter is diameter of type number

    return diameter*Math.PI;
}

// console.log(circ('hello'));    // right now we can pass anything to diameter and it will not throw error, but once we defines the type of diameter then the passed value must match type 
console.log(circ(5)); 
