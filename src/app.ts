// Almost same as js but there are few key differences

// const anchor = document.querySelector('a')!;

// console.log(anchor);   // works fine
// console.log(anchor.href);   // if I try now to access a property of anchor such as href which we can do, but here we get some kind of error, which on hover says that this - object is possibly "null". So it's saying well this right here might actually be null and the reason it's saying that is because typescript doesn't actually know whether there is an anchor tag in the index page during developments. It doesn't have some kind of special access to the index page to be able to find that out so it's just warning us here that look this could be null and if this is null then you're not going to get an href property on it


// so we can combat this in one of two different ways FIRST we could do some kind of a RUNTIME check
// if(anchor){
//     console.log(anchor.href);
// }

// SECOND - if we are certain as developers that this thing exists inside our HTML file then add on an exclamation mark to the end of that query selector
// console.log(anchor.href);

// for Dom interaction typescript automatically contains special types for every Dom elements so if I hover over anchor we can see that Const anchor is an HTML anchor element


//------------------------------------------------------------------------------------------------------------------------------------------
// const form = document.querySelector('form')!;   // type of form variable is -  HTMLFormElement

// const form = document.querySelector('new-item-form')!;  // type : Element, because when we use form or anchor tag typescript knows what tag we're grabbing now in this case we're just passing a class and a class could be applied to any different element in the HTML page so it doesn't know that it's a form it just knows that it's going to be some kind of elements . We can overome by Type Casting

// TypeCasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;  // since we use 'as' keyword then it's never going to be null, now we get all of the right properties and methods available to us in some form of intellisense inside the vs code
// console.log(form.children);


// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e)=>{

    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber,       // javascript by default turning the number to string, so to prevent this instead just using amount.value use amount.valueAsNumber
    )
})