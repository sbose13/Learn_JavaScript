//basic print
console.log("Hello World");

//var keyword - global scope
var a = 10;
function fn() {
  var b = a * 10;
  console.log(b);
}
fn();
console.log(a);

//let keyword - block scope
{
  let c = 10;
  function fn1() {
    let d = c * 10;
    console.log(d);
  }
  fn1();
  console.log(c);
}

//console.log(c); don't call outside the block

//const keyword - block scope
{
    const a = 10;
    function f(){
        //a = 9; don't reassign
        console.log(a);
    }
    f();
}

/*
Note: don't use var, use let and const only
*/