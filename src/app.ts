import { Invoice } from "./classes/Invoice.js";   // while importing use Invoice.js extension instead of Invoice.ts
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interface/HasFormatter.js";
import { ListTemplate } from "./classes/ListTemplate.js";


// TypeCasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;  // since we use 'as' keyword then it's never going to be null, now we get all of the right properties and methods available to us in some form of intellisense inside the vs code

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template Instance
const ul = document.querySelector('ul')!;   // grabbing the ul from index.html type is HTMLUListElement
const list = new ListTemplate(ul);   // creating the instance of ListTemplate class


form.addEventListener('submit', (e) => {

    e.preventDefault();

    // Using The Tuple concept
    // let values = [tofrom.value, details.value, amount.valueAsNumber];  // Normal Array, this will not work because when we spread it in Invoce or Payment it does not know tyhe type of the values that are going to be spreaded, whereas in Invoice and Payment class we explicitly mentioned the type i.e string, string , number
    // Hence use the tuple to get rid of the problem
    let values:[string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);   // spreading using spread operator to get all 3 values out from tuple
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
})


// tuples - built-in-type
// these are a little bit like arrays, we use square brackets to define them and they can also use array methods but there is one major difference- the types of data in each position in a tuple is fixed once it's been initialized 

// Normal Array
let arr = ['ryu', 25, true];
arr[0] = false;   // we can change at 0th index initial from string to boolean
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];


// Tuples
let tup: [string, number, boolean] = ['ryu', 25, true];   // 0th index will be fixed for string only, 1st to number and 2nd to boolean
// tup[0] = false;    // we can't do that since 0th index is fixed for string only
tup[0] = 'ken';    // we can change the content but not type

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];