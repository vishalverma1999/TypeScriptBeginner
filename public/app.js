//we don't use an interface to create new IsPerson objects, in this case we'll just use it to say look if we have a variable in the future which is declaring itself to be an IsPerson then it must have these properties and it must have these methods 
// const me: IsPerson = {};    // Error because at the minute empty object does not comply to interface
const me = {
    name: 'Vishal',
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
console.log(me);
me.speak('English');
// benefit of Interface is that we can have multiple different objects that is of type IsPerson, that it implements this interface but they could have different values the methods could be slightly different they all have to be the same signature
const greetPerson = (person) => {
    console.log('hello', person.name);
};
// greetPerson({name: "jhdsbch"});    // Error - '{ name: string; }' is not assignable to parameter of type 'IsPerson'
greetPerson(me);
// -*************************----------------------------------**********************-------------************------------*********--------*
import { Invoice } from "./classes/Invoice.js"; // while importing use Invoice.js extension instead of Invoice.ts
// creating object from class
const invOne = new Invoice('vishal', 'kdhnksjbkc', 400);
const invTwo = new Invoice('Tanny', 'blah blah blah', 100);
// by default all properties of class are public, so we can change it once we instantiated an object from the class
// invOne.client = 'MunnuDada';
invOne.amount = 44224;
// console.log(invOne, invTwo);
// now the cool thing about using these classes for objects is that if we wanted to in the future we could create maybe an array and only allow invoice objects in the array much like we did string arrays or boolean arrays where only that type is allowed in the array, we can do that with classes or class objects as well
// const invoices: string[] = [];   // just like we did this, making an empty array of type string only, we can do that with class also
const invoices = []; // array of type Invoice class
// invoices.push('hello');    // Not allowed
// invoices.push({name: 'vishal'});    // Not allowed
invoices.push(invOne); // allowed
invoices.push(invTwo); // allowed
invoices.forEach(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format());    // Property 'details' is private and only accessible within class 'Invoice'
    // inv.client = 'something ELse';   //Cannot assign to 'client' because it is a read-only property
    console.log(inv.client, inv.amount, inv.format());
});
// TypeCasting
const form = document.querySelector('.new-item-form'); // since we use 'as' keyword then it's never going to be null, now we get all of the right properties and methods available to us in some form of intellisense inside the vs code
// console.log(form.children);
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
/*
Two Drawbacks Of Using Module:-
1) Supported by modern browsers only
2) it doesn't bundle our code into a single file the browser is still using the module system to load separate files(here in our project app.js and invoice.js) and make multiple requests i.e for app.js and invoice.js
 */
