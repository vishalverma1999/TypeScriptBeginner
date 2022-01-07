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


// ENUMS - enums are a special type in typescript which allow us to store a set of constants or keywords and associate them with a numeric value

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };    // here BOOK , AUTHOR .... are set of constants or keywords

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,      // on consoling we found that property resourceType equals to number, that is because enums associate BOOK with a numeric value and that numeric value is the index number in ResourceType enum which is 0 in this case
  data: { title: 'name of the wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DIRECTOR,
  data: { title: 'name of the wind' }
}

console.log(docOne);
console.log(docTwo);