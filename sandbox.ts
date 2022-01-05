// arrays
let names = ['luigi', 'mario', 'yoshi'];

names.push('vishal');   // ok
// names.push(3);  // Error- Argument of type 'number' is not assignable to parameter of type 'string'
// names[0] = 5;   // error

let numbers = [10, 20, 12, 15];

numbers.push(25);   // ok 
// numbers.push('shaun');      // error
// numbers[0] = 'shaun';       // error

let mixed = ['ken', 4, 'chun-li', 8, 9];   //  typescript will look at this and say okay well this is an array now which can contain strings or numbers

mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;


// objects- same as js object but once the type of properties is decided then it can't be change like propert name has type string
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
  };
  
  ninja.age = 40;  //ok
  ninja.name = 'ryu';  //ok
// ninja.age = '30';     // type Error
// ninja.skills = ['fighting', 'sneaking'];   // we can't just add on extra properties once we've defined the variable or the object to begin with so I can't say ninja and then make up a new property called skills and set that equal to an array of some kind of skills like fighting or maybe sneaking I can't do this because this property skills did not exist on the ninja object to begin with and once we've defined the object we then can't add additional properties to it

// BUT we can overwrite the whole object by creating object only and not by dot or assignment operator
// During the overwrite you can't change the initial stucture i.e. the total number of properties and there types, but you can change the there values as shown below 
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['running'],
  };
