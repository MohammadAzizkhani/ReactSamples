let person = {

    Name: 'Mohammad',

    LastName: 'Azizkhani',

    talk() {
        console.log('Start Talk');
    },

    walk() {
        console.log('Start Walk');
    }
}

console.log(person.Name);

console.log(person['LastName']);

person.talk();