import { Invoice } from "./classes/Invoice.js";   // while importing use Invoice.js extension instead of Invoice.ts

// creating object from class
const invOne = new Invoice('vishal', 'kdhnksjbkc', 400);
const invTwo = new Invoice('Tanny', 'blah blah blah', 100);

// by default all properties of class are public, so we can change it once we instantiated an object from the class
// invOne.client = 'MunnuDada';
invOne.amount = 44224;

// console.log(invOne, invTwo);

// now the cool thing about using these classes for objects is that if we wanted to in the future we could create maybe an array and only allow invoice objects in the array much like we did string arrays or boolean arrays where only that type is allowed in the array, we can do that with classes or class objects as well
// const invoices: string[] = [];   // just like we did this, making an empty array of type string only, we can do that with class also
const invoices: Invoice[] = [];     // array of type Invoice class
// invoices.push('hello');    // Not allowed
// invoices.push({name: 'vishal'});    // Not allowed
invoices.push(invOne);     // allowed
invoices.push(invTwo);     // allowed

invoices.forEach(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format());    // Property 'details' is private and only accessible within class 'Invoice'
    // inv.client = 'something ELse';   //Cannot assign to 'client' because it is a read-only property
    console.log(inv.client, inv.amount, inv.format());
})


// TypeCasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;  // since we use 'as' keyword then it's never going to be null, now we get all of the right properties and methods available to us in some form of intellisense inside the vs code
// console.log(form.children);


// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e) => {

    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,       // javascript by default turning the number to string, so to prevent this instead just using amount.value use amount.valueAsNumber
    )
})


/*
Two Drawbacks Of Using Module:-
1) Supported by modern browsers only
2) it doesn't bundle our code into a single file the browser is still using the module system to load separate files(here in our project app.js and invoice.js) and make multiple requests i.e for app.js and invoice.js 
 */
