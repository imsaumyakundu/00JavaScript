let score = 33;
console.log(typeof score); // number
console.log(typeof (score)); // as a method.


let score2 = "33";
console.log(typeof score2); // string
let valueInNumber = Number(score2);
console.log(typeof valueInNumber); // number
console.log(valueInNumber); //33


let score3 = "33abc";
console.log(typeof score3); // string
let valueInNumber2 = Number(score3);
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN(Not a number)


let score4 = null
console.log(typeof score4); // object
let valueInNumber3 = Number(score4);
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // 0


let score5 = undefined
console.log(typeof score5); // undefined
let valueInNumber4 = Number(score5);
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4);   // NaN


let score6 = true
console.log(typeof score6); // boolean
let valueInNumber5 = Number(score6);
console.log(typeof valueInNumber5); // number
console.log(valueInNumber5); // 1


let score7 = "saumya"
console.log(typeof score7); // string
let valueInNumber6 = Number(score7);
console.log(typeof valueInNumber6); // number
console.log(valueInNumber6); // NaN


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true
console.log(typeof booleanIsLoggedIn); // boolean


let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(booleanIsLoggedIn2); // false
console.log(typeof booleanIsLoggedIn2); // boolean


let isLoggedIn3 = "saumya"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(booleanIsLoggedIn3); // true
console.log(typeof booleanIsLoggedIn3); // boolean


let someNumber = 33;
let stringSomeNumber = String(someNumber);
console.log(stringSomeNumber); // 33 
console.log(typeof stringSomeNumber); // string


