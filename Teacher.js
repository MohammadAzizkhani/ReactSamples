import { Person } from './Person.js'

export function Promote() {

}

// for default export we have to use default key-word before class key-word ...
export default class Teacher extends Person {

    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }

    Teach() {
        console.log("Teaching ... ");
    }
}
