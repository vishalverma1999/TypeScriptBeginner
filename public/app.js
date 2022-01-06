"use strict";
// Classes
class Invoice {
    // constructor invoked immediately after the object is ceated from class
    constructor(c, d, a) {
        this.client = c; // this referes to the instance of the object that we will be creating using invoice class
        this.details = d;
        this.amount = a;
    }
    format() {
        // returning a simple string which is formatting the different properties
        return `${this.client} owes INR${this.amount} for ${this.details}`;
    }
}
// creating object from class
const invOne = new Invoice('vishal', 'kdhnksjbkc', 400);
const invTwo = new Invoice('Tanny', 'blah blah blah', 100);
// by default all properties of class are public, so we can change it once we instantiated an object from the class
invOne.client = 'MunnuDada';
invOne.amount = 50;
console.log(invOne, invTwo);
// now the cool thing about using these classes for objects is that if we wanted to in the future we could create maybe an array and only allow invoice objects in the array much like we did string arrays or boolean arrays where only that type is allowed in the array, we can do that with classes or class objects as well
// const invoices: string[] = [];   // just like we did this, making an empty array of type string only, we can do that with class also
const invoices = []; // array of type Invoice class
// invoices.push('hello');    // Not allowed
// invoices.push({name: 'vishal'});    // Not allowed
invoices.push(invOne); // allowed
invoices.push(invTwo); // allowed
console.log(invoices);
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

 */ 
