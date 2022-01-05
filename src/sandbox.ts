let greet = ()=> {
    console.log("hello, world");
}
// typescript will automatically infer that the type of greet variable is going to be a function much like in other types

// greet = 'hello';    // Error- Type 'string' is not assignable to type '() => void'



// instead of defining a value for a specific variable which will be a function we don't have to do that we can explicitly say that this will be a function in the future much like we did with other types

let calbert: Function;

calbert = ()=> {
    console.log("hello again");
}

// -------------------------------------------------------------------------------------------------------------------

const add = (a:number, b:number, c?: number|string)=>{    // if I want c, to be optional all I have to do is place a question mark in front of it
    console.log(a+b);
    console.log(c);  // so when we don't pass it through the value, the optional parameter that is becomes undefined
}

add(5,10);


// With default parameter
// when we use a default value we don't need this optional parameter because we're saying okay well it's still going to be optional but the default parameter is going to be 10 if they don't pass  something in so we don't tend to use the question mark and the default parameter together just one or the other

const multiply = (a:number, b:number, c: number|string=20): void=>{    // return type void which means when we don't actually return something,  IMPORTANT!!- now when this is compiled into JavaScript that will become undefined but in typescript void is completely separate to undefined

    console.log(a*b);
    console.log(c);  
}

multiply(5,10);


// Returning Value
const minus = (a: number, b: number): number => {   // we can explicitly declare the type or return type of a function, here it is number written after the parenthesis, although we don't need to do that because typescript is automatically inferring the return type 
    return a - b;    // typescript can infer the type of what this arrow function is returning
  }
  
  let result = minus(10,7);     // type of reult is a number because it's inferred the return type of minus function
//   result = 'something else';   // error - since the type of result is number, hence typeError

  console.log(result);
