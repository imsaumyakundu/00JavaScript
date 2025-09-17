"use strict"; // treat all JS code as newer version.


/* alert("Hello World") // we are using nodeJS, not browser. In browser it will show a popup message. */


console.log(3+
    3
); console.log("Saumya") // code readability should be high for better understanding.


/* 
References:
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript
2. https://tc39.es/ecma262/
*/


// primitive datatypes in JS:
let name = "Saumya Kundu" // string
let age = 21 // number; range is from -(2^53 -1) to (2^53 -1).
let bigInt = 1234567890123456789012345678901234567890n // BigInt; range is beyond number; but we can not perform mathematical operation with number and BigInt.
let isApproved = false // boolean
let firstName // undefined 
let selectedColor = null // null; null is standalone value.
let lastName = Symbol("Kundu") // symbol; it is used to create unique identifiers for objects.


//non-primitive datatype in JS:
let person = { // object; it is a collection of key-value pairs.
    name: "Saumya",
    age: 21
}


console.log(typeof name) // it will return 'string'.
console.log(typeof age) // it will return 'number'.
console.log(typeof bigInt) // it will return 'bigint'.
console.log(typeof isApproved) // it will return 'boolean'.
console.log(typeof firstName) // it will return 'undefined'; because we have not assigned any value to it.
console.log(typeof selectedColor) // it will return 'object'; because in JS, null is considered as an object; it is a historical bug in JS; but we can not do anything about it; just remember this.
console.log(typeof lastName)   // it will return 'symbol'.


console.log(typeof person) // it will return 'object'; because in JS, object is non-primitive datatype; and all non-primitive datatypes are objects.