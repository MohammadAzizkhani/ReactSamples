// named exports is like below

//import { Teacher } from './Teacher.js'

// Default exports is like below and for default export we have to use default key-word before class key-word ...
// and there is no need to use curly braces

//import Teacher from './Teacher.js'

// we can also use Default and Named exports together 
import Teacher, { Promote } from './Teacher.js'

const teacher = new Teacher('Mohammad', 'MSc');

teacher.Teach();