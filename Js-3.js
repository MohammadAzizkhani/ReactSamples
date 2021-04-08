let person = {
    Name: "Mohammad",

    Walk() {
        console.log(this);
    }
}

//this keyword determines how a function call, when you call it as a method in an object, this will return a reference to 
// that object ... 
// However if use this keyword as a stand-alone object this will return a global Object (window object in browsers) 
// window object is undefined because the restrict mode is enabled by default (a mode to execute JS more protectively so it prevents potential problems) 

person.Walk();

let walk = person.Walk;

walk();