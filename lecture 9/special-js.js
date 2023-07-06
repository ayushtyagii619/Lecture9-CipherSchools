//shadowing in js

var a= 100;
{
    var a = 10;
    var b = 20;
    var c= 30;
}
console.log(a, b, c);

//illegal shadowing

let d = 100;
{
    let d= 10;
}
console.log(d);