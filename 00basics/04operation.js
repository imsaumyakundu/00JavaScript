let value = 3;
let negValue = -value;
console.log(negValue); // -3
console.log(typeof negValue); // number


console.log(2+2); // 4
console.log(2-2); // 0
console.log(2*2); // 4 
console.log(2/2); // 1
console.log(2%2); // 0
console.log(2**2); // 4 (2^2)


let str1 = "Hello";
let str2 = " Saumya";
console.log(str1 + str2); // Hello Saumya


console.log("1" + 2); // 12 (here 2 is converted to string and concatenated).
console.log(typeof ("1" + 2)); // string

console.log(1 + "2"); // 12 (here 1 is converted to string and concatenated).
console.log(typeof (1 + "2")); // string

console.log("1" + 2 + 2); // 122 
console.log(typeof ("1" + 2 + 2)); // string

console.log(1 + 2 + "2"); // 32 (here 1 and 2 are added first and then converted to string and concatenated).
console.log(typeof (1 + 2 + "2")); // string


console.log(3+4*5%3); // not good to use this without brackets (readability is low).


console.log(+true); // 1 (true is converted to number).
console.log(+false); // 0 (false is converted to number).
//console.log(true+); // error

console.log(+""); // 0 (empty string is converted to number).
console.log(typeof +""); // number

let num1, num2, num3
num1 = num2 = num3 = 2+2 //confusing code but valid (readability is low).

let gameCounter = 100;
gameCounter++; // gameCounter = gameCounter + 1
console.log(gameCounter); // 101

let gameCounter2 = 100;
++gameCounter2; // gameCounter2 = gameCounter2 + 1
console.log(gameCounter2); // 101

/* Study references:
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
2. https://tc39.es/ecma262/multipage/abstract-operations.html
*/


let x = 3;
const y = x++;
console.log(x); // 4
console.log(y); // 3

let x2 = 3;
const y2 = ++x2;
console.log(x2); // 4
console.log(y2); // 4




