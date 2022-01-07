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

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(doc, type.value, 'end');
})


/*
Two Drawbacks Of Using Module:-
1) Supported by modern browsers only
2) it doesn't bundle our code into a single file the browser is still using the module system to load separate files(here in our project app.js and invoice.js) and make multiple requests i.e for app.js and invoice.js 
 */
