import { HasFormatter } from "../interface/HasFormatter.js";

export class Payment implements HasFormatter {
 
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number,
    ) { }


    format() {
        return `${this.recipient} is owed INR${this.amount} for ${this.details}`;
    }

}
