// example 1
let greet: (a: string, b: string) => void;     // This is called function signature having two parameters a and b with type string and it returns nothing i.e void

// creating Function with function signature
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}

console.log(greet('vishal', 'hello'));    // passing the value

// example 2
let calc: (a: number, b: number, c: string) => number;  // return type is number

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}
console.log(calc(50, 20, 'add'));


// example 3
let logDetails: (obj: {name: string, age: number}) => void;    // In this case Object is the Parameter 

// type person = {name: string, age: number};   // we can also do the alias

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

console.log(logDetails({name: 'Tanny_Tiddi', age: 12}));

