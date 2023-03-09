/**
 * Data types in JS
 */

// 1 Number -> It can store integers as well as decimal 

var marks = 100;
console.log(marks);
console.log(typeof marks);

marks = 102.9876;
console.log(marks);
console.log(typeof marks);

// What is the max and min value of number you can store in js 
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// 2 String 
var name = ""; // "" == false -> true
console.log(typeof name) // string;

name = "a";
console.log(typeof name) // string;

name = "rahul";
console.log(typeof name) // string;

// Empty string is a falsy value

// 3 Boolean -> They can store true or false

var isStudent = false;
console.log(typeof isStudent); // boolean


isStudent = true; 
console.log(typeof isStudent); // boolean;

isStudent = 0; // 0 == false
console.log(typeof isStudent);

//4 Undefined -> It is only present in js
var container;
console.log(container); // undefined
console.log(typeof container); // undefined

// 5 Null
var container = null; // This is explicit assignment of value null in container
console.log(container);
console.log(typeof container); // A bug in js -> null

// Null vs undefined -> Null is a value assigned by developer to a variable while undefine
// is a value assigned by default to a variable by js 

// ES6
//6 Big Int
// 1000000000000000000000078976

var largerInteger = 1000000000000000000000000890n;
var n = BigInt('1000000000000000000000678');
console.log(n);
console.log(largerInteger+2n);
console.log(typeof largerInteger);

// 7 Symbols
var student1 = Symbol("rahul"); // this will create a container value here will r56gh
var student2 = Symbol("rahul"); // this will create a container r789gh

// Non Primitive data types
// 1 Objects -> These are special type of data where you can store data in key value form

/**
 *  student 
 *  name : "rahul"
 *  marks: 98
 *  rollNo : 2
 */

var student = { name: "rahul", age: 19, marks: 98}
console.log(student);
console.log(typeof student);