const name = "Shounak";
const repoCount = 10;

//console log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Valorant");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newstringOne = "       Shounak       ";
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://www.shounakbose.com/shounak%20bose";
console.log(url.replace("%20", ""));
console.log(url.includes("shounak"));
