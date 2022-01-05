"use strict";
// example 1
let greet; // This is called function signature having two parameters a and b with type string and it returns nothing i.e void
// creating Function with function signature
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
console.log(greet('vishal', 'hello')); // passing the value
// example 2
let calc; // return type is number
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
console.log(calc(50, 20, 'add'));
// example 3
let logDetails; // In this case Object is the Parameter 
// type person = {name: string, age: number};   // we can also do the alias
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
console.log(logDetails({ name: 'Tanny_Tiddi', age: 12 }));
