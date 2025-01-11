let score = true;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

let isLoggedIn = "Shounak";
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


let someNumber = 101;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);


//*********************Operations***********************/

let value = 3
let negativeValue = -value
console.log(negativeValue);

// console.log(2+2);
// console.log(2*2);
// console.log(2-2);
// console.log(2/2);
// console.log(2**3);
// console.log(2%3);

let str1 = "Hello"
let str2 = " Shounak"
let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);