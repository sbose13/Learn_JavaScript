let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

//let myCreateDate = new Date(2025, 1, 1);
//let myCreateDate = new Date(2025, 1, 1, 17, 0);
//let myCreateDate = new Date("2025-02-01");
let myCreateDate = new Date("01-02-2025");
console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.toLocaleString());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long"
})

