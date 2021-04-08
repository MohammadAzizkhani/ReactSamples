let test = function talk(arg) {
    return arg * arg;
}

// zero parameters arrow function form ()=>{}
// one parameter arrow function form name => { //use of name }
// more parameters arrow function form (arg1, arg2)=>{ //use of arg1 and arg2 }

let test2 = arg => arg * arg;

let test3 = (arg1, arg2) => {
    console.log(arg1);
    return 2 * arg2;
}

console.log(test(5));
console.log(test2(5));
console.log(test3(5, 6));


// Usage of arrow function 

const jobs = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false },
    { id: 4, isActive: true }
];

//without arrow function
var activeJobs = jobs.filter(function (job) { return job.isActive; });
//with arrow function
var activeJobs2 = jobs.filter(job => job.isActive);

console.log(activeJobs);
console.log(activeJobs2);