// here call-back function is not part of a function so it is not part of person object and it will return (global object => window object in browser)

let person = {
    talk() {
        setTimeout(function () {
            console.log("this", this);
        }, 1000)
    }
}

//but when we use arrow function because arrow function doesn't rebind this key-word 
// in other words when we use the arrow function it will inherit this key-word
// with arrow function (this) will not reset and it will inherit from the context

let person2 = {
    talk() {
        setTimeout(() => {
            console.log("this", this);
        }, 1000)
    }
}

person.talk();
person2.talk();
