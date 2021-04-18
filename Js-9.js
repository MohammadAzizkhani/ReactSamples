const first = [1, 2, 3];
const second = [4, 5, 6];

// when we want to combine this two array we use folowing method ...
let combined = first.concat(second);

console.log(combined);

// But it can simplify with spread operator ... like below

let merge = [...first, ...second];

console.log(merge);

// and when we want to add somthing to our array ... we can do it with spread operator

let concated = [...first, 'a', ...second, 'b'];

console.log(concated);