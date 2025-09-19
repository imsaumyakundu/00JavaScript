// datatypes are two types:


//1. Primitive datatypes(7): number, string, boolean, null, undefined, symbol, bigint.
const score = 100; //number
const scoreValue = 99.9; //number
const isLoggedIn = false; //boolean
const outsideTemp = null; //null
let userEmail; //undefined
let userEmail2 = undefined; //undefined
const id = Symbol("123"); //symbol
const id2 = Symbol("123"); //symbol
console.log(id==id2); //false; even though the description is same, symbols are unique and different.
const bigNumber = 1234567890123456789012345678901234567890n; //bigint


//2. Non-primitive datatypes(referance type): object, array, function.
const heros = ["shaktiman", "naagraj", "doga"]; //array
const myObj = {
    name: "saumya",
    age: 22,
    isLoggedIn: true
} //object
const myFunction=function(){
    console.log("Hello world");
    
} //function


console.log(typeof bigNumber); //bigint
console.log(typeof myFunction); //function; to be specific it is a function object.


/* JavaScript is a dynamically typed language, 
which means you don't have to declare the datatype 
of a variable explicitly. The JavaScript engine 
automatically determines the datatype based on the 
value assigned to the variable. This allows for 
flexibility in coding, as variables can hold different 
types of data at different times during the execution of a program. 
However, it also means that developers need to be cautious about type coercion 
and unexpected behavior that can arise from implicit type conversions.
*/