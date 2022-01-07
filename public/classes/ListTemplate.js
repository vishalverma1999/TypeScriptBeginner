export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    ; // this will make a conainer which is html 'ul' element, like for example, const unOrdList = new ListTemplate(HTMLUListElement); and then we will use render method to append an dynamically created li into ul
    // render will create "li" that we will be going to append inside ul container
    // type of item parameter can't be invoice only or can't be payment only....it has to be both, so we will use HasFormatter which implements to both invoice as well as to payment class
    render(item, heading, pos) {
        const li = document.createElement('li'); // creating li, automatically infers the type i.e HTMLLIElement
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format(); // p.innerText is string type but item is of type HasFormatter, but we know that HasFormatter has format method which returns string type therefore we need to we need to extract the format method from item using dot method
        // so that's going to be inside the paragraph tag for either the invoice or the payment depending on what we pass
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
/*
1. Register a list container (ul) in the constructor
2. Create a render method to render a new 'li' to the container
-- accepts arguments: invoice or payment, a heading, a position
-- create the template html (li, h4, p)
-- add the 'li' template to start/end of the list
 */ 
