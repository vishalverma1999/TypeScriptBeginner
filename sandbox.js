// 'any' type rips out most of the benefits of using typescript in the first place, like we don't get any errors to help us during development about types, there's no hints to say what type something is expected to be and there's going to be less helpful intellisense here in vs code as well so I would think twice before using this there may be some rare cases when you need to change the type though or when you don't know what type of variable will be in the future
var age = 25;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);
age = ['skcn', 258, true, undefined, null, { name: 'vishal', age: 20 }];
console.log(age);
// 'any' type In arrays
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);
// 'any' type In Objects
var ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja);
ninja.name = 'vishal';
console.log(ninja);
ninja = { name: 25, age: 'yoshi' };
console.log(ninja);
