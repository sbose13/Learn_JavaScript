// Premitive

//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = true;
const outsideTemp = null;
let userEmail;
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
const bigNumber = 33941234567890n;
console.log(typeof bigNumber);

//Reference(Non Primitive)

//Array, Objects, Functions

const heros = ["Shaktiman", "Spiderman", "Batman", "Naagraj"];
console.log(heros);

let myObj = {
  Name: "Shounak",
  Age: "24",
  City: "Chandannagar",
  State: "West Bengal",
};

console.log(myObj);

const myFunction = function () {
  console.log("Hello World");
};
console.log(myFunction);
console.log(typeof myFunction);


//Stack(Primitive) and Heap(Non-Primitive) Memory

let name = "Shounak";
let anotherName = name;
anotherName = "Hitesh";

console.log(name);
console.log(anotherName);

let userOne = {
  email: "userone@gmail.com",
  upi: "userone@apl"
}

let userTwo = userOne;
userTwo.email = "usertwo@gmail.com";

console.log(userOne);
console.log(userTwo);




