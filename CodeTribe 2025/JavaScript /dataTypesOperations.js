//Exercise 1

var sum;
var difference;
var product;
var quotient;
var modulus;
var exponentiation;

let Num1 = 23; 
let Num2 = 14.12;
let Num3 = 5.67;
let Num4 = 8;

sum = Num1 + Num2 + Num3 + Num4;
difference = Num1 - Num2 - Num3 - Num4;     
product = Num1 * Num2 * Num3 * Num4;
quotient = Num1 / Num2 / Num3 / Num4;
modulus = Num1 % Num2;
exponentiation = Num1 ** Num2;

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Modulus: " + modulus);
console.log("Exponentiation: " + exponentiation);  

//Exercise 2

var sumBool;
sumBool = true + false;
var x= 8;
var y= 12;
sumBool = x + y;
console.log("Sum of boolean values: " + sumBool);

let isGreater = x > y; 
let isLess = x < y;  
let isEqual = y == x; 
let isNotEqual = x != y; 
let isGreaterOrEqual = y>= x; 
let isLessOrEqual = x <= y;

console.log("Is x greater than y? " + isGreater);
console.log("Is x less than y? " + isLess);
console.log("Is y equal to y? " + isEqual);
console.log("Is x not equal to y? " + isNotEqual);
console.log("Is y greater than or equal to x? " + isGreaterOrEqual);
console.log("Is x less than or equal to y? " + isLessOrEqual);




