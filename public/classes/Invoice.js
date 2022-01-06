// Classes
export class Invoice {
    // Different properties that invoice object would have, when we create invoice object from class
    // Either you need to directly assign the below properties like-  client: string = 'Vishal'  -or assign it with the help of contructor done below, else error will be thrown
    //three different modifiers we have-
    // public- default one, we can change and read the value outside of the class as well as inside of the class
    // private- one only allows us to read and change inside the class
    // read-only- only allows us to read it both inside the class and outside the class but not change the value
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor invoked immediately after the object is ceated from class
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;     // this referes to the instance of the object that we will be creating using invoice class
    //     this.details = d;
    //     this.amount = a;
    // }
    //----------------------------------------------------------------------------------------------------------------------------------------
    // ShortHand For Access Modifiers Using Constructor and in this case Constructor initializes the property whereas in above is assigment
    constructor(
    // Shorthand only works if you're using these access modifiers in front of these different parameters or properties it's not going to work if we don't have these access modifiers there
    client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // returning a simple string which is formatting the different properties
        // this.client = 'something else';    // Cannot assign to 'client' because it is a read-only property
        return `${this.client} owes INR${this.amount} for ${this.details}`;
    }
}
