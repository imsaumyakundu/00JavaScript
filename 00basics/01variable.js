const accountId = 144553 // use for store constant value.
let accountEmail = "saumya@gmail.com" // use for store variable value.
var accountPassword = "12345" // In this way we also can store variable; but prefer not to use 'var' insted of 'let', Because of issues in block scope and funcational scope.
accountCity = "Jaipur" // if we do not use any keyword like const, let or var; then it will create a global variable(In non-strict mode); Prefer not to use.
let accountState; // we can declare a variable without assigning any value; by default it will be undefined.


/* 
accountId = 244  
console.log(accountId) // it will throw an error; because we can not reassign a value to a constant variable.
*/
accountEmail = "Kundu@gmail.com" // we can reassign a value to a variable declared with 'let'.
accountPassword = "21212121" // we can reassign a value to a variable declared with 'var'.
accountCity ="Kolkata" // we can reassign a value to a variable declared without any keyword.


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);