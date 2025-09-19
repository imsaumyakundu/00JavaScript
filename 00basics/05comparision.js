console.log(2>1); //true
console.log(2<1); //false
console.log(2>=1); //true
console.log(2<=1); //false
console.log(2==1); //false
console.log(2!=1); //true


console.log("2">1); //true; string "2" is converted to number 2
console.log("2"<1); //false
console.log("2">=1); //true
console.log("2"<=1); //false
console.log("2"==1); //false
console.log("2"!=1); //true
console.log("02"==1); //false
console.log("02"==2); //true


console.log(null>0); //false; null is converted to 0, so 0>0
console.log(null>=0); //true; null is converted to 0, so 0>=0
console.log(null<0); //false; null is converted to 0, so 0<0
console.log(null<=0); //true; null is converted to 0, so 0<=0

console.log(null!=0); //true; comparison and equality check works differentli in JS. The == (loose equality) operator in JavaScript has specific rules for null and undefined. It defines that null and undefined are equal to each other but not equal to any other value, including 0, without type coercion to a number. This is a special case in the == operator's behavior.
console.log(null==0); //false; comparison and equality check works differentli in JS. The == (loose equality) operator in JavaScript has specific rules for null and undefined. It defines that null and undefined are equal to each other but not equal to any other value, including 0, without type coercion to a number. This is a special case in the == operator's behavior.
console.log(null==undefined); //true; both null and undefined are considered equal in non-strict equality check.


console.log(undefined>0); //false; When undefined is used in a relational comparison with a number (like 0), JavaScript attempts to convert undefined to a number.The numeric conversion of undefined results in NaN (Not-a-Number).According to the IEEE 754 standard for floating-point arithmetic, any relational comparison involving NaN (e.g., NaN > 0, NaN < 0) will always evaluate to false.
console.log(undefined<0); //false; 
console.log(undefined>=0); //false;
console.log(undefined<=0); //false;

console.log(undefined==0); //false; undefined == 0 (false): In loose equality, undefined is not considered loosely equal to 0. The JavaScript engine's internal comparison rules for undefined and numbers do not result in a match.
console.log(undefined!=0); //true; undefined != 0 (true): This is the logical inverse of undefined == 0, so it evaluates to true.
console.log(undefined==null); //true; undefined == null (true): This is a specific rule in JavaScript's loose equality comparison. null and undefined are considered loosely equal to each other, but not to any other value.


// Strict equality operator (===) checks for both value and type equality
console.log(2==="2"); //false; different types (number vs string)
console.log(null===undefined); //false; different types (null vs undefined)
console.log(null===null); //true; same type and value
console.log(undefined===undefined); //true; same type and value