import { Invoice } from "./classes/Invoice.js";   // while importing use Invoice.js extension instead of Invoice.ts
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interface/HasFormatter.js";

// let docOne: HasFormatter;    // In future docOne Variable must be of type HasFormatter
// let docTwo: HasFormatter;    // In future docTwo Variable must be of type HasFormatter

// // docOne can be an invoice and docTwo can be a payment Instance because they both implement HasFormatter interface
// docOne = new Invoice('Prateek', 'Jee prep', 350);
// docTwo = new Invoice('Anurag', 'Upsc prep', 250);

// // array which only holds objects which implements HasFormatter interface
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// // creating object from class
// const invOne = new Invoice('vishal', 'kdhnksjbkc', 400);
// const invTwo = new Invoice('Tanny', 'blah blah blah', 100);

// // by default all properties of class are public, so we can change it once we instantiated an object from the class
// // invOne.client = 'MunnuDada';
// invOne.amount = 44224;

// // console.log(invOne, invTwo);

// // now the cool thing about using these classes for objects is that if we wanted to in the future we could create maybe an array and only allow invoice objects in the array much like we did string arrays or boolean arrays where only that type is allowed in the array, we can do that with classes or class objects as well
// // const invoices: string[] = [];   // just like we did this, making an empty array of type string only, we can do that with class also
// const invoices: Invoice[] = [];     // array of type Invoice class
// // invoices.push('hello');    // Not allowed
// // invoices.push({name: 'vishal'});    // Not allowed
// invoices.push(invOne);     // allowed
// invoices.push(invTwo);     // allowed

// invoices.forEach(inv => {
//     // console.log(inv.client, inv.details, inv.amount, inv.format());    // Property 'details' is private and only accessible within class 'Invoice'
//     // inv.client = 'something ELse';   //Cannot assign to 'client' because it is a read-only property
//     console.log(inv.client, inv.amount, inv.format());
// })


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

    let doc: HasFormatter;
    if(type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
})


/*
Two Drawbacks Of Using Module:-
1) Supported by modern browsers only
2) it doesn't bundle our code into a single file the browser is still using the module system to load separate files(here in our project app.js and invoice.js) and make multiple requests i.e for app.js and invoice.js 
 */
