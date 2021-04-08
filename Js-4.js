let person = {
    Name: "Mohammad",

    Walk() {
        console.log(this);
    }
}

// if use this keyword as a stand-alone object this will return a global Object (window object in browsers) 
// window object is undefined because the restrict mode is enabled by default (a mode to execute JS more protectively so it prevents potential problems) 
// there is a way to bind this stand-alone function to object, with the bind() method you can bind them to each other

let walk = person.Walk.bind(person);

walk();
