import { Invoice } from "./classes/Invoice.js"; // while importing use Invoice.js extension instead of Invoice.ts
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from "./classes/ListTemplate.js";
// TypeCasting
const form = document.querySelector('.new-item-form'); // since we use 'as' keyword then it's never going to be null, now we get all of the right properties and methods available to us in some form of intellisense inside the vs code
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template Instance
const ul = document.querySelector('ul'); // grabbing the ul from index.html type is HTMLUListElement
const list = new ListTemplate(ul); // creating the instance of ListTemplate class
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Generics- Allows Us to create Reusable blocks of code which can be used with different types
// const addUID = (obj: Object) => {     // here arrow function takes an obj which is any kind of object with any property
//     let uid = Math.floor((Math.random()*100));
//     return {...obj, uid};     // properties destructured from obj and extra uid added to it
// }
// let docOne = addUID({name:'yoshi', age: 40});
// console.log(docOne.name);   // Error - if I try to access a property on this docOne like the name which I should be able to do we get an error and that's because it says property name does not exist on this type with a UID property , now why is that well it's because when we pass in an object into this function right we're not specifying exactly what this object should be right and it doesn't know when it returns this new object right here what properties were on the object that we passed in so it doesn't know that a name exists on the object or that an age exists on the object because we've not said that anywhere and it's not captured those inside the function so when it returns this it doesn't know what properties it's going to output right here 
// ABOVE PROBLEM CAN BE SOLVED IF WE USE GENERIC
// const addUID = <T>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// let docOne = addUID({name:'yoshi', age: 40});
// let docTwo = addUID('hello');   // No sense since random id can't be attached to it BUT This will work fine because type of T or generic is not specified but it will just capture the type and it's specifications
// console.log(docOne.name);   // ERROR GONE
// Specifying the type of Generic
// const addUID = <T extends object>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
// let docOne = addUID({name:'yoshi', age: 40});
// console.log(docOne.age);
//We can be more specific in specifying the type of Generic
// now it's only going to allow in objects which have a name property and that name has to be a string
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 }); // This is fine since it contains name property, extra is ok
console.log(docOne.name);
//   defining the resource object
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 1,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
